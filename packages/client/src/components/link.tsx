import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  to?: string
  children: React.ReactNode
}

export const Link = ({ to = '/', children }: LinkProps): JSX.Element => {
  return (
    <RouterLink
      to={to}
      className='hover:text-heliotrope-500 text-vivid-tangerine-400 font-semibold'
    >
      {children}
    </RouterLink>
  )
}
