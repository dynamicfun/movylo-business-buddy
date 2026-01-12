import { motion } from "framer-motion";
import { Mail, Smartphone, Bell, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomersSection() {
  const channels = [
    { icon: Mail, label: "Email", color: "text-channel-email" },
    { icon: Smartphone, label: "SMS", color: "text-channel-sms" },
    { icon: Bell, label: "Push", color: "text-channel-push" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      className="dashboard-card p-6"
    >
      <h2 className="text-lg font-semibold text-foreground mb-6">
        Your customers
      </h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="metric-label mb-1">New customers (last 30 days)</p>
          <p className="metric-value">1</p>
        </div>
        <div>
          <p className="metric-label mb-1">Total customers</p>
          <p className="text-2xl font-semibold text-muted-foreground">1</p>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="metric-label mb-3">How customers can reach you</p>
        <div className="flex flex-wrap gap-2">
          {channels.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className="channel-badge"
            >
              <Icon className={`w-4 h-4 ${color}`} />
              <span className="text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Button className="w-full gap-2 justify-center">
          <Users className="w-4 h-4" />
          Find & manage customers
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-between text-muted-foreground hover:text-foreground"
        >
          View customer list
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
