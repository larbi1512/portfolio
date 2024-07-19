import React from 'react'
import ExperienceSingle from './ExperienceSingle'
import { experience} from './Data'

const Experience = () => {
  return (
      <div className="flex  flex-col bg-main justify-center items-center px-[20px] md:px-[100px] ">
            <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[32px]">Experience</h1>
        <div className="flex flex-col gap-4 bg-main justify-evenly ">
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
