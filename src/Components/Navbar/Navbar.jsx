import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/color-logo.png'






const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', ()=>{
        window.scrollY > 600 ? setSticky(true) : setSticky(false);
      })
  },[])

  // {`container ${sticky ? 'dark-nav' : ''}`}
  return (
     <nav className = {`container ${sticky ? 'dark-nav' : ''}`}  >
        
        <ul>
         
            <li><button className='btn-nav'>رابطہ</button></li>
            <li>ویڈیوز</li>
            <li>بانیان</li>
            <li>تعارف</li>
            <li>سرورق</li>
            
         </ul>
        <img src={logo} alt='logo' className='logo'/>
        
    </nav>
  )
}

export default Navbar