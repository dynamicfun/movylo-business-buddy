import { SimpleCard } from "./SimpleCard";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricGroupProps {
  label: string;
  trend?: number;
  items: { label: string; value: string | number }[];
}

function MetricGroup({ label, trend, items }: MetricGroupProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-foreground">{label}</span>
        {trend !== undefined && (
          <span className={`flex items-center gap-0.5 text-xs ${trend >= 0 ? 'text-green-600' : 'text-amber-600'}`}>
            {trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trend >= 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div className="flex gap-3">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <p className="text-sm font-semibold text-foreground">{item.value}</p>
            <p className="text-[10px] text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
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
      <div className="space-y-4">
        <MetricGroup
          label="Messages"
          trend={11}
          items={[
            { label: "Sent", value: 10 },
            { label: "Opened", value: "50%" },
            { label: "Clicked", value: "0%" },
          ]}
        />
        
        <MetricGroup
          label="Contacts received"
          items={[
            { label: "Calls", value: 0 },
            { label: "Email", value: 0 },
            { label: "WhatsApp", value: 0 },
          ]}
        />
        
        <MetricGroup
          label="Social clicks"
          trend={-21}
          items={[
            { label: "Facebook", value: 11 },
            { label: "Instagram", value: 0 },
            { label: "Google", value: 0 },
          ]}
        />
        
        <MetricGroup
          label="Interactions"
          items={[
            { label: "Reviews", value: "0" },
            { label: "Feedback", value: "0" },
            { label: "Deliveries", value: "0" },
          ]}
        />
      </div>
    </SimpleCard>
  );
}
