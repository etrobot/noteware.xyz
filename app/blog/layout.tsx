import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Client } from '@notionhq/client';
import Navbar from '@/components/navbar';
import { notionapi } from "@/lib/notion";

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? '';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.TITLE ?? "Noteware",
  description: process.env.DESC ?? "Generated by create next app",
};

// Function to fetch categories from Notion

// Main layout component
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch categories
  // const categories = await notionapi.fetchCategories();


  return (
    <>
            {/* <Navbar categories={categories} githubUrl={process.env.GITHUB} twitterUrl={process.env.TWITTER} /> */}
          <main className='mx-auto max-w-3xl mt-12'>
            {children}
          </main>
          </>

  );
}