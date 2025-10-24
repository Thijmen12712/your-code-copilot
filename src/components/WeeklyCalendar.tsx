import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
const WeeklyCalendar = () => {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [appointments, setAppointments] = useState<any[]>([]);
  const { toast } = useToast();

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

  // Fetch appointments from database
  useEffect(() => {
    const fetchAppointments = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('*');
      
      if (error) {
        console.error('Error fetching appointments:', error);
        toast({
          title: "Error",
          description: "Failed to load appointments",
          variant: "destructive"
        });
      } else {
        setAppointments(data || []);
      }
    };

    fetchAppointments();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('appointments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'appointments'
        },
        () => {
          fetchAppointments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [toast]);
  return <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">October 2025</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="p-4 overflow-hidden bg-card border shadow-md">
        <ScrollArea className="h-[600px] w-full">
          <div className="min-w-[800px]">
            {/* Header with days */}
            <div className="grid grid-cols-8 gap-2 mb-2 sticky top-0 bg-card z-10 pb-2 border-b">
              <div className="text-sm font-medium text-muted-foreground p-2">Time</div>
              {weekDates.map((date, i) => <div key={i} className="text-center p-3 rounded-lg bg-secondary">
                  <div className="text-sm font-medium">{date.day}</div>
                  <div className="text-xs text-muted-foreground">Oct {date.date}</div>
                </div>)}
            </div>

            {/* Time slots */}
            {hours.map(hour => <div key={hour} className="grid grid-cols-8 gap-2 border-t border-border/50">
                <div className="p-4 text-sm text-muted-foreground font-medium">
                  {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                </div>
                {weekDates.map((date, dayIndex) => {
              // Find appointments for this day and hour
              const dayAppointments = appointments.filter(apt => {
                const aptDate = new Date(apt.day);
                return aptDate.toDateString() === date.fullDate.toDateString() && apt.hour === hour;
              });
              
              return <div key={dayIndex} className="h-20 p-1 border-l hover:bg-muted/30 transition-colors relative" style={{
                background: hour % 2 === 0 ? 'hsl(var(--muted) / 0.3)' : 'transparent'
              }}>
                      {dayAppointments.map((apt, idx) => (
                        <div key={idx} className="absolute top-0.5 left-0.5 right-0.5 bg-accent/90 text-white rounded p-2 text-xs font-medium shadow flex items-center justify-center text-center leading-tight border border-accent" style={{
                          height: `${(apt.duration / 60) * 80}px`
                        }}>
                          <span className="line-clamp-2">{apt.summary}</span>
                        </div>
                      ))}
                    </div>;
            })}
              </div>)}
          </div>
        </ScrollArea>
      </Card>

    </div>;
};
export default WeeklyCalendar;