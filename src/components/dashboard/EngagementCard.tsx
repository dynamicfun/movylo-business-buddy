import { SimpleCard } from "./SimpleCard";
import { Eye, MessageCircle, Star } from "lucide-react";

interface MetricRowProps {
  icon: React.ReactNode;
  label: string;
  status: string;
}

function MetricRow({ icon, label, status }: MetricRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground truncate">{label}</p>
        <p className="text-xs text-muted-foreground">{status}</p>
      </div>
    </div>
  );
}

export function EngagementCard() {
  return (
    <SimpleCard
      title="Engagement"
      cta="Messages & offers"
      delay={0.15}
    >
      <div className="space-y-3">
        <MetricRow
          icon={<Eye className="w-4 h-4" />}
          label="Views"
          status="Waiting for activity"
        />
        <MetricRow
          icon={<MessageCircle className="w-4 h-4" />}
          label="Contacts"
          status="No activity yet"
        />
        <MetricRow
          icon={<Star className="w-4 h-4" />}
          label="Reviews"
          status="No activity yet"
        />
      </div>
    </SimpleCard>
  );
}
