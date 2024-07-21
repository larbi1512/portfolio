"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "experience" },
  { name: "Contacts", id: "contacts" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scrolling function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-1 md:top-[2%] left-[2%] md:left-[20%] right-[2%] md:right-[20%] z-10 flex items-center justify-between px-8 py-3 bg-main_dark md:bg-opacity-60 text-white shadow-md border rounded-2xl border-white-50 border-1 border-opacity-50">
      <Link href="#hero" className="">
        <div className="text-lg font-normal font-fira cursor-pointer" onClick={() => handleScroll("hero")}>
        Larbi Saidchikh
      </div>
      </Link>
      
      <div className="hidden md:flex space-x-4">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className="hover:text-gray-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleScroll(item.id);
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="md:hidden font-fira">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="absolute top-full left-0 right-0 bg-black bg-opacity-60 text-center font-fira text-white flex flex-col space-y-2 py-2 md:hidden rounded-xl"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                className="px-4 py-2 hover:bg-main_light hover:bg-opacity-60 cursor-pointer "
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
