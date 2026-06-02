import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Zap, Send, ArrowRight, Check } from "lucide-react";

/**
 * Simpler, more visual New User dashboard (Variant 2).
 * One big primary action + two small next steps. No metrics, no jargon.
 */
export function NewUserDashboardV2() {
  const navigate = useNavigate();

  const nextSteps = [
    {
      icon: Zap,
      title: "Turn on Autopilot",
      href: "/autopilot",
    },
    {
      icon: Send,
      title: "Send your first message",
      href: "/messages/create-promo",
    },
  ];

  return (
    <div className="max-w-xl mx-auto">
      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
          Welcome 👋
        </h1>
        <p className="text-sm text-muted-foreground">
          One thing at a time. Let's start here.
        </p>
      </motion.div>

      {/* The one thing to do */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        onClick={() => navigate("/sources")}
        className="w-full text-left rounded-2xl bg-[#042C53] text-white p-6 shadow-lg shadow-[#042C53]/15 hover:shadow-[#042C53]/25 transition"
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <Users className="w-7 h-7" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wide text-white/70 mb-0.5">
              Start here
            </p>
            <h2 className="text-xl font-semibold">
              Add your first customers
            </h2>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </div>
      </motion.button>

      {/* Two next steps — visual tiles */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="grid grid-cols-2 gap-3 mt-4"
      >
        {nextSteps.map((s) => (
          <button
            key={s.title}
            onClick={() => navigate(s.href)}
            className="rounded-2xl border border-border bg-card p-5 text-left hover:border-[#042C53]/40 hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-full bg-[#042C53]/10 text-[#042C53] flex items-center justify-center mb-3">
              <s.icon className="w-5 h-5" />
            </div>
            <p className="text-sm font-semibold text-foreground">{s.title}</p>
          </button>
        ))}
      </motion.div>

      {/* Done chip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.18 }}
        className="flex items-center justify-center gap-2 mt-5 text-xs text-muted-foreground"
      >
        <Check className="w-3.5 h-3.5 text-[#042C53]" />
        Business set up
      </motion.div>

      <p className="text-xs text-muted-foreground text-center mt-3">
        Nothing happens until customers choose to join.
      </p>
    </div>
  );
}
