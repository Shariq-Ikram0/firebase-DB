import React from 'react'
import Login from './Screens/Login'
import {  Route, Routes } from 'react-router-dom'
import Signup from './Screens/Signup'
import Home from './Screens/Home'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home/>} />
        <Route path="/signup" element={<Signup/>}/>
      
      </Routes>
    </>
  )
}

export default App