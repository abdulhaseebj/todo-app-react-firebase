import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from '../../screen/home/home'
import ResponsiveAppBar from '../../components/Navbar'
import Login from '../../screen/login/Login'
import Signup from '../../screen/signup/Signup'
import ProtectedRoutes from './ProtectedRoutes'

function Routerconfig() {
  return (
    <BrowserRouter>
    <ResponsiveAppBar/>
    <Routes>
        <Route path='/' element={<ProtectedRoutes component={<Home/>} />} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfig