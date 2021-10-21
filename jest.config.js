// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require('./jest.config.base.js')

module.exports = {
  projects: ['<rootDir>/{apps,libs}/*/jest.config.js'],
  ...base,
}
