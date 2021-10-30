import { Story, Meta } from '@storybook/react'

import { JsonBox, JsonBoxProps } from './json-box'

const today = new Date(Date.now()).toISOString()

export default {
  component: JsonBox,
  title: 'apps/client/molecules/JsonBox',
} as Meta

const Template: Story<JsonBoxProps> = (args) => <JsonBox {...args} />

export const Primary = Template.bind({})
Primary.args = {
  json: {
    banana: 'yellow',
  },
}

export const WithTags = Template.bind({})
WithTags.args = {
  ...Primary.args,
  id: '1',
  date: today,
}
