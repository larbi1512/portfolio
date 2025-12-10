import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image';
import persopic from '../../../public/images/persopic.svg'

import '@/styles/hero.css'
import Link from 'next/link'



const HeroSections = () => {
  return (
    <section className="px-[20px] lg:px-[50px] w-full mb-10 pt-36 bg-main flex flex-col-reverse gap-[300px] md:gap-0 md:flex-row relative justify-between md:justify-center items-center md:items-start " >

      <Spotlight className="-top-[3%] left-[30%] h-screen" fill="white" />
      <div className="flex flex-col gap-4 w-full lg:w-[70%] justify-center items-center md:items-start">
        <h1 className="text-white-50 text-[24px] md:text-[36px] font-fira text-center md:text-left">Hello, I AM</h1>
        <p className="font-fira text-[28px] md:text-[48px] text-main_purple text-center md:text-left">Larbi SAIDCHIKH</p>
        <p className='mb-4 font-fira text-[20px] md:text-[28px] text-white-50 text-center md:text-left'>
          &lt;h1&gt; I am a <span className="text-main_purple">Machine Learning Engineer</span>, <span className="text-main_purple">AI Researcher</span>, and <span className='text-main_purple'>Full-Stack Developer</span> constantly seeking out innovative solutions to my everyday problems.&lt;h1&gt;
        </p>
        <Link href='/Larbi_SAIDCHIKH_resume_.pdf' download >
          <button className='text-center pt-4 pb-4 px-[20px] md:px-[25px] md:py-[15px] text-white-50 bg-main_purple font-fira hover:bg-main_purple_dark rounded-2xl'>
            Download Resume
          </button>
        </Link>
      </div>
      <div className='relative w-full lg:w-[30%]'>
        <Image src={persopic} alt="persopic" className=' w-[200px] h-[200px] absolute lg:left-[40%] left-[25%]' />
      </div>
    </section>

  )
}

export default HeroSections
