import { Story, Meta } from '@storybook/react'

import { HappyFaceIcon } from '../../../icons'
import { IconButton, IconButtonProps } from './icon-button'

export default {
  component: IconButton,
  title: 'apps/client/atoms/IconButton',
} as Meta

const Template: Story<IconButtonProps> = (args) => (
  <IconButton {...args}>
    <HappyFaceIcon />
  </IconButton>
)

export const Primary = Template.bind({})
