import { FastifyInstance } from 'fastify'

import {
  CreateMedeaNoteBodySchema,
  CreateMedeaNoteBody,
  MedeaError,
  MedeaNote,
  MedeaNoteSchema,
  httpErrorsSchema,
} from '@medea/models'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError } from './../errors'
import { buildMedeaNote } from './utils'

const schema = {
  body: CreateMedeaNoteBodySchema,
  response: {
    ...httpErrorsSchema,
    201: MedeaNoteSchema,
  },
}

export const createMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  server.post<{
    Body: CreateMedeaNoteBody
    Reply: MedeaNote | MedeaError
  }>(MEDEA_NOTES_ROUTE, { schema }, async (request, reply) => {
    try {
      const note = await server.prisma.medeaNote.create({
        data: {
          ...request.body,
          tags: {
            create: request.body.tags?.map((tag) => ({ title: tag })),
          },
        },
        include: {
          tags: true,
        },
      })

      return reply.code(201).send(buildMedeaNote(note))
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
