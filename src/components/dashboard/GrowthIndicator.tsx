import { TrendingUp, Minus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface GrowthIndicatorProps {
  value?: number; // percentage change (optional - only show after steady state)
  status?: "growing" | "stable" | "starting" | "waiting";
  isActivationMode?: boolean; // First 7 days = no percentages
  className?: string;
}

export function GrowthIndicator({ 
  value, 
  status = "starting",
  isActivationMode = true, 
  className 
}: GrowthIndicatorProps) {
  // Activation mode: status-based language only, no percentages
  if (isActivationMode || value === undefined) {
    const statusConfig = {
      growing: { icon: TrendingUp, text: "Growing", colorClass: "text-success" },
      stable: { icon: Minus, text: "Stable", colorClass: "text-muted-foreground" },
      starting: { icon: Sparkles, text: "Starting", colorClass: "text-primary" },
      waiting: { icon: Sparkles, text: "Setting up", colorClass: "text-muted-foreground/70" },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <span className={cn("inline-flex items-center gap-1 text-[10px] font-medium", config.colorClass, className)}>
        <Icon className="w-2.5 h-2.5" />
        <span>{config.text}</span>
      </span>
    );
  }

  // Steady state: show percentages (only positive or neutral, never red)
  if (value === 0) {
    return (
      <span className={cn("inline-flex items-center gap-0.5 text-xs text-muted-foreground", className)}>
        <Minus className="w-3 h-3" />
        <span>Stable</span>
      </span>
    );
  }

  // Only show positive trends with green, never show negative in red
  const isPositive = value > 0;
  
  return (
    <span 
      className={cn(
        "inline-flex items-center gap-0.5 text-[10px] font-medium",
        isPositive ? "text-success" : "text-muted-foreground",
        className
      )}
    >
      {isPositive ? (
        <>
          <TrendingUp className="w-2.5 h-2.5" />
          <span>+{value}%</span>
        </>
      ) : (
        <>
          <Minus className="w-2.5 h-2.5" />
          <span>Recent</span>
        </>
      )}
    </span>
  );
}
