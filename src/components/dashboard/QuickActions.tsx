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
      <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
        <Ticket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="hidden xs:inline">Check</span> coupons
      </Button>
      <Button variant="outline" size="sm" className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3">
        <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="hidden xs:inline">Loyalty</span> rewards
      </Button>
    </motion.div>
  );
}
