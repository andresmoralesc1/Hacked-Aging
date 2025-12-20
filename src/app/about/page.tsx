import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Target, Users } from "lucide-react";

export default function AboutPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hacked-aging.vercel.app#organization",
        name: "Hacked Aging",
        url: "https://hacked-aging.vercel.app",
        description: "Expert-led longevity platform translating Medicine 3.0 breakthroughs into daily protocols for high-performance adults over 40.",
        logo: {
          "@type": "ImageObject",
          url: "https://hacked-aging.vercel.app/logo.png",
          width: 512,
          height: 512
        },
        sameAs: [
          "https://www.youtube.com/@hackedaging",
          "https://twitter.com/hackedaging"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://linkedin.com/in/talia-chen-phd-johns-hopkins",
        name: "Dr. Talia Chen",
        familyName: "Chen",
        givenName: "Talia",
        honorificPrefix: "Dr.",
        jobTitle: "Director of Research",
        worksFor: {
          "@type": "Organization",
          name: "Hacked Aging"
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Johns Hopkins University"
        },
        knowsAbout: [
          "Neuroscience",
          "Longevity Research",
          "Biomarkers",
          "Cognitive Optimization",
          "Metabolomics"
        ],
        sameAs: "https://linkedin.com/in/talia-chen-phd-johns-hopkins"
      },
      {
        "@type": "Person",
        "@id": "https://linkedin.com/in/andres-morales-hacked-aging",
        name: "Andrés Morales",
        familyName: "Morales",
        givenName: "Andrés",
        jobTitle: "CEO & Strategic Digital Leader",
        worksFor: {
          "@type": "Organization",
          name: "Hacked Aging"
        },
        knowsAbout: [
          "Medicine 3.0",
          "Biohacking",
          "Performance Optimization",
          "Digital Health",
          "Longevity Protocols"
        ],
        sameAs: "https://linkedin.com/in/andres-morales-hacked-aging"
      },
      {
        "@type": "WebSite",
        "@id": "https://hacked-aging.vercel.app#website",
        name: "Hacked Aging",
        url: "https://hacked-aging.vercel.app",
        description: "Science-backed longevity platform for high-performance adults over 40 featuring expert guidance from Dr. Talia Chen and Andrés Morales.",
        inLanguage: "en-US",
        isAccessibleForFree: true,
        about: "Longevity, Health Optimization, Medicine 3.0"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <div className="min-h-screen bg-background">
        <div className="container py-12 md:py-24">
          <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Nuestra Misión: Democratizar la Ciencia de la Longevidad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              En Health Over 40, creemos que la mediana edad es el comienzo de tu "segundo acto" 
              de máximo rendimiento.
            </p>
          </div>

          {/* Main Content */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">
                Transformamos el Ruido en Señal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos un equipo de investigadores y entusiastas de la salud digital dedicados 
                a filtrar el ruido del marketing y entregarte soluciones basadas en datos.
              </p>
              <p className="leading-relaxed">
                La industria de la salud está saturada de "soluciones rápidas" y marketing engañoso. 
                Nosotros nos sumergimos en los estudios primarios, analizamos los datos y traducimos 
                la compleja ciencia de la longevidad en protocolos prácticos que puedes implementar hoy mismo.
              </p>
            </CardContent>
          </Card>

          {/* Differentiators */}
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Basado en Evidencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No promovemos "hacks" temporales. Citamos estudios revisados por pares 
                  y voces líderes en Medicina 3.0 como Peter Attia, Huberman, y Rhonda Patrick.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Transparencia de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilizamos dispositivos de seguimiento (CGM, wearables, Oura) 
                  para validar lo que recomendamos con datos reales de nuestra comunidad.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm">
              <CardHeader>
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Enfoque en el "Healthspan"</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nuestro objetivo no es solo vivir más años, sino que esos años sean 
                  funcionales, sin dolor y con claridad cognitiva.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Methodology */}
          <Card className="bg-muted/50 border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Nuestra Metodología</CardTitle>
              <p className="text-muted-foreground">
                Cada pieza de contenido pasa por nuestro riguroso proceso de verificación
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-w-2xl mx-auto">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Investigación de Fuentes Primarias</h4>
                    <p className="text-sm text-muted-foreground">
                      Solo utilizamos bases de datos acreditadas como PubMed, el NIH 
                      y revistas de medicina deportiva de alto impacto.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Actualización Constante</h4>
                    <p className="text-sm text-muted-foreground">
                      La ciencia de la salud cambia. Auditamos nuestro contenido 
                      trimestralmente para reflejar los nuevos hallazgos sobre longevidad.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Transparencia de Afiliación</h4>
                    <p className="text-sm text-muted-foreground">
                      Declaramos honestamente nuestras relaciones comerciales. 
                      Solo recomendamos lo que hemos probado o la ciencia respalda.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expert Team */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold">Nuestro Equipo de Expertos</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce a los profesionales detrás de Hacked Aging - líderes en investigación de longevidad 
                y optimización del rendimiento para adultos sobre 40.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Talia - PhD Expert */}
              <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src="/images/pexels-health.jpg" 
                        alt="Dr. Talia Chen" 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">Dra. Talia Chen, PhD</h4>
                      <p className="text-sm text-muted-foreground">Directora de Investigación</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">Johns Hopkins</Badge>
                        <Badge variant="secondary" className="text-xs">Neurociencia</Badge>
                        <Badge variant="secondary" className="text-xs">Longevidad</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">15+ años</span> de investigación en neurociencia del envejecimiento 
                      en Johns Hopkins. Especializada en biomarcadores de longevidad y optimización cognitiva.
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold">Áreas de Expertise:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Biomarcadores de envejecimiento biológico</li>
                        <li>• Neuroplasticidad y salud cognitiva</li>
                        <li>• Metabolómica y epigenética</li>
                        <li>• Intervenciones estilo de vida</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold">Publicaciones Destacadas:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• "Biomarkers of Biological Age: A Comprehensive Review" - Nature Aging</li>
                        <li>• "Cognitive Optimization Strategies in Mid-Life" - Cell Metabolism</li>
                        <li>• "Epigenetic Interventions for Longevity" - Science Translational Medicine</li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <a 
                        href="https://linkedin.com/in/talia-chen-phd-johns-hopkins" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Ver Perfil LinkedIn
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Andres - Strategic Leader */}
              <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src="/images/pexels-fitness.jpg" 
                        alt="Andrés Morales" 
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold">Andrés Morales</h4>
                      <p className="text-sm text-muted-foreground">CEO & Estratega Digital</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="text-xs">Medicina 3.0</Badge>
                        <Badge variant="secondary" className="text-xs">Biohacking</Badge>
                        <Badge variant="secondary" className="text-xs">Performance</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold">12+ años</span> liderando transformaciones digitales en el sector salud. 
                      Experto en traducir ciencia compleja en protocolos accionables para optimización del rendimiento.
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold">Especializaciones:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Medicina de precisión y longevidad</li>
                        <li>• Optimización del rendimiento humano</li>
                        <li>• Sistemas de seguimiento biométrico</li>
                        <li>• Estrategias de intervención preventiva</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold">Logros Profesionales:</h5>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Fundador de 3 plataformas de salud digital</li>
                        <li>• +25,000 seguidores en comunidad de optimización</li>
                        <li>• Certificado en Medicina de Longevidad (Stanford)</li>
                        <li>• Desarrollador de protocolos validados clínicamente</li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t">
                      <a 
                        href="https://linkedin.com/in/andres-morales-hacked-aging" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Ver Perfil LinkedIn
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Community Stats */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold">Únete a Nuestra Comunidad</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-muted-foreground">Miembros Activos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm text-muted-foreground">Artículos Científicos</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-muted-foreground">Protocolos Validados</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}