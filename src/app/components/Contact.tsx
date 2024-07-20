import React from 'react'
import styles from '../../styles/contact.module.css';
import Link from 'next/link';
import { contacts } from './Data';
import Image from 'next/image';
const Contact = () => {
  return (
      <div className={`${styles.background} flex flex-col justify-center items-start text-center md:text-left gap-[150px]`}>
          <h1 className="font-fira text-white-50 text-[36px] px-[40px]">Together, we can turn aspirations into achievements.
              Reach out and let's start.</h1>
            <div className="flex flex-row gap-4 justify-start">
                {contacts.map((contact, index) => (
                    <div key={index} className="flex flex-row gap-8">
                        <Link href={contact.link} target='_blank' rel='noopener noreferrer'>
                        <Image src={contact.icon} alt='contact' className="w-10 h-10 bg-main_light px-1 rounded-lg"/>
                        </Link>
                    </div>
                ))}
            </div>
      <div className='w-full bottom-0 flex flex-row justify-between px-[70px]'>
              <p>Larbi SAIDCHIKH© 2024.</p>
              <p>made with &lt;3 by larbi</p>
      </div>
    </div>
  ) 
}

export default Contact
