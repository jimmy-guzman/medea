import { NavLink } from 'react-router-dom'

export interface NavigationLinkProps {
  children?: React.ReactNode
  name?: string
  path?: string
}

export const NavigationLink = ({
  name,
  path = '/',
  children,
}: NavigationLinkProps): JSX.Element => {
  return (
    <NavLink
      className={(isActive) =>
        `text-white flex lg:mt-0 hover:text-heliotrope-500 mr-4 ${
          isActive ? 'text-vivid-tangerine-400' : 'font-semibold'
        }`
      }
      to={path}
    >
      {children ? children : name}
    </NavLink>
  )
}
