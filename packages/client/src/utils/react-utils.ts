import { lazy } from 'react'

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
