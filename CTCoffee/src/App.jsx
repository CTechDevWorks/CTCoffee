import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Navs from './Navs'

const App = () => {
  return (
    <div>
      <Router>
        <Navs />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App