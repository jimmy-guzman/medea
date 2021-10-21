import { StrictMode } from 'react'
import * as ReactDom from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'
import { DataProvider } from './providers'

import 'tailwindcss/tailwind.css'

ReactDom.render(
  <StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
)
