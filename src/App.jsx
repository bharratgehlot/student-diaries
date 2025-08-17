import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Problematic from './pages/problematic'
import AboutUs from './pages/AboutUs'

function Home() {


  return (
    <>
      <h1>Student Diaries</h1>
      <p className="read-the-docs">
        Student Diaries is log and note taking App. Initial Stage <b>Version: 0.0.0 </b>
      </p>

      <nav>
        <Link to="/problematic">Access Problematic Early</Link>
        <Link to="/about">About Us</Link>
        </nav>

    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problematic" element={<Problematic />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}



export default App
