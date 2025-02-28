import { useState } from 'react'


import './App.css'
import Nav from './Nav'
import Hero from './Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     < Nav/>
     <Hero/>
    </>
  )
}

export default App
