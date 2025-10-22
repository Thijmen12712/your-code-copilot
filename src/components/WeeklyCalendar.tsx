import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const WeeklyCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(0);

  // Generate hours (8 AM to 8 PM)
  const hours = Array.from({
    length: 13
  }, (_, i) => i + 8);

  // Get current week dates
  const getWeekDates = (offset: number) => {
    const today = new Date();
    const first = today.getDate() - today.getDay() + offset * 7;
    return Array.from({
      length: 7
    }, (_, i) => {
      const date = new Date(today.setDate(first + i));
      return {
        day: date.toLocaleDateString('en-US', {
          weekday: 'short'
        }),
        date: date.getDate(),
        fullDate: new Date(date)
      };
    });
  };
  const weekDates = getWeekDates(currentWeek);

  // Sample appointments (you can replace this with Google Calendar data)
  const appointments = [{
    day: 1,
    hour: 10,
    duration: 1,
    title: "Team Meeting"
  }, {
    day: 2,
    hour: 14,
    duration: 2,
    title: "Client Call"
  }, {
    day: 4,
    hour: 9,
    duration: 1,
    title: "Code Review"
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Probeer het zelf uit en maak een afspraak!</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)} className="border-primary/20 hover:bg-primary/10">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)} className="border-primary/20 hover:bg-primary/10">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="glass-card p-4 overflow-hidden">
        <ScrollArea className="h-[600px] w-full">
          <div className="min-w-[800px]">
            {/* Header with days */}
            <div className="grid grid-cols-8 gap-2 mb-2 sticky top-0 bg-card z-10 pb-2">
              <div className="text-sm font-medium text-muted-foreground p-2">Time</div>
              {weekDates.map((date, i) => <div key={i} className="text-center p-2 rounded-lg bg-secondary/30">
                  <div className="text-sm font-medium text-foreground">{date.day}</div>
                  <div className="text-xs text-muted-foreground">{date.date}</div>
                </div>)}
            </div>

            {/* Time slots */}
            {hours.map(hour => <div key={hour} className="grid grid-cols-8 gap-2 border-t border-border/50">
                <div className="p-4 text-sm text-muted-foreground font-medium">
                  {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </div>
                {weekDates.map((_, dayIndex) => {
              const appointment = appointments.find(apt => apt.day === dayIndex && apt.hour === hour);
              return <div key={dayIndex} className="min-h-[60px] p-2 border-l border-border/30 hover:bg-accent/10 transition-colors relative" style={{
                background: hour % 2 === 0 ? 'hsl(var(--secondary) / 0.3)' : 'transparent'
              }}>
                      {appointment && <div className="absolute inset-2 bg-primary text-primary-foreground rounded p-2 text-xs font-medium overflow-hidden" style={{
                  height: `${appointment.duration * 60}px`
                }}>
                          {appointment.title}
                        </div>}
                    </div>;
            })}
              </div>)}
          </div>
        </ScrollArea>
      </Card>

      {/* Try Me Bar */}
      <Card className="glass-card p-8 border-primary/30">
        <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary">Probeer ons systeem uit +31 970</h3>
            <p className="text-muted-foreground">Maak een afspraak bij onze virtuele kapperszaak</p>
          </div>
          <div className="shrink-0">
            <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium">
              Available Now
            </div>
          </div>
        </div>
      </Card>
    </div>;
};
export default WeeklyCalendar;