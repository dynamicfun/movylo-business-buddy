import { motion } from "framer-motion";
import { Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2"
    >
      <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm">
        <Ticket className="w-4 h-4" />
        Check Coupons
      </Button>
      <Button size="sm" className="gap-2 text-xs sm:text-sm bg-primary hover:bg-primary/90">
        <Gift className="w-4 h-4" />
        Assign Points/Rewards
      </Button>
    </motion.div>
  );
}
