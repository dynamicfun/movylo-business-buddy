import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SimpleCardProps {
  title: string;
  children: ReactNode;
  cta?: string;
  onCtaClick?: () => void;
  delay?: number;
  headerRight?: ReactNode;
}

export function SimpleCard({ title, children, cta, onCtaClick, delay = 0, headerRight }: SimpleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-card rounded-xl border border-border/80 p-4 sm:p-5 flex flex-col min-h-[280px] sm:min-h-[300px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-[13px] sm:text-sm font-semibold text-foreground tracking-tight">{title}</h2>
        {headerRight}
      </div>
      
      <div className="flex-1">
        {children}
      </div>
      
      {cta && (
        <Button 
          onClick={onCtaClick}
          className="w-full justify-between mt-4 text-[13px] h-9 font-medium"
          size="sm"
        >
          {cta}
          <ChevronRight className="w-3.5 h-3.5 opacity-70" />
        </Button>
      )}
    </motion.div>
  );
}
