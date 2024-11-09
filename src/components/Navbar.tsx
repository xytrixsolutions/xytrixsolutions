import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between item-center'>
            <div className='text-3xl font-bold pl-10'><span>IT</span> Skill's</div>
            <ul className='md:flex text-2xl'>
                <li className='menuLink'><a href="/aboutme">About me</a></li>
            </ul>        
        </div>
    </div>
  )
}

export default Navbar

