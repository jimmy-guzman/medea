import analyze from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'
import react from 'vite-preset-react'

const manualChunks = {
  'react-query@': 'react-query',
  'refractor@': 'react-md-refractor',
  'parse5@': 'react-md-parse5',
  'prismjs@': 'react-md-prism',
  'react-json-view@': 'react-json-view',
  'framer-motion@': 'framer-motion',
  'node_modules': 'vendor',
}

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_DEBUG': undefined },
  plugins: [react({ removeDevtoolsInProd: true, injectReact: true })],
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 550, // due to refractor large size
    rollupOptions: {
      plugins: [analyze()],
      output: {
        manualChunks(id) {
          const chunkKey = Object.keys(manualChunks).find(
            (c) => id.includes(c) && id.includes('node_modules')
          )

          if (chunkKey) {
            return manualChunks[chunkKey]
          }
        },
      },
    },
  },
})
