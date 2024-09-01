// app/page.tsx
import { Suspense } from 'react';
import LandingPage from '@/components/landingPage';
import Navbar from '@/components/navbar';
//


const testimonials = [
  { avatar: 'https://ui-avatars.com/api/?name=John%20D&background=random', name: 'John D.', quote: 'Noteware has revolutionized the way I manage my tasks and AI projects. The integration of Notion and Langgraphs is seamless and efficient.' },
  { avatar: 'https://ui-avatars.com/api/?name=Sarah%20T&background=random', name: 'Sarah T.', quote: 'The AI agents in Noteware have significantly improved my productivity. I can\'t imagine going back to my old workflow!' },
  { avatar: 'https://ui-avatars.com/api/?name=Michael%20R&background=random', name: 'Michael R.', quote: 'Noteware is user-friendly and powerful. It has become an essential tool in my daily work.' },
];

const logos = [
  { src: 'https://blog.langchain.dev/content/images/2024/03/LangChain-logo.png', alt: 'Langchain' },
  { src: 'https://console.groq.com/groqcloud_dark_v2.svg', alt: 'Groq Cloud' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', alt: 'Meta' },
  { src: 'https://developers.google.com/static/idx/images/icon-192.png', alt: 'Google' },
];

const faqs = [
  { question: 'What is Noteware?', answer: 'Noteware is a skill set for getting AI empower from Langgraphs and Notion, enhancing your productivity and workflow.' },
  { question: 'Is Noteware free?', answer: 'Yes, Noteware is completely free. You can access all the features and benefits without any hidden costs.' },
  { question: 'How do I get started with Noteware?', answer: 'Follow the hands-on tutorial step by step.' },
];

export default async function HomePage({ searchParams }: { searchParams: { yr?: string } }) {
  const year = searchParams.yr ? parseInt(searchParams.yr, 10) : undefined;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingPage testimonials={testimonials} logos={logos} faqs={faqs} />
    </Suspense>
  );
}
