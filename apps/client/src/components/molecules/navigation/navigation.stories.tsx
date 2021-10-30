import { Story, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Navigation, NavigationProps } from './navigation'

export default {
  component: Navigation,
  title: 'apps/client/molecules/Navigation',
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta

const Template: Story<NavigationProps> = (args) => <Navigation {...args} />

export const Primary = Template.bind({})
Primary.args = {
  links: [
    { path: '/banana', name: 'banana' },
    { path: '/orange', name: 'orange' },
    { path: '/apple', name: 'apple' },
  ],
}
