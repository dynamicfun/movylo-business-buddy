import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Tag, Store, ShoppingCart, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GrowthIndicator } from "./GrowthIndicator";
import { useLanguage } from "@/contexts/LanguageContext";
import { SalesModal } from "./DashboardModals";

interface MetricRowProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string | number;
  subValue?: string;
}

function MetricRow({ icon, iconColor, label, value, subValue }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
      <div className="flex items-center gap-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-foreground">{value}</p>
        {subValue && <p className="text-xs text-muted-foreground">{subValue}</p>}
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
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  
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
            <h2 className="text-lg font-bold text-foreground">{t.mySales}</h2>
            <span className="text-xs text-muted-foreground">{t.last30Days}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.salesSubtitle}</p>
        </div>

        {/* Main value highlight */}
        <div className="bg-emerald-50/80 rounded-xl p-3 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Tag className="w-4 h-4 text-emerald-600" />
            <span className="text-xl font-bold text-foreground">{downloadedCoupons}</span>
          </div>
          <p className="text-xs text-muted-foreground">{t.downloadedOffers}</p>
        </div>

        {/* Metrics */}
        <div className="flex-1">
          <MetricRow 
            icon={<Store className="w-3.5 h-3.5" />} 
            iconColor="text-blue-500" 
            label={t.inStore} 
            value={inStoreSales.value}
            subValue={`${inStoreSales.closed} ${t.closed.toLowerCase()}`}
          />
          <MetricRow 
            icon={<ShoppingCart className="w-3.5 h-3.5" />} 
            iconColor="text-violet-500" 
            label={t.online} 
            value={onlineSales.value}
            subValue={`${onlineSales.closed} ${t.closed.toLowerCase()}`}
          />
          <MetricRow 
            icon={<CalendarCheck className="w-3.5 h-3.5" />} 
            iconColor="text-amber-500" 
            label={t.reservations} 
            value={reservations.value}
            subValue={`${reservations.covers} ${t.covers.toLowerCase()}`}
          />
        </div>

        {/* CTA */}
        <Button 
          className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
          size="default"
          onClick={() => setShowModal(true)}
        >
          {t.sales}
          <ChevronRight className="w-4 h-4" />
        </Button>

        <SalesModal open={showModal} onOpenChange={setShowModal} />
      </motion.div>
    );
  }

  // Activation mode - simplified placeholder view
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground">{t.mySales}</h2>
        <p className="text-xs text-muted-foreground">{t.salesSubtitle}</p>
      </div>

      {/* Simplified placeholder */}
      <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
        <ShoppingCart className="w-10 h-10 text-muted-foreground/40 mb-3" />
        <p className="text-sm font-medium text-muted-foreground">{t.salesWillAppear}</p>
        <p className="text-xs text-muted-foreground/70 mt-1">{t.salesWillAppearSubtitle}</p>
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
        size="default"
        onClick={() => setShowModal(true)}
      >
        {t.sales}
        <ChevronRight className="w-4 h-4" />
      </Button>

      <SalesModal open={showModal} onOpenChange={setShowModal} />
    </motion.div>
  );
}
