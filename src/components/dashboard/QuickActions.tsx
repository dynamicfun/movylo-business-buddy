import { motion } from "framer-motion";
import { Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 mb-4 sm:mb-6"
    >
      <Button variant="outline" size="sm" className="gap-2 text-xs">
        <Ticket className="w-3.5 h-3.5" />
        Check Coupons
      </Button>
      <Button variant="outline" size="sm" className="gap-2 text-xs">
        <Gift className="w-3.5 h-3.5" />
        Assign Points/Rewards
      </Button>
    </motion.div>
  );
}
