export interface BadgeProps {
  children: React.ReactNode
  /**
   * @todo should retain non inverted size
   */
  isInverted?: boolean
}

export const Badge = ({
  children,
  isInverted = false,
}: BadgeProps): JSX.Element => {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 text-xs font-semi-bold leading-none rounded my-1 ${
        isInverted
          ? 'bg-spring-green-250 text-white'
          : 'text-spring-green-250 border-spring-green-250 border-2'
      }`}
    >
      {children}
    </span>
  )
}
