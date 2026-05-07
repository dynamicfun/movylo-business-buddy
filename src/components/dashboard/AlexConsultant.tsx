import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
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
      <div className="flex items-center gap-4 p-5">
        <AlexMonogram className="w-12 h-12 text-xl flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground">
            Alex, Your personal consultant
          </h3>
        </div>
        <Button size="sm" className="gap-1.5 flex-shrink-0">
          <Phone className="w-3.5 h-3.5" />
          Talk to Alex
          <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </div>
    </motion.div>
  );
}
