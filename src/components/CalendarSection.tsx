import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const CalendarSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Schedule & Availability
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Check my availability and upcoming events
        </p>
      </div>
      
      <Card className="glass-card p-8 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border-border scale-125 pointer-events-auto"
            classNames={{
              months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-lg font-semibold text-foreground",
              nav: "space-x-1 flex items-center",
              nav_button: "h-9 w-9 bg-secondary/50 hover:bg-secondary text-foreground p-0 opacity-80 hover:opacity-100 rounded-md transition-all",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse space-y-1",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-12 font-medium text-sm",
              row: "flex w-full mt-2",
              cell: "h-12 w-12 text-center text-sm p-0 relative hover:bg-accent/10 rounded-md transition-colors",
              day: "h-12 w-12 p-0 font-normal hover:bg-accent/20 rounded-md transition-all",
              day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground font-semibold",
              day_today: "bg-accent/20 text-accent-foreground font-semibold border border-accent/50",
              day_outside: "text-muted-foreground opacity-40",
              day_disabled: "text-muted-foreground opacity-30",
            }}
          />
        </div>
      </Card>

      {/* Try Me Bar */}
      <Card className="glass-card max-w-4xl mx-auto p-8 border-primary/30">
        <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-semibold text-primary">Try Me Out</h3>
            <p className="text-muted-foreground">
              Explore my projects and see what I can do for you. Let's build something amazing together.
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium">
              Available Now
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CalendarSection;
