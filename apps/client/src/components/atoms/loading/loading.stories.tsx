import { Story, Meta } from '@storybook/react'

import { Loading } from './loading'

export default {
  component: Loading,
  title: 'apps/client/atoms/Loading',
} as Meta

const Template: Story = (args) => <Loading {...args} />

export const Primary = Template.bind({})

export const WithMessage = Template.bind({})
WithMessage.args = {
  message: 'something',
}
