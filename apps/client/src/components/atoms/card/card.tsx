import { truncate } from '@medea/utils'

export interface CardProps {
  description?: string | null
  icon?: () => React.ReactNode
  text?: string | null
  title: string
}

export const Card = ({
  description,
  icon,
  text,
  title,
}: CardProps): JSX.Element => {
  return (
    <div className='w-full'>
      <div className='relative flex flex-col min-w-0 break-words bg-material-gray rounded mb-6 xl:mb-0 shadow-lg border-bright-turquoise-350 border-2'>
        <div className='flex-auto p-4'>
          <div className='flex flex-wrap'>
            <div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
              <h5 className='text-hot-pink-400 uppercase font-bold text-xs'>
                {title}
              </h5>
              <span className='font-semibold text-xl text-witch-haze-50'>
                {description}
              </span>
            </div>
            {icon && (
              <div className='relative w-auto pl-4 flex-initial text-hot-pink-400'>
                {icon()}
              </div>
            )}
          </div>
          {text && (
            <p className='text-sm text-white mt-4'>{truncate(text, 50)}</p>
          )}
        </div>
      </div>
    </div>
  )
}
