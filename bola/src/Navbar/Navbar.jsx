import React, { useState } from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'


const Navbar =() => {
    const [mobile, setMobile]=useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
    return(
        <div className='navdad'>
           <div className='nav'>
            <div className={mobile ? 'mobile-link': 'nav-four'}>
           <div className='nav2_1'>
                <Link to='/payme'onClick={handleClose}style={{color:'#25A4AD', fontSize:'22px', lineHeight:'25.78px', fontFamily:'Gilroy-ExtraBold'}}>Payme</Link>
                <Link to='/'onClick={handleClose}>Home</Link>
                <Link to='/about'onClick={handleClose}>About</Link>
                <Link to='/testimonials'onClick={handleClose}>Testimonials</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className='nav2_2'>
                <Link to='/signIn'onClick={handleClose}>Sign in</Link>
                <Link to='/signUp'onClick={handleClose}><button style={{width:'100px', height:'35px', color:'#25A4AD', backgroundColor:'#FFFFFF',border:'1px solid #25A4AD', fontFamily: 'Gilroy-Medium', fontSize: '18px', lineHeight: '21.09px'}} >Sign up</button></Link>
            </div>
            </div>
            <div className='Menu'>
                        {mobile? < FaTimes className='times'onClick={handleMobile}/>
                    :
                    <FaBars className='bars'onClick={handleMobile}/> 
                    }
                    </div>
           </div>
        </div>
    )
}

export default Navbar;