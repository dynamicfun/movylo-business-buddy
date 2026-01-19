import { motion } from "framer-motion";

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between mb-4"
    >
      <div>
        <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
      </div>
    </motion.header>
  );
}
