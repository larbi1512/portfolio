import React from 'react'
import projects from './Data';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className=''>
      <div className="flex flex-wrap gap-8 bg-main justify-evenly px-[20px] md:px-[100px]">

          {projects.map((project, index) => (
              <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 ${index % 4 === 2 || index % 4 === 3 ? 'mt-8' : ''}`}>
                <ProjectCard {...project} image={project.image.src} />
              </div>
          ))}
      </div>
      </div>
  )
}

export default Projects
