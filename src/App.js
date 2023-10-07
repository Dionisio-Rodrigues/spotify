import React from 'react'
import Faq from './Faq'
import Login from './Login'
import NavBar from './NavBar'
import Registro from './Registro'
import Footer from './Footer'
import {Routes, Route} from 'react-router-dom'
import MenuContainer from './MenuContainer'

export default function App() {
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<MenuContainer/>}></Route>
        <Route path='/register' element={<Registro/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
    </Routes>
    
    <Footer></Footer>
    </>
  )
}
