import React from 'react'
import {Routes, Route} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Navbar from "../Navbar/Navbar";
import Payme from './Payme';
import Testimonials from './Testimonials';
import Home from './Home';



const Special =() => {
    return(
        <div>
            <div>
                <Navbar/>
                <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='payme' element={<Payme/>}/>
                <Route path='testimonials' element={<Testimonials/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Special;