import React from 'react'
import logo from './../assets/logo.png'

function Header() {
  return (
    <div className="flex">
        <img src={logo} alt="Logo de resevas indígenas de Colombia" className="w-[180px]"/>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <button>API Colombia</button>
    </div>
  )
}

export default Header