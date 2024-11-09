import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between item-center'>
            <div className='text-3xl font-bold pl-10'><span>IT</span> Skills</div>
            <ul className='md:flex text-2xl'>
            <li className='menuLink'>
                  <Link href="/aboutme">About me</Link>
            </li>

            </ul>        
        </div>
    </div>
  )
}

export default Navbar

