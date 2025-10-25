import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Scissors, CheckCircle, Sparkles, Calendar } from "lucide-react";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import WeeklyCalendar from "@/components/WeeklyCalendar";

const AgentTest = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen light-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center gap-6">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                <Scissors className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              Test Onze <span className="text-primary font-bold">AI Receptionist</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wij maken slimme AI-recepties voor bedrijven zoals het jouwe. Ervaar het zelf door een afspraak te maken bij onze virtuele kapperszaak - een live demo van wat wij voor jou kunnen bouwen!
            </p>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Bereikbaar</h3>
              <p className="text-muted-foreground">
                Jouw AI-agent neemt elk gesprek aan, dag en nacht. Geen gemiste afspraken meer.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Natuurlijk Gesprek</h3>
              <p className="text-muted-foreground">
                Onze AI spreekt vloeiend Nederlands en begrijpt wat klanten willen.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Automatisch Plannen</h3>
              <p className="text-muted-foreground">
                Afspraken worden direct ingepland in jouw agenda, volledig automatisch.
              </p>
            </Card>
          </div>

          {/* Try It Live Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Probeer Het <span className="font-bold">Live</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bel naar onze virtuele kapperszaak en boek een afspraak. Dit is precies hoe jouw AI-receptionist zal werken voor jouw bedrijf!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8 space-y-8 bg-card border shadow-lg">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">Demo AI-Agent Actief</span>
                </div>
                
                <div className="text-center space-y-3">
                  <p className="text-lg font-medium">Bel naar:</p>
                  <h3 className="text-4xl md:text-5xl font-bold">+31 97010253429</h3>
                  <p className="text-sm text-muted-foreground">Klik om te bellen op mobiel</p>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-lg"
                  asChild
                >
                  <a href="tel:+31970010253429">
                    <Phone className="w-5 h-5 mr-2" />
                    Bel Virtuele Kapper Nu
                  </a>
                </Button>

                <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                  <h4 className="font-semibold text-center">Wat Gebeurt Er?</h4>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>AI-agent beantwoordt jouw oproep</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>Vraagt welke dienst je wilt (knipbeurt, baard, etc.)</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>Kijkt naar beschikbare tijden</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">4.</span>
                      <span>Bevestigt jouw afspraak</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">5.</span>
                      <span>Verschijnt direct in de agenda hieronder! ⬇️</span>
                    </li>
                  </ol>
                </Card>
              </Card>
            </div>
          </div>

          {/* Live Calendar Section */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Live <span className="font-bold">Demo Agenda</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Kijk hoe afspraken automatisch verschijnen nadat je belt
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">Live updates - geen refresh nodig</span>
              </div>
            </div>

            <WeeklyCalendar />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-3xl p-12 text-center text-white space-y-6">
            <Sparkles className="w-12 h-12 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Klaar Voor Jouw <span className="font-bold">Eigen AI-Agent?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Net zoals onze virtuele kapper kunnen wij een AI-receptionist bouwen voor jouw bedrijf. Volledig aangepast aan jouw diensten, agenda en stijl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg"
                onClick={() => setIsContactOpen(true)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Neem Contact Op
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Meer Informatie
              </Button>
            </div>
            <p className="text-sm opacity-75 pt-4">
              🎉 Beta aanbieding: Gratis integratie + 200 gratis minuten per maand
            </p>
          </div>
        </div>
      </main>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
};

export default AgentTest;
