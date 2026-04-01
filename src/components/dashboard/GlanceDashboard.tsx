import { Users, TrendingUp, Ticket, Phone, RotateCcw, ShoppingCart, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  color: string;
}

function Metric({ icon, label, value, change, color }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${color}`}>
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground truncate">{label}</p>
        <p className="text-xl font-bold text-foreground leading-tight">{value}</p>
      </div>
      {change && (
        <span className="text-xs font-medium text-emerald-600 flex items-center gap-0.5 shrink-0">
          <ArrowUpRight className="w-3 h-3" />
          {change}
        </span>
      )}
    </motion.div>
  );
}

export function GlanceDashboard() {
  return (
    <div className="space-y-4">
      {/* Section: Customers */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">Customers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <Metric
            icon={<Users className="w-5 h-5 text-blue-600" />}
            label="New this month"
            value={247}
            change="+2.4%"
            color="bg-blue-50 dark:bg-blue-950/40"
          />
          <Metric
            icon={<TrendingUp className="w-5 h-5 text-indigo-600" />}
            label="Total"
            value="15,689"
            change="+1.9%"
            color="bg-indigo-50 dark:bg-indigo-950/40"
          />
        </div>
      </div>

      {/* Section: Activity */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">Activity</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <Metric
            icon={<Ticket className="w-5 h-5 text-amber-600" />}
            label="Offers downloaded"
            value={22}
            color="bg-amber-50 dark:bg-amber-950/40"
          />
          <Metric
            icon={<Phone className="w-5 h-5 text-green-600" />}
            label="Calls received"
            value={8}
            color="bg-green-50 dark:bg-green-950/40"
          />
          <Metric
            icon={<RotateCcw className="w-5 h-5 text-purple-600" />}
            label="Customers brought back"
            value={34}
            color="bg-purple-50 dark:bg-purple-950/40"
          />
        </div>
      </div>

      {/* Section: Sales */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-1">Sales</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <Metric
            icon={<ShoppingCart className="w-5 h-5 text-emerald-600" />}
            label="Revenue generated"
            value="$9,100"
            change="+12%"
            color="bg-emerald-50 dark:bg-emerald-950/40"
          />
          <Metric
            icon={<Calendar className="w-5 h-5 text-rose-600" />}
            label="Reservations"
            value="259"
            color="bg-rose-50 dark:bg-rose-950/40"
          />
        </div>
      </div>
    </div>
  );
}
