import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import {Photos} from './pages/photos'
import { Cart } from './pages/Cart'

function App() {
  return (
    <div className="container mx-auto min-h-screen relative font-montserrat bg-[#f5f5f5] max-w-[768px]">
      <Header/>

      <Routes >
        <Route exact path="/" element={<Photos/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>

    </div>
  )
}

export default App
