import { lazy } from 'react'

/**
 * Allows for `React.lazy` to leverage named exports from dynamic imports
 * @example
 * const { Home } = namedLazy(() => import('./pages/home'))
 */
export const namedLazy = <
  T extends Record<string, React.ComponentType<unknown>>
>(
  loader: (x?: string) => Promise<T>
): T => {
  return new Proxy({} as unknown as T, {
    get: (
      _target,
      componentName
    ): React.LazyExoticComponent<React.ComponentType<unknown>> | undefined => {
      if (typeof componentName === 'string') {
        return lazy(async () => {
          const module = await loader(componentName)

          return {
            default: module[componentName],
          }
        })
      }

      return undefined
    },
  })
}
