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
  server.delete<{
    Params: MedeaNoteParams
    Reply: number | MedeaError
  }>(`${MEDEA_NOTES_ROUTE}/:id`, { schema }, async (request, reply) => {
    const id = request.params.id

    try {
      await server.prisma.medeaTag.deleteMany({
        where: { medeaNoteId: id },
      })

      const medea = await server.prisma.medeaNote.delete({
        where: { id },
      })

      if (medea) {
        return reply.code(204).send(204)
      }

      return reply.code(404).send(new NotFoundError(id))
    } catch (error) {
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
}
