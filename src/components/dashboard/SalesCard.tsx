import { SimpleCard } from "./SimpleCard";

interface SalesMetricProps {
  label: string;
  count: number;
  value?: string;
}

function SalesMetric({ label, count, value }: SalesMetricProps) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="text-right">
        <span className="text-sm font-semibold text-foreground">{count}</span>
        {value && <span className="text-xs text-muted-foreground ml-1.5">({value})</span>}
      </div>
    </div>
  );
}

export function SalesCard() {
  return (
    <SimpleCard
      title="My Business"
      cta="Connect sales tools"
      delay={0.2}
    >
      <div className="space-y-1">
        <SalesMetric label="Downloaded offers" count={0} />
        <SalesMetric label="In-store sales" count={0} value="€0" />
        <SalesMetric label="Online sales" count={0} value="€0" />
        <SalesMetric label="Reservations" count={0} value="€0" />
      </div>
    </SimpleCard>
  );
}
