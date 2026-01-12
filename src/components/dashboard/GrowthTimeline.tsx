import { motion } from "framer-motion";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

export function GrowthTimeline() {
  const stages = [
    { icon: Users, label: "Customers", level: 1, color: "bg-accent", active: true },
    { icon: MessageSquare, label: "Engagement", level: 2, color: "bg-warning", active: false },
    { icon: TrendingUp, label: "Sales", level: 3, color: "bg-success", active: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 }}
      className="flex items-center justify-center gap-0 mb-8 px-4"
    >
      {stages.map((stage, index) => (
        <div key={stage.label} className="flex items-center">
          {/* Stage node */}
          <div className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                stage.active
                  ? `${stage.color} text-white shadow-lg`
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              <stage.icon className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-medium mt-2 ${
                stage.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {stage.label}
            </span>
          </div>

          {/* Connector line */}
          {index < stages.length - 1 && (
            <div className="w-16 sm:w-24 h-0.5 bg-border mx-2 relative top-[-10px]">
              <div
                className={`h-full transition-all ${
                  stages[index + 1].active ? stage.color : "bg-transparent"
                }`}
                style={{ width: stage.active && !stages[index + 1].active ? "50%" : stage.active ? "100%" : "0%" }}
              />
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
