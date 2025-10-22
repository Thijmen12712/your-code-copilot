import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactDialog from "@/components/ContactDialog";
import CalendarSection from "@/components/CalendarSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const featuresReveal = useScrollReveal();
  const calendarReveal = useScrollReveal();
  const contactReveal = useScrollReveal();
  
  return <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              AI Innovation & Research
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ThijmenAI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">Turning AI ideas into real results.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg gap-2 group" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-primary/20 hover:bg-primary/10" onClick={() => setIsContactOpen(true)}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresReveal.ref}
        className={`container mx-auto px-6 py-20 transition-all duration-1000 ${
          featuresReveal.isVisible 
            ? "opacity-100 blur-0" 
            : "opacity-30 blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI Research</h3>
              <p className="text-muted-foreground">Exploring the frontiers of intelligence — where data meets discovery.</p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">Turning bold ideas into breakthroughs that shape the future.</p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Implementation</h3>
              <p className="text-muted-foreground">From concept to code — making vision work in the real world.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section 
        ref={calendarReveal.ref}
        className={`container mx-auto px-6 py-20 transition-all duration-1000 ${
          calendarReveal.isVisible 
            ? "opacity-100 blur-0" 
            : "opacity-30 blur-md"
        }`}
      >
        <CalendarSection />
      </section>

      {/* Contact Section */}
      <section 
        ref={contactReveal.ref}
        id="contact" 
        className={`container mx-auto px-6 py-20 transition-all duration-1000 ${
          contactReveal.isVisible 
            ? "opacity-100 blur-0" 
            : "opacity-30 blur-md"
        }`}
      >
        <Card className="glass-card max-w-2xl mx-auto p-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">Come in contact with us to book a free intake conversation</p>
          <div className="pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => setIsContactOpen(true)}>
              Contact Me
            </Button>
          </div>
        </Card>
      </section>
      
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>;
};
export default Index;