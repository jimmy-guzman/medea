import { SadFaceIcon } from '../../icons'

interface AlertProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Alert = ({ children, onClick }: AlertProps): JSX.Element => {
  return (
    <div className='text-gray-800 px-6 py-4 border-0 rounded relative mb-4 bg-witch-haze-50'>
      <span className='text-xl inline-block align-middle'>
        <SadFaceIcon />
      </span>
      <span className='inline-block align-middle mr-8'>{children}</span>
      {onClick ? (
        <button
          onClick={onClick}
          className='absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none'
        >
          <span>×</span>
        </button>
      ) : null}
    </div>
  )
}
