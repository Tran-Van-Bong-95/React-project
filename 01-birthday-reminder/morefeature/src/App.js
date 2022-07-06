import React from 'react'
import './index.css'
import Person from './Person'
import { useGlobal } from './context'
function App() {
  const { counter, list, remove, clearAll, refresh } = useGlobal()
  return list.length > 0 ? (
    <div className='App'>
      <div className='Counter'> {counter} birthdays today</div>
      <div className='list'>
        {list.map((item) => (
          <Person {...item} remove={remove} />
        ))}
      </div>

      <div className='clearAll'>
        {' '}
        <button onClick={() => clearAll()}> Clear All </button>
      </div>
    </div>
  ) : (
    <div className='refresh'>
      <button onClick={() => refresh()}> refresh </button>
    </div>
  )
}

export default App
