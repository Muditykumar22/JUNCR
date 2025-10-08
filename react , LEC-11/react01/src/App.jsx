import { useState } from 'react'
import Card from './Card.jsx'
import Nav from './Nav.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Nav/>
      <h1>hii</h1>
      <Card/>
      <Card/>
      <p>Lorem, ipsum dolor.</p>
    </>
  )
}

export default App
