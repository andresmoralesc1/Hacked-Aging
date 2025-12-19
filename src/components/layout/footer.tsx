import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Hacked Aging
            </h3>
            <p className="text-sm text-muted-foreground">
              Science-backed longevity protocols for high-performance adults over 40. 
              Stop guessing, start measuring.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Protocols</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/metabolic" className="hover:text-foreground transition-colors">
                  Metabolic Health
                </Link>
              </li>
              <li>
                <Link href="/muscle" className="hover:text-foreground transition-colors">
                  Functional Muscle
                </Link>
              </li>
              <li>
                <Link href="/hormones" className="hover:text-foreground transition-colors">
                  Hormonal Precision
                </Link>
              </li>
              <li>
                <Link href="/cognitive" className="hover:text-foreground transition-colors">
                  Cognitive Resilience
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/recovery" className="hover:text-foreground transition-colors">
                  Recovery Lab
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  YouTube Channel
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-foreground transition-colors">
                  Research Database
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-foreground transition-colors">
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/newsletter" className="hover:text-foreground transition-colors">
                  Weekly Protocols
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Discord Community
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Trust & Disclosures */}
        <div className="mt-8 border-t pt-8">
          <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-medium text-foreground">Medical Disclaimer:</p>
              <p className="text-xs leading-relaxed">
                The information on Hacked Aging is for educational purposes only 
                and not a substitute for professional medical advice. Always consult 
                your physician before starting new protocols.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-foreground">Affiliate Disclosure:</p>
              <p className="text-xs leading-relaxed">
                This site contains affiliate links. We may earn a commission 
                at no extra cost to you, supporting our independent research.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Hacked Aging. All rights reserved. • Science-based • Independently researched</p>
        </div>
      </div>
    </footer>
  );
}