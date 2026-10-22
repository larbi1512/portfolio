import React from 'react'
import { about, interests, news, profile } from './Data'
import Section, { SubHeading } from './ui/Section'

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-[1rem] leading-7">
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Research interests">
        {interests.map((interest) => (
          <li key={interest} className="rounded-full border border-hairline px-3 py-0.5 text-[0.8rem] text-muted">
            {interest}
          </li>
        ))}
      </ul>
      <a
        href={profile.cv}
        download="Larbi_Said_Chikh_CV.pdf"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-85"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
        </svg>
        Download CV
      </a>

      <SubHeading>News</SubHeading>
      <ul className="space-y-3">
        {news.map((item, index) => (
          <li key={index} className="flex gap-4">
            <span className="w-[4.5rem] shrink-0 pt-px text-sm tabular-nums text-faint">{item.date}</span>
            <span className="text-[0.95rem]">{item.text}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default About
