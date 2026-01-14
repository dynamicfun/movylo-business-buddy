import { Ticket, Calendar, ShoppingCart, Link2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LevelCard } from "./LevelCard";

interface SalesMetricProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  isConnected?: boolean;
}

function SalesMetric({ icon, label, value, isConnected = true }: SalesMetricProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
      <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className={`text-lg font-bold ${isConnected ? 'text-foreground' : 'text-muted-foreground/60'}`}>
          {value}
        </p>
      </div>
    </div>
  );
}

export function Level3Sales() {
  return (
    <LevelCard
      level={3}
      title="My Sales"
      subtitle="Track the results — sales, reservations, and conversions"
      delay={0.3}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <SalesMetric
          icon={<Ticket className="w-5 h-5 text-muted-foreground" />}
          label="Offers saved"
          value={0}
        />
        <SalesMetric
          icon={<Calendar className="w-5 h-5 text-muted-foreground" />}
          label="Reservations"
          value={0}
        />
        <SalesMetric
          icon={<ShoppingCart className="w-5 h-5 text-muted-foreground" />}
          label="Sales"
          value="Not connected"
          isConnected={false}
        />
      </div>

      <Button variant="outline" className="w-full gap-2">
        <Link2 className="w-4 h-4" />
        Connect sales tools
      </Button>
    </LevelCard>
  );
}
