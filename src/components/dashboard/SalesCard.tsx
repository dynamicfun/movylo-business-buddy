import { SimpleCard } from "./SimpleCard";
import { GrowthIndicator } from "./GrowthIndicator";

interface SalesMetricProps {
  label: string;
  value: string;
  isActivationMode?: boolean;
}

function SalesMetric({ label, value, isActivationMode = true }: SalesMetricProps) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="text-right">
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}

interface SalesCardProps {
  isActivationMode?: boolean;
  salesToolsConnected?: boolean;
  downloadedOffers?: number;
  inStoreSales?: { count: number; value: string };
  onlineSales?: { count: number; value: string };
  reservations?: { count: number; value: string };
}

export function SalesCard({ 
  isActivationMode = true,
  salesToolsConnected = false,
  downloadedOffers = 0,
  inStoreSales = { count: 0, value: "€0" },
  onlineSales = { count: 0, value: "€0" },
  reservations = { count: 0, value: "€0" }
}: SalesCardProps) {
  // Get display value based on activation mode
  const getDisplayValue = (count: number, value: string, label: string) => {
    if (isActivationMode) {
      if (!salesToolsConnected) return "Connect to see this";
      if (count === 0) return "Not yet";
      return `${count} (${value})`;
    }
    return `${count} (${value})`;
  };

  const getSimpleDisplayValue = (count: number) => {
    if (isActivationMode) {
      if (count === 0) return "Waiting for activity";
      return count.toString();
    }
    return count.toString();
  };

  // Determine status
  const getStatus = () => {
    if (!salesToolsConnected) return "waiting";
    const totalActivity = downloadedOffers + inStoreSales.count + onlineSales.count + reservations.count;
    if (totalActivity > 0) return "starting";
    return "waiting";
  };

  return (
    <SimpleCard
      title="My business"
      cta="Connect sales tools"
      delay={0.2}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={isActivationMode} />}
    >
      <div className="space-y-1">
        <SalesMetric 
          label="Downloaded offers" 
          value={getSimpleDisplayValue(downloadedOffers)}
          isActivationMode={isActivationMode}
        />
        <SalesMetric 
          label="In-store sales" 
          value={getDisplayValue(inStoreSales.count, inStoreSales.value, "In-store")}
          isActivationMode={isActivationMode}
        />
        <SalesMetric 
          label="Online sales" 
          value={getDisplayValue(onlineSales.count, onlineSales.value, "Online")}
          isActivationMode={isActivationMode}
        />
        <SalesMetric 
          label="Reservations" 
          value={getDisplayValue(reservations.count, reservations.value, "Reservations")}
          isActivationMode={isActivationMode}
        />
      </div>
    </SimpleCard>
  );
}
