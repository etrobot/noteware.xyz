// app/page.tsx
import { Suspense } from 'react';
import LandingPage from '@/components/landingPage';
import {ThemeToggle} from '@/components/theme-toggle';
import { Github, TwitterX } from '@/components/ui/social-icons';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className=" top-0 z-50 flex items-center md:justify-between md:shrink-0  w-full p-2 bg-background bg-opacity-80">
      <div className="absolute top-2 right-2 "><ThemeToggle /></div>
    <nav className="py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className='md:flex md:space-x-4 md:items-center'>
            {process.env.GITHUB && (
              <li key="github">
                <a href={process.env.GITHUB} target='_blank' rel="noopener noreferrer">
                  <Github width={20} height={20}/>
                </a>
              </li>
            )}
            {process.env.TWITTER && (
              <li key="x">
                <a href={process.env.TWITTER} target='_blank' rel="noopener noreferrer">
                  <TwitterX width={20} height={20}/>
                </a>
              </li>
            )}
            <li key="all">
              <Link href="/">
                Noteware
              </Link>
            </li>
            <li key="blog">
              <Link href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

const testimonials = [
  { avatar: 'https://ui-avatars.com/api/?name=John%20D&background=random', name: 'John D.', quote: 'Noteware has revolutionized the way I manage my tasks and AI projects. The integration of Notion and LLama-Agents is seamless and efficient.' },
  { avatar: 'https://ui-avatars.com/api/?name=Sarah%20T&background=random', name: 'Sarah T.', quote: 'The AI agents in Noteware have significantly improved my productivity. I can\'t imagine going back to my old workflow!' },
  { avatar: 'https://ui-avatars.com/api/?name=Michael%20R&background=random', name: 'Michael R.', quote: 'Noteware is user-friendly and powerful. It has become an essential tool in my daily work.' },
];

const logos = [
  { src: 'https://github.com/run-llama/logos/blob/main/LlamaLogo%20Square.png?raw=true', alt: 'LlamaIndex' },
  { src: 'https://console.groq.com/groqcloud_dark_v2.svg', alt: 'Groq Cloud' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', alt: 'Meta' },
  { src: 'https://developers.google.com/static/idx/images/icon-192.png', alt: 'Google' },
];

const faqs = [
  { question: 'What is Noteware?', answer: 'Noteware is a skill set for getting AI empower from LLama-Agents and Notion, enhancing your productivity and workflow.' },
  { question: 'Is Noteware free?', answer: 'Yes, Noteware is completely free. You can access all the features and benefits without any hidden costs.' },
  { question: 'How do I get started with Noteware?', answer: 'Follow the hands-on tutorial step by step.' },
];

export default async function HomePage({ searchParams }: { searchParams: { yr?: string } }) {
  const year = searchParams.yr ? parseInt(searchParams.yr, 10) : undefined;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <LandingPage testimonials={testimonials} logos={logos} faqs={faqs} />
    </Suspense>
  );
}
