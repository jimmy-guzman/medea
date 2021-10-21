import { NavLink } from 'react-router-dom'

interface MedeaNavLinkProps {
  to?: string
  children: React.ReactNode
}

export const MedeaNavLink = ({
  to = '/',
  children,
}: MedeaNavLinkProps): JSX.Element => {
  return (
    <NavLink
      className={(isActive) =>
        `text-white flex lg:mt-0 hover:text-heliotrope-500 mr-4 ${
          isActive ? 'text-vivid-tangerine-400' : 'font-semibold'
        }`
      }
      to={to}
    >
      {children}
    </NavLink>
  )
}
