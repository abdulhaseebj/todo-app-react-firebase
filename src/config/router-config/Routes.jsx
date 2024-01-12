import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Signup from '../../screen/signup/Signup'
import Login from '../../screen/login/Login'
import Home from '../../screen/home/Home'

function Routers() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Signup/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='home' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers