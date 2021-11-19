import { Story, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { Link, LinkProps } from './link'

export default {
  component: Link,
  title: 'apps/client/atoms/Link',
  decorators: [(storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>],
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'I am a Link!',
}
