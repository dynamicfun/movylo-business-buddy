import { motion } from "framer-motion";
import { DollarSign, Store, Monitor, CalendarCheck } from "lucide-react";

interface SalesStripProps {
  mySales: { value: string; coupons: number };
  inStoreSales: { value: string; closed: number };
  onlineSales: { value: string; closed: number };
  reservations: { value: string; covers: number };
}

interface SalesStripItemProps {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
  subValue: string;
  delay: number;
}

function SalesStripItem({ icon, iconBg, label, value, subValue, delay }: SalesStripItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-card rounded-xl border border-border p-3 sm:p-4 flex items-center gap-3"
    >
      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{label}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-lg sm:text-xl font-bold text-foreground">{value}</span>
          <span className="text-[10px] sm:text-xs text-muted-foreground">{subValue}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function SalesStrip({ mySales, inStoreSales, onlineSales, reservations }: SalesStripProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4 sm:mb-6">
      <SalesStripItem
        icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
        iconBg="bg-emerald-50"
        label="My Sales"
        value={mySales.value}
        subValue={`${mySales.coupons} coupons`}
        delay={0}
      />
      <SalesStripItem
        icon={<Store className="w-5 h-5 text-blue-600" />}
        iconBg="bg-blue-50"
        label="In-store sales"
        value={inStoreSales.value}
        subValue={`${inStoreSales.closed} closed`}
        delay={0.05}
      />
      <SalesStripItem
        icon={<Monitor className="w-5 h-5 text-violet-600" />}
        iconBg="bg-violet-50"
        label="Online sales"
        value={onlineSales.value}
        subValue={`${onlineSales.closed} closed`}
        delay={0.1}
      />
      <SalesStripItem
        icon={<CalendarCheck className="w-5 h-5 text-amber-600" />}
        iconBg="bg-amber-50"
        label="Reservations"
        value={reservations.value}
        subValue={`${reservations.covers} covers`}
        delay={0.15}
      />
    </div>
  );
}
