import { FastifyInstance } from 'fastify'

import { CreateMedeaNoteRequestBody } from '@medea/interfaces'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError } from './../errors'

const LINK_HOST = 'http://localhost:3000'

export const createMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  server.post<{
    Body: CreateMedeaNoteRequestBody
  }>(MEDEA_NOTES_ROUTE, {}, async (request, reply) => {
    try {
      const { id, createdAt, updatedAt } = await server.prisma.medeaNote.create(
        {
          data: {
            title: request.body.title,
            text: request.body.text,
            tags: {
              create: request.body.tags.map((tag) => ({ title: tag })),
            },
          },
        }
      )

      return reply.code(201).send({
        id,
        links: {
          note: `${LINK_HOST}/notes/${id}`,
          json: `${LINK_HOST}/json/${id}`,
        },
        createdAt,
        updatedAt,
      })
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
