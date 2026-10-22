import React from 'react'
import { footerLinks, profile } from './Data'

const Footer = () => {
    return (
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-hairline pt-6 text-sm text-faint">
            <p>
                © {new Date().getFullYear()} {profile.name} · Updated {profile.lastUpdated}
            </p>
            <p className="flex gap-4">
                {footerLinks.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                        {link.label}
                    </a>
                ))}
                <a href="#top" className="transition-colors hover:text-ink">Back to top ↑</a>
            </p>
        </footer>
    )
}

export default Footer
