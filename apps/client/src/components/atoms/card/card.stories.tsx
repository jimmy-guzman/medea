import { Story, Meta } from '@storybook/react'

import { HappyFaceIcon } from '../../../icons'
import { Card, CardProps } from './card'

export default {
  component: Card,
  title: 'apps/client/atoms/Card',
  args: {
    title: 'I am a Card!',
  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  description: 'This is a description!',
  text: 'This is some text!',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  description: 'This is a description!',
  text: 'This is some text!',
  // eslint-disable-next-line react/display-name
  icon: () => <HappyFaceIcon />,
}
