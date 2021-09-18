import { FastifyInstance, FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import { createMedeaNote } from './create-note'
import { deleteMedeaNote } from './delete-note'
import { getMedeaNote } from './get-note'
import { getMedeaNotes } from './get-notes'
import { updateMedeaNote } from './update-note'

export const notesRoutes: FastifyPluginAsync = fp(
  async (server: FastifyInstance) => {
    await getMedeaNotes(server)
    await getMedeaNote(server)
    await createMedeaNote(server)
    await updateMedeaNote(server)
    await deleteMedeaNote(server)
  }
)
