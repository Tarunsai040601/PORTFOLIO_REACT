import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App