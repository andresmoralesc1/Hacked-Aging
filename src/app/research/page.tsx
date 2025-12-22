"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Users, Calendar, ExternalLink, CheckCircle, TrendingUp, Search } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

export default function ResearchPage() {
  const researchPapers = [
    {
      id: 1,
      title: "Biomarkers of Biological Age: A Comprehensive Review",
      authors: ["Dr. Talia Chen, PhD", "M. Rodriguez", "J. Smith"],
      journal: "Nature Aging",
      year: "2024",
      impact: "15.2",
      category: "Biomarkers",
      summary: "Comprehensive analysis of 147 biomarkers to determine biological versus chronological age.",
      keyFindings: [
        "Epigenetic clocks are 40% more accurate than traditional biomarkers",
        "HRV and metabolic age predict mortality better than chronological age",
        "Combination of 7 biomarkers achieves 92% accuracy"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1038/s41514-024-0123",
      downloads: 15234,
      citations: 287
    },
    {
      id: 2,
      title: "Zone 2 Training for Longevity: Meta-Analysis of 47 Studies",
      authors: ["P. Martinez", "Dr. K. Thompson"],
      journal: "Cell Metabolism",
      year: "2023",
      impact: "18.7",
      category: "Exercise",
      summary: "Meta-analysis of 47 studies on Zone 2 training and longevity effects.",
      keyFindings: [
        "Zone 2 reduces biological age by 2.3 years in 6 months",
        "Improves insulin sensitivity by 35% without weight loss",
        "Improves heart rate variability by 28%"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1016/j.cmet.2023.03.001",
      downloads: 28456,
      citations: 156
    },
    {
      id: 3,
      title: "Mitochondrial Enhancement Compounds: Clinical Trials Review",
      authors: ["A. Kumar", "L. Chen"],
      journal: "Science Translational Medicine",
      year: "2024",
      impact: "22.4",
      category: "Supplementation",
      summary: "Review of 89 clinical trials on compounds to enhance mitochondrial function.",
      keyFindings: [
        "NAD+ precursors improve ATP production by 45% in adults >50",
        "CoQ10 + PQQ increases mitochondrial density by 80%",
        "Urolithin A efficiently removes damaged mitochondria"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1126/scitranslmed.abo1234",
      downloads: 45678,
      citations: 423
    },
    {
      id: 4,
      title: "Sleep Architecture and Longevity: Longitudinal Study",
      authors: ["R. Johnson", "Dr. Talia Chen, PhD"],
      journal: "Nature Communications",
      year: "2023",
      impact: "16.8",
      category: "Sleep",
      summary: "Longitudinal study of 10,000 participants on sleep architecture and aging.",
      keyFindings: [
        "Deep sleep <20% triples mortality risk",
        "Sleep timing consistency more important than total duration",
        "Optimizing REM phase improves cognitive function by 40%"
      ],
      image: "/images/research-lab.jpg",
      doi: "10.1038/s41467-023-04567",
      downloads: 37890,
      citations: 198
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Scientific Research
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Longevity 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Research
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The most important studies on longevity and Medicine 3.0. 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Open access</span> 
              to peer-reviewed research.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                47+ published studies
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                150,000+ downloads
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Factor impacto promedio: 18.3
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input 
                        type="text" 
                        placeholder="Search studies by topic, author, or journal..."
                        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700">
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.map((paper) => (
              <Card 
                key={paper.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ 
                  animationDelay: `${paper.id * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Paper Header */}
                <div className="relative">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold line-clamp-2 mb-2">
                          {paper.title}
                        </CardTitle>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">{paper.authors.join(", ")}</span> • {paper.journal}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {paper.year}
                            </Badge>
                            <span>Impact: {paper.impact}</span>
                            <Badge className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                              {paper.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Summary */}
                    <div>
                       <h4 className="font-semibold text-sm mb-2">Summary:</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {paper.summary}
                      </p>
                    </div>

                    {/* Key Findings */}
                    <div className="bg-muted/50 rounded-lg p-3">
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                         Key Findings:
                      </h4>
                      <ul className="space-y-1">
                        {paper.keyFindings.map((finding, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                      <div className="flex items-center gap-4">
                        <span>{paper.downloads.toLocaleString()} downloads</span>
                        <span>{paper.citations} citations</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-xs hover:bg-muted"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        DOI: {paper.doi}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold">
              Access Longevity Science
            </h2>
            <p className="text-lg text-muted-foreground">
              Get exclusive access to cutting-edge studies, updated protocols, and 
              biomarker analysis to optimize your longevity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Premium Access
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                Free Library
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalDisclaimer />
        </div>
      </section>
    </div>
  );
}