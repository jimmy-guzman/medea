import { Story, Meta } from '@storybook/react'

import { MDEdit, MdEditProps } from './md-edit'

export default {
  component: MDEdit,
  title: 'apps/client/molecules/MDEdit',
} as Meta

const Template: Story<MdEditProps> = (args) => <MDEdit {...args} />

export const Primary = Template.bind({})
Primary.args = {
  markdownToEdit:
    '# This Is Your New Note\n\n> Thank you for using Medea! ❤️\n\n## Tips\n* You can click the 👁 to preview\n* You can click the 📝 to edit\n\n',
}
