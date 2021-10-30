export interface IconButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type: 'button' | 'submit'
}

export const IconButton = ({
  children,
  onClick,
  type = 'button',
}: IconButtonProps): JSX.Element => {
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      className='text-vivid-tangerine-350 bg-transparent transform active:scale-125 text-xs hover:text-heliotrope-500 hover:scale-110 focus:scale-110 outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center'
      type={type}
    >
      {children}
    </button>
  )
}
