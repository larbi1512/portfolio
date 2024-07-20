import React from 'react'
import ExperienceSingle from './ExperienceSingle'
import { experience} from './Data'

const Experience = () => {
  return (
      <div className="flex  flex-col bg-main px-[20px] md:px-[80px] ">
            <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[24px] md:text-[32px] mb-2">Experience</h1>
        <div className="flex flex-col gap-4 bg-main  ">
            {
                  experience.map((project, index) => (
                        <ExperienceSingle key={index} {...project} />
                    ))
            }
      
    </div>
    </div>
  )
}

export default Experience
