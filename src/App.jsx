import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [color, setColor] = useState("blue")

  function decrementCount() {
    setCount(prevCount => prevCount -1)
    setColor("red")
  }
  function incrementCount() {
    setCount(prevCount => prevCount +1)
    setColor("blue")
  }

  return (
    <>
      <h1 className='header'>to-do list</h1>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{color}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App