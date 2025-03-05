import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)
  const addvalue= () =>{
    if(counter<20){
     setCounter(counter+1)
    }
  }
  const removevalue=() =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
     <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>Remove value:</button>
    </>
  )
}

export default App
