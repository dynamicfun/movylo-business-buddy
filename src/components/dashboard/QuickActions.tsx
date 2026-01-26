import { motion } from "framer-motion";
import { Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function QuickActions() {
  const { t } = useLanguage();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2"
    >
      <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground">
        <Ticket className="w-3.5 h-3.5" />
        {t.checkCoupon}
      </Button>
      <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground">
        <Gift className="w-3.5 h-3.5" />
        {t.assignLoyaltyPoints}
      </Button>
    </motion.div>
  );
}
