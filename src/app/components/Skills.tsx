import React from 'react'
import { skills } from './Data';

const Skills = () => {
  return (
    <div className="flex  items-center bg-main px-[20px] md:px-[75px] py-[20px] ">
      <div className=' flex flex-wrap px-[10px] py-[20px] md:py-[50px]  items-center justify-center md:justify-normal gap-10 bg-main_purple_light rounded-3xl'>
              <h1 className="text-center md:text-left top-1 text-main_purple_dark text-[24pX] md:text-[32px] font-fira px-0 md:px-[40px]">Skills & Languages</h1>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                  {skills.map((skill, index) => (
                      <div key={index} className="bg-main_purple_darker text-white font-fira text-[12px] md:text-[20px] px-4 py-2 rounded-xl">
                          {skill}
                      </div>
                  ))}
              </div>
      </div>
    </div>
  )
}

export default Skills
