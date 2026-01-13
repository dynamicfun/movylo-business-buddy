import { SimpleCard } from "./SimpleCard";
import { MessageSquare, MousePointerClick, Star } from "lucide-react";
import { GrowthIndicator } from "./GrowthIndicator";

interface ActivityRowProps {
  icon: React.ReactNode;
  label: string;
  status: string;
}

function ActivityRow({ icon, label, status }: ActivityRowProps) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{status}</p>
      </div>
    </div>
  );
}

interface EngagementCardProps {
  isActivationMode?: boolean;
  messagesOpened?: number;
  socialClicks?: number;
  reviews?: number;
}

export function EngagementCard({ 
  isActivationMode = true,
  messagesOpened = 0,
  socialClicks = 0,
  reviews = 0
}: EngagementCardProps) {
  // Determine status for growth indicator
  const getStatus = () => {
    const totalActivity = messagesOpened + socialClicks + reviews;
    if (totalActivity > 0) return "starting";
    return "waiting";
  };

  // Get status text based on activation mode
  const getActivityStatus = (value: number, activityType: string) => {
    if (isActivationMode) {
      if (value > 0) return "Just started";
      return "Waiting for activity";
    }
    // Steady state - show actual values
    return value > 0 ? `${value} interactions` : "No activity yet";
  };

  return (
    <SimpleCard
      title="Activity"
      cta="Messages & offers"
      delay={0.15}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={isActivationMode} />}
    >
      <div>
        <ActivityRow
          icon={<MessageSquare className="w-4 h-4" />}
          label="Saw your messages"
          status={getActivityStatus(messagesOpened, "messages")}
        />
        <ActivityRow
          icon={<MousePointerClick className="w-4 h-4" />}
          label="Contacted you"
          status={getActivityStatus(socialClicks, "contacts")}
        />
        <ActivityRow
          icon={<Star className="w-4 h-4" />}
          label="Reviews & feedback"
          status={getActivityStatus(reviews, "reviews")}
        />
      </div>
    </SimpleCard>
  );
}
