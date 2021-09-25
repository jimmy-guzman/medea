import { PrismaClient } from '.prisma/client'

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaClient = new PrismaClient({
  log: ['error', 'warn'],
})

export default prismaClient
