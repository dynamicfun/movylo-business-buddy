import { motion } from "framer-motion";
import { Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.15 }}
      className="flex gap-2 mb-4"
    >
      <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground h-8 px-2.5">
        <Ticket className="w-3 h-3" />
        Coupons
      </Button>
      <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground h-8 px-2.5">
        <Gift className="w-3 h-3" />
        Rewards
      </Button>
    </motion.div>
  );
}
