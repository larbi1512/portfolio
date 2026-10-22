import React from 'react'

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
        <section id={id} className="scroll-mt-10 pt-16 first:pt-0">
            <h2 className="mb-6 text-lg font-semibold tracking-tight">{title}</h2>
            {children}
        </section>
    )
}

export const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h3 className="mb-4 mt-10 text-[0.95rem] font-semibold">{children}</h3>
)

export default Section
