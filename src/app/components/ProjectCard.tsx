import React from 'react'
import Link from 'next/link'

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    year: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, year }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="w-full flex flex-row justify-between border-b-2 border-b-white-50 py-4 hover:border-main_purple transition-colors gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <h1 className="font-opensans text-[16px] md:text-[24px] text-white-50 font-semibold">{title}</h1>
                    <p className="font-fira text-white-50 opacity-80 text-[12px] md:text-[16px]">{description}</p>
                </div>
                <span className="font-fira text-white-50 text-[14px] md:text-[20px] font-semibold whitespace-nowrap">{year}</span>
            </div>
        </a>
    );
}

export default ProjectCard
