import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, Brain, Heart } from "lucide-react";

export default function Medicine3Approach() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Medicine 3.0 Philosophy</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              From Reactive to Proactive Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional medicine waits for you to get sick. We don't. We focus on the "Four Horsemen" 
              of aging: metabolic drift, physical decline, cognitive fog, and hormonal imbalance.
            </p>
          </div>

          {/* Data-Driven Approach */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Activity className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Data-Driven Biology</h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Using data from wearables like Oura and WHOOP, we help you master your biology. 
                Track, measure, and optimize what actually matters.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">HRV</div>
                  <div className="text-sm text-muted-foreground">Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">RHR</div>
                  <div className="text-sm text-muted-foreground">Fitness</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Sleep</div>
                  <div className="text-sm text-muted-foreground">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">VO₂ Max</div>
                  <div className="text-sm text-muted-foreground">Longevity</div>
                </div>
              </div>

              {/* Scientific Backing */}
              <div className="mt-8 p-4 bg-white/50 dark:bg-black/30 rounded-lg border">
                <p className="text-sm text-muted-foreground italic">
                  "The four horsemen of chronic disease are driven by measurable, modifiable factors. 
                  The future of healthcare is personalized, preventative, and data-driven."
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  — Peter Attia, MD • Longevity Medicine Pioneer
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}