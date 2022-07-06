import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tabs, setTab]  = useState([])
  const [menu, setMenu] = useState([])
  const [data, setData] = useState([])
  async function fetchAPI() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setLoading(false)
      const newTabs = data.filter((tab) => tab.company === 'TOMMY')
      setTab(newTabs)
      const filterCompany = data.map((tab) => tab.company)
      setMenu(filterCompany)
      setData(data)
    } catch (err) {
      setLoading(false)
      return `${err}`
    }
  }
  const filterCP = (company) => {
    const newTabs = data.filter((tab) => tab.company == company)
    setTab(newTabs)
  }
  useEffect(() => {
    fetchAPI()
  }, [])

  if (loading) {
    return 'Loading...'
  }

  const disStyle = {
    padding: '5px',
    color: 'blue',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(199, 188, 188, 0.466)',
    margin: '10px 0',
  }
  return (
    <div className='container'>
      <div className='title'>
        <h1>Expierence</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center'>
        <article className='company'>
          <div className='underline'></div>
          <div>
            {menu.map((company) => (
              <button onClick={() => filterCP(company)}> {company} </button>
            ))}
          </div>
        </article>

        <article>
          {tabs.map((tab) => {
            const { id, title, dates, duties, company } = tab

            return (
              <div className='info' key={id}>
                <p>{title}</p>
                <button style={disStyle}>{company}</button>
                <p>{dates}</p>
                {duties.map((duti) => {
                  return (
                    <div>
                      <span>
                        <FaAngleDoubleRight className='icon' />
                      </span>
                      {duti}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </article>
      </div>
      <div style={{ margin: '0 auto', width: '100px' }}>
        <button style={disStyle}>MORE INFO</button>
      </div>
    </div>
  )
}

export default App
