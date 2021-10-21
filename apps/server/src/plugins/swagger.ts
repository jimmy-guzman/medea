import { SwaggerOptions } from 'fastify-swagger'

import pkg from '../../package.json'
import { DOCS_ROUTE } from '../constants'

export const swaggerConfig = (port: number | string): SwaggerOptions => {
  return {
    routePrefix: DOCS_ROUTE,
    mode: 'dynamic',
    exposeRoute: true,
    openapi: {
      info: {
        title: pkg.name,
        version: pkg.version,
      },
      servers: [
        {
          url: `http://localhost:${port}`,
        },
      ],
    },
  }
}
