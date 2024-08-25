'use client'
import { ThemeToggle } from '@/components/theme-toggle';
import React, { useState } from 'react';
import Link from 'next/link';
import { TwitterX, Github } from '@/components/ui/social-icons';

interface NavbarProps {
  categories: { id: string; name: string }[];
  githubUrl?: string;
  twitterUrl?: string;
}

const Navbar: React.FC<NavbarProps> = ({ categories, githubUrl, twitterUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" top-0 z-50 flex items-center md:justify-between md:shrink-0  w-full p-2 bg-background bg-opacity-80">
      <div className="absolute top-2 right-2 "><ThemeToggle /></div>
    <nav className="py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className={`
            md:flex md:space-x-4 md:items-center
            ${isOpen ? 'mt-4 p-4 space-y-2' : 'hidden'}
          `}>
            {githubUrl && (
              <li key="github">
                <a href={githubUrl} target='_blank' rel="noopener noreferrer">
                  <Github width={20} height={20}/>
                </a>
              </li>
            )}
            {twitterUrl && (
              <li key="x">
                <a href={twitterUrl} target='_blank' rel="noopener noreferrer">
                  <TwitterX width={20} height={20}/>
                </a>
              </li>
            )}
            <li key="home">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Noteware
              </Link>
            </li>
            <li key="all">
              <Link href="/blog" onClick={() => setIsOpen(false)}>
                All
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/blog/${encodeURIComponent(category.name)}`} onClick={() => setIsOpen(false)}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default Navbar;