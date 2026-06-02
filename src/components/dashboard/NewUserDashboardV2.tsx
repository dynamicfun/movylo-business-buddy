import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Super-simple New User dashboard (Variant 2)
 * One screen, one decision: tap the big button → AI activation flow.
 * Designed for SMBs with no patience, no skills.
 */
export function NewUserDashboardV2() {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto py-6 sm:py-12 text-center">
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="w-20 h-20 rounded-full bg-[#042C53] text-white flex items-center justify-center mx-auto mb-6"
      >
        <Sparkles className="w-9 h-9" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold mb-3"
      >
        Welcome 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-base text-muted-foreground mb-8 px-2"
      >
        Let's get your business growing.
        <br />
        It takes about a minute.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Button
          onClick={() => navigate("/activate-v2")}
          className="w-full h-16 text-base font-semibold bg-[#042C53] hover:bg-[#042C53]/90 text-white rounded-2xl gap-2 shadow-lg shadow-[#042C53]/20"
        >
          Start
          <ArrowRight className="w-5 h-5" />
        </Button>

        <p className="text-xs text-muted-foreground mt-4">
          Nothing happens until customers choose to join.
        </p>
      </motion.div>
    </div>
  );
}
