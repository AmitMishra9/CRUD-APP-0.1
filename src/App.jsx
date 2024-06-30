import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom' 
import Add from './components/Add'
import Edite from './components/Edite'
function App() {

  return (
    <>
        <Router>
           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/create" element={<Add/>}/>
              <Route path="/edit" element={<Edite/>}/>

              </Routes>
        </Router>
    </>
  )
}

export default App
