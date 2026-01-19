import { motion } from "framer-motion";
import { ChevronRight, DollarSign, Store, ShoppingCart, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrowthIndicator } from "./GrowthIndicator";

interface MetricRowProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string | number;
  subValue?: string;
}

function MetricRow({ icon, iconColor, label, value, subValue }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
      <div className="flex items-center gap-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <div className="text-right">
        <span className="text-sm font-medium text-foreground">{value}</span>
        {subValue && <span className="text-xs text-muted-foreground ml-1">({subValue})</span>}
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

// Steady state props
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
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">My Sales</h2>
            <span className="text-xs text-muted-foreground">last 30 days</span>
          </div>
          <p className="text-xs text-muted-foreground">How this turns into real results</p>
        </div>

        {/* Main value highlight */}
        <div className="bg-emerald-50/80 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="w-4 h-4 text-emerald-600" />
            <span className="text-xl font-bold text-foreground">{downloadedCoupons}</span>
          </div>
          <p className="text-xs text-muted-foreground">Downloaded coupons</p>
        </div>

        {/* Metrics */}
        <div className="flex-1">
          <MetricRow 
            icon={<Store className="w-3.5 h-3.5" />} 
            iconColor="text-blue-500" 
            label="In-store sales" 
            value={inStoreSales.value}
            subValue={`${inStoreSales.closed} closed`}
          />
          <MetricRow 
            icon={<ShoppingCart className="w-3.5 h-3.5" />} 
            iconColor="text-violet-500" 
            label="Online sales" 
            value={onlineSales.value}
            subValue={`${onlineSales.closed} closed`}
          />
          <MetricRow 
            icon={<CalendarCheck className="w-3.5 h-3.5" />} 
            iconColor="text-amber-500" 
            label="Reservations" 
            value={reservations.value}
            subValue={`${reservations.covers} covers`}
          />
        </div>

        {/* CTA */}
        <Button 
          className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
          size="default"
        >
          Sell
          <ChevronRight className="w-4 h-4" />
        </Button>
      </motion.div>
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
    if (!salesToolsConnected) return "Connect to see";
    if (count === 0) return "Not yet";
    return value;
  };

  const getStatus = () => {
    if (!salesToolsConnected) return "waiting";
    const totalActivity = downloadedOffers + inStoreSales.count + onlineSales.count + reservations.count;
    if (totalActivity > 0) return "starting";
    return "waiting";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-foreground">My Sales</h2>
            <span className="text-xs text-muted-foreground">last 30 days</span>
          </div>
          <p className="text-xs text-muted-foreground">How this turns into real results</p>
        </div>
        <GrowthIndicator status={getStatus()} isActivationMode={true} />
      </div>

      {/* Metrics */}
      <div className="flex-1">
        <MetricRow 
          icon={<DollarSign className="w-3.5 h-3.5" />} 
          iconColor="text-emerald-500" 
          label="Downloaded offers" 
          value={downloadedOffers === 0 ? "Waiting" : downloadedOffers}
        />
        <MetricRow 
          icon={<Store className="w-3.5 h-3.5" />} 
          iconColor="text-blue-500" 
          label="In-store sales" 
          value={getDisplayValue(inStoreSales.count, inStoreSales.value)}
        />
        <MetricRow 
          icon={<ShoppingCart className="w-3.5 h-3.5" />} 
          iconColor="text-violet-500" 
          label="Online sales" 
          value={getDisplayValue(onlineSales.count, onlineSales.value)}
        />
        <MetricRow 
          icon={<CalendarCheck className="w-3.5 h-3.5" />} 
          iconColor="text-amber-500" 
          label="Reservations" 
          value={getDisplayValue(reservations.count, reservations.value)}
        />
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
        size="default"
      >
        Sell
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
