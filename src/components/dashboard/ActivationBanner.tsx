import { motion } from "framer-motion";
import { Zap, ChevronRight } from "lucide-react";
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
      <div className="flex items-center gap-3 sm:gap-4">
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
    </motion.div>
  );
}
