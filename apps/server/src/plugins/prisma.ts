import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import schema from '../../prisma/schema.prisma'
import prisma from './prisma-client'

export const prismaPlugin: FastifyPluginAsync = fp(async (server) => {
  if (schema) {
    await prisma.$connect()
  }

  server.decorate('prisma', prisma)

  server.addHook('onClose', async (server) => {
    server.log.info('disconnecting Prisma from DB')
  })
})
