import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
//AiFillBug
const Navbar = () => {

    const links=[
        {lable:'Dashboard',href:'/'},
        {lable:'Issues',href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-20 items-center text-2xl'>
        <Link href="/" ><AiFillBug /></Link>
        <ul className='flex space-x-6'>
            {links.map((link,index)=>(<Link href={link.href} key={index} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.lable}</Link>))}
            
          
            
        </ul>
    </nav>
  )
}

export default Navbar