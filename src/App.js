import React from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Read from './components/Read'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Update from './components/Update'

const App = () => {
 
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
   </Router>
    </>
    
  )
}

export default App