import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JARVIS AI | Context-Aware AI Assistant',
  description: 'Full-stack AI system with voice activation, computer vision, and intelligent automation. Built with Python, TypeScript, Rust, and Swift.',
  keywords: ['AI Assistant', 'Voice Activation', 'Computer Vision', 'Machine Learning', 'Context-Aware AI', 'JARVIS'],
  authors: [{ name: 'Derek Russell' }],
  openGraph: {
    title: 'JARVIS AI | Context-Aware AI Assistant',
    description: 'Full-stack AI system with voice, vision, and intelligence',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JARVIS AI | Context-Aware AI Assistant',
    description: 'Full-stack AI system with voice, vision, and intelligence',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
