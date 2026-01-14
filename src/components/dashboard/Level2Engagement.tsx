import { Eye, MessageCircle, Star, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LevelCard } from "./LevelCard";

interface EngagementMetricProps {
  icon: React.ReactNode;
  title: string;
  status: "waiting" | "no-activity";
}

function EngagementMetric({ icon, title, status }: EngagementMetricProps) {
  const isWaiting = status === "waiting";
  
  return (
    <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
      <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground truncate">{title}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          {isWaiting && <Clock className="w-3 h-3 text-warning" />}
          <span className={`text-xs ${isWaiting ? 'text-warning' : 'text-muted-foreground'}`}>
            {isWaiting ? "Waiting for activity" : "No activity yet"}
          </span>
        </div>
      </div>
    </div>
  );
}

export function Level2Engagement() {
  return (
    <LevelCard
      level={2}
      title="Activity"
      subtitle="What customers are doing"
      delay={0.2}
    >
      <div className="space-y-3 mb-6">
        <EngagementMetric
          icon={<Eye className="w-5 h-5 text-muted-foreground" />}
          title="Customers saw your messages"
          status="waiting"
        />
        <EngagementMetric
          icon={<MessageCircle className="w-5 h-5 text-muted-foreground" />}
          title="Customers contacted you"
          status="no-activity"
        />
        <EngagementMetric
          icon={<Star className="w-5 h-5 text-muted-foreground" />}
          title="Reviews & feedback"
          status="no-activity"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button variant="outline" className="flex-1 gap-2">
          Messages & offers
        </Button>
        <Button variant="ghost" className="gap-1 text-muted-foreground">
          See details
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </LevelCard>
  );
}
