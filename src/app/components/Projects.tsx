import React from 'react'
 import { projects, skills } from './Data';
import ProjectCard from './ProjectCard';
import GithubIcon from '../../../public/icons/github.svg'
import Image from 'next/image'
import Link from 'next/link';

const Projects = () => {
  return (
      <div className='flex mt-4  flex-col bg-main justify-center items-center md:items-start px-[20px] md:px-[100px] gap-4'>
          <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[24px] md:text-[32px]">Projects</h1>
      <div className="flex flex-wrap gap-8 bg-main justify-evenly ">

          {projects.map((project, index) => (
              <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 ${index % 4 === 2 || index % 4 === 3 ? 'lg:mt-8' : ''}`}>
                <ProjectCard {...project} image={project.image.src} />
              </div>
          ))}
      </div>
              <Link href="https://github.com/larbi1512"
                  target="_blank"
              rel="noopener noreferrer" className="bg-main_purple_dark rounded-2xl px-[2%] py-[1%] flex flex-row font-fira font-semibold text-[20px] mt-2 mb-8 gap-4 items-center hover:bg-main_purple_darker">
              <Image src={GithubIcon} alt="GitHub" className="w-10 h-10 " />
              Check more projects
          </Link>
      </div>
  )
}

export default Projects
