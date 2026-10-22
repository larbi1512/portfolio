import React from 'react'
import Image from 'next/image'
import photo from '@/../public/images/profile.jpg'
import { profile, profileLinks } from './Data'
import SectionNav from './SectionNav'
import ThemeToggle from './ThemeToggle'

const links = [
    { label: profile.email, href: `mailto:${profile.email}` },
    { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    ...profileLinks,
]

// Profile column: sticky on large screens, a plain header on small ones
const Sidebar = () => {
    return (
        <aside className="relative pt-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:overflow-y-auto lg:py-16">
            <div className="flex items-center gap-5 pr-10 lg:flex-col lg:items-start lg:pr-0">
                <Image
                    src={photo}
                    alt={`Portrait of ${profile.name}`}
                    sizes="(min-width: 1024px) 128px, 80px"
                    priority
                    className="h-20 w-20 shrink-0 border border-hairline object-cover lg:h-32 lg:w-32"
                />
                <div className="min-w-0">
                    <h1 className="text-[1.6rem] font-semibold leading-tight tracking-tight">{profile.name}</h1>
                    {/* One line per part of the role, so it never wraps mid-phrase */}
                    <p className="mt-1.5 text-[0.93rem] leading-snug text-muted">
                        {profile.role.split(' · ').map((part) => (
                            <span key={part} className="block">{part}</span>
                        ))}
                    </p>
                    <p className="mt-1 text-sm text-faint">{profile.location}</p>
                </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {links.map((link) => {
                    const external = link.href.startsWith('http')
                    return (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="text-muted transition-colors hover:text-ink"
                                {...(!/^(mailto|tel):/.test(link.href) && { target: '_blank', rel: 'noopener noreferrer' })}
                            >
                                {link.label}
                                {external && <span aria-hidden="true" className="ml-0.5 text-faint">↗</span>}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <div className="mt-6 border-y border-hairline py-2 lg:mt-10 lg:border-0 lg:py-0">
                <SectionNav />
            </div>

            <div className="absolute right-0 top-12 lg:static lg:mt-auto lg:pt-8">
                <ThemeToggle />
            </div>
        </aside>
    )
}

export default Sidebar
