import { FastifyInstance } from 'fastify'

import {
  MedeaNoteParamsSchema,
  MedeaNoteParams,
  MutateMedeaNoteBodySchema,
  MutateMedeaNoteBody,
  MedeaError,
  MedeaNote,
  MedeaNoteSchema,
} from '@medea/models'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError } from './../errors'
import { buildMedeaNote } from './utils'

const schema = {
  params: MedeaNoteParamsSchema,
  body: MutateMedeaNoteBodySchema,
  response: { 200: MedeaNoteSchema },
}

export const updateMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  server.put<{
    Params: MedeaNoteParams
    Body: MutateMedeaNoteBody
    Reply: MedeaNote | MedeaError
  }>(`${MEDEA_NOTES_ROUTE}/:id`, { schema }, async (request, reply) => {
    try {
      const note = await server.prisma.medeaNote.update({
        where: { id: request.params.id },
        data: {
          text: request.body.text,
        },
      })

      return reply.code(200).send(buildMedeaNote(note))
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
