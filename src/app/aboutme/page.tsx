import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <div className='container pt-8'>
        <div className='flex justify-between item-center'>
            <div className='text-3xl font-bold pl-10'><span>IT</span> Skill's</div>
            <ul className='md:flex text-2xl'>
                <li className='menuLink'><link href="/">Home</link></li>
            </ul>        
        </div>
      </div>
      <div id='about' className='container pt-32'>
      <h2 className='text-4xl md:text-5xl'>About me</h2>
      <p className='text-gray-500 pt-4'>
      Hi, I'm Ali Khan, an aspiring DevOps enthusiast with a passion for optimizing software development and delivery processes. With a foundational background in cloud technologies, programming, and infrastructure management, I'm eager to dive into real-world projects and contribute to dynamic DevOps environments. My skills span across Linux administration, front-end development, and cloud services like AWS. I'm a quick learner, committed to continuous improvement, and excited about collaborating with teams to deliver efficient and scalable solutions. Let's connect and build something amazing together!
      </p>
    </div>
    <div className='space-y-8 pt-20'>
            <div className='flex gap-3 items-center'>
                <a href="mailto:alikhan.dec17@gmail.com" data-aos="zoom-in-up"><AiOutlineMail size={50} /></a>
                <a href="https://github.com/AliKhan17dec" target='_blank' data-aos="zoom-in-up"><FaGithub size={40}/></a>
                <a href="https://www.linkedin.com/in/ali-khan-8694162b7/" target='_blank' data-aos="zoom-in-up"><CiLinkedin size={50}/></a>
            </div>
        </div>

    </div>
  )
}

export default page
