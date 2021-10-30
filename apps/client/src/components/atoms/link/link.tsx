import { Link as RouterLink } from 'react-router-dom'

const className =
  'hover:text-heliotrope-500 text-vivid-tangerine-400 font-semibold'

export interface LinkProps {
  to?: string
  /**
   * To navigate to an external url without  React Router's `<Link />`
   */
  isExternal?: boolean
  children: React.ReactNode
}

/**
 * By default uses React Router's `<Link />` to navigate
 */
export const Link = ({
  isExternal,
  to = '/',
  children,
}: LinkProps): JSX.Element => {
  return isExternal ? (
    <a href={to} className={className}>
      {children}
    </a>
  ) : (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  )
}
