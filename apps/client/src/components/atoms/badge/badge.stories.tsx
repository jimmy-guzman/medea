import { Story, Meta } from '@storybook/react'

import { Badge, BadgeProps } from './badge'

export default {
  component: Badge,
  title: 'apps/client/atoms/Badge',
  args: {
    children: 'I am a Badge!',
  },
} as Meta

const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Primary = Template.bind({})
