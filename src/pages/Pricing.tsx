import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Calendar, Sparkles, Zap, Euro, Clock } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

const Pricing = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen light-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                Beta Lancering ✨
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Simpele en <span className="font-bold">Eerlijke</span> Prijzen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bevinden ons momenteel in beta fase. Help ons groeien en profiteer van onze exclusieve startaanbieding!
            </p>
          </div>

          {/* Beta Aanbieding */}
          <div className="max-w-3xl mx-auto">
            <Card className="p-12 space-y-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-primary/20">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Beta Aanbieding</h2>
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div className="text-6xl font-bold">Gratis</div>
                <p className="text-lg text-muted-foreground">Volledig gratis tijdens de beta periode</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/50">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Gratis Integratie</h3>
                    <p className="text-sm text-muted-foreground">
                      Wij zorgen voor de volledige installatie en koppeling met jouw systemen. Geen technische kennis nodig.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/50">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">200 Minuten Gratis</h3>
                    <p className="text-sm text-muted-foreground">
                      Ontvang maandelijks 200 minuten aan gratis beltijd voor je AI-agent. Perfect om mee te starten!
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <h3 className="text-xl font-bold mb-6">Wat krijg je?</h3>
                <Button 
                  size="lg" 
                  className="text-lg"
                  onClick={() => setIsContactOpen(true)}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Neem Contact Op
                </Button>
              </div>
            </Card>
          </div>

          {/* Beta Test Fase Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-10 space-y-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200/50 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300">
                    <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                    <span className="text-sm font-semibold text-amber-800">We zijn in testfase!</span>
                    <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-900">
                    Help ons groeien, profiteer van exclusieve voordelen
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">Samen ontwikkelen</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Jouw feedback helpt ons de perfecte AI-receptionist te bouwen. Als early adopter bepaal jij mee hoe onze dienst zich ontwikkelt.
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">Exclusieve voorwaarden</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Beta-gebruikers krijgen blijvende voordelen, zelfs na de officiële lancering. Vroeg instappen = langdurig profiteren.
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">Direct support</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Als testgebruiker krijg je directe toegang tot ons team. Vragen? Wensen? We staan voor je klaar en passen ons aan jouw behoeften aan.
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 space-y-3 border border-amber-200/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg">Geen verplichtingen</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We zijn in de testfase, dus geen lange contracten of verplichtingen. Probeer het uit en besluit daarna wat het beste bij je past.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground italic">
                    ⚡ Beperkt aantal plekken beschikbaar tijdens de beta-fase
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Wat is er Inbegrepen */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Wat is er <span className="font-bold">Inbegrepen?</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Eigen AI Telefoonnummer</h3>
                <p className="text-muted-foreground">
                  Nederlands sprekende AI-agent voor jouw bedrijf
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Google Calendar Sync</h3>
                <p className="text-muted-foreground">
                  Automatische koppeling met je bestaande agenda
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Persoonlijke Aanpassing</h3>
                <p className="text-muted-foreground">
                  AI getraind op jouw specifieke diensten
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">200 Gratis Minuten</h3>
                <p className="text-muted-foreground">
                  Elke maand opnieuw, geen limiet op aantal oproepen
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Real-time Updates</h3>
                <p className="text-muted-foreground">
                  Direct zichtbaar in je dashboard
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Euro className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Geen Verborgen Kosten</h3>
                <p className="text-muted-foreground">
                  Volledige transparantie, geen verrassingen
                </p>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-3xl p-12 text-center text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Klaar om te <span className="font-bold">Starten?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Sluit je aan bij andere bedrijven die hun klantenservice automatiseren met AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg"
                onClick={() => setIsContactOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Probeer de AI Agent
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <a href="/about">Meer Informatie</a>
              </Button>
            </div>
            <p className="text-sm opacity-75 pt-4">
              Heb je vragen? <span className="font-semibold">We helpen je graag verder!</span>
              <br />
              Contact ons via de homepagina of bel naar onze AI-agent voor meer informatie.
            </p>
          </div>
        </div>
      </main>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
};

export default Pricing;
