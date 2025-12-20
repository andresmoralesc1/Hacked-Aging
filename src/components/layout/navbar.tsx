"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Hacked Aging
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/pillars", label: "Pillars" },
              { href: "/recovery", label: "Recovery Lab" },
              { href: "/protocols", label: "Protocols" },
              { href: "/research", label: "Research" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-all duration-200 hover:text-foreground hover:bg-gray-100/50 dark:hover:bg-gray-800/50 px-3 py-2 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-gray-800">
              Free Assessment
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-200">
              Join Community
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <nav className="flex flex-col space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/pillars", label: "Pillars" },
                { href: "/recovery", label: "Recovery Lab" },
                { href: "/protocols", label: "Protocols" },
                { href: "/research", label: "Research" }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Button variant="ghost" size="lg" className="justify-start hover:bg-gray-100 dark:hover:bg-gray-800">
                  Free Assessment
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 shadow-md">
                  Join Community
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}