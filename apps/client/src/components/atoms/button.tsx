interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className='bg-vivid-tangerine-350 text-gray-800 active:bg-vivid-tangerine-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150 flex items-center'
      type='button'
    >
      {children}
    </button>
  )
}
