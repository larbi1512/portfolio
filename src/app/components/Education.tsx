import React from 'react'
import { certifications, community, education } from './Data'
import Section, { SubHeading } from './ui/Section'

const rowClass = 'flex items-baseline justify-between gap-4 text-[0.95rem]'

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className="space-y-9">
                {education.map((item) => (
                    <article key={item.degree}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                            <h3 className="font-semibold">{item.degree}</h3>
                            <span className="text-sm tabular-nums text-faint">{item.date}</span>
                        </div>
                        <p className="text-[0.93rem] text-muted">
                            {item.school} <span className="text-faint">· {item.place}</span>
                        </p>
                        {item.details.map((detail, index) => (
                            <p key={index} className="mt-2 text-[0.95rem]">{detail}</p>
                        ))}
                        {item.coursework && (
                            <div className="mt-4 rounded-lg border border-hairline p-4">
                                <p className="mb-2.5 text-sm font-medium">Selected coursework</p>
                                <dl className="space-y-2 text-[0.9rem]">
                                    {item.coursework.map(({ area, modules }) => (
                                        <div key={area} className="sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                                            <dt className="text-faint">{area}</dt>
                                            <dd className="text-muted">{modules.join(', ')}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </article>
                ))}
            </div>

            <SubHeading>Certifications</SubHeading>
            <ul className="space-y-2">
                {certifications.map((cert) => (
                    <li key={cert.name} className={rowClass}>
                        <span>
                            {cert.name} <span className="text-muted">· {cert.issuer}</span>
                        </span>
                        <span className="shrink-0 text-sm tabular-nums text-faint">{cert.date}</span>
                    </li>
                ))}
            </ul>

            <SubHeading>Community</SubHeading>
            <ul className="space-y-2">
                {community.map((item) => (
                    <li key={item.event} className={rowClass}>
                        <span>
                            {item.role} <span className="text-muted">· {item.event}</span>
                        </span>
                        <span className="shrink-0 text-sm tabular-nums text-faint">{item.date}</span>
                    </li>
                ))}
            </ul>
        </Section>
    )
}

export default Education
