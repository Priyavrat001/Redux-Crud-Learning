import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
 
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Form/>}/>
    </Routes>
   </Router>
    </>
    
  )
}

export default App