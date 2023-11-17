import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import blogDetails from './Pages/blogDetails'


function App() {

  return (
    <>
    <div className='p-[20px]'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/blogDetails/:id' element={blogDetails}></Route>      
    </Routes>
    </div>
    </>
  )
}

export default App
