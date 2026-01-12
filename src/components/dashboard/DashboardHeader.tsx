import { motion } from "framer-motion";

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between mb-8"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Welcome back! Here's what's happening with your business.
        </p>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-semibold text-sm">M</span>
        </div>
      </div>
    </motion.header>
  );
}
