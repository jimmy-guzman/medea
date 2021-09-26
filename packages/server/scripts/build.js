/* eslint-disable @typescript-eslint/no-var-requires */
const { build } = require('esbuild')
const { nodeExternalsPlugin } = require('esbuild-node-externals')

const options = {
  logLevel: 'info',
  outdir: 'dist',
  entryPoints: ['./src/main.ts'],
  plugins: [nodeExternalsPlugin()],
  bundle: true,
  minify: true,
  platform: 'node',
  target: ['esnext'],
  sourcemap: true,
  loader: {
    '.prisma': 'file',
  },
  assetNames: '[name]',
  watch: process.argv.includes('--watch'),
}

const esbuild = async () => {
  try {
    await build(options)
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

esbuild()
