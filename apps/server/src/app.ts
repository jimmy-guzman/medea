import { fastify } from 'fastify'

import { HEALTH_ROUTE } from './constants'
import { prismaPlugin, swaggerConfig } from './plugins'
import { notesRoutes } from './routes'

const PORT = process.env.PORT || 7000

const server = fastify({
  logger: {
    level: 'info',
    prettyPrint: {
      ignore: 'time,hostname,pid',
    },
  },
})

export const app = async (): Promise<void> => {
  try {
    await server.register(import('fastify-swagger'), swaggerConfig(PORT))
    await server.register(import('fastify-cors'))
    await server.register(prismaPlugin)
    await server.register(import('fastify-healthcheck'), {
      healthcheckUrl: HEALTH_ROUTE,
    })
    await server.register(notesRoutes)
    await server.listen(PORT)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
