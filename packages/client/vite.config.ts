import { defineConfig } from 'vite'
import react from 'vite-preset-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_DEBUG': undefined },
  plugins: [react({ removeDevtoolsInProd: true, injectReact: true })],
})
