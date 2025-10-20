import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              [Your introduction and background will go here]
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Background</h2>
              <p className="text-muted-foreground">
                [Your professional background and experience]
              </p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Expertise</h2>
              <p className="text-muted-foreground">
                [Your areas of expertise and specialization]
              </p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Mission</h2>
              <p className="text-muted-foreground">
                [Your mission and what drives you]
              </p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Vision</h2>
              <p className="text-muted-foreground">
                [Your vision for the future]
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
