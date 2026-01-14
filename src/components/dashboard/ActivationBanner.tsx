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
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-primary/8 via-transparent to-accent/6 border border-primary/15 rounded-xl p-3 sm:p-4 mb-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Zap className="w-4 h-4 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-xs font-medium text-foreground">Complete setup</h3>
            <span className="text-[10px] text-muted-foreground tabular-nums">{completedSteps}/{totalSteps}</span>
          </div>
          <Progress value={progress} className="h-1" />
        </div>

        <Button size="sm" className="gap-1 flex-shrink-0 text-xs h-7 px-2.5">
          Continue
          <ChevronRight className="w-3 h-3" />
        </Button>
      </div>
    </motion.div>
  );
}
