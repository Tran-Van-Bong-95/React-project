import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import SinglePage from './pages/SinglePage'
import Error from './pages/Error'

import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='/about' element={<About />}>
          {' '}
        </Route>
        <Route path='/singlePage/:id' element={<SinglePage />}>
          {' '}
        </Route>
        <Route path='*' element={<Error />}>
          {' '}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
