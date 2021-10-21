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
  server.get<{
    Params: MedeaNoteParams
    Reply: MedeaNote | MedeaError
  }>(`${MEDEA_NOTES_ROUTE}/:id`, { schema }, async (request, reply) => {
    try {
      const id = request.params.id
      const medea = await server.prisma.medeaNote.findUnique({
        where: { id },
        include: { tags: true },
      })

      if (medea) {
        return reply.code(200).send(buildMedeaNote(medea))
      }

      return reply.code(404).send(new NotFoundError(id))
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
