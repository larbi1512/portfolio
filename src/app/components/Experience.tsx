import React from 'react'
import { earlierExperience, experience } from './Data'
import Section, { SubHeading } from './ui/Section'

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      {/* Timeline: a thin line on the left with one dot per role */}
      <ol className="ml-1 border-l border-hairline">
        {experience.map((job) => {
          const current = job.date.includes('present')
          return (
            <li key={`${job.org}-${job.role}`} className="relative pb-10 pl-7 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-[0.5rem] h-[9px] w-[9px] rounded-full border ${
                  current ? 'border-ink bg-ink' : 'border-faint bg-paper'
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">{job.role}</h3>
                <span className="text-sm tabular-nums text-faint">{job.date}</span>
              </div>
              <p className="text-[0.93rem] text-muted">
                {job.org}
                {job.place && <span className="text-faint"> · {job.place}</span>}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-[0.95rem] marker:text-rule">
                {job.points.map((point, index) => (
                  <li key={index} className="pl-1">{point}</li>
                ))}
              </ul>
            </li>
          )
        })}
      </ol>

      <SubHeading>Earlier</SubHeading>
      <ul className="space-y-2">
        {earlierExperience.map((job) => (
          <li key={job.org} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
            <span>
              {job.role} <span className="text-muted">· {job.org}</span>
            </span>
            <span className="shrink-0 text-sm tabular-nums text-faint">{job.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default Experience
