import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [phrase, setPhrase] = useState("This is the start")

  function decrementCount() {
    if(count <= 1){
      statusOver()
    }
    setCount(prevCount => prevCount -1)
  }
  function incrementCount() {
    if(count > 1){
      statusOK()
    }
    setCount(prevCount => prevCount + 1)
  }
  function statusOK() {
    setPhrase("Keep going!")
  }
  function statusOver() {
    setPhrase("The end.")
  }
  function justPractice(){
    console.log("Peakaboo")
  }

  return (
    <>
      <h1 className='header'>to-do list</h1>

      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <br/>
      <span>{phrase}</span>
      <br/>
      <button onClick={justPractice}>...</button>
    </>
  )
}

export default App