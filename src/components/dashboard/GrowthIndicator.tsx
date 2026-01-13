import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrowthIndicatorProps {
  value: number; // percentage change
  className?: string;
}

export function GrowthIndicator({ value, className }: GrowthIndicatorProps) {
  if (value === 0) {
    return (
      <span className={cn("inline-flex items-center gap-0.5 text-xs text-muted-foreground", className)}>
        <Minus className="w-3 h-3" />
        <span>0%</span>
      </span>
    );
  }

  const isPositive = value > 0;
  
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-0.5 text-xs font-medium",
        isPositive ? "text-emerald-600" : "text-rose-500",
        className
      )}
    >
      {isPositive ? (
        <TrendingUp className="w-3 h-3" />
      ) : (
        <TrendingDown className="w-3 h-3" />
      )}
      <span>{isPositive ? "+" : ""}{value}%</span>
    </span>
  );
}
