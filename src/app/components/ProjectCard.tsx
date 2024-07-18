import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description, link}) => {
  return (
      <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="w-full flex flex-col rounded-3xl bg-main_purple_light gap-2 px-[25px] py-[10px]">
              <Image src={image} alt={title} width={500} height={300} className="rounded-2xl " />
              <h1 className="font-opensans text-[24px] font-bold text-main">{title}</h1>
              <p className="font-fira text-[16px] text-main_light">{description}</p>
          </div>
      </a>
  );
}

export default ProjectCard
