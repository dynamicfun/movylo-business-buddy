import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LevelCardProps {
  level: 1 | 2 | 3;
  title: string;
  subtitle: string;
  children: ReactNode;
  delay?: number;
}

const levelColors = {
  1: {
    badge: "bg-accent/15 text-accent border-accent/30",
    connector: "from-accent to-accent/40",
    glow: "shadow-accent/10",
  },
  2: {
    badge: "bg-warning/15 text-warning border-warning/30",
    connector: "from-warning to-warning/40",
    glow: "shadow-warning/10",
  },
  3: {
    badge: "bg-success/15 text-success border-success/30",
    connector: "from-success to-success/40",
    glow: "shadow-success/10",
  },
};

const levelLabels = {
  1: "Foundation",
  2: "Engagement",
  3: "Growth",
};

export function LevelCard({ level, title, subtitle, children, delay = 0 }: LevelCardProps) {
  const colors = levelColors[level];
  const label = levelLabels[level];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="relative"
    >
      {/* Connector line to next level */}
      {level < 3 && (
        <div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-border to-transparent" />
      )}

      <div className={`dashboard-card p-6 hover:shadow-lg transition-shadow ${colors.glow}`}>
        {/* Level badge */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors.badge}`}>
            Level {level} · {label}
          </span>
        </div>

        {/* Title section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-1">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Content */}
        {children}
      </div>
    </motion.div>
  );
}
