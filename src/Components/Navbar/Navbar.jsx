import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/color-logo.png'
import flogo from '../../assets/IqraMonogram.png'
import {Link,NavLink} from 'react-router-dom'





const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 600 ? setSticky(true) : setSticky(false);
      })
  },[])

  // {`container ${sticky ? 'dark-nav' : ''}`}s
  return (
     <nav className = {`container ${sticky ? 'dark-nav' : ''}`}  >
        
        <ul>
         
            <li><button className='btn-nav'>رابطہ</button></li>
           
            <li><NavLink to="videos">ویڈیوز</NavLink></li>
            <li><NavLink to="foundertrustee">بانیان</NavLink></li>
            <li><NavLink to="introduction">تعارف</NavLink></li>
            <li><NavLink to="/">سرورق</NavLink></li>
            
         </ul>
        <img  src={flogo} alt='logo' className='logo'/>
        
    </nav>
  )
}

export default Navbar