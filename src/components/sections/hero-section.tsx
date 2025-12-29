import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Target } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex items-center py-6 md:py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-4 max-w-4xl animate-slide-in-left">
            <div className="space-y-3">
              <Badge variant="secondary" className="text-sm px-4 py-2 animate-fade-in-up">
                Trusted Health Information
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                Hacked Aging:{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block lg:inline">
                  Science-Backed Longevity for High-Performance 40+
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                Stop guessing. Start measuring. We translate Medicine 3.0 breakthroughs 
                into daily protocols for biological age reversal and functional strength.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-1 animate-fade-in-up animation-delay-600">
              <a href="/assessment" aria-label="Take your personalized health assessment">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 dark:focus:ring-emerald-800 w-full sm:w-auto">
                  Start Free Assessment
                </Button>
              </a>
              <a href="/protocols" aria-label="View our science-backed protocols">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 w-full sm:w-auto">
                  View Protocols
                </Button>
              </a>
            </div>
            <div className="mt-6 p-5 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/30 dark:to-blue-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm animate-fade-in-up animation-delay-800 hover:shadow-md transition-all duration-300">
              <p className="text-base text-emerald-800 dark:text-emerald-200 font-medium">
                🎥 As featured in our YouTube community of <span className="font-bold text-lg">25,000+</span> health optimizers
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end items-center animate-slide-in-right">
            <div className="w-full max-w-md space-y-4">
              {/* Hero Image Carousel */}
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in group h-56">
                <Image
                  src="/images/3764011.jpeg"
                  alt="Fit athlete ready for training - representing peak physical performance for 40+ adults"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <p className="text-sm font-bold drop-shadow-lg">Peak Performance at Any Age</p>
                  <p className="text-xs opacity-90 drop-shadow">Optimize your biological age today</p>
                </div>
              </div>
              
              {/* Health Tip Card */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-105 animate-fade-in animation-delay-200">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-red-500 animate-pulse-slow" />
                    </div>
                    Today's Health Tip
                  </CardTitle>
                </CardHeader>
                 <CardContent className="pt-0 space-y-3">
                   <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Today's Protocol:</span> 4-minute Zone 2 cardio session + 10g collagen peptide. 
                    <br className="hidden sm:block" />
                    This combination has been shown to improve mitochondrial efficiency by 
                    <span className="font-bold text-lg text-blue-600 dark:text-blue-400 mx-1 hover:scale-110 inline-block transition-transform duration-300">22%</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}