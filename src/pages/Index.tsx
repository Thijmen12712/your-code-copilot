import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactDialog from "@/components/ContactDialog";
import CalendarSection from "@/components/CalendarSection";
import SavingsCalculator from "@/components/SavingsCalculator";
import AudioTestSection from "@/components/AudioTestSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Phone, Scissors, Sparkles, Zap, Target, Shield, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return <div className="min-h-screen light-gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              AI Receptionists
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight flex items-center justify-center gap-3 flex-wrap">
            Vocari <span className="text-primary">AI</span>
            <span className="text-lg font-normal bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">beta</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg gap-2" onClick={() => setIsContactOpen(true)}>
              <Phone className="w-5 h-5" />
              Contact Me
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2" asChild>
              <Link to="/about">
                Find Out More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Try Our AI Agent Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
              <Scissors className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">Probeer onze AI Agent</h2>
          <p className="text-lg text-muted-foreground">
            Bel nu en maak een afspraak bij onze virtuele kapperszaak. Boek bijvoorbeeld een afspraak voor een knipbeurt in.
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="container mx-auto px-6 py-12">
        <CalendarSection />
      </section>

      {/* Savings Calculator Section */}
      <section className="container mx-auto px-6 py-20">
        <SavingsCalculator />
      </section>

      {/* Audio Test Section */}
      <section className="container mx-auto px-6 py-20">
        <AudioTestSection />
      </section>

      {/* Beta Test Phase Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center space-y-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-2 border-primary/20 shadow-xl animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4 animate-pulse">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-3">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold animate-scale-in">
                🚀 Beta Test Fase
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Help Ons Groeien</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Vocari AI is momenteel in test fase. We zijn actief op zoek naar bedrijven die willen helpen ons product te verfijnen en te verbeteren.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-xl bg-card/50 border hover:shadow-lg transition-all hover-scale">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Early Adopter Voordelen</h4>
                <p className="text-sm text-muted-foreground">Krijg toegang tot premium functies tegen gereduceerde prijzen</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 border hover:shadow-lg transition-all hover-scale">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-semibold mb-2">Direct Invloed</p>
                <p className="text-sm text-muted-foreground">Jouw feedback bepaalt de ontwikkeling van ons product</p>
              </div>
              
              <div className="p-6 rounded-xl bg-card/50 border hover:shadow-lg transition-all hover-scale">
                <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold mb-2">Persoonlijke Support</p>
                <p className="text-sm text-muted-foreground">Directe lijn naar ons ontwikkelteam voor optimale service</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground pt-4 max-w-xl mx-auto">
              We zoeken naar innovatieve bedrijven die samen met ons de toekomst van AI-receptionisten 
              willen vormgeven. Word partner in onze groei!
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Vocari AI Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="font-bold">Vocari AI</span>
            </h2>
            <p className="text-lg text-muted-foreground">Verfijnde AI receptionisten voor alle soorten bedrijven.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Oplossingen op maat</h3>
              <p className="text-muted-foreground">
                Leverage advanced AI algorithms to solve complex business challenges with unprecedented efficiency.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Bliksem snel</h3>
              <p className="text-muted-foreground">
                Experience real-time processing and instant insights that keep your business ahead of the curve.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Doelgerichte conversaties</h3>
              <p className="text-muted-foreground">
                Achieve pinpoint accuracy in decision-making with data-driven AI recommendations.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Veilig & vertrouwbaar</h3>
              <p className="text-muted-foreground">Jouw data blijft altijd in goede handen. Onze AI-receptionisten voldoen aan  beveiligingsnormen en behandelen elke interactie met maximale zorg en privacy.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="font-bold">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">Alles wat je moet weten over Vocari AI</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                What services does Vocari AI offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Vocari AI provides cutting-edge AI call agents and receptionist solutions designed specifically for local businesses. We specialize in creating personalized AI solutions that handle customer interactions, appointments, and inquiries 24/7.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                How long does implementation take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Implementation typically takes 1-2 weeks depending on your specific requirements. We work closely with you to ensure a smooth integration with your existing systems and workflows.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                Do you offer ongoing support?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we provide comprehensive ongoing support and maintenance. Our team is available to help you optimize your AI agents and ensure they continue to meet your business needs as they evolve.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                What industries do you work with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We primarily focus on local businesses including salons, barbershops, medical practices, law firms, and other service-based industries that benefit from automated appointment scheduling and customer service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Getting started is easy! Simply contact us through our contact form or try our demo AI agent by calling the number provided. We'll schedule a free consultation to discuss your specific needs and create a customized solution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left font-semibold">
                What are your pricing models?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer flexible pricing models tailored to your business size and needs. Contact us for a personalized quote based on call volume, features required, and level of customization needed for your AI agent.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>;
};
export default Index;