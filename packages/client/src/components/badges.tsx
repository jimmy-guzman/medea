import { Badge } from '.'

interface BadgesProps {
  tags: string[]
  alignment?: 'right' | 'left'
}

export const Badges = ({ alignment, tags }: BadgesProps): JSX.Element => {
  return (
    <div
      className={`grid grid-flow-col auto-cols-max gap-1 ${
        alignment === 'right' ? 'justify-end' : ''
      }`}
    >
      {tags.map((tag) => (
        <Badge key={tag}>{tag}</Badge>
      ))}
    </div>
  )
}
