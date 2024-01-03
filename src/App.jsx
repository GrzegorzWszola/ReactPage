import  React from 'react'
import './App.css'

import { HPage, CPage, PPage } from './Pages/index'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HPage/>}/>
        <Route path='/Projects' element={<PPage/>}/>
        <Route path='/Contacts' element={<CPage/>}/>
      </Routes>
    </>  
  )
}

export default App
