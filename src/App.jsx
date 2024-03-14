import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    return setCount(prevCount => count - 1)
  }
  function incrementCount() {
    return setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <h1 className='header'>to-do list</h1>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App