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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-5 flex flex-col min-h-[280px] sm:min-h-[320px]"
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h2 className="text-sm sm:text-base font-semibold text-foreground">{title}</h2>
        {headerRight}
      </div>
      
      <div className="flex-1">
        {children}
      </div>
      
      {cta && (
        <Button 
          onClick={onCtaClick}
          className="w-full justify-between mt-3 sm:mt-4 text-sm"
          size="sm"
        >
          {cta}
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </motion.div>
  );
}
