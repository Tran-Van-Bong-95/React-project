import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './App.css'

import { AppContext } from './context'
ReactDOM.render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>,
  document.getElementById('root')
)
