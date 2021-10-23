import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './button'

export default {
  component: Button,
  title: 'apps/client/atoms/button',
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Primary',
}