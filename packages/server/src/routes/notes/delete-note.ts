import { FastifyInstance } from 'fastify'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import {
  GenericError,
  MedeaError,
  MissingParamError,
  NotFoundError,
} from '../errors'

export const deleteMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  server.delete<{
    Params: { id: string }
    Reply: { id: string } | MedeaError
  }>(`${MEDEA_NOTES_ROUTE}/:id`, {}, async (request, reply) => {
    const id = request.params.id

    try {
      if (!id) {
        return reply.code(400).send(new MissingParamError('id'))
      }

      await server.prisma.medeaTag.deleteMany({
        where: { medeaNoteId: id },
      })

      const medea = await server.prisma.medeaNote.delete({
        where: { id },
      })

      if (medea) {
        return reply.code(200).send({ id })
      }

      return reply.code(404).send(new NotFoundError(id))
    } catch (error) {
      if (
        (error as Error).message.includes('Record to delete does not exist')
      ) {
        return reply.code(404).send(new NotFoundError(id))
      }
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
