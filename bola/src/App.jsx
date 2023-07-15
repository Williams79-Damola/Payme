import './App.css'
import React from 'react'
import Special from './Pages/Special' 
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path='/signIn' element={<Signin/>}/>
               <Route path='/signUp' element={<Signup/>}/>
               <Route path='/*' element={<Special/>}/>
            </Routes>
         </BrowserRouter>   
      </div>
  )
}

export default App
