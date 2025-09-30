import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import JoinUs from './pages/JoinUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='bg-red-300'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/joinus' element={<JoinUs/>}/>
      </Routes>

      <Footer/>

    </div>
  )
}

export default App