import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { myVariable } from './context/ContextComponent'
const Home = () => {
  // CONTEXT
  const { status1, setStatus1 } = useContext(myVariable)

  return (
    <div className={status1 ? 'hide' : 'Home'} onClick={() => setStatus1(true)}>
      <FaBars />
    </div>
  )
}

export default Home
