import React from 'react'

const ExperienceSingle = ({position, company, date}) => {
  return (
    <div className="w-full flex felx-row justify-between border-b-2 border-b-white-50 items-center">
      <h1 className="font-opensans text-center text-[24px] text-white-50">{position}</h1>
      <div className="flex flex-col gap-4">
              <h1 className="font-opensans text-center text-[24px] text-white-50">{company}</h1>
        <p className='font-fira text-white-50 text-[24px] text-center'>{date}</p>
      </div>
    </div>
  )
}

export default ExperienceSingle
