//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <> 
    <h1 className='bg-green-300 text-black rounded-xl mb-4'>Tailwind Test</h1>
    <Card username='Hello Riya' btnText='Click me'/>
    <Card username='Hello Kiya'/>
    </>
  );
}

export default App
