import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, TrendingUp, Shield } from "lucide-react";

interface RecoveryTool {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  rating: number;
  benefit: string;
  category: string;
  featured: boolean;
}

const recoveryTools: RecoveryTool[] = [
  {
    id: "1",
    title: "Full-Body Infrared Saunas",
    description: "Medical-grade near, mid, and far-infrared technology for deep tissue penetration and cardiovascular benefits.",
    priceRange: "$900 - $4,995",
    rating: 4.8,
    benefit: "Detoxification and cardiovascular support",
    category: "Therapy",
    featured: true
  },
  {
    id: "2",
    title: "PEMF Therapy Mats",
    description: "Pulsed Electromagnetic Field therapy for cellular recovery and pain management.",
    priceRange: "$399 - $3,249",
    rating: 4.6,
    benefit: "Cellular recovery and joint pain management",
    category: "Recovery",
    featured: true
  },
  {
    id: "3",
    title: "Red Light Therapy Panels",
    description: "Clinical-strength red and near-infrared light for optimal ATP production and skin health.",
    priceRange: "$450+",
    rating: 4.7,
    benefit: "Optimize ATP production and skin health",
    category: "Light Therapy",
    featured: true
  }
];

export default function RecoveryLab() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">The Recovery Lab</Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              Professional-Grade Recovery at Home
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              We've tested the tech so you don't have to. Explore tools that actually move 
              the needle on your biomarkers.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4 text-green-600" />
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span>Expert Reviewed</span>
              </div>
            </div>
          </div>

          {/* Featured Tools */}
          <div className="grid gap-8 lg:grid-cols-3 mb-12">
            {recoveryTools.map((tool) => (
              <Card key={tool.id} className={`relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${tool.featured ? 'ring-2 ring-emerald-500/50' : ''}`}>
                {tool.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-emerald-500 hover:bg-emerald-600">
                      Editor's Choice
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-16 w-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {tool.category}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Benefit:</span>
                      <span className="text-sm text-emerald-600 dark:text-emerald-400">
                        {tool.benefit}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Rating:</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="text-sm">{tool.rating}/5.0</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Price:</span>
                      <span className="text-sm font-bold text-foreground">
                        {tool.priceRange}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-gradient-to-r from-emerald-600 to-blue-600" asChild>
                      <a href="/assessment">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Get Personalized Assessment
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="/protocols">
                        View Related Protocols
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Section */}
          <Card className="max-w-4xl mx-auto border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Why Trust Our Recommendations?</h3>
              
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="space-y-2">
                  <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-semibold">Lab Tested</h4>
                  <p className="text-sm text-muted-foreground">
                    Every device undergoes 90-day testing with real biomarkers
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-semibold">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Average 31% improvement in recovery metrics across users
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Star className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-semibold">Expert Backed</h4>
                  <p className="text-sm text-muted-foreground">
                    Reviewed by longevity physicians and health researchers
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Affiliate Disclosure:</strong> This site contains affiliate links. 
                  We may earn a commission at no extra cost to you, supporting our independent research.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}