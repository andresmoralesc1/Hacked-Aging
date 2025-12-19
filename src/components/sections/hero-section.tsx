import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Users, Target } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                Trusted Health Information
              </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Hacked Aging:{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Science-Backed Longevity for High-Performance 40+
              </span>
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Stop guessing. Start measuring. We translate Medicine 3.0 breakthroughs 
              into daily protocols for biological age reversal and functional strength.
            </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-blue-600">
                Start Your Protocol
              </Button>
              <Button variant="outline" size="lg">
                Free Assessment
              </Button>
            </div>
            <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <p className="text-sm text-emerald-800 dark:text-emerald-200 font-medium">
                🎥 As featured in our YouTube community of <span className="font-bold">25,000+</span> health optimizers
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid gap-4">
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Today's Health Tip
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Today's Protocol: 4-minute Zone 2 cardio session + 10g collagen peptide. 
                    This combination has been shown to improve mitochondrial efficiency by 22%.
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