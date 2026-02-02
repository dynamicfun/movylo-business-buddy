import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Tag, Mail, Share2 } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import { it } from "date-fns/locale";
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
  "0:00 - 2:00", "2:00 - 4:00", "4:00 - 6:00", "6:00 - 8:00",
  "8:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00",
  "16:00 - 18:00", "18:00 - 20:00", "20:00 - 22:00", "22:00 - 00:00"
];

const mockEvents: ScheduledEvent[] = [
  { id: "1", type: "promo", title: "Sconto 20%", date: new Date(2026, 1, 3, 10), timeSlot: 5 },
  { id: "2", type: "newsletter", title: "Newsletter febbraio", date: new Date(2026, 1, 5, 14), timeSlot: 7 },
  { id: "3", type: "social", title: "Post Instagram", date: new Date(2026, 1, 6, 18), timeSlot: 9 },
];

const eventTypeConfig = {
  promo: { icon: Tag, label: "Promozione", color: "bg-primary/20 text-primary border-primary/30" },
  newsletter: { icon: Mail, label: "Newsletter", color: "bg-accent/20 text-accent-foreground border-accent/30" },
  social: { icon: Share2, label: "Social Post", color: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30" },
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
    // In a real app, this would navigate to the creation page or open a form
    console.log("Create", type, "for", selectedSlot);
  };

  return (
    <InnerPageTemplate
      title="Pianifica campagne"
      subtitle="Organizza le tue attività promozionali nel tempo"
      backTo="/"
    >
      <div className="space-y-5">
        {/* Intro Card */}
        <Card className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pianifica le tue promozioni e i tuoi messaggi nel tempo: fare questo ti permetterà di organizzare 
              cosa inviare e a chi, senza doverlo per forza fare in tempo reale. Pianificare più attività 
              promozionali in una volta sola ti aiuta a risparmiare tempo prezioso!
            </p>
          </CardContent>
        </Card>

        {/* Week Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("prev")}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Indietro
          </Button>
          <h3 className="text-sm font-medium text-foreground">
            {format(weekDays[0], "d MMM", { locale: it })} - {format(weekDays[6], "d MMM yyyy", { locale: it })}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigateWeek("next")}
            className="gap-1"
          >
            Avanti
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Calendar Grid */}
        <div className="border border-border/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row - Days */}
              <div className="grid grid-cols-[100px_repeat(7,1fr)] bg-muted/30 border-b border-border/50">
                <div className="p-3 text-xs font-medium text-muted-foreground">Orario</div>
                {weekDays.map((day) => (
                  <div
                    key={day.toISOString()}
                    className={`p-3 text-center border-l border-border/50 ${
                      isSameDay(day, new Date()) ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="text-xs font-medium text-foreground capitalize">
                      {format(day, "EEEE", { locale: it })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {format(day, "d MMM", { locale: it })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {TIME_SLOTS.map((slot, slotIndex) => (
                <div
                  key={slot}
                  className="grid grid-cols-[100px_repeat(7,1fr)] border-b border-border/30 last:border-b-0"
                >
                  <div className="p-2 text-xs text-muted-foreground flex items-center">
                    {slot}
                  </div>
                  {weekDays.map((day) => {
                    const slotEvents = getEventsForSlot(day, slotIndex);
                    return (
                      <div
                        key={`${day.toISOString()}-${slotIndex}`}
                        className="border-l border-border/30 p-1 min-h-[48px] hover:bg-muted/20 cursor-pointer transition-colors group relative"
                        onClick={() => handleSlotClick(day, slotIndex)}
                      >
                        {slotEvents.map((event) => {
                          const config = eventTypeConfig[event.type];
                          const Icon = config.icon;
                          return (
                            <div
                              key={event.id}
                              className={`text-xs p-1.5 rounded border ${config.color} truncate flex items-center gap-1`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Icon className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{event.title}</span>
                            </div>
                          );
                        })}
                        {slotEvents.length === 0 && (
                          <div className="absolute inset-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Plus className="h-4 w-4 text-muted-foreground" />
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
              <div key={type} className="flex items-center gap-1.5">
                <div className={`p-1 rounded ${config.color}`}>
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
            <DialogTitle>Cosa vuoi programmare?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            {Object.entries(eventTypeConfig).map(([type, config]) => {
              const Icon = config.icon;
              return (
                <Button
                  key={type}
                  variant="outline"
                  className="justify-start gap-3 h-auto py-3"
                  onClick={() => handleTypeSelect(type as "promo" | "newsletter" | "social")}
                >
                  <div className={`p-2 rounded-lg ${config.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{config.label}</span>
                </Button>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>
    </InnerPageTemplate>
  );
}
