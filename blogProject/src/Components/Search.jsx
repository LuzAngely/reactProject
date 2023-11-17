import React from 'react'
import indigenas from './../assets/Indigenas.jpg'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className='flex justify-center mt-7 flex-col px-[70] md:px-[150px]'>

      <img src={indigenas} className='rounded-2xl' alt="Indigenas de Colombia"/>

      <div className='bg-white shadow-lg p-4 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input type="text" placeholder='Search' className='outline-none ml-2'/>
      </div>

    </div>
  )
}

export default Search