import React from 'react'
import { DiCelluloid } from "react-icons/di";
import { IoIosSearch } from "react-icons/io";



const Header = () => {
  return (
    <div className='navsestcolor'>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <DiCelluloid className='hedericon'/>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a  class="mr-5 setmenue " href='/'>About us</a>
      <a  class="mr-5 setmenue " href='/'>Portfiole</a>
      <a  class="mr-5 setmenue " href='/'>Second Link</a>
    </nav>
    <div className='setser'>
    <input type='text' placeholder='Search'/>
    <IoIosSearch className='seticonser'/>
    </div>
  </div>
</header>
    </div>
  )
}

export default Header