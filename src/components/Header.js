import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    
     const [toggle,setToggle] =useState(false)
  return (
    
    <header className='flex justify-between px-5 py-2 bg-primary'>
       
        <a className="font-bold text-yellow-200" href="https://www.canva.com/design/DAGgXBz0aeQ/Sb-RlLfP7emMziELN7czow/view?utm_content=DAGgXBz0aeQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hafcd7b8d76">A.Ragul Prasanth</a>
        <nav className='hidden md:block'>
            <ul className='flex text-white '>
                <li className='hover:text-[#9acd32]'><a href="/">Home</a></li>
                <li className='hover:text-[#9acd32]'><a href="#about">About</a></li>
                <li className='hover:text-[#9acd32]'><a href="#projects">Projects</a></li>
                <li className='hover:text-[#9acd32]'><a href="#resume">Resume</a></li>
                <li className='hover:text-[#9acd32]'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        {toggle && <nav className='block md:hidden '>
            <ul onClick={()=> setToggle(!toggle)} className='flex-col text-white mobile-nav'>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button className='block md:hidden' onClick={()=> setToggle(!toggle)}
            ><Bars3Icon className='text-white h-5 '></Bars3Icon>
        </button>
    </header>
  )
}

export default Header
