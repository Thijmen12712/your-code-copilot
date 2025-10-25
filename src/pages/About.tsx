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
                About <span className="font-bold">Vocari AI</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2025, Vocari AI emerged from a vision to revolutionize how businesses interact with their customers through intelligent automation. What started as a passion project has quickly evolved into a cutting-edge AI solutions provider, combining the latest advancements in artificial intelligence with practical, real-world applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our journey began with a simple question: How can we make AI accessible and truly useful for businesses of all sizes? Today, we're building the future of customer engagement, one intelligent conversation at a time.
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
              Our <span className="font-bold">Story</span>
            </h2>
            
            <Card className="p-8 md:p-12 bg-card border">
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  Vocari AI was founded with a clear mission: to bridge the gap between advanced artificial intelligence and everyday business needs. In an era where AI is transforming industries, we recognized that many businesses struggle to implement these technologies effectively.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team of AI specialists and business strategists came together to create solutions that are not just technologically advanced, but genuinely practical. We focus on voice AI and intelligent automation that works seamlessly, handles real conversations, and delivers measurable results.
                </p>
                <p className="leading-relaxed">
                  As a young company, we're agile, innovative, and deeply committed to our clients' success. We're not bound by legacy systems or outdated thinking – instead, we leverage the very latest in AI technology to create solutions that are modern, efficient, and built for the future.
                </p>
              </div>
            </Card>
          </div>

          {/* Our Values Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our <span className="font-bold">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innovation First</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of AI technology, constantly exploring new possibilities and pushing boundaries to deliver breakthrough solutions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Client Partnership</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We work closely with clients to understand their unique challenges and create tailored AI solutions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional results.
                </p>
              </Card>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Why <span className="font-bold">Choose Us</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Cutting-Edge Technology</h3>
                <p className="text-muted-foreground">
                  As a new company, we're built on the latest AI models and technologies. No legacy systems, no outdated approaches – just modern, powerful solutions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-[0_8px_24px_-6px_hsl(var(--primary)/0.3)] transition-all bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-purple-500 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Agile & Responsive</h3>
                <p className="text-muted-foreground">
                  Being a nimble startup means we can adapt quickly to your needs, implement changes rapidly, and provide personalized attention to every client.
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
