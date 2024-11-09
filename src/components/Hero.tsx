import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <div className='flex justify-center pt-10'>
        <h1 className='font-bold text-4xl text-center text-sky-400'>Web Development Languages</h1>
      </div>
      <div className='pt-10'>
        <h2 className='font-bold text-3xl text-gray-400'>Front-End :</h2>
        <ul className='pt-5 text-2xl pl-10'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
        </ul>
      </div>

      <div className='pt-10'>
        <h2 className='font-bold text-3xl text-gray-400'>Back-End :</h2>
        <ul className='pt-5 text-2xl pl-10'>
            <li>Python</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Ruby</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
