import { FastifyInstance } from 'fastify'

import {
  MedeaNoteParamsSchema,
  MedeaNoteParams,
  MedeaError,
  MedeaNote,
  MedeaNoteSchema,
  httpErrorsSchema,
} from '@medea/models'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError, NotFoundError } from '../errors'
import { buildMedeaNote } from './utils'

const schema = {
  params: MedeaNoteParamsSchema,
  response: { ...httpErrorsSchema, 200: MedeaNoteSchema },
}

export const getMedeaNote = async (server: FastifyInstance): Promise<void> => {
  await Promise.resolve(
    server.get<{
      Params: MedeaNoteParams
      Reply: MedeaError | MedeaNote
    }>(`${MEDEA_NOTES_ROUTE}/:id`, { schema }, async (request, reply) => {
      try {
        const {
          params: { id },
        } = request
        const medea = await server.prisma.medeaNote.findUnique({
          where: { id },
          include: { tags: true },
        })

        if (medea) {
          return await reply.code(200).send(buildMedeaNote(medea))
        }

        return await reply.code(404).send(new NotFoundError(id))
      } catch (error: unknown) {
        request.log.error(error)

        return reply.code(500).send(new GenericError())
      }
    })
  )
}
