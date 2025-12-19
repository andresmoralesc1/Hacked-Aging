import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Eye, TrendingUp } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
  category: string;
}

const latestVideos: Video[] = [
  {
    id: "1",
    title: "Zone 2 Training: The Sweet Spot for Longevity",
    description: "Deep dive into why 180-age HR zone is optimal for mitochondrial biogenesis and fat adaptation.",
    thumbnail: "/api/placeholder/320/180",
    duration: "18:24",
    views: "45.2K",
    publishedAt: "2 days ago",
    category: "Exercise Science"
  },
  {
    id: "2",
    title: "HRV Optimization: Biohacking Your Recovery",
    description: "Master your Heart Rate Variability with evidence-based protocols from WHOOP and Oura data.",
    thumbnail: "/api/placeholder/320/180",
    duration: "22:15",
    views: "38.7K",
    publishedAt: "5 days ago",
    category: "Recovery"
  },
  {
    id: "3",
    title: "NAD+ Precursors: Do They Actually Work?",
    description: "Comprehensive analysis of NMN, NR, and NAMPT activation for cellular rejuvenation.",
    thumbnail: "/api/placeholder/320/180",
    duration: "28:42",
    views: "52.1K",
    publishedAt: "1 week ago",
    category: "Supplements"
  }
];

export default function LatestFromChannel() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 px-4 py-2 rounded-full mb-6">
              <Play className="h-4 w-4 text-red-600 dark:text-red-400" />
              <span className="text-sm font-medium text-red-800 dark:text-red-200">
                New Content Weekly
              </span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
              Latest from the Channel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch & Learn. New deep dives every week on how to "hack" the aging process 
              with science-backed protocols.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {latestVideos.map((video) => (
              <Card key={video.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-black ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.category}
                  </div>
                  
                  {/* New Badge */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                    NEW
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views} views
                    </div>
                    <div>{video.publishedAt}</div>
                  </div>
                  
                  <Button size="sm" className="w-full group" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Play className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Watch Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6">
            <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-950/20 dark:to-blue-950/20">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Never Miss a Longevity Protocol
                </h3>
                
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join 25,000+ health optimizers getting weekly science-backed protocols 
                  for biological age reversal and functional performance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-blue-600" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Subscribe on YouTube
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#">Get Weekly Email Summaries</a>
                  </Button>
                </div>
                
                <div className="mt-6 text-xs text-muted-foreground">
                  🔔 Hit the bell icon for notifications • 📧 No spam, unsubscribe anytime
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}