import { SimpleCard } from "./SimpleCard";
import { MessageSquare, MousePointerClick, Star } from "lucide-react";

interface ActivityRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtitle?: string;
}

function ActivityRow({ icon, label, value, subtitle }: ActivityRowProps) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
      <span className="text-lg font-semibold text-foreground">{value}</span>
    </div>
  );
}

export function EngagementCard() {
  return (
    <SimpleCard
      title="Activity"
      cta="Messages & offers"
      delay={0.15}
    >
      <div>
        <ActivityRow
          icon={<MessageSquare className="w-4 h-4" />}
          label="Messages"
          value={10}
          subtitle="50% opened"
        />
        <ActivityRow
          icon={<MousePointerClick className="w-4 h-4" />}
          label="Social clicks"
          value={11}
          subtitle="Facebook, Instagram, Google"
        />
        <ActivityRow
          icon={<Star className="w-4 h-4" />}
          label="Reviews"
          value={0}
          subtitle="Waiting for first review"
        />
      </div>
    </SimpleCard>
  );
}
