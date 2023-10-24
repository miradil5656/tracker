'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import classNames from 'classnames'
const Navbar = () => {

    const currentPath = usePathname()
   

    const links=[
        {lable:'Dashboard',href:'/'},
        {lable:'Issues',href:'/issues'}
    ]

    
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-20 items-center text-2xl'>
        <Link href="/" ><AiFillBug /></Link>
        <ul className='flex space-x-10'>
            {links.map((link,index)=>(<Link href={link.href} key={index} className={
                classNames({
                    'text-zinc-900 font-bold': link.href === currentPath,
                    'text-zinc-500' : link.href !== currentPath,
                    'hover:text-zinc-800 transition-colors' : true
                })
            }>{link.lable}</Link>))}
            
          
            
        </ul>
    </nav>
  )
}

export default Navbar