import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb, Users, Award, TrendingUp, Globe } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen light-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Over <span className="font-bold">Vocari AI</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Begonnen in 2025, Vocari AI is een jong en dynamisch bedrijf dat zich richt op het leveren van AI-receptionisten voor bedrijven in Nederland. We zijn gevestigd in Wassenaar en bestaan uit een klein team van gepassioneerde die volop geloven in de kracht van kunstmatige intelligentie om bedrijfsprocessen te transformeren.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                De reis begon met een eenvoudige maar krachtige missie: het toegankelijk maken van geavanceerde AI-technologieën voor bedrijven. We zijn begonnen als een startup met een visie om innovatieve AI-oplossingen te bieden die niet alleen technologisch geavanceerd zijn, maar ook praktisch en gebruikersvriendelijk.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)]">
              <img 
                src={aboutHero} 
                alt="Vocari AI - Innovative AI Solutions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Our Story Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Ons <span className="font-bold">Verhaal</span>
            </h2>
            
            <Card className="p-8 md:p-12 bg-card border">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  Vocari AI werd opgericht met een duidelijke visie: bedrijven in Nederland helpen hun volledige potentieel te bereiken door middel van AI-technologieën. We hebben de afgelopen maanden hard gewerkt om onze expertise op dit gebied te bouwen en onze eerste AI-oplossigen te ontwikkelen.
                </p>
                <p className="leading-relaxed mb-4">
                  Wij zijn momenteel nog in de test fase, waarbij we onze software nog grondig testen en verfijnen om ervoor te zorgen dat we alleen de beste kwaliteit leveren aan onze klanten. We hopen daarom binnekort onze eerste test klanten te mogen verwelkomen om samen met hen de toekomst van AI-gedreven bedrijfsoplossingen vorm te geven.
                </p>
                <p className="leading-relaxed">
                  Als een jong bedrijf zijn we enthousiast over de mogelijkheden die voor ons liggen en kijken we ernaar uit om samen met onze klanten te groeien en te innoveren in de snel evoluerende wereld van kunstmatige intelligentie.
                </p>
              </div>
            </Card>
          </div>

          {/* Our Values Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Onze <span className="font-bold">Waardes</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innovatie eerst</h3>
                <p className="text-muted-foreground">
                  Wij blijven in de voorhoede van AI-ontwikkeling en integreren de nieuwste technologiëen in onze oplossingen om onze klaten een concurrentievoordeel te bieden.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">B2B samenwerking</h3>
                <p className="text-muted-foreground">
                  Jouw succes is ons succes. We werken nauw samen met klanten om hun unieke uitdagingen te begrijpen en op maat gemaakte oplossingen te creëren
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Uitmuntendheid</h3>
                <p className="text-muted-foreground">
                  We streven naar uitmuntendheid in alles wat we doen, van de technologie die we bouwen tot het de ondersteuning aan de klanten die we bieden.
                </p>
              </Card>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Waarom <span className="font-bold">Ons Kiezen</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innoverende technologieën</h3>
                <p className="text-muted-foreground">
                  We maken gebruik van de nieuwste AI-ontwikkelingen om ervoor te zorgen dat jouw bedrijf altijd voorop loopt in de markt.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Wendbaar & Responsief</h3>
                <p className="text-muted-foreground">
                  Als een jong en dynamisch bedrijf kunnen we snel inspelen op veranderingen in de markt en de behoeften van onze klanten.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
