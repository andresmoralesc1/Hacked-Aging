import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Hacked Aging
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Home
          </Link>
          <Link
            href="/pillars"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Pillars
          </Link>
          <Link
            href="/recovery"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Recovery Lab
          </Link>
          <Link
            href="/protocols"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Protocols
          </Link>
          <Link
            href="/research"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Research
          </Link>
        </nav>
        
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Free Assessment
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-blue-600">
            Join Community
          </Button>
        </div>
      </div>
    </header>
  );
}