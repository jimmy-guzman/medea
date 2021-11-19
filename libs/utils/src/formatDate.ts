import { KnownKeys } from '@medea/types'

const time = <const>{ hour: 'numeric', minute: 'numeric', hour12: true }
const year = <const>{ year: 'numeric' }
const day = <const>{ month: 'short', day: 'numeric' }
const options = <const>{
  'MMM d, y, h:m': { ...day, ...year, ...time },
  'MMM d, y': { ...day, ...year },
  'MMM d, h:m': { ...day, ...time },
  'MMM d': { ...day, ...time },
}

const isDate = (date: Date | string): date is Date => {
  return (
    Object.prototype.toString.call(date) === '[object Date]' &&
    date instanceof Date
  )
}

/**
 * Formats Date or iso date to "MMM d, h:m" by default
 * @example
 * formatDate("2021-09-23T04:15:59.634Z") // Sep 22, 11:15 PM
 */
export const formatDate = (
  date: Date | string,
  format: KnownKeys<typeof options> = 'MMM d, h:m'
): string => {
  const dateConstructor = isDate(date) ? date : new Date(date)

  return dateConstructor.toLocaleString('en-US', options[format])
}
