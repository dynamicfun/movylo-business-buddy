import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Send, ArrowRight, Check } from "lucide-react";

/**
 * Super-simple New User dashboard (Variant 2)
 * Replaces the 3 activation cards with a single focused "do this next" card,
 * plus two tiny status chips. No metrics, no jargon.
 */
export function NewUserDashboardV2() {
  const navigate = useNavigate();

  const stats = [
    { label: "Customers", value: "0" },
    { label: "Messages sent", value: "0" },
  ];

  return (
    <div className="max-w-xl mx-auto">
      {/* Tiny status row */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 gap-3 mb-5"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card px-4 py-3"
          >
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold">{s.value}</p>
          </div>
        ))}
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
          <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-wide text-white/70 mb-0.5">
              Do this next
            </p>
            <h2 className="text-lg sm:text-xl font-semibold">
              Add your first customers
            </h2>
            <p className="text-sm text-white/80 mt-1">
              Pick one way — we'll guide you.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 shrink-0" />
        </div>
      </motion.button>

      {/* Tiny later list */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
        className="mt-5 rounded-2xl border border-border bg-card divide-y"
      >
        <div className="flex items-center gap-3 p-4">
          <div className="w-7 h-7 rounded-full bg-[#042C53]/10 text-[#042C53] flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-sm text-muted-foreground line-through flex-1">
            Set up your business
          </p>
        </div>
        <button
          onClick={() => navigate("/messages/create-promo")}
          className="w-full flex items-center gap-3 p-4 hover:bg-muted/40 transition text-left"
        >
          <div className="w-7 h-7 rounded-full bg-muted text-muted-foreground flex items-center justify-center shrink-0">
            <Send className="w-3.5 h-3.5" />
          </div>
          <p className="text-sm font-medium flex-1">Send your first message</p>
          <ArrowRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </motion.div>

      <p className="text-xs text-muted-foreground text-center mt-5">
        Nothing happens until customers choose to join.
      </p>
    </div>
  );
}
