import { motion } from "framer-motion";
import { Mic, Sparkles, TrendingUp, Users, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlexStat {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export function AlexConsultant() {
  const stats: AlexStat[] = [
    { icon: <Users className="w-3.5 h-3.5" />, label: "New customers brought in", value: "47" },
    { icon: <MessageCircle className="w-3.5 h-3.5" />, label: "Conversations handled", value: "182" },
    { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "Sales generated", value: "$1,240" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="dashboard-card overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: Alex identity */}
        <div className="md:w-[280px] p-5 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent border-b md:border-b-0 md:border-r border-border/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">Alex</h3>
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Your Voice AI consultant</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Alex is on the line for you, advising customers and bringing in business — here's what Alex brought you this month.
            </p>
          </div>

          <Button size="sm" variant="outline" className="mt-4 gap-1.5 text-xs font-normal w-full justify-center">
            Talk to Alex
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Right: results */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              What Alex brought you
            </span>
            <span className="text-[11px] text-muted-foreground">Last 30 days</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="rounded-lg border border-border/60 bg-secondary/30 p-3 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-muted-foreground mb-1.5">
                  {s.icon}
                  <span className="text-[11px]">{s.label}</span>
                </div>
                <div className="text-xl font-semibold text-foreground">{s.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-3 flex items-start gap-2 px-3 py-2 rounded-md bg-primary/5 border border-primary/10">
            <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-xs text-foreground/80 leading-relaxed">
              <span className="font-medium">Alex suggests:</span> 12 customers asked about weekend hours — consider extending Saturday opening.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
