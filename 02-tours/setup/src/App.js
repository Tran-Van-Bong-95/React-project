import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  async function fetchAPI() {
    // setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      setTours(data)
    } catch (error) {
      setLoading(false)
      return `${error}`
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
        </div>
        <button onClick={() => fetchAPI()} className='btn'>
          referesh
        </button>
      </main>
    )
  }
  return (
    <main className='main'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
