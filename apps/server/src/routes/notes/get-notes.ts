import { FastifyInstance } from 'fastify'

import { MedeaError } from '@medea/models'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError } from '../errors'

import { MedeaNote } from '.prisma/client'

export const getMedeaNotes = async (server: FastifyInstance): Promise<void> => {
  await Promise.resolve(
    server.get<{ Reply: MedeaError | MedeaNote[] }>(
      MEDEA_NOTES_ROUTE,
      {},
      async (request, reply) => {
        try {
          const response = await server.prisma.medeaNote.findMany({
            orderBy: [{ updatedAt: 'desc' }],
            include: { tags: true },
          })

          return await reply.code(200).send(response)
        } catch (error: unknown) {
          request.log.error(error)

          return reply.code(500).send(new GenericError())
        }
      }
    )
  )
}
