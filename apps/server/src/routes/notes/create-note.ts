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
import { GenericError } from '../errors'
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
  await Promise.resolve(
    server.post<{
      Body: CreateMedeaNoteBody
      Reply: MedeaError | MedeaNote
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

        return await reply.code(201).send(buildMedeaNote(note))
      } catch (error: unknown) {
        request.log.error(error)

        return reply.code(500).send(new GenericError())
      }
    })
  )
}
