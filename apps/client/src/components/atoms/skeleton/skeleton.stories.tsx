import { Story, Meta } from '@storybook/react'

import { Skeleton } from './skeleton'

export default {
  component: Skeleton,
  title: 'apps/client/atoms/Skeleton',
} as Meta

const Template: Story = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
