import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Search from './components/Search'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}
export default App
