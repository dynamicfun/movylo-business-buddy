import { SimpleCard } from "./SimpleCard";
import { GrowthIndicator } from "./GrowthIndicator";

interface SalesMetricProps {
  label: string;
  value: string;
}

function SalesMetric({ label, value }: SalesMetricProps) {
  return (
    <div className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <div className="text-right">
        <span className="text-sm font-medium text-foreground">{value}</span>
      </div>
    </div>
  );
}

interface MetricItemProps {
  label: string;
  value: string | number;
}

function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="flex justify-between items-center py-0.5">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
}

interface MetricSectionProps {
  title: string;
  children: React.ReactNode;
}

function MetricSection({ title, children }: MetricSectionProps) {
  return (
    <div className="py-2 border-b border-border/50 last:border-0">
      <span className="text-sm font-medium text-foreground">{title}</span>
      <div className="mt-1">
        {children}
      </div>
    </div>
  );
}

// Activation mode props
interface ActivationModeProps {
  isActivationMode?: true;
  salesToolsConnected?: boolean;
  downloadedOffers?: number;
  inStoreSales?: { count: number; value: string };
  onlineSales?: { count: number; value: string };
  reservations?: { count: number; value: string };
}

// Steady state props (no orders - moved to OrdersCard)
interface SteadyStateProps {
  isActivationMode: false;
  downloadedCoupons: number;
  inStoreSales: { closed: number; value: string };
  onlineSales: { closed: number; value: string };
  reservations: { covers: number; value: string };
}

type SalesCardProps = ActivationModeProps | SteadyStateProps;

export function SalesCard(props: SalesCardProps) {
  // Check if we're in steady state mode
  if (props.isActivationMode === false) {
    const { downloadedCoupons, inStoreSales, onlineSales, reservations } = props;

    return (
      <SimpleCard
        title="My Sales"
        subtitle="How this turns into real results"
        cta="Sell"
        delay={0.2}
      >
        <div className="space-y-0 -mt-1">
          {/* Downloaded coupons */}
          <div className="py-2 border-b border-border/50">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">Downloaded coupons</span>
              <span className="text-sm font-semibold text-foreground">{downloadedCoupons}</span>
            </div>
          </div>

          {/* In-store sales */}
          <MetricSection title="In-store sales">
            <MetricItem label="Closed" value={inStoreSales.closed} />
            <MetricItem label="Value" value={inStoreSales.value} />
          </MetricSection>

          {/* Online sales */}
          <MetricSection title="Online sales">
            <MetricItem label="Closed" value={onlineSales.closed} />
            <MetricItem label="Value" value={onlineSales.value} />
          </MetricSection>

          {/* Reservations */}
          <MetricSection title="Reservations">
            <MetricItem label="Covers" value={reservations.covers} />
            <MetricItem label="Value" value={reservations.value} />
          </MetricSection>
        </div>
      </SimpleCard>
    );
  }

  // Activation mode - simple view (default)
  const { 
    salesToolsConnected = false,
    downloadedOffers = 0,
    inStoreSales = { count: 0, value: "€0" },
    onlineSales = { count: 0, value: "€0" },
    reservations = { count: 0, value: "€0" }
  } = props;

  const getDisplayValue = (count: number, value: string) => {
    if (!salesToolsConnected) return "Connect to see this";
    if (count === 0) return "Not yet";
    return `${count} (${value})`;
  };

  const getSimpleDisplayValue = (count: number) => {
    if (count === 0) return "Waiting for activity";
    return count.toString();
  };

  const getStatus = () => {
    if (!salesToolsConnected) return "waiting";
    const totalActivity = downloadedOffers + inStoreSales.count + onlineSales.count + reservations.count;
    if (totalActivity > 0) return "starting";
    return "waiting";
  };

  return (
    <SimpleCard
      title="My Sales"
      subtitle="How this turns into real results"
      cta="Sell"
      delay={0.2}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={true} />}
    >
      <div className="space-y-1">
        <SalesMetric 
          label="Downloaded offers" 
          value={getSimpleDisplayValue(downloadedOffers)}
        />
        <SalesMetric 
          label="In-store sales" 
          value={getDisplayValue(inStoreSales.count, inStoreSales.value)}
        />
        <SalesMetric 
          label="Online sales" 
          value={getDisplayValue(onlineSales.count, onlineSales.value)}
        />
        <SalesMetric 
          label="Reservations" 
          value={getDisplayValue(reservations.count, reservations.value)}
        />
      </div>
    </SimpleCard>
  );
}
