import React from 'react'
import './App.css'
import Navbar from  './Common/Navbar/Navbar'
 import { Routes, Route } from 'react-router'
import Homebar from './Components/Homebar'

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homebar/>} />
    </Routes>&nbsp;
   
      
    </>
  )
}

export default App
