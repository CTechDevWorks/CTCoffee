import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import Shop from './components/Shop'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App