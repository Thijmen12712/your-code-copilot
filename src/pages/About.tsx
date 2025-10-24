import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen light-gradient-bg">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              About <span className="font-bold">Vocari AI</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're pioneering the future of artificial intelligence, helping businesses transform through innovative AI solutions.
            </p>
          </div>

          {/* Our Journey Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our <span className="font-bold">Journey</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-12 space-y-6 text-center bg-blue-50 border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Add your team photo here</p>
              </Card>

              <Card className="p-12 space-y-6 text-center bg-purple-50 border-purple-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Add your workspace photo here</p>
              </Card>

              <Card className="p-12 space-y-6 text-center bg-blue-50 border-blue-100 hover:shadow-lg transition-shadow">
                <div className="flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Add your achievement photo here</p>
              </Card>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Our <span className="font-bold">Mission</span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                At Vocari AI, we believe in democratizing artificial intelligence. Our mission is to make cutting-edge AI technology accessible to businesses of all sizes, empowering them to innovate, optimize, and thrive in an increasingly digital world. We combine deep technical expertise with a human-centered approach to deliver solutions that truly make a difference.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay at the forefront of AI technology, constantly exploring new possibilities and pushing boundaries to deliver breakthrough solutions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
                <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Partnership</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We work closely with clients to understand their unique challenges and create tailored AI solutions.
                </p>
              </Card>

              <Card className="p-8 space-y-4 hover:shadow-lg transition-shadow bg-card border">
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
        </div>
      </main>
    </div>
  );
};

export default About;
