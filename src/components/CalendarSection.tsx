import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Sparkles } from "lucide-react";
import WeeklyCalendar from "./WeeklyCalendar";

const CalendarSection = () => {
  return (
    <div className="space-y-8">
      {/* Call to Action Card */}
      <Card className="max-w-md mx-auto p-8 text-center space-y-6 bg-card border shadow-lg">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          AI Agent 24/7 beschikbaar
        </div>
        
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">+31 97010253429</h3>
          <p className="text-sm text-muted-foreground">Klik om te bellen op mobiel</p>
        </div>
        
        <Button 
          size="lg" 
          className="w-full text-lg gap-2"
          asChild
        >
          <a href="tel:+31970010253429">
            <Phone className="w-5 h-5" />
            Bel AI Agent Nu
          </a>
        </Button>
        
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-sm font-medium">Meteen Geboekt</p>
          </div>
          <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
            <Calendar className="w-6 h-6 text-accent mx-auto mb-2" />
            <p className="text-sm font-medium">Auto-Sync Kalender</p>
          </div>
        </div>
      </Card>

      {/* Weekly Calendar */}
      <WeeklyCalendar />
    </div>
  );
};

export default CalendarSection;
