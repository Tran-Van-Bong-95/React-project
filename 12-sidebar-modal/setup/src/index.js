import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ContextComponent } from './context/ContextComponent'

ReactDOM.render(
  <ContextComponent>
    <App />
  </ContextComponent>,
  document.getElementById('root')
)
