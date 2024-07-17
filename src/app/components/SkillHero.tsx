import React from 'react';
import '@/styles/hero.css';

const skills = [
    'FRONT-END DEV', 'BACK-END DEV', 'UI/UX DESIGN', 'GRAPHIC DESIGN',
    'DATA MINING', 'MACHINE LEARNING', 'DEEP LEARNING', 'MOBILE DEVELOPMENT'
];

function SkillHero() {
    return (
        <div className="w-full overflow-hidden bg-main_purple_dark py-[5px] md:py-[20px]">
            <div className="animate-scroll">
                {skills.concat(skills).map((skill, index) => (
                    <span key={index} className="px-8 text-white-50 font-fira text-[16px] md:text-[24px]">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillHero;
