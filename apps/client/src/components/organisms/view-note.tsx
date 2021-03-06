import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { formatDate } from '@medea/utils'

import {
  useDeleteMedeaNote,
  useMedeaNote,
  useNavigate,
  useUpdateMedeaNote,
} from '../../hooks'
import { EyeIcon, PencilIcon, TrashIcon } from '../../icons'
import { Alert, Skeleton, Button, Link } from '../atoms'
import { MDPreview, Badges, MDEdit } from '../molecules'

// eslint-disable-next-line max-lines-per-function
export const ViewNote = (): JSX.Element => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { isLoading, isSuccess, data } = useMedeaNote(id)
  const { mutate: updateMedeaNote } = useUpdateMedeaNote(id)
  const { mutateAsync: deleteMedeaNote } = useDeleteMedeaNote()
  const [isEditMode, setIsEditMode] = useState(false)

  if (isLoading) {
    return (
      <div className='container bg-white p-2'>
        <Skeleton />
      </div>
    )
  }

  if (isSuccess && data) {
    const { text, updatedAt, tags } = data

    return (
      <div>
        <Badges
          tags={[formatDate(updatedAt), ...tags.map(({ title }) => title)]}
        />
        {isEditMode ? (
          <MDEdit markdownToEdit={text} handleEdit={updateMedeaNote} />
        ) : (
          <MDPreview md={text} />
        )}
        <div className='grid grid-flow-col auto-cols-max gap-1 justify-between mt-1 items-center'>
          <Link to={`/json/${id}`}> VIEW JSON</Link>
          <div className='flex gap-1'>
            <Button
              onClick={async (): Promise<void> => {
                await deleteMedeaNote(id)
                navigate.home()
              }}
            >
              <TrashIcon />
            </Button>
            <Button
              onClick={(): void => {
                setIsEditMode((prevIsEditMode) => !prevIsEditMode)
              }}
            >
              {isEditMode ? <EyeIcon /> : <PencilIcon />}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return <Alert>Note failed load!</Alert>
}
