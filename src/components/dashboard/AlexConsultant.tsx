import { motion } from "framer-motion";
import { Sparkles, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function AlexMonogram({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#042C53] flex items-center justify-center ${className || ""}`}
    >
      <span className="text-white font-bold" style={{ fontSize: "inherit" }}>
        A
      </span>
    </div>
  );
}

export function AlexConsultant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="dashboard-card overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left: Alex identity */}
        <div className="md:w-[300px] p-5 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent border-b md:border-b-0 md:border-r border-border/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <AlexMonogram className="w-11 h-11 text-xl" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground">Alex</h3>
                  <Sparkles className="w-3 h-3 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Your personal consultant</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Alex helps you find new customers and close more sales. He uses Movylo for you,
              and calls you when there's something worth doing.
            </p>
          </div>

          <Button size="sm" variant="outline" className="mt-4 gap-1.5 text-xs font-normal w-full justify-center">
            <Phone className="w-3.5 h-3.5" />
            Talk to Alex
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Right: latest from Alex */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
              Latest from Alex
            </span>
            <span className="text-[11px] text-muted-foreground">Today</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2 px-3 py-2.5 rounded-md bg-primary/5 border border-primary/10">
              <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-foreground/90 leading-relaxed">
                  <span className="font-medium">Alex suggests:</span> your weekend traffic is below average.
                  I can prepare a Friday promotion to bring customers in — want me to draft it?
                </p>
              </div>
              <Button size="sm" variant="outline" className="text-[11px] h-7 px-2 font-normal flex-shrink-0">
                Talk to Alex
              </Button>
            </div>

            <div className="flex items-start gap-2 px-3 py-2.5 rounded-md bg-secondary/40 border border-border/50">
              <Sparkles className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs text-foreground/90 leading-relaxed">
                  <span className="font-medium">Ready for your check:</span> reactivation message for 38 customers
                  who haven't visited in 60 days.
                </p>
              </div>
              <Button size="sm" variant="outline" className="text-[11px] h-7 px-2 font-normal flex-shrink-0">
                Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
