import React from 'react'
import { profile, publications } from './Data'
import Section from './ui/Section'

// Bold my name in the author list, as is usual on academic pages
const Authors: React.FC<{ authors: string }> = ({ authors }) => {
    const parts = authors.split(profile.authorName)
    return (
        <p className="mt-1 text-[0.93rem] text-muted">
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    {index > 0 && <strong className="font-semibold text-ink">{profile.authorName}</strong>}
                    {part}
                </React.Fragment>
            ))}
        </p>
    )
}

const Publications = () => {
    return (
        <Section id="publications" title="Publications">
            <div className="space-y-9">
                {publications.map((pub) => (
                    <article key={pub.title}>
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-subtle px-2 py-0.5 text-xs font-medium">{pub.venue}</span>
                            {pub.note && <span className="text-xs text-faint">{pub.note}</span>}
                        </div>
                        <h3 className="font-semibold leading-snug">{pub.title}</h3>
                        {pub.authors && <Authors authors={pub.authors} />}
                        <p className="mt-2 text-[0.93rem] text-muted">{pub.summary}</p>
                        {pub.links.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {pub.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-md border border-hairline px-2.5 py-0.5 text-xs font-medium text-muted transition-colors hover:border-ink hover:text-ink"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </Section>
    )
}

export default Publications
