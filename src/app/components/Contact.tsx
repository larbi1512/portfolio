import React from 'react'
import styles from '../../styles/contact.module.css';
import Link from 'next/link';
import { contacts } from './Data';
import Image from 'next/image';
const Contact = () => {
  return (
      <div className={`${styles.background} flex flex-col justify-center items-start text-center md:text-left gap-[70px] md:gap-[150px] pt-[40px]`}>
          <h1 className="font-fira text-white-50 text-[24px] md:text-[36px] px-[20px] md:px-[40px]">Together, we can turn aspirations into achievements.
              Reach out and let us start.</h1>
            <div className="flex flex-row gap-4 justify-start px-[20px] ">
                {contacts.map((contact, index) => (
                    <div key={index} className="flex flex-row gap-12 ">
                        <Link href={contact.link} target='_blank' rel='noopener noreferrer' >
                            <div className={`bg-main_light rounded-lg py-1 md:py-2 px-3 md:px-5 ${index === 0 ? 'hover:bg-gray-900' : ''} ${index === 1 ? 'hover:bg-blue-500' : ''} ${index === 2 ? 'hover:bg-blue-300' : ''} ${index === 3 ? 'hover:bg-pink-500' : ''} ${index === 4 ? 'hover:bg-blue-600' : ''} ${index === 5 ? 'hover:bg-red-500' : ''}`}>
                                <Image src={contact.icon} alt='contact' className="w-8 h-8" />
                            </div>                        
                            </Link>
                    </div>
                ))}
            </div>
      <div className='w-full bottom-2 flex flex-row justify-evenly md:justify-between px-[20px] md:px-[70px]'>
              <p className="text-[12px] md:text-[20px] font-fira ">Larbi SAIDCHIKH© 2024.</p>
              <p className="text-[12px] md:text-[20px] font-fira ">made with &lt;3 by larbi</p>
      </div>
    </div>
  ) 
}

export default Contact
