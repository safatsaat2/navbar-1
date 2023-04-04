import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className=" my-10 text-8xl text-yellow-900">
      Hello world!
    </h1>
    </div>
  )
}

export default App
