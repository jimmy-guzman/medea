import ReactJson from 'react-json-view'

import { JSONLike } from '@medea/types'
import { formatDate } from '@medea/utils'

import { Badge } from '../../atoms'
import { theme } from './theme'

interface JsonBoxProps<T extends JSONLike> {
  date: string
  id: string
  json: T
}

export const JsonBox = <T extends JSONLike>({
  date,
  id,
  json,
}: JsonBoxProps<T>): JSX.Element => {
  return (
    <>
      <div className='grid grid-flow-col auto-cols-max gap-1'>
        <Badge>{id}</Badge>
        <Badge>{formatDate(date, 'MMM d, y, h:m')}</Badge>
      </div>
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
