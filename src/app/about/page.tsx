import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Quote, Target, Lightbulb, Heart, Award, TrendingUp } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Hacked Aging",
  description: "Meet the co-founders of Hacked Aging: Andrés Morales (AI & Automation Expert) and Dr. Talia Henkle (Johns Hopkins PhD, American Cancer Society)",
  openGraph: {
    title: "About Us - Hacked Aging",
    description: "AI expertise meets medical science. Andrés Morales and Dr. Talia Henkle bring longevity research to life.",
    url: "https://hacked-aging.vercel.app/about",
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hacked Aging",
  "url": "https://hacked-aging.vercel.app",
  "founder": [
    {
      "@type": "Person",
      "name": "Andrés Morales",
      "jobTitle": "Co-Founder & Chief Technology Officer",
      "alumniOf": "Liceo de Ciencia y Cultura Harvard",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá",
        "addressCountry": "Colombia"
      },
      "knowsAbout": ["AI Automation", "UX Design", "Web Development", "Digital Strategy"],
      "sameAs": "https://linkedin.com/in/andresmoralesc1"
    },
    {
      "@type": "Person",
      "name": "Dr. Talia Henkle, PhD",
      "jobTitle": "Co-Founder & Chief Science Officer",
      "worksFor": {
        "@type": "Organization",
        "name": "American Cancer Society"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Johns Hopkins University School of Medicine"
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "University of Kentucky"
        }
      ],
      "knowsAbout": ["Cancer Research", "Immunology", "Virology", "Medical Writing"],
      "sameAs": "https://www.linkedin.com/in/talia-henkle-phd-10453b15b/",
      "award": "American Institute of Biological Sciences Emerging Public Policy Leader Award (2021)"
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <div className="min-h-screen">
        {/* Hero Section - Centered */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>

          <div className="container relative px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-sm px-6 py-2">
                Our Story
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Where <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">AI Innovation</span> Meets Medical Excellence
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Making cutting-edge longevity science accessible to everyone who wants to live healthier, longer.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement - Centered */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 h-12 w-12 text-blue-600/20" />
                <div className="relative z-10 pl-8">
                  <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic">
                    Born from a <strong className="font-semibold text-emerald-600">decade-long friendship</strong>, Hacked Aging transforms Medicine 3.0 research into practical protocols for biological age reversal.
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach - Centered 3 Pillars */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Combining artificial intelligence, peer-reviewed science, and real-world testing.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Data-Driven</h3>
                    <p className="text-muted-foreground">
                      Every protocol backed by peer-reviewed research and real biomarker testing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-semibold">AI-Powered</h3>
                    <p className="text-muted-foreground">
                      Leveraging automation to personalize protocols for your unique biology.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Human-Centered</h3>
                    <p className="text-muted-foreground">
                      Designed for real people with busy lives, not just biohackers.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Founders - Centered */}
        <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founders</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A unique partnership of technology and medical science.
                </p>
              </div>

              {/* Founder 1: Andrés */}
              <div className="mb-20">
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                    {/* Photo Column */}
                    <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 flex items-center justify-center p-12">
                      <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                        <Image
                          src="/images/andres-morales.jpeg"
                          alt="Andrés Morales - Co-Founder & CTO"
                          fill
                          className="object-cover"
                          sizes="192px"
                          priority
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">Andrés Morales</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                            Co-Founder & Chief Technology Officer
                          </p>
                        </div>
                        <a
                          href="https://linkedin.com/in/andresmoralesc1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all hover:scale-105 shadow-md text-sm"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </div>

                      <div className="space-y-4 mb-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Fractional AI consultant and automation leader with <strong>10+ years</strong> transforming businesses through intelligent systems. After building expertise in B2B sales and executive search, Andrés founded <strong>Neural Flow</strong> in 2022, pioneering AI-powered automation solutions for global enterprises.
                        </p>
                        <p className="text-muted-foreground">
                          His journey began in commercial real estate and talent acquisition, where he identified inefficiencies that technology could solve. This led him to master AI automation platforms like <strong>N8N</strong>, <strong>Make</strong>, and advanced <strong>LLM integration</strong>, building systems that have processed millions in revenue for clients worldwide.
                        </p>
                        <p className="text-muted-foreground">
                          When his close friend Talia shared cutting-edge longevity research from Johns Hopkins, Andrés saw an opportunity to democratize access to Medicine 3.0. He envisioned using AI to translate complex scientific protocols into personalized, actionable plans for everyday people—not just elite biohackers.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-3">EXPERTISE</h4>
                          <ul className="space-y-1.5 text-sm">
                            <li>• AI Automation & LLMs (ChatGPT, Claude)</li>
                            <li>• Full-Stack Development (Next.js, React)</li>
                            <li>• UX/UI Design & Prototyping</li>
                            <li>• Business Strategy & Digital Transformation</li>
                            <li>• WordPress & CRM Systems</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-3">CAREER HIGHLIGHTS</h4>
                          <ul className="space-y-1.5 text-sm">
                            <li>📍 Bogotá, Colombia</li>
                            <li>🚀 Founder, Neural Flow (2022-Present)</li>
                            <li>💼 10+ years B2B Sales & Tech Consulting</li>
                            <li>🌎 Serving clients across 15+ countries</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-muted-foreground italic">
                          "I envisioned a platform making longevity science accessible to everyone—not just biohackers. AI automation can personalize Medicine 3.0 for the masses."
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Founder 2: Dr. Talia */}
              <div>
                <Card className="border-none shadow-xl overflow-hidden">
                  <div className="grid lg:grid-cols-[300px_1fr] gap-0">
                    {/* Photo Column */}
                    <div className="relative bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 flex items-center justify-center p-12 lg:order-2">
                      <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-800 shadow-2xl">
                        <Image
                          src="/images/talia-henkle.jpeg"
                          alt="Dr. Talia Henkle - Co-Founder & CSO"
                          fill
                          className="object-cover"
                          sizes="192px"
                          priority
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <CardContent className="p-8 md:p-12 lg:order-1">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">Dr. Talia Henkle, PhD</h3>
                          <p className="text-emerald-600 dark:text-emerald-400 font-medium text-lg">
                            Co-Founder & Chief Science Officer
                          </p>
                        </div>
                        <a
                          href="https://www.linkedin.com/in/talia-henkle-phd-10453b15b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all hover:scale-105 shadow-md text-sm"
                        >
                          <Linkedin className="h-4 w-4" />
                          LinkedIn
                        </a>
                      </div>

                      <div className="space-y-4 mb-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Johns Hopkins-trained immunologist and medical writer with <strong>60M+ website views</strong> at the American Cancer Society. Her PhD research focused on viral immunology and vaccine development, contributing to breakthroughs in understanding how the immune system responds to pathogens.
                        </p>
                        <p className="text-muted-foreground">
                          After earning her doctorate from Johns Hopkins School of Medicine (2016-2021), Talia joined the <strong>American Cancer Society</strong> as Copy Editor and Science Writer, where she transformed complex oncology and immunology research into content that empowers millions of patients and families making critical health decisions.
                        </p>
                        <p className="text-muted-foreground">
                          Her passion for science communication earned her the <strong>AIBS Emerging Public Policy Leader Award</strong> in 2021, recognizing her work bridging scientific research and public understanding. When Andrés proposed applying her expertise to longevity science, she saw an opportunity to help people not just fight disease, but optimize their healthspan through evidence-based Medicine 3.0 protocols.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-3">EXPERTISE</h4>
                          <ul className="space-y-1.5 text-sm">
                            <li>• Cancer & Immunology Research</li>
                            <li>• Viral Immunology & Vaccines</li>
                            <li>• Medical Writing & Editing</li>
                            <li>• Science Communication</li>
                            <li>• Peer-Reviewed Publication Analysis</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-muted-foreground mb-3">EDUCATION & HONORS</h4>
                          <ul className="space-y-1.5 text-sm">
                            <li>🎓 PhD Immunology, Johns Hopkins (2016-2021)</li>
                            <li>🎓 BS Biology, University of Kentucky (2011-2014)</li>
                            <li>🏆 AIBS Public Policy Leader Award (2021)</li>
                            <li>📍 Washington DC-Baltimore Area</li>
                          </ul>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                        <p className="text-sm text-muted-foreground italic">
                          "After years of cancer research, I'm passionate about helping people prevent disease before it starts—using the same rigorous science we apply in immunology."
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Centered */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Card className="border-none bg-gradient-to-br from-blue-600 to-emerald-600 text-white shadow-2xl">
                <CardContent className="p-12 text-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Ready to Optimize Your Longevity?
                  </h3>
                  <p className="text-xl text-blue-50">
                    Join 25,000+ health optimizers getting personalized protocols based on real science.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <a href="/assessment">
                      <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 shadow-xl hover:shadow-2xl">
                        Take Free Assessment
                      </Button>
                    </a>
                    <a href="/protocols">
                      <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                        View Protocols
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
