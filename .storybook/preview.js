import 'tailwindcss/tailwind.css'
import { initialize, mswDecorator } from 'msw-storybook-addon'

initialize()

export const parameters = {
  actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
  viewMode: 'docs',
  backgrounds: {
    default: 'midnight',
    values: [
      {
        name: 'midnight',
        value: '#1F2937',
      },
    ],
  },
}

export const decorators = [mswDecorator]
