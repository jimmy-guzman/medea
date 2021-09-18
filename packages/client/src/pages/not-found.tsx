export const NotFound = (): JSX.Element => {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-witch-haze-50 text-xl'>
        <h2 className='flex items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-12'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span className='block text-2xl'>404: Page not found!</span>
        </h2>
      </div>
    </div>
  )
}
