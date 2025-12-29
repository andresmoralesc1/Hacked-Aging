import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Database, Award, Brain, Heart, BookOpen, Microscope, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Talia Henkle, PhD - Hacked Aging",
  description: "Meet Dr. Talia Henkle, PhD - Science writer with expertise in cancer, immunology, and virology. Copy Editor at American Cancer Society, translating complex medical research for 60M+ readers.",
  openGraph: {
    title: "About Dr. Talia Henkle, PhD - Hacked Aging",
    description: "Johns Hopkins PhD translating cutting-edge medical and longevity science into accessible health content for millions",
    url: "https://hacked-aging.vercel.app/about",
    siteName: "Hacked Aging",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hacked Aging - Science-Backed Longevity Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Talia Henkle, PhD - Hacked Aging",
    description: "Johns Hopkins PhD bringing medical science expertise to longevity optimization",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hacked-aging.vercel.app/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Dr. Talia Henkle, PhD - Hacked Aging",
  "description": "Learn about Dr. Talia Henkle, PhD and her work translating medical science into accessible health content",
  "url": "https://hacked-aging.vercel.app/about",
  "mainEntity": {
    "@type": "Person",
    "name": "Dr. Talia Henkle, PhD",
    "jobTitle": ["Co-Founder & Chief Science Officer", "Copy Editor and Writer, Medical and Health Content", "Science Writer"],
    "worksFor": {
      "@type": "Organization",
      "name": "American Cancer Society",
      "url": "https://www.cancer.org"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Johns Hopkins University School of Medicine",
        "sameAs": "https://www.hopkinsmedicine.org"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of Kentucky",
        "sameAs": "https://www.uky.edu"
      }
    ],
    "knowsAbout": ["Cancer Research", "Immunology", "Virology", "Vaccines", "Medical Writing", "Science Communication", "Longevity Science"],
    "description": "Science writer with PhD from Johns Hopkins specializing in cancer, immunology, and virology. Creates educational content reaching 60M+ readers.",
    "award": "American Institute of Biological Sciences Emerging Public Policy Leader Award - Honorable Mention (2021)"
  }
};

export default function About() {
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
              <Brain className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Dr. Talia Henkle, PhD
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Co-Founder & Chief Science Officer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              Copy Editor at American Cancer Society | Johns Hopkins PhD
            </p>
            <div className="flex justify-center gap-3 mb-6">
              <a href="/team" className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md text-sm">
                <Users className="h-4 w-4" />
                Meet the Full Team
              </a>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/taliahenkle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
                View LinkedIn Profile
              </a>
            </div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Professional Summary */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-blue-200 dark:border-blue-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 dark:text-blue-100">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Dr. Talia Henkle is a science writer with expertise in cancer, immunology, virology, and vaccines.
                  Currently working for the <strong>American Cancer Society</strong>, she creates educational and
                  informational content about cancer and cancer prevention, contributing to over <strong>60 million
                  website views on cancer.org</strong>. Her materials support outreach efforts to healthcare professionals,
                  patients, and public audiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With a research background in virology, oncology, vaccines, pre-clinical mouse models, and cancer
                  immunotherapies from Johns Hopkins, Dr. Henkle bridges complex scientific research with accessible
                  health communication. She is fluent in both English and Spanish, with experience teaching across
                  diverse age, cultural, and educational backgrounds.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As <strong>Co-Founder and Chief Science Officer</strong> of Hacked Aging, Dr. Henkle partners with
                  <a href="/team" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold ml-1">
                    Andrés Morales
                  </a>, an AI automation expert, to translate cutting-edge medical science into AI-powered,
                  accessible longevity protocols. Together, they make evidence-based health optimization available to everyone.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Credentials */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Education & Credentials
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <Award className="h-5 w-5" />
                    Johns Hopkins University
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>PhD in Immunology</strong><br/>
                    School of Medicine (2016 - 2021)<br/>
                    Research: Virology, oncology, vaccines, cancer immunotherapies<br/>
                    Focus: Pre-clinical mouse models
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                    <BookOpen className="h-5 w-5" />
                    University of Kentucky
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Bachelor of Science in Biology</strong><br/>
                    General Biology (2011 - 2014)<br/>
                    Lab Technician at Gluck Equine Research Center
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-purple-600" />
                    Research Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Cancer immunology</li>
                    <li>• Virology & vaccines</li>
                    <li>• Oncology research</li>
                    <li>• Pre-clinical models</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Science Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Medical writing</li>
                    <li>• Cancer education</li>
                    <li>• Health content creation</li>
                    <li>• Public outreach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    Health Translation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li>• Cancer prevention</li>
                    <li>• Evidence-based protocols</li>
                    <li>• Longevity science</li>
                    <li>• Patient education</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Career Timeline & Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">American Cancer Society</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">Copy Editor & Writer, Medical Content (2023 - Present)</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creates high-quality educational materials about cancer for healthcare professionals and
                    public audiences. Contributes to <strong>over 60 million website views on cancer.org</strong>,
                    supporting the organization's outreach efforts and National Roundtables.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sparrow - Scientific Content Manager</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">February 2022 - April 2023</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Highlighted pertinent cancer research in digestible articles for non-expert audiences.
                    Wrote <strong>110+ cancer research digests</strong> consistently rated <strong>&gt;4.5/5</strong> by readers.
                    Managed content calendar and technical/financial aspects of content curation.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Johns Hopkins University - PhD Researcher</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">School of Medicine (2016 - 2021)</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Graduate Program in Immunology. Research focus: Virology, oncology, vaccines, and cancer
                    immunotherapies using pre-clinical mouse models. President of Johns Hopkins Science Policy Group.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Media & Public Outreach</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Featured guest on <strong>Dave Nemo Show for SiriusXM radio</strong> and <strong>HMPR podcast</strong>
                    to share cancer prevention strategies for non-expert audiences. Writer and co-editor for the
                    Biomedical Odyssey blog at Johns Hopkins.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Leadership & Recognition</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>2021 American Institute of Biological Sciences (AIBS) Emerging Public Policy Leader Award</strong> -
                    Honorable Mention. Led Johns Hopkins Science Policy Group, organizing events to engage students in
                    policy-making and elevate scientists' voices in public discourse.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-blue-900 dark:text-blue-100">
                  Philosophy & Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center">
                  "The most powerful health interventions come from translating complex science into simple,
                  actionable strategies. Whether it's cancer prevention or longevity optimization, my mission
                  is to make cutting-edge medical research accessible and understandable for everyone—not just
                  the scientific community."
                </blockquote>
                <p className="text-right mt-4 text-gray-600 dark:text-gray-400">
                  — Dr. Talia Henkle, PhD
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Platform Features */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Why Hacked Aging?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Science-Backed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Every protocol is based on cutting-edge research and clinical evidence, 
                    ensuring safe and effective health optimization strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Personalized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    We understand that every person is unique. Our approach tailors recommendations 
                    to your specific biology, lifestyle, and health goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Expert-Guided
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Access to leading longevity experts and a community dedicated to optimizing 
                    health through evidence-based approaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
