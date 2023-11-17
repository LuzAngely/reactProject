import React from 'react'
import logo from './../assets/logo.png'
import { GiColombia } from "react-icons/gi";

function Header() {

  const handleButtonClick = () => {
    window.location.href = "https://api-colombia.com/";
  };
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} alt="Logo de resevas indígenas de Colombia" className="w-[180px]"/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>Acerca de</li>
            <li className='hover:font-bold cursor-pointer'>Contactanos</li>
        </ul>
        <button className='bg-gray-300 rounded-full hover:font-bold flex items-center p-2' onClick={handleButtonClick}>
        <GiColombia className='ml-2'/> API Colombia </button>
    </div>
  )
}

export default Header