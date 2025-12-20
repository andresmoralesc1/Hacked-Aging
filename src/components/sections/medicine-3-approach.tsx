import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Activity, Brain, Heart } from "lucide-react";

export default function Medicine3Approach() {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-6">
        <Badge variant="secondary" className="text-sm px-4 py-2">Medicine 3.0 Philosophy</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          From Reactive to 
          <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Proactive Health</span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Traditional medicine waits for you to get sick. We don't. We focus on the <span className="font-semibold">"Four Horsemen"</span> 
          of aging: metabolic drift, physical decline, cognitive fog, and hormonal imbalance.
        </p>
      </div>

      {/* Data-Driven Approach */}
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 dark:from-gray-900 dark:via-blue-900/20 dark:to-emerald-900/20 overflow-hidden">
        <CardContent className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Activity className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-md">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Data-Driven Biology</h3>
                  <p className="text-gray-600 dark:text-gray-400">Precision health optimization</p>
                </div>
              </div>
              
              {/* Health Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/pexels-health.jpg" 
                  alt="Health monitoring and optimization" 
                  loading="lazy"
                  className="w-full h-48 object-cover"
                  style={{ 
                    contentVisibility: 'auto',
                    containIntrinsicSize: '800px 300px'
                  }}
                />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-xs text-white font-medium">Real-time health tracking</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Using data from wearables like <span className="font-semibold text-blue-600">Oura</span> and <span className="font-semibold text-emerald-600">WHOOP</span>, 
                we help you master your biology. Track, measure, and optimize what actually matters for longevity.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "HRV", benefit: "Recovery", color: "from-blue-500 to-blue-600" },
                  { metric: "RHR", benefit: "Fitness", color: "from-green-500 to-green-600" },
                  { metric: "Sleep", benefit: "Performance", color: "from-purple-500 to-purple-600" },
                  { metric: "VO₂ Max", benefit: "Longevity", color: "from-orange-500 to-orange-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className={`w-2 h-8 bg-gradient-to-b ${item.color} rounded-full`}></div>
                    <div>
                      <div className="font-bold text-lg">{item.metric}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.benefit}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Quote */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-emerald-100/20 dark:from-blue-900/10 dark:to-emerald-900/10 rounded-2xl"></div>
              <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="mb-4 text-4xl text-gray-300 dark:text-gray-600">"</div>
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  The four horsemen of chronic disease are driven by measurable, modifiable factors. 
                  The future of healthcare is personalized, preventative, and data-driven.
                </blockquote>
                <footer>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">Peter Attia, MD</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Longevity Medicine Pioneer</div>
                </footer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}