import { motion } from "framer-motion";
import { Ticket, Calendar, ShoppingCart, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MetricRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  isConnected?: boolean;
}

function MetricRow({ icon, label, value, isConnected = true }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
          {icon}
        </div>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <span className={`text-sm font-semibold ${isConnected ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
        {value}
      </span>
    </div>
  );
}

export function BusinessSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="dashboard-card p-6"
    >
      <h2 className="text-lg font-semibold text-foreground mb-4">
        My business
      </h2>
      
      <div className="mb-6">
        <MetricRow
          icon={<Ticket className="w-4 h-4 text-muted-foreground" />}
          label="Offers saved by customers"
          value={0}
        />
        <MetricRow
          icon={<Calendar className="w-4 h-4 text-muted-foreground" />}
          label="Reservations"
          value={0}
        />
        <MetricRow
          icon={<ShoppingCart className="w-4 h-4 text-muted-foreground" />}
          label="Sales"
          value="Not connected"
          isConnected={false}
        />
      </div>
      
      <Button variant="outline" className="w-full gap-2 justify-center">
        <Link2 className="w-4 h-4" />
        Connect sales tools
      </Button>
    </motion.div>
  );
}
