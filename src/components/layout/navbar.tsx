"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group hover-lift transition-all duration-300">
            <div className="relative">
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Hacked Aging
              </span>
              <div className="absolute -bottom-1 -right-2 w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium" role="navigation" aria-label="Main navigation">
          {[
            { href: "/", label: "Home" },
            { href: "/pillars", label: "4 Pillars" },
            { href: "/recovery", label: "Recovery" },
            { href: "/protocols", label: "Protocols" },
            { href: "/research", label: "Research" },
            { href: "/about", label: "About Us" }
          ].map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-all duration-300 hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-lg font-medium ${
                  isActive ? 'bg-primary/10 text-primary font-semibold' : ''
                } hover-lift focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/assessment" aria-label="Take the free health assessment">
              <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                Free Assessment
              </Button>
            </Link>
            <a href="https://www.youtube.com/@hackedaging" target="_blank" rel="noopener noreferrer" aria-label="Join our YouTube community">
              <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200">
                Join Community
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-gray-200 dark:border-gray-800 overflow-hidden"
            >
              <div className="py-4">
            <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/pillars", label: "Pillars" },
                { href: "/recovery", label: "Recovery Lab" },
                { href: "/protocols", label: "Protocols" },
                { href: "/research", label: "Research" },
                { href: "/about", label: "About Us" }
              ].map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      isActive ? 'bg-primary/10 text-primary font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link href="/assessment" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="lg" className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800 w-full">
                    Free Assessment
                  </Button>
                </Link>
                <a href="https://www.youtube.com/@hackedaging" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-md w-full">
                    Join Community
                  </Button>
                </a>
              </div>
            </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}