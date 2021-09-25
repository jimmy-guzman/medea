import createError, { FastifyError } from 'fastify-error'

export const GenericError = createError(
  'MEDEA_ERR',
  'Something went wrong!',
  500
)

export const MissingParamError = createError(
  'MEDEA_ERR_MISSING_PARAM',
  'Missing /:%s parameter!',
  400
)

export const NotFoundError = createError(
  'MEDEA_ERR_NOT_FOUND',
  `No medea was found for id: %s`,
  404
)

export type MedeaError = FastifyError
