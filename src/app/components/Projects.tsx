import React from 'react'
import { projects, skills } from './Data';
import ProjectCard from './ProjectCard';
import GithubIcon from '../../../public/icons/github.svg'
import Image from 'next/image'
import Link from 'next/link';

const Projects = () => {
    return (
        <div className='flex mt-4 flex-col bg-main justify-center items-center md:items-start px-[20px] md:px-[80px]'>
            <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[24px] md:text-[32px] mb-2">Projects</h1>
            <div className="flex flex-col gap-4 bg-main w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <Link href="https://github.com/larbi1512"
                target="_blank"
                rel="noopener noreferrer" className="bg-main_purple_dark rounded-2xl px-[2%] py-[1%] flex flex-row font-fira font-semibold text-[20px] mt-6 mb-8 gap-4 items-center hover:bg-main_purple_darker transition-colors">
                <Image src={GithubIcon} alt="GitHub" className="w-10 h-10 " />
                Check more projects
            </Link>
        </div>
    )
}

export default Projects
