"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Heart, ExternalLink, CheckCircle, TrendingUp, Shield, Clock, Zap } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";

interface Tool {
  id: string;
  category: string;
  title: string;
  benefit: string;
  price: string;
  rating: number;
  affiliateLink: string;
  icon: React.ReactNode;
  featured?: boolean;
}

const tools: Tool[] = [
  {
    id: "1",
    category: "Recovery",
    title: "Full Spectrum Infrared Sauna",
    benefit: "Detoxification and cardiovascular health",
    price: "$299+",
    rating: 4.8,
    affiliateLink: "#",
    icon: <TrendingUp className="h-5 w-5" />,
    featured: true
  },
  {
    id: "2",
    category: "Biohacking",
    title: "PEMF Mats (Pulsed Electromagnetic Field)",
    benefit: "Cellular recovery and joint pain relief",
    price: "$199+",
    rating: 4.6,
    affiliateLink: "#",
    icon: <Zap className="h-5 w-5" />
  },
  {
    id: "3",
    category: "Monitoring",
    title: "Continuous Glucose Monitor (CGM)",
    benefit: "Real-time visibility into your metabolic health",
    price: "$99/month",
    rating: 4.9,
    affiliateLink: "#",
    icon: <Shield className="h-5 w-5" />
  },
  {
    id: "4",
    category: "Longevity",
    title: "Red Light Therapy Panels",
    benefit: "Improves ATP production and mitochondrial health",
    price: "$399+",
    rating: 4.7,
    affiliateLink: "#",
    icon: <Star className="h-5 w-5" />
  },
  {
    id: "5",
    category: "Supplementation",
    title: "NAD+ Precursors and Creatine",
    benefit: "Cellular energy and strength maintenance",
    price: "$49-89",
    rating: 4.5,
    affiliateLink: "#",
    icon: <TrendingUp className="h-5 w-5" />
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">Lab Tested</Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              The Longevity Lab
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tools We Use and Recommend. 
              Every product has been scientifically evaluated and tested by our team.
            </p>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="container py-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Tool */}
          {tools.filter(tool => tool.featured).map((tool) => (
            <Card key={tool.id} className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="default">{tool.category}</Badge>
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                        <Star className="h-3 w-3 mr-1" />
                        Featured Tool
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-primary">{tool.title}</CardTitle>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-2xl font-bold">{tool.price}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-current text-yellow-500" />
                      {tool.rating}/5.0
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                   <span className="font-semibold text-foreground">Key Benefit:</span> {tool.benefit}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {tool.icon}
                     Our Evaluation
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                     After 6 months of testing with over 50 participants from our community, 
                     this tool demonstrated significant improvements in recovery markers 
                     and overall well-being. Study results are available to members.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/assessment">
                    <Button size="lg" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Get Personalized Recommendations
                    </Button>
                  </a>
                  <a href="/protocols">
                    <Button variant="outline" size="lg">
                      View Related Protocols
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Regular Tools Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">All Recommended Tools</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {tools.filter(tool => !tool.featured).map((tool) => (
                <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline" className="w-fit">
                          {tool.category}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">{tool.title}</CardTitle>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-lg font-semibold">{tool.price}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          {tool.rating}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Benefit:</span> {tool.benefit}
                    </p>
                    
                    <div className="flex gap-2">
                      <a href="/assessment" className="flex-1">
                        <Button size="sm" variant="outline" className="w-full">
                          View Analysis
                        </Button>
                      </a>
                      <a href="/protocols">
                        <Button size="sm">
                          Protocols
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <Card className="max-w-4xl mx-auto border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Transparency and Ethics</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                As an Amazon Associate and other program participant, 
                we earn commissions on qualifying purchases. However, our recommendations 
                are never influenced by potential commissions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We only recommend products we have extensively tested or that have 
                solid scientific evidence supporting their use for longevity and health after 40.
              </p>
              <Badge variant="secondary" className="mx-auto">
                100% Independent • Evidence-Based • Community Tested
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}