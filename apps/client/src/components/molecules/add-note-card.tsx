import { useState } from 'react'

import { formatDate } from '@medea/utils'

import { useCreateMedeaNote, useNavigate } from '../../hooks'
import { IconButton } from '../atoms'
import { Badges } from './badges'

export const AddNoteCard = (): JSX.Element => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const mutation = useCreateMedeaNote()

  return (
    <>
      <Badges
        tags={[formatDate(new Date(Date.now()), 'MMM d, y')]}
        alignment='right'
      />
      <div className='w-full'>
        <div className='relative flex flex-col min-w-0 break-words bg-material-gray rounded mb-6 xl:mb-0 shadow-lg border-bright-turquoise-350 border-2'>
          <div className='flex-auto p-4'>
            <div className='flex flex-wrap'>
              <div className='relative w-full pr-4 flex-grow flex-1'>
                <h5 className='text-hot-pink-400 uppercase font-bold text-xs'>
                  New Card?
                </h5>
                <input
                  type='text'
                  placeholder='Title...'
                  className='placeholder-gray-500 font-semibold text-witch-haze-50 relative bg-material-gray text-xl border-bright-turquoise-350 border-b-2 outline-none focus:outline-none focus:none w-full'
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }}
                />
              </div>
            </div>
            <div className='flex flex-wrap  mt-3'>
              <div className='relative w-full flex-grow flex-1'>
                <input
                  type='text'
                  placeholder='Description...'
                  className='placeholder-gray-500 text-white relative bg-material-gray text-sm outline-none focus:outline-none focus:none w-full border-bright-turquoise-350 border-b-2'
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value)
                  }}
                />
              </div>
              <div className='relative w-auto flex-initial ml-4'>
                <IconButton
                  onClick={async () => {
                    const { id } = await mutation.mutateAsync({
                      title,
                      description,
                      text: `# This Is Your New Note\n\n> Thank you using Medea! ❤️\n\n## Tips\n* You can click the 👁 to preview\n* You can click the 📝 to edit\n\n`,
                      tags: [],
                    })

                    navigate.toNote(id)
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
