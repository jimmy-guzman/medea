import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import schema from '../../prisma/schema.prisma'
import prisma from './prisma-client'

export const prismaPlugin: FastifyPluginAsync = fp(async (fastifyServer) => {
  if (schema) {
    await prisma.$connect()
  }

  fastifyServer.decorate('prisma', prisma)

  fastifyServer.addHook('onClose', (server) => {
    server.log.info('disconnecting Prisma from DB')
  })
})
