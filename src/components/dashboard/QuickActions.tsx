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
      <Button className="gap-2 text-sm px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
        <Ticket className="w-4 h-4" />
        Check Coupons
      </Button>
      <Button className="gap-2 text-sm px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
        <Gift className="w-4 h-4" />
        Assign Points/Rewards
      </Button>
    </motion.div>
  );
}
