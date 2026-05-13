import { useState } from "react";
import { motion } from "framer-motion";
import { Ticket, Gift, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCouponModal } from "./CheckCouponModal";
import { AssignPointsModal } from "./AssignPointsModal";

export function QuickActions() {
  const { t } = useLanguage();
  const [checkCouponOpen, setCheckCouponOpen] = useState(false);
  const [assignPointsOpen, setAssignPointsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto"
      >
        <Button
          size="sm"
          className="gap-2 text-xs sm:text-sm font-medium bg-[#042C53] text-white hover:bg-[#042C53]/90 w-full sm:w-auto order-1"
          asChild
        >
          <a href="/alex">
            <span className="w-4 h-4 rounded-full bg-white text-[#042C53] flex items-center justify-center text-[10px] font-bold">A</span>
            Talk to Alex
          </a>
        </Button>
        <div className="flex gap-2 order-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground flex-1 sm:flex-none"
            onClick={() => setCheckCouponOpen(true)}
          >
            <Ticket className="w-3.5 h-3.5" />
            {t.checkCoupon}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground flex-1 sm:flex-none"
            onClick={() => setAssignPointsOpen(true)}
          >
            <Gift className="w-3.5 h-3.5" />
            {t.assignLoyaltyPoints}
          </Button>
        </div>
      </motion.div>

      <CheckCouponModal
        open={checkCouponOpen}
        onOpenChange={setCheckCouponOpen}
      />
      <AssignPointsModal
        open={assignPointsOpen}
        onOpenChange={setAssignPointsOpen}
      />
    </>
  );
}
