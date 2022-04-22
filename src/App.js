import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Dashboard from './pages/Dashboard'
import Calendar from './pages/Calendar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' component={Home}></Route>
          <Route path='/reports' component={Reports}></Route>
          <Route path='/calendar' component={Calendar}></Route>
          <Route path='/products' component={Dashboard}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
