import React from 'react'
import { otherProjects, projects } from './Data'
import type { Project } from './Data'
import Section, { SubHeading } from './ui/Section'

const cardClass = 'group flex flex-col rounded-lg border border-hairline p-5 transition-colors hover:border-rule hover:bg-subtle'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const body = (
        <>
            <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-semibold leading-snug">{project.title}</h3>
                <span className="text-sm tabular-nums text-faint">{project.year}</span>
            </div>
            <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-muted">{project.description}</p>
            <div className="mt-4 flex items-end justify-between gap-3">
                <ul className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                        <li key={item} className="rounded bg-subtle px-1.5 py-0.5 text-[0.72rem] text-muted group-hover:bg-paper">
                            {item}
                        </li>
                    ))}
                </ul>
                {project.link && (
                    <span className="shrink-0 text-xs font-medium text-muted group-hover:text-ink">
                        {project.link.label} ↗
                    </span>
                )}
            </div>
        </>
    )

    return project.link ? (
        <a href={project.link.href} target="_blank" rel="noopener noreferrer" className={cardClass}>
            {body}
        </a>
    ) : (
        <div className={cardClass}>{body}</div>
    )
}

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

            <SubHeading>Other projects</SubHeading>
            <ul className="space-y-2">
                {otherProjects.map((project) => (
                    <li key={project.title} className="flex items-baseline justify-between gap-4 text-[0.95rem]">
                        <span>
                            {project.link ? (
                                <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="link font-medium">
                                    {project.title}
                                </a>
                            ) : (
                                <span className="font-medium">{project.title}</span>
                            )}
                            <span className="text-muted"> · {project.description}</span>
                        </span>
                        <span className="shrink-0 text-sm tabular-nums text-faint">{project.year}</span>
                    </li>
                ))}
            </ul>
            <p className="mt-5 text-sm">
                <a href="https://github.com/larbi1512" target="_blank" rel="noopener noreferrer" className="link text-muted">
                    More on GitHub ↗
                </a>
            </p>
        </Section>
    )
}

export default Projects
