import { FastifyInstance } from 'fastify'

import { UpdateMedeaNoteRequestBody } from '@medea/interfaces'

import { MEDEA_NOTES_ROUTE } from '../../constants'
import { GenericError } from './../errors'

export const updateMedeaNote = async (
  server: FastifyInstance
): Promise<void> => {
  server.put<{
    Params: { id: string }
    Body: UpdateMedeaNoteRequestBody
  }>(`${MEDEA_NOTES_ROUTE}/:id`, {}, async (request, reply) => {
    try {
      const { id, updatedAt } = await server.prisma.medeaNote.update({
        where: { id: request.params.id },
        data: {
          text: request.body.text,
        },
      })

      return reply.code(200).send({
        id,
        updatedAt,
      })
    } catch (error) {
      request.log.error(error)

      return reply.code(500).send(new GenericError())
    }
  })
}
