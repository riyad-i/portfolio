// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import Projects from './pages/Projects'
import Weather from './pages/Weather'
import Main from './pages/Main'


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path='*' element={<Navigate to='/'/>}/> 
      </Routes>
    </>
  )
}

export default App
