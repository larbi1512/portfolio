"use client";
import React, { useEffect, useState } from "react";

const sections = [
  { name: "About", id: "about" },
  { name: "Publications", id: "publications" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Competencies", id: "competencies" },
  { name: "Education", id: "education" },
];

const SectionNav = () => {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // A section becomes current once it crosses a band near the top of the screen
      { rootMargin: "-20% 0px -70% 0px" }
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Sections">
      <ul className="no-scrollbar flex gap-5 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-hairline">
        {sections.map(({ name, id }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block whitespace-nowrap py-1 text-sm transition-colors lg:-ml-px lg:border-l lg:py-1.5 lg:pl-4 ${
                  isActive ? "font-medium text-ink lg:border-ink" : "text-muted hover:text-ink lg:border-transparent"
                }`}
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionNav;
