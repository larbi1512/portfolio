import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image';
import persopic from '../../../public/images/persopic.svg'
import elipse from '../../../public/images/elipse.svg'
import '@/styles/hero.css'
import Link from 'next/link'



const HeroSections = () => {
  return (
    <section className="px-[20px] lg:px-[50px] w-full pb-20 pt-36 bg-main flex flex-col-reverse gap-[300px] md:gap-0 md:flex-row relative justify-between md:justify-center items-center md:items-start " >
      
          <Spotlight className="-top-[3%] left-[30%] h-screen" fill="white" />
      <div className="flex flex-col gap-4 w-full lg:w-[70%] justify-center items-center md:items-start">
        <h1 className="text-white-50 text-[24px] md:text-[36px] font-fira text-center md:text-left">Hello, I AM</h1>
        <p className="font-fira text-[28px] md:text-[48px] text-main_purple text-center md:text-left">Larbi SAIDCHIKH</p>
        <p className='mb-4 font-fira text-[20px] md:text-[28px] text-white-50 text-center md:text-left'>
          &lt;h1&gt; I am a <span className="text-main_purple">front-end developer</span>, <span className="text-main_purple">data scientist</span>, and <span className='text-main_purple'>UX/UI designer</span> constantly seeking out innovative solutions to my everyday problems.&lt;h1&gt;
        </p>
        <Link href='/Larbi_SAIDCHIKH_CV_.pdf' download >
          <button className='text-center pt-4 pb-4 px-[20px] md:px-[25px] md:py-[15px] text-white-50 bg-main_purple font-fira hover:bg-main_purple_dark rounded-2xl'>
            Download Resume
          </button>
        </Link>
      </div>
        <div className='relative w-full lg:w-[30%]'>
        <Image src={elipse} alt="ellipse" className='w-[300px] md:w-[500px] h-[300px] md:h-[500px] absolute left-[10%] md:left-0 top-[40%] animate-rotate-ellipse' />
        <Image src={persopic} alt="persopic"  className=' w-[200px] h-[200px] absolute left-[40%]' />
          </div>
    </section>
    
  )
}

export default HeroSections
