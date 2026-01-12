import { motion } from "framer-motion";
import { Building2, BadgeCheck, Gift, ChevronRight } from "lucide-react";

interface ToolItemProps {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}

function ToolItem({ icon, label, delay = 0 }: ToolItemProps) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-secondary/70 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-background transition-colors">
          {icon}
        </div>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
    </motion.button>
  );
}

export function BusinessTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="dashboard-card p-4"
    >
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-4 py-2 mb-1">
        Business tools
      </h3>
      
      <div className="flex flex-col">
        <ToolItem
          icon={<Building2 className="w-4 h-4 text-muted-foreground" />}
          label="Business details"
          delay={0.35}
        />
        <ToolItem
          icon={<BadgeCheck className="w-4 h-4 text-muted-foreground" />}
          label="Check coupons"
          delay={0.4}
        />
        <ToolItem
          icon={<Gift className="w-4 h-4 text-muted-foreground" />}
          label="Reward loyal customers"
          delay={0.45}
        />
      </div>
    </motion.div>
  );
}
