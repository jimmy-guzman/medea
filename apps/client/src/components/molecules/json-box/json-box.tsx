import ReactJson from 'react-json-view'

import { JSONLike } from '@medea/types'
import { formatDate } from '@medea/utils'

import { Badge } from '../../atoms'
import { theme } from './theme'

export interface JsonBoxProps<T extends JSONLike = JSONLike> {
  /**
   * Adds a formatted date tag
   */
  date: string
  /**
   * Adds an id tag
   */
  id: string
  json: T
}

/**
 * Leverage `react-json-view` with a custom theme to render a nicely formatted JSON object
 */
export const JsonBox = <T extends JSONLike>({
  date,
  id,
  json,
}: JsonBoxProps<T>): JSX.Element => {
  return (
    <>
      {(id || date) && (
        <div className='grid grid-flow-col auto-cols-max gap-1'>
          {id && <Badge>{id}</Badge>}
          {date && <Badge>{formatDate(date, 'MMM d, y, h:m')}</Badge>}
        </div>
      )}
      <div className='border-2 border-bright-turquoise-350 bg-material-gray p-4 bg-flat'>
        <ReactJson
          src={json}
          theme={theme}
          indentWidth={2}
          displayDataTypes={false}
          displayObjectSize={false}
        />
      </div>
    </>
  )
}
