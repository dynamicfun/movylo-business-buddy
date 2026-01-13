import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SimpleCardProps {
  title: string;
  children: ReactNode;
  cta: string;
  onCtaClick?: () => void;
  delay?: number;
}

export function SimpleCard({ title, children, cta, onCtaClick, delay = 0 }: SimpleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="bg-card rounded-2xl border border-border p-5 flex flex-col min-h-[320px]"
    >
      <h2 className="text-base font-semibold text-foreground mb-4">{title}</h2>
      
      <div className="flex-1">
        {children}
      </div>
      
      <Button 
        onClick={onCtaClick}
        className="w-full justify-between mt-4"
      >
        {cta}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
