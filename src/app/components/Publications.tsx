import React from 'react'
import { publications } from './Data'
import Link from 'next/link'

const Publications = () => {
    return (
        <div className='flex mt-4 mb-4 flex-col bg-main justify-center items-center md:items-start px-[20px] md:px-[80px]'>
            <h1 className="text-main_purple_light text-center font-fira md:text-left pt-[30px] px-[50px] text-[24px] md:text-[32px] mb-2">Publications</h1>
            <div className="flex flex-col gap-4 bg-main w-full">
                {publications.map((pub, index) => (
                    <a key={index} href={pub.Link} target="_blank" rel="noopener noreferrer">
                        <div className="w-full flex flex-row justify-between border-b-2 border-b-white-50 py-4 hover:border-main_purple transition-colors gap-4">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="font-opensans text-[16px] md:text-[24px] text-white-50 font-semibold">{pub.Title}</h1>
                                <p className="font-fira text-white-50 opacity-80 text-[12px] md:text-[16px]">{pub.Authors}</p>
                                <p className="font-fira text-white-50 opacity-60 text-[10px] md:text-[14px] italic">{pub.Conference}</p>
                            </div>
                            <span className="font-fira text-white-50 text-[14px] md:text-[20px] font-semibold whitespace-nowrap">{pub.Year}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Publications
