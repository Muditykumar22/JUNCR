import{useState} from 'react'
import Card from './Card'
import Nav from './Nav'
import './App.css'
function App(){
  const [count, setCount] = useState(0)
  return (
    <>
       <Nav/>
      <h1>hii</h1>
      <Card/>
      <Card/>
     
    </>
  )
}


export default App
