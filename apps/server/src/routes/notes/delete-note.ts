import { FastifyInstance } from 'fastify'

import {
  MedeaNoteParamsSchema,
  MedeaNoteParams,
  MedeaError,
} from '@medea/models'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError, NotFoundError } from '../errors'

const schema = {
  params: MedeaNoteParamsSchema,
}

export const deleteMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  await Promise.resolve(
    server.delete<{
      Params: MedeaNoteParams
      Reply: MedeaError | number
    }>(`${MEDEA_NOTES_ROUTE}/:id`, { schema }, async (request, reply) => {
      const {
        params: { id },
      } = request

      try {
        await server.prisma.medeaTag.deleteMany({
          where: { medeaNoteId: id },
        })

        const medea = await server.prisma.medeaNote.delete({
          where: { id },
        })

        if (medea.id) {
          return await reply.code(204).send(204)
        }

        return await reply.code(404).send(new NotFoundError(id))
      } catch (error: unknown) {
        if (
          (error as Error).message.includes('Record to delete does not exist')
        ) {
          request.log.error(error)
          return reply.code(404).send(new NotFoundError(id))
        }
        request.log.error(error)

        return reply.code(500).send(new GenericError())
      }
    })
  )
}
