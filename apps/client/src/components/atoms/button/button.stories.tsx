import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './button'

export default {
  component: Button,
  title: 'apps/client/atoms/Button',
  args: {
    children: 'I am a Button!',
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
