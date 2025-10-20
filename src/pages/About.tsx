import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
const About = () => {
  return <div className="min-h-screen gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Thijmen is een koning !</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Background</h2>
              <p className="text-muted-foreground">I come from a strong foundation in AI and technology, blending research with real-world problem solving. My experience spans data-driven innovation, intelligent automation, and developing scalable solutions that make an impact.</p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Expertise</h2>
              <p className="text-muted-foreground">Artificial Intelligence, Machine Learning, and Automation — with a focus on turning complex challenges into smart, practical systems. I specialize in transforming innovative ideas into working technologies that deliver real value.</p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Mission</h2>
              <p className="text-muted-foreground">To bridge the gap between AI research and everyday use — creating tools and systems that are not only intelligent but accessible, reliable, and impactful.</p>
            </Card>

            <Card className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-semibold text-primary">Vision</h2>
              <p className="text-muted-foreground">A future where AI empowers creativity, enhances decision-making, and drives progress across every field — responsibly and sustainably.</p>
            </Card>
          </div>
        </div>
      </main>
    </div>;
};
export default About;