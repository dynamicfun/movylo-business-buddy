import { motion } from "framer-motion";
import { Zap, ChevronRight, Ticket, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ActivationBannerProps {
  completedSteps?: number;
  totalSteps?: number;
}

export function ActivationBanner({ completedSteps = 2, totalSteps = 5 }: ActivationBannerProps) {
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        {/* Quick actions on the left */}
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground bg-background/50">
            <Ticket className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Check Coupons</span>
            <span className="sm:hidden">Coupons</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-xs sm:text-sm font-normal border-border/60 text-muted-foreground hover:text-foreground bg-background/50">
            <Gift className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Assign Points</span>
            <span className="sm:hidden">Points</span>
          </Button>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-8 bg-border/40" />

        {/* Setup progress */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1 sm:mb-1.5">
              <h3 className="text-xs sm:text-sm font-semibold text-foreground">Complete your setup</h3>
              <span className="text-[10px] sm:text-xs text-muted-foreground">{completedSteps}/{totalSteps} done</span>
            </div>
            <Progress value={progress} className="h-1 sm:h-1.5" />
          </div>

          <Button size="sm" className="gap-1 flex-shrink-0 text-xs sm:text-sm px-2 sm:px-3">
            Continue
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
