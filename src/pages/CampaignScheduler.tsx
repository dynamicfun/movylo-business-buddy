import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Tag, Mail, Share2 } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

interface ScheduledEvent {
  id: string;
  type: "promo" | "newsletter" | "social";
  title: string;
  date: Date;
  timeSlot: number;
}

const TIME_SLOTS = [
  "12am - 2am", "2am - 4am", "4am - 6am", "6am - 8am",
  "8am - 10am", "10am - 12pm", "12pm - 2pm", "2pm - 4pm",
  "4pm - 6pm", "6pm - 8pm", "8pm - 10pm", "10pm - 12am"
];

const mockEvents: ScheduledEvent[] = [
  { id: "1", type: "promo", title: "20% Off Sale", date: new Date(2026, 1, 3, 10), timeSlot: 5 },
  { id: "2", type: "newsletter", title: "February Update", date: new Date(2026, 1, 5, 14), timeSlot: 7 },
  { id: "3", type: "social", title: "Instagram Post", date: new Date(2026, 1, 6, 18), timeSlot: 9 },
];

const eventTypeConfig = {
  promo: { icon: Tag, label: "Promotion", color: "bg-primary/15 text-primary border-primary/20" },
  newsletter: { icon: Mail, label: "Newsletter", color: "bg-amber-500/15 text-amber-700 border-amber-500/20" },
  social: { icon: Share2, label: "Social Post", color: "bg-emerald-500/15 text-emerald-700 border-emerald-500/20" },
};

export default function CampaignScheduler() {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => 
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [events] = useState<ScheduledEvent[]>(mockEvents);
  const [selectedSlot, setSelectedSlot] = useState<{ date: Date; timeSlot: number } | null>(null);
  const [showTypeDialog, setShowTypeDialog] = useState(false);

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i));

  const navigateWeek = (direction: "prev" | "next") => {
    setCurrentWeekStart((prev) => addDays(prev, direction === "next" ? 7 : -7));
  };

  const getEventsForSlot = (date: Date, timeSlot: number) => {
    return events.filter(
      (event) => isSameDay(event.date, date) && event.timeSlot === timeSlot
    );
  };

  const handleSlotClick = (date: Date, timeSlot: number) => {
    setSelectedSlot({ date, timeSlot });
    setShowTypeDialog(true);
  };

  const handleTypeSelect = (type: "promo" | "newsletter" | "social") => {
    setShowTypeDialog(false);
    console.log("Create", type, "for", selectedSlot);
  };

  return (
    <InnerPageTemplate
      title="Schedule Campaigns"
      subtitle="Schedule your promotions, messages and social posts in advance"
      backTo="/"
    >
      <div className="space-y-5">
        {/* Intro Card */}
        <Card className="border-border/50">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Schedule your promotions and messages in advance. This allows you to organize what to send and to whom, 
              without having to do it in real time. Planning multiple promotional activities at once helps you save valuable time!
            </p>
          </CardContent>
        </Card>

        {/* Week Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("prev")}
            className="gap-1.5 rounded-lg"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
          <h3 className="text-sm font-semibold text-foreground">
            {format(weekDays[0], "MMM d")} – {format(weekDays[6], "MMM d, yyyy")}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("next")}
            className="gap-1.5 rounded-lg"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="border border-border/50 rounded-xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row - Days */}
              <div className="grid grid-cols-[80px_repeat(7,1fr)] bg-muted/40 border-b border-border/50">
                <div className="p-3 text-xs font-medium text-muted-foreground">Time</div>
                {weekDays.map((day) => (
                  <div
                    key={day.toISOString()}
                    className={`p-3 text-center border-l border-border/50 ${
                      isSameDay(day, new Date()) ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="text-xs font-semibold text-foreground">
                      {format(day, "EEE")}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {format(day, "MMM d")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {TIME_SLOTS.map((slot, slotIndex) => (
                <div
                  key={slot}
                  className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-border/30 last:border-b-0"
                >
                  <div className="p-2 text-[11px] text-muted-foreground flex items-center justify-center">
                    {slot}
                  </div>
                  {weekDays.map((day) => {
                    const slotEvents = getEventsForSlot(day, slotIndex);
                    return (
                      <div
                        key={`${day.toISOString()}-${slotIndex}`}
                        className="border-l border-border/30 p-1 min-h-[44px] hover:bg-muted/30 cursor-pointer transition-colors group relative"
                        onClick={() => handleSlotClick(day, slotIndex)}
                      >
                        {slotEvents.map((event) => {
                          const config = eventTypeConfig[event.type];
                          const Icon = config.icon;
                          return (
                            <div
                              key={event.id}
                              className={`text-[11px] p-1.5 rounded-md border ${config.color} truncate flex items-center gap-1`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Icon className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate font-medium">{event.title}</span>
                            </div>
                          );
                        })}
                        {slotEvents.length === 0 && (
                          <div className="absolute inset-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Plus className="h-4 w-4 text-muted-foreground/60" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs">
          {Object.entries(eventTypeConfig).map(([type, config]) => {
            const Icon = config.icon;
            return (
              <div key={type} className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md border ${config.color}`}>
                  <Icon className="h-3 w-3" />
                </div>
                <span className="text-muted-foreground">{config.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Type Selection Dialog */}
      <Dialog open={showTypeDialog} onOpenChange={setShowTypeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>What would you like to schedule?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            {Object.entries(eventTypeConfig).map(([type, config]) => {
              const Icon = config.icon;
              return (
                <Button
                  key={type}
                  variant="outline"
                  className="justify-start gap-3 h-auto py-3 rounded-xl border-border/50 hover:border-primary/30"
                  onClick={() => handleTypeSelect(type as "promo" | "newsletter" | "social")}
                >
                  <div className={`p-2 rounded-lg border ${config.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{config.label}</span>
                </Button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </InnerPageTemplate>
  );
}
