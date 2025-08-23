import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Skills from './Components/Skills/Skills'
import Certificate from './Components/Certifications/Certificate'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="*"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/services"element={<Services/>}/>
        <Route path="/skills"element={<Skills/>}/>
        <Route path="/certifications"element={<Certificate/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App