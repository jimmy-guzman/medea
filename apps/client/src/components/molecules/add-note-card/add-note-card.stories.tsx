import { Story, Meta } from '@storybook/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { MemoryRouter as Router } from 'react-router-dom'

import { handlers } from '@medea/mocks'

import { AddNoteCard } from './add-note-card'
const queryClient = new QueryClient()

export default {
  component: AddNoteCard,
  title: 'apps/client/molecules/AddNoteCard',
  decorators: [
    (storyFn) => <Router>{storyFn()}</Router>,
    (story) => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
  parameters: {
    msw: handlers,
  },
} as Meta

const Template: Story = (args) => <AddNoteCard {...args} />

export const Primary = Template.bind({})
