import { formatDate } from '@medea/utils'

import { useMedeaNotes } from '../../hooks'
import { EyeIcon } from '../../icons'
import { Alert, Loading, Card, Link } from '../atoms'
import { Badges, AddNoteCard } from '../molecules'

export const ViewNotes = (): JSX.Element => {
  const { isLoading, data, isError } = useMedeaNotes()

  if (isLoading) return <Loading message='notes' />

  if (isError) {
    return <Alert>{`Notes failed to load!`}</Alert>
  }

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='mb-4'>
        <AddNoteCard />
      </div>
      {data ? (
        data.map(({ id, updatedAt, tags, ...cardProps }) => {
          return (
            <div key={id} className='mb-4'>
              <Badges
                alignment='right'
                tags={[
                  ...tags.map(({ title }) => title),
                  formatDate(updatedAt, 'MMM d, y'),
                ]}
              />
              <Card
                {...cardProps}
                icon={() => (
                  <Link to={`notes/${id}`}>
                    <EyeIcon />
                  </Link>
                )}
              />
            </div>
          )
        })
      ) : (
        <Alert>{`There are no cards!`}</Alert>
      )}
    </div>
  )
}
