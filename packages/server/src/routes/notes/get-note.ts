import { FastifyInstance } from 'fastify'

import { GetMedeaNoteRequestParams } from '@medea/interfaces'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import {
  GenericError,
  MedeaError,
  MissingParamError,
  NotFoundError,
} from '../errors'

import { MedeaNote } from '.prisma/client'

export const getMedeaNote = async (server: FastifyInstance): Promise<void> => {
  server.get<{
    Params: GetMedeaNoteRequestParams
    Reply: MedeaNote | MedeaError
  }>(`${MEDEA_NOTES_ROUTE}/:id`, {}, async (request, reply) => {
    try {
      const id = request.params.id

      if (!id) {
        return reply.code(400).send(new MissingParamError('id'))
      }

      const medea = await server.prisma.medeaNote.findUnique({
        where: { id },
        include: { tags: true },
      })

      if (medea) {
        return reply.code(200).send(medea)
      }

      return reply.code(404).send(new NotFoundError(id))
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
