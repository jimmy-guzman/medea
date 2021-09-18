export const Skeleton = (): JSX.Element => {
  return (
    <div className='p-4 max-w-sm w-full mx-auto'>
      <div className='animate-pulse flex space-x-4'>
        <div className='flex-1 space-y-4 py-1'>
          <div className='h-8 bg-gray-700 rounded w-3/4' />
          <div className='h-6 bg-gray-700 rounded' />
          <div className='space-y-2'>
            <div className='h-4 bg-gray-700 rounded w-5/6' />
          </div>
          <div className='h-6 bg-gray-700 rounded w-4/6' />
          <div className='space-y-2'>
            <div className='h-4 bg-gray-700 rounded w-4/6' />
            <div className='h-4 bg-gray-700 rounded w-1/2' />
          </div>
        </div>
      </div>
    </div>
  )
}
