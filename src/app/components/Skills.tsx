import React from 'react'
import { skillsCategories } from './Data';

const Skills = () => {
  return (
    <div className="flex flex-col bg-main px-[20px] md:px-[80px] py-[20px]">
      <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[24px] md:text-[32px] mb-8">Skills & Languages</h1>

      <div className="flex flex-col gap-8">
        {Object.entries(skillsCategories).map(([category, skills], index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2 className="text-white-50 font-fira text-[18px] md:text-[24px] font-semibold border-b-2 border-main_purple pb-2">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-white-50 font-fira text-[12px] md:text-[16px] px-4 py-2 border border-white-50 rounded-lg hover:border-main_purple hover:text-main_purple transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
