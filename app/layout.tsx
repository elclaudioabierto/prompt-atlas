import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Prompt Atlas — a place for your best prompts', description: 'A thoughtfully organized library of reusable prompt snippets.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
