import { Badge } from '../../atoms'

export interface BadgesProps {
  /**
   * List of tags to render as badges (*will strip any duplicate strings*)
   */
  tags: string[]
  align?: 'right' | 'left'
  isInverted?: boolean
}

/**
 * Renders a collection of `<Badges />`
 */
export const Badges = ({
  align = 'left',
  tags,
  isInverted,
}: BadgesProps): JSX.Element => {
  return (
    <div
      className={`grid grid-flow-col auto-cols-max gap-1 ${
        align === 'right' ? 'justify-end' : ''
      }`}
    >
      {[...new Set(tags)].map((tag) => (
        <Badge key={tag} isInverted={isInverted}>
          {tag}
        </Badge>
      ))}
    </div>
  )
}
