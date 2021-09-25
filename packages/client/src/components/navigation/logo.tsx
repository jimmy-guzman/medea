import pkg from '../../../package.json'
import { DbIcon } from '../../icons'

export const Logo = (): JSX.Element => {
  return (
    <>
      <DbIcon />
      <span className='inline-block'>
        <span className='text-hot-pink-400'>m</span>
        <span className='text-witch-haze-50'>e</span>
        <span className='text-spring-green-250'>d</span>
        <span className='text-bright-turquoise-350'>e</span>
        <span className='text-heliotrope-500'>a</span>
        <sup className='text-xs text-white font-light tracking-normal'>
          v{pkg.version}
        </sup>
      </span>
    </>
  )
}
