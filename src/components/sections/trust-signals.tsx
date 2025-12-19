import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, BookOpen, ExternalLink } from "lucide-react";

export default function TrustSignals() {
  return (
    <section className="py-16 bg-muted/50 border-t">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Evidence-Based Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold">Evidence-Based Content</h2>
              </div>
              
              <Card className="border-0">
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm leading-relaxed">
                    Our protocols are derived from peer-reviewed research (PubMed, NIH) 
                    and clinical insights from longevity experts. Every recommendation is 
                    cross-referenced with current scientific literature.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Peer-reviewed sources only</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Updated quarterly with latest research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm">No marketing hype, just science</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-xs text-blue-800 dark:text-blue-200">
                      <strong>Research Database:</strong> We analyze 200+ studies monthly 
                      from NEJM, Nature Medicine, Cell Metabolism, and leading longevity journals.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Medical & Legal Disclosures */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-2xl font-bold">Important Disclosures</h2>
              </div>
              
              {/* Medical Disclaimer */}
              <Card className="border-0 border-l-4 border-red-500 bg-red-50/50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Medical Disclaimer
                  </h3>
                  <p className="text-sm leading-relaxed text-red-700 dark:text-red-300">
                    The information on Hacked Aging is for educational purposes only 
                    and not a substitute for professional medical advice. Always consult 
                    your physician before starting new protocols, supplements, or 
                    exercise programs.
                  </p>
                </CardContent>
              </Card>

              {/* Affiliate Disclosure */}
              <Card className="border-0 border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Affiliate Disclosure
                  </h3>
                  <p className="text-sm leading-relaxed text-blue-700 dark:text-blue-300">
                    This site contains affiliate links. We may earn a commission 
                    at no extra cost to you, supporting our independent research. 
                    We only recommend products we've tested or have strong scientific backing.
                  </p>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700">
                  ✅ Science-Backed
                </Badge>
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700">
                  📚 Peer-Reviewed
                </Badge>
                <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-700">
                  🔬 Lab-Tested
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-700">
                  🤝 Transparent
                </Badge>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-12 pt-8 border-t text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground mb-4">
                <strong>E-E-A-T Standards:</strong> We follow Google's guidelines for 
                Expertise, Authoritativeness, and Trustworthiness in health content.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-xs text-muted-foreground">Research Papers Analyzed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">25K+</div>
                  <div className="text-xs text-muted-foreground">YouTube Community</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-xs text-muted-foreground">Products Tested</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}