import { motion } from "framer-motion";
import { Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2 mb-6"
    >
      <Button variant="outline" size="sm" className="gap-2">
        <Ticket className="w-4 h-4" />
        Check coupons
      </Button>
      <Button variant="outline" size="sm" className="gap-2">
        <Gift className="w-4 h-4" />
        Loyalty rewards
      </Button>
    </motion.div>
  );
}
