"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowRight, Heart, TrendingUp, MessageCircle, Shield } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";
import Image from "next/image";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "Zone 2 Training Reduces Biological Age 2.3 Years: Meta-Analysis",
      author: "Dr. Talia Henkle, PhD",
      date: "December 15, 2024",
      readTime: "8 min",
      category: "Exercise",
      image: "/images/pillars-strength.jpg",
      excerpt: "Comprehensive analysis of 47 studies demonstrates Zone 2 training can reverse biological aging. Results show significant improvements in longevity markers.",
      content: "Detailed research on low-intensity training protocols...",
      tags: ["zone2", "training", "longevity", "meta-analysis"],
      stats: {
        views: 15234,
        shares: 892,
        comments: 127
      }
    },
    {
      id: 2,
      title: "NAD+ Precursors: Future of Mitochondrial Optimization",
      author: "Andrés Morales",
      date: "December 12, 2024",
      readTime: "12 min",
      category: "Supplementation",
      image: "/images/protocols-medical.jpg",
      excerpt: "NAD+ precursors are revolutionizing mitochondrial optimization. Discover how these compounds can increase your ATP production by up to 45%.",
      content: "Complete analysis of most effective NAD+ precursors...",
      tags: ["nad+", "mitochondria", "supplements", "cellular-energy"],
      stats: {
        views: 24567,
        shares: 1543,
        comments: 234
      }
    },
    {
      id: 3,
      title: "Sleep Architecture: The Sleep Blueprint That Reverses Aging",
      author: "Dr. Talia Henkle, PhD",
      date: "December 10, 2024",
      readTime: "10 min",
      category: "Recovery",
      image: "/images/recovery-therapy.jpg",
      excerpt: "Sleep architecture is more important than duration. Optimize 5 sleep phases to maximize growth hormones and cellular repair.",
      content: "Complete guide to optimizing your sleep architecture...",
      tags: ["sleep", "recovery", "hormones", "longevity"],
      stats: {
        views: 19876,
        shares: 1205,
        comments: 189
      }
    },
    {
      id: 4,
      title: "Biometric Tracking: From Data to Measurable Longevity",
      author: "Andrés Morales",
      date: "December 8, 2024",
      readTime: "15 min",
      category: "Technology",
      image: "/images/research-lab.jpg",
      excerpt: "Stop guessing and start measuring. Discover key biomarkers that predict your longevity better than chronological age.",
      content: "Complete tutorial on biometric tracking implementation...",
      tags: ["biomarkers", "measurement", "wearables", "data"],
      stats: {
        views: 31245,
        shares: 2103,
        comments: 345
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Scientific Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {" "}Research & 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Validated Protocols
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Articles based on <span className="font-semibold text-emerald-600 dark:text-emerald-400">scientific evidence</span> 
              written by longevity experts. 
              <span className="font-semibold">No marketing, just science.</span>
            </p>
            
            {/* Fact-Checked Badge */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/20 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-800">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Fact-Checked Content</span>
              </div>
              <span className="text-sm text-muted-foreground">All articles verified against peer-reviewed research</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Weekly published
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Expert written
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                5-15 min read
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card 
                key={post.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
                style={{ 
                  animationDelay: `${post.id * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-xs font-medium">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Reading Time */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/60 backdrop-blur-sm text-white text-xs">
                      {post.readTime} read
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {post.date}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold line-clamp-2 hover:text-foreground transition-colors">
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {post.stats.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {post.stats.comments}
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="hover:bg-muted hover-lift transition-all duration-300"
                    >
                      <ArrowRight className="h-3 w-3 mr-1" />
                       Read more
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">
                {" "}Don't Miss Latest Research
              </h2>
              <p className="text-lg text-muted-foreground">
                Get exclusive articles and updated protocols 
                directly in your inbox every week.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.youtube.com/@hackedaging?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Heart className="h-5 w-5 mr-2" />
                  Subscribe on YouTube
                </Button>
              </a>
              <a href="/research">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                  View All Research
                </Button>
              </a>
            </div>
            
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></div>
                <span>25,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-slow"></div>
                <span>Weekly publication</span>
              </div>
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