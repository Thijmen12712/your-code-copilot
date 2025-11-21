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

  // Generate hours (9 AM to 9 PM)
  const hours = Array.from({
    length: 13
  }, (_, i) => i + 9);

  // Get current week dates
  const getWeekDates = (offset: number) => {
    const today = new Date();
    const first = today.getDate() - today.getDay() + offset * 7;
    const weekDates = Array.from({
      length: 7
    }, (_, i) => {
      const date = new Date(today.setDate(first + i));
      return {
        day: date.toLocaleDateString('en-US', {
          weekday: 'short'
        }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        fullDate: new Date(date)
      };
    });
    return weekDates;
  };
  
  const weekDates = getWeekDates(currentWeek);
  
  // Get current month and year from the first date of the week
  const getCurrentMonthYear = () => {
    if (weekDates.length === 0) return { month: '', year: '' };
    const firstDate = weekDates[0].fullDate;
    return {
      month: firstDate.toLocaleDateString('en-US', { month: 'long' }),
      year: firstDate.getFullYear()
    };
  };
  
  const { month, year } = getCurrentMonthYear();

  // Fetch appointments from database (shows error details and offers retry)
  useEffect(() => {
    let mounted = true;

    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase.from('appointments').select('*');

        if (!mounted) return;

        if (error) {
          console.error('Error fetching appointments:', error);
          // show detailed error message to help diagnose the issue
          toast({
            title: 'Error loading appointments',
            description: error.message || JSON.stringify(error),
            variant: 'destructive'
          });
        } else {
          setAppointments(data || []);
        }
      } catch (err: any) {
        console.error('Unexpected error fetching appointments:', err);
        toast({
          title: 'Error',
          description: err?.message || 'Unknown error fetching appointments',
          variant: 'destructive'
        });
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
      mounted = false;
      try {
        supabase.removeChannel(channel);
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, [toast]);
  return <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">{month} {year}</h2>
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
                  <div className="text-xs text-muted-foreground">{date.month} {date.date}</div>
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
                // Use the hour directly from the database (already in correct timezone)
                const aptHour = Math.floor(apt.hour);
                return aptDate.toDateString() === date.fullDate.toDateString() && aptHour === hour;
              });
              
              return <div key={dayIndex} className="h-20 p-1 border-l hover:bg-muted/30 transition-colors relative" style={{
                background: hour % 2 === 0 ? 'hsl(var(--muted) / 0.3)' : 'transparent'
              }}>
                      {dayAppointments.map((apt, idx) => {
                        // Calculate minute offset within the hour (0-60 minutes)
                        const minutes = (apt.hour % 1) * 60;
                        const topOffset = (minutes / 60) * 80; // 80px is the height of each hour slot
                        
                        // Calculate end time for display
                        const startHour = Math.floor(apt.hour);
                        const endHour = Math.floor(apt.hour + (apt.duration / 60));
                        const startMinute = Math.floor(minutes);
                        const endMinute = Math.floor(((apt.hour + (apt.duration / 60)) % 1) * 60);
                        
                        const formatTime = (h: number, m: number) => {
                          const period = h >= 12 ? 'pm' : 'am';
                          const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
                          return `${displayHour}${m > 0 ? `:${m.toString().padStart(2, '0')}` : ''}${period}`;
                        };
                        
                        const timeRange = `${formatTime(startHour, startMinute)} - ${formatTime(endHour, endMinute)}`;
                        
                        return (
                          <div key={idx} className="absolute left-0.5 right-0.5 bg-primary text-white rounded-lg p-2 text-xs font-medium shadow-lg flex flex-col justify-center leading-tight border border-primary/20" style={{
                            top: `${topOffset + 2}px`,
                            height: `${(apt.duration / 60) * 80}px`,
                            minHeight: '60px'
                          }}>
                            <div className="font-semibold line-clamp-2 mb-1">{apt.summary}</div>
                            <div className="text-[10px] opacity-90">{timeRange}</div>
                          </div>
                        );
                      })}
                    </div>;
            })}
              </div>)}
          </div>
        </ScrollArea>
      </Card>

    </div>;
};
export default WeeklyCalendar;