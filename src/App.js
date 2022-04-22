import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' component={Home}></Route>
          <Route path='/reports' component={Reports}></Route>
          <Route path='/products' component={Products}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
