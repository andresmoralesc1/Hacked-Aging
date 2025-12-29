import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Brain, Code, Users, Lightbulb, Award, Briefcase, GraduationCap } from "lucide-react";
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
      "sameAs": "https://linkedin.com/in/taliahenkle",
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

      <div className="min-h-screen bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
        <div className="container py-12 md:py-24">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-8">
            <Badge variant="secondary" className="text-sm px-4 py-2 mb-6">
              Meet the Founders
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The Team Behind Hacked Aging
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Where AI innovation meets medical science expertise
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Origin Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 dark:text-blue-100 flex items-center gap-2">
                  <Lightbulb className="h-6 w-6" />
                  Our Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Hacked Aging was born from a decade-long friendship</strong> between Andrés Morales,
                  an AI automation expert, and Dr. Talia Henkle, a Johns Hopkins-trained scientist specializing
                  in cancer and immunology research.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Andrés envisioned a platform that could make cutting-edge longevity science accessible to everyone—not
                  just academics and biohackers. He partnered with Talia, whose deep expertise in medical research and
                  science communication at the American Cancer Society, made her the perfect co-founder to translate
                  complex Medicine 3.0 concepts into actionable protocols.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Together, they combine <strong>AI-powered automation</strong> with <strong>peer-reviewed medical science</strong>
                  to create a longevity platform that's both evidence-based and accessible.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Andrés Morales */}
            <Card className="border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                        <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                          Andrés Morales
                        </CardTitle>
                        <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                          Co-Founder & Chief Technology Officer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/andresmoralesc1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm mt-4"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn Profile
                </a>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    About
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Fractional AI consultant and automation leader with <strong>10+ years of experience</strong> in
                    B2B sales, executive search, and digital strategy. Founder of <strong>Neural Flow</strong>,
                    specializing in AI-powered systems for businesses worldwide.
                  </p>
                </div>

                {/* Current Role */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                    Current Position
                  </h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Neural Flow</strong> - AI & Web Developer
                    </p>
                    <p className="text-xs text-gray-500">June 2022 - Present | Worldwide</p>
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">AI Automation</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">ChatGPT & LLMs</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">N8N & Make</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">UX Design</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">Next.js</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">WordPress</Badge>
                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950/30">Business Strategy</Badge>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-green-600" />
                    Education
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Liceo de Ciencia y Cultura Harvard
                  </p>
                  <p className="text-xs text-gray-500">High School Diploma (2003-2009)</p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Location:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    📍 Bogotá, Colombia
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Dr. Talia Henkle */}
            <Card className="border-emerald-200 dark:border-emerald-800 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl">
                        <Brain className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-emerald-900 dark:text-emerald-100">
                          Dr. Talia Henkle, PhD
                        </CardTitle>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">
                          Co-Founder & Chief Science Officer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/taliahenkle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm mt-4"
                >
                  <Linkedin className="h-4 w-4" />
                  View LinkedIn Profile
                </a>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                {/* Summary */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-emerald-600" />
                    About
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Science writer and medical content expert with <strong>60M+ website views</strong> at
                    the American Cancer Society. Johns Hopkins PhD specializing in cancer, immunology,
                    and virology research.
                  </p>
                </div>

                {/* Current Role */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                    Current Position
                  </h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>American Cancer Society</strong> - Copy Editor & Writer
                    </p>
                    <p className="text-xs text-gray-500">2023 - Present | Medical Content</p>
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Cancer Research</Badge>
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Immunology</Badge>
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Virology</Badge>
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Vaccines</Badge>
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Medical Writing</Badge>
                    <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/30">Science Communication</Badge>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-green-600" />
                    Education
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        PhD in Immunology
                      </p>
                      <p className="text-xs text-gray-500">Johns Hopkins University School of Medicine (2016-2021)</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        BS in Biology
                      </p>
                      <p className="text-xs text-gray-500">University of Kentucky (2011-2014)</p>
                    </div>
                  </div>
                </div>

                {/* Awards */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    Recognition
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    🏆 AIBS Emerging Public Policy Leader Award (2021)
                  </p>
                </div>

                {/* Location */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Location:</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    📍 Washington DC-Baltimore Area
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6 pb-6">
                <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Longevity?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Start with our free assessment and get personalized protocols based on your biomarkers.
                </p>
                <a href="/assessment">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                    Take Free Assessment
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
