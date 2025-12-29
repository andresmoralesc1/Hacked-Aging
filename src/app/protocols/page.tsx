"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, Target, Zap, Users, CheckCircle, Play, Clock, BookOpen } from "lucide-react";
import MedicalDisclaimer from "@/components/ui/medical-disclaimer";
import Image from "next/image";

export default function ProtocolsPage() {
  const protocols = [
    {
      id: 1,
      icon: <Activity className="h-6 w-6" />,
      title: "Zone 2 Cardio Foundation",
      description: "The foundation of healthy metabolism. 8-week protocol to build aerobic capacity and mitochondrial health.",
      image: "/images/protocols-medical.jpg",
      duration: "8 weeks",
      level: "Foundational",
      category: "Cardio",
      equipment: ["Stationary bike", "Heart rate monitor"],
      frequency: "4-5 days/week",
      benefits: ["Longevity", "Cardiovascular health", "Recovery", "Energy"],
      protocol: "zone2-foundation",
      stats: [
        { metric: "Aerobic capacity", improvement: "+35%" },
        { metric: "Mitochondrial efficiency", improvement: "+45%" },
        { metric: "Recovery", improvement: "+60%" }
      ],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      icon: <Target className="h-6 w-6" />,
      title: "Muscle Building 40+",
      description: "Intelligent muscle building after 40. Sarcopenia prevention and hormonal optimization.",
      image: "/images/pillars-strength.jpg",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Strength",
      equipment: ["Free weights", "Resistance bands", "Machines"],
      frequency: "3-4 days/week",
      benefits: ["Muscle mass", "Bone density", "Metabolism", "Hormones"],
      protocol: "muscle-building-40",
      stats: [
        { metric: "Lean mass", improvement: "+8%" },
        { metric: "Functional strength", improvement: "+25%" },
        { metric: "Free testosterone", improvement: "+30%" }
      ],
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 3,
      icon: <Calendar className="h-6 w-6" />,
      title: "Sleep Optimization Protocol",
      description: "Maximize the 5 phases of sleep to optimize growth hormones and cellular recovery.",
      image: "/images/recovery-therapy.jpg",
      duration: "6 weeks",
      level: "All levels",
      category: "Recovery",
      equipment: ["Sleep monitor", "Targeted supplementation"],
      frequency: "Daily",
      benefits: ["Recovery", "Hormones", "Cognition", "Energy"],
      protocol: "sleep-optimization",
      stats: [
        { metric: "Deep sleep", improvement: "+55%" },
        { metric: "Nightly GH", improvement: "+40%" },
        { metric: "Cognitive function", improvement: "+30%" }
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      icon: <Zap className="h-6 w-6" />,
      title: "Metabolic Reset",
      description: "Reset your metabolism in 30 days. Intensive protocol for insulin sensitivity and metabolic flexibility.",
      image: "/images/hormones-balance.jpg",
      duration: "30 days",
      level: "Advanced",
      category: "Metabolism",
      equipment: ["Glucose meter", "Measuring tape", "Tracking app"],
      frequency: "Daily",
      benefits: ["Weight", "Energy", "Mental clarity", "Longevity"],
      protocol: "metabolic-reset",
      stats: [
        { metric: "Insulin sensitivity", improvement: "+70%" },
        { metric: "Metabolic flexibility", improvement: "+85%" },
        { metric: "Visceral fat", improvement: "-25%" }
      ],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Evidence-Based Protocols
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Medicine 3.0 
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Protocols
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protocols tested on 5,000+ users. 
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Measurable results</span> 
              with real biomarker data.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Evidence-based
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                5,000+ users
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-purple-500" />
                Scientific studies
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2 hover:bg-muted transition-colors cursor-pointer">
              All (4)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 hover:bg-muted transition-colors cursor-pointer">
              Cardio (1)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 hover:bg-muted transition-colors cursor-pointer">
              Strength (1)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 hover:bg-muted transition-colors cursor-pointer">
              Recovery (1)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 hover:bg-muted transition-colors cursor-pointer">
              Metabolism (1)
            </Badge>
          </div>
        </div>
      </section>

      {/* Protocols Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {protocols.map((protocol) => (
              <Card 
                key={protocol.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500"
                style={{ 
                  animationDelay: `${protocol.id * 150}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Protocol Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={protocol.image}
                    alt={protocol.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Protocol Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${protocol.color} text-white text-xs font-medium`}>
                      {protocol.level}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs">
                      {protocol.category}
                    </Badge>
                  </div>

                  {/* Protocol Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg`}>
                      <div className={`bg-gradient-to-r ${protocol.color} bg-clip-text text-transparent`}>
                        {protocol.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold">{protocol.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {protocol.description}
                  </p>
                  
                  {/* Protocol Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {protocol.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {protocol.frequency}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Equipment */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Required Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {protocol.equipment.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {protocol.benefits.map((benefit, index) => (
                        <Badge key={index} className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                      <Target className="h-4 w-4 text-emerald-600" />
                       Typical Results:
                    </h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {protocol.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="font-bold text-emerald-600">{stat.improvement}</div>
                          <div className="text-muted-foreground">{stat.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a href="/assessment">
                    <Button className={`w-full bg-gradient-to-r ${protocol.color} hover:opacity-90 transition-all duration-300 group-hover:scale-105`}>
                      <Play className="h-4 w-4 mr-2" />
                      Start Protocol
                    </Button>
                  </a>
                </CardContent>
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
              Personalized Protocols for You
            </h2>
            <p className="text-lg text-muted-foreground">
              Every person is unique. Get a free assessment and personalized protocols 
              based on your biomarkers and specific goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/assessment">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Free Assessment
                </Button>
              </a>
              <a href="/protocols">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-muted transition-all duration-300">
                  View All Protocols
                </Button>
              </a>
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