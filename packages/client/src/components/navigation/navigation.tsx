import { Logo } from './logo'
import { MedeaNavLink } from './nav-link'

export const Navigation = (): JSX.Element => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-4 border-b border-hot-pink-400'>
      <div className='flex items-center flex-no-shrink text-white mr-6 text-center font-extrabold text-2xl py-3'>
        <span className='text-xl tracking-widest font-light flex'>
          <MedeaNavLink>
            <Logo />
          </MedeaNavLink>
        </span>
        <MedeaNavLink to='/notes'>notes</MedeaNavLink>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'></div>
      </div>
    </nav>
  )
}
