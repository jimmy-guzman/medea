import { Static, Type } from '@sinclair/typebox'

export const MedeaNoteSchema = Type.Object({
  id: Type.String(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
  title: Type.String(),
  text: Type.String(),
  description: Type.Union([Type.String(), Type.Null()]),
  tags: Type.Array(
    Type.Object({
      id: Type.String(),
      title: Type.String(),
    })
  ),
})

export type MedeaNote = Static<typeof MedeaNoteSchema>

export const CreateMedeaNoteBodySchema = Type.Object({
  title: Type.RegEx(/(.|\s)*\S(.|\s)*/),
  text: Type.String(),
  description: Type.Optional(Type.String()),
  tags: Type.Optional(Type.Array(Type.String())),
})

export type CreateMedeaNoteBody = Static<typeof CreateMedeaNoteBodySchema>

export const MutateMedeaNoteBodySchema = Type.Object({
  title: Type.Optional(Type.RegEx(/(.|\s)*\S(.|\s)*/)),
  text: Type.Optional(Type.String()),
  description: Type.Optional(Type.String()),
  tags: Type.Optional(Type.Array(Type.String())),
})

export type MutateMedeaNoteBody = Static<typeof MutateMedeaNoteBodySchema>

export const MedeaNoteParamsSchema = Type.Object({
  id: Type.RegEx(/^c+[a-z0-9]*/),
})

export type MedeaNoteParams = Static<typeof MedeaNoteParamsSchema>

export const MedeaErrorSchema = Type.Object({
  statusCode: Type.Optional(Type.Number()),
  error: Type.Optional(Type.String()),
  code: Type.Optional(Type.String()),
  message: Type.String(),
})

export type MedeaError = Static<typeof MedeaErrorSchema>

export const httpErrorsSchema = {
  400: MedeaErrorSchema,
  404: MedeaErrorSchema,
  500: MedeaErrorSchema,
}
