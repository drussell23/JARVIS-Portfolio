'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Architecture', href: '/architecture' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong shadow-xl shadow-jarvis-500/10 border-b border-dark-600/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-jarvis flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
                <span className="text-white font-black text-2xl">J</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-jarvis opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-black gradient-text">
                JARVIS AI
              </div>
              <div className="text-xs text-dark-300 font-medium -mt-1">
                v13.10.0
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 group ${
                  isActive(item.href)
                    ? 'text-white bg-dark-700/50'
                    : 'text-dark-200 hover:text-white hover:bg-dark-800/30'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-jarvis-400 rounded-full shadow-glow-sm" />
                )}
                <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-jarvis-500/30 transition-colors duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-jarvis-600 to-jarvis-cyan-600 hover:from-jarvis-500 hover:to-jarvis-cyan-500 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-jarvis-500/20 hover:shadow-xl hover:shadow-jarvis-500/40 hover:-translate-y-0.5"
          >
            <span>Read Blog</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-dark-700/50 transition-all duration-300 group"
            aria-label="Toggle mobile menu"
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6 text-jarvis-400" />
              ) : (
                <HiMenu className="w-6 h-6 text-dark-200 group-hover:text-jarvis-400" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down">
            <div className="glass-strong rounded-2xl p-4 space-y-2 border border-dark-600/50">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-dark-700 shadow-glow-sm'
                      : 'text-dark-200 hover:text-white hover:bg-dark-700/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 mt-4 bg-gradient-to-r from-jarvis-600 to-jarvis-cyan-600 text-white font-bold text-sm rounded-xl text-center shadow-lg shadow-jarvis-500/30"
              >
                Read Blog →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
