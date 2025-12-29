import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Dumbbell, Brain, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Pillar {
  id: string;
  title: string;
  description: string;
  benefit: string;
  icon: React.ReactNode;
  gradient: string;
  link: string;
}

const pillars: Pillar[] = [
  {
    id: "1",
    title: "Metabolic Truth",
    description: "Optimize your VO₂ Max and mitochondrial density. Learn why your heart health is #1 predictor of your future healthspan.",
    benefit: "22% improvement in cellular energy production",
    icon: <Heart className="h-6 w-6" />,
    gradient: "from-red-600 to-orange-600",
    link: "/pillars"
  },
  {
    id: "2",
    title: "Functional Muscle",
    description: "Build muscle as a protective 'longevity organ.' Strategies to combat sarcopenia and maintain independence into your 80s.",
    benefit: "3.5x reduction in all-cause mortality",
    icon: <Dumbbell className="h-6 w-6" />,
    gradient: "from-blue-600 to-indigo-600",
    link: "/pillars"
  },
  {
    id: "3",
    title: "Hormonal Precision",
    description: "Evidence-based protocols for Perimenopause and Andropause. Reclaim your energy through clinical-grade lifestyle interventions.",
    benefit: "47% improvement in energy and vitality",
    icon: <Brain className="h-6 w-6" />,
    gradient: "from-purple-600 to-pink-600",
    link: "/pillars"
  },
  {
    id: "4",
    title: "Cognitive Resilience",
    description: "Targeted nootropics and deep sleep architecture to maintain mental sharpness and executive function.",
    benefit: "2.8x improvement in cognitive processing speed",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-emerald-600 to-cyan-600",
    link: "/pillars"
  }
];

export default function FourPillars() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">The 4 Pillars of Optimization</Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              Master Your Biology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each pillar addresses a critical system of aging. Together, they create exponential 
              improvements in your biological age and functional capacity.
            </p>
          </div>
          
          {/* Pillars Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Card key={pillar.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${pillar.gradient}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${pillar.gradient} text-white flex-shrink-0`}>
                      {pillar.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {pillar.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="font-medium text-foreground">Result:</span>
                      <span className="text-green-600 dark:text-green-400 ml-1">
                        {pillar.benefit}
                      </span>
                    </div>
                    
                    <Button variant="outline" size="sm" asChild className="group">
                      <Link href={pillar.link}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-3xl mx-auto border-2 border-dashed">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Optimize All Four?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get our comprehensive assessment tool to identify which pillar needs your attention first, 
                  plus a personalized 90-day protocol to address all four systematically.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/assessment">
                    <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600">
                      Take Free Assessment
                    </Button>
                  </a>
                  <a href="/protocols">
                    <Button variant="outline" size="lg">
                      View All Protocols
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}