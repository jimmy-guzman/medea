import { MedeaNote } from '@medea/models'

import { MedeaNote as DbMedeaNote } from '.prisma/client'

export const buildMedeaNote = ({
  createdAt,
  updatedAt,
  ...note
}: DbMedeaNote): MedeaNote => {
  return {
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    ...note,
  }
}
