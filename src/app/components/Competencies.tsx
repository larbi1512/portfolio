import React from 'react'
import { competencies, languages } from './Data'
import Section, { SubHeading } from './ui/Section'

// Non-breaking space keeps each separator dot on the same line as the item before it
const joinItems = (items: string[]) => items.join(' · ')

const Competencies = () => {
  return (
    <Section id="competencies" title="Core Competencies">
      <div className="space-y-6">
        {competencies.map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-1 text-[0.93rem] leading-relaxed text-muted">{joinItems(items)}</p>
          </div>
        ))}
      </div>

      <SubHeading>Languages</SubHeading>
      <p className="text-[0.93rem] text-muted">{joinItems(languages)}</p>
    </Section>
  )
}

export default Competencies
