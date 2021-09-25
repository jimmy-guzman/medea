import { AnimatePresence } from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'

import { Container, Navigation, Transition } from './components'
import { Home, NotFound, Json, Notes } from './pages'

export const App = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className='bg-gray-800 h-full min-h-screen'>
      <Navigation />
      <Container>
        <AnimatePresence exitBeforeEnter initial={false}>
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
                <Notes />
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
        </AnimatePresence>
      </Container>
    </div>
  )
}
