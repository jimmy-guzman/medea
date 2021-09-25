import { FastifyInstance } from 'fastify'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError, MedeaError } from './../errors'

import { MedeaNote } from '.prisma/client'

export const getMedeaNotes = async (server: FastifyInstance): Promise<void> => {
  server.get<{ Reply: MedeaNote[] | MedeaError }>(
    MEDEA_NOTES_ROUTE,
    {},
    async (request, reply) => {
      try {
        const response = await server.prisma.medeaNote.findMany({
          orderBy: [{ updatedAt: 'desc' }],
          include: { tags: true },
        })

        return reply.code(200).send(response)
      } catch (error) {
        request.log.error(error)

        return reply.code(500).send(new GenericError())
      }
    }
  )
}
