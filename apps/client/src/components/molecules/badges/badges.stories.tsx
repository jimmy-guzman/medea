import { Story, Meta } from '@storybook/react'

import { Badges, BadgesProps } from './badges'

export default {
  component: Badges,
  title: 'apps/client/molecules/Badges',
} as Meta

const Template: Story<BadgesProps> = (args) => <Badges {...args} />

export const Primary = Template.bind({})
Primary.args = {
  tags: ['apple', 'banana', 'orange'],
}
