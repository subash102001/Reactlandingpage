import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Hello from './Figma/Hello'
import Homes from './Homes'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/hello' element={<Hello/>}/>
          <Route path='/home' element={<Homes/>}/>
         
        </Routes>
      </div>

    </Router>
   
  )
}

export default App
