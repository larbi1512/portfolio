import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Image from 'next/image';
import persopic from '../../../public/images/persopic.svg'
import ball from '../../../public/images/ball.svg'
import ellipse from '../../../public/images/Ellipse.svg'
import elipse from '../../../public/images/Elipse.svg'
import '@/styles/hero.css'

const skills = [
  'FRONT-END DEV', 'BACK-END DEV', 'UI/UX DESIGN', 'GRAPHIC DESIGN',
  'DATA MINING', 'MACHINE LEARNING', 'DEEP LEARNING', 'MOBILE DEVELOPMENT'
];

const HeroSections = () => {
  return (
    <section className="px-[20px] lg:px-[50px] min-w-screen pb-20 pt-36 bg-main flex flex-col relative " >
      <div className=' flex-row-reverse gap-[400px] md:gap-0 md:flex-row relative justify-between md:justify-center items-center md:items-start'>
          <Spotlight className="-top-[3%] left-[30%] h-screen" fill="white" />
        <div className="w-full  flex-col gap-8 lg:w-[70%]">
        <h1 className="text-white-50 text-[24px] md:text-[36px] font-fira text-center md:text-left">Hello, I'M</h1>
        <p className="font-fira text-[32px] md:text-[64px] text-main_purple text-center md:text-left">Larbi SAIDCHIKH</p>
        <p className='mb-4 font-fira text-[24px] md:text-[36px] text-white-50 text-center md:text-left'> I am a <span className="text-main_purple">front-end developer</span>, <span className="text-main_purple">data scientist </span>
          and <span className='text-main_purple'>UX/UI designer</span> constantly seeking out innovative solutions to my everyday problems.</p>
        <a href='../../../public/Larbi_SAIDCHIKH_CV_.pdf' download className='pt-4 md:px-[25px] md:py-[15px] text-white-50 bg-main_purple font-fira hover:bg-main_purple_dark rounded-2xl'>Download Resume</a>
        </div>
        <div className='relative w-full lg:w-[30%]'>
        <Image src={elipse} alt="ellipse" className='w-[300px] md:w-[500px] h-[300px] md:h-[500px] absolute left-[10%] md:left-0 top-[40%] animate-rotate-ellipse' />
        <Image src={persopic} alt="persopic"  className=' w-[200px] h-[200px] absolute left-[40%]' />
          </div>
      </div>
      <div className="w-full mt-8 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-scroll">
          {skills.concat(skills).map((skill, index) => (
            <span key={index} className="inline-block px-4 text-white-50 font-fira text-[20px]">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
    
  )
}

export default HeroSections
