import { AnimatePresence } from 'framer-motion'
import { Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import { Container, Transition } from './components/atoms'
import { Navigation } from './components/molecules'
import { namedLazy } from './utils'

const { Home } = namedLazy(() => import('./pages/home'))
const { Json } = namedLazy(() => import('./pages/json'))
const { NotFound } = namedLazy(() => import('./pages/not-found'))
const { Note } = namedLazy(() => import('./pages/note'))

export const App = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className='bg-gray-800 h-full min-h-screen'>
      <Navigation links={[{ path: '/notes', name: 'notes' }]} />
      <Container>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Suspense fallback={null}>
            <Switch location={location} key={location.pathname}>
              <Route path='/' exact>
                <Transition>
                  <Home />
                </Transition>
              </Route>
              <Route path='/notes' exact>
                <Transition>
                  <Home />
                </Transition>
              </Route>
              <Route path='/notes/:id'>
                <Transition>
                  <Note />
                </Transition>
              </Route>
              <Route path='/json/:id'>
                <Transition>
                  <Json />
                </Transition>
              </Route>
              <Route>
                <Transition>
                  <NotFound />
                </Transition>
              </Route>
            </Switch>
          </Suspense>
        </AnimatePresence>
      </Container>
    </div>
  )
}
