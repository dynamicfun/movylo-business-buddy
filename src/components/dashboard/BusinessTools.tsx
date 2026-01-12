import { motion } from "framer-motion";
import { Building2, BadgeCheck, Gift, ChevronRight } from "lucide-react";

interface ToolItemProps {
  icon: React.ReactNode;
  label: string;
}

function ToolItem({ icon, label }: ToolItemProps) {
  return (
    <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary/70 transition-colors group">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-background transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors ml-auto" />
    </button>
  );
}

export function BusinessTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="dashboard-card p-2"
    >
      <div className="flex flex-col sm:flex-row sm:items-center">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide px-4 py-2">
          Business tools
        </h3>
        <div className="flex flex-col sm:flex-row flex-1">
          <ToolItem
            icon={<Building2 className="w-4 h-4 text-muted-foreground" />}
            label="Business details"
          />
          <ToolItem
            icon={<BadgeCheck className="w-4 h-4 text-muted-foreground" />}
            label="Check coupons"
          />
          <ToolItem
            icon={<Gift className="w-4 h-4 text-muted-foreground" />}
            label="Reward loyal customers"
          />
        </div>
      </div>
    </motion.div>
  );
}
