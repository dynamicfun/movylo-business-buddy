import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, Zap, TrendingUp, ChevronRight, Globe, FileSpreadsheet, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    icon: Users,
    title: "Add your first customers",
    description: "Import contacts or connect a sign-up source",
    done: true,
    href: "/sources",
  },
  {
    icon: Zap,
    title: "Turn on Autopilot",
    description: "Let us engage your customers automatically",
    done: true,
    href: "/autopilot",
  },
  {
    icon: TrendingUp,
    title: "Send your first campaign",
    description: "Reach your audience with a promo or newsletter",
    done: false,
    href: "/create-promo",
  },
];

const quickSources = [
  { icon: Globe, label: "Website", href: "/sources/website", color: "text-blue-500" },
  { icon: FileSpreadsheet, label: "Excel", href: "/sources/excel", color: "text-emerald-600" },
  { icon: MessageCircle, label: "WhatsApp", href: "/sources/whatsapp", color: "text-green-500" },
];

export function NewUserDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const completedSteps = steps.filter(s => s.done).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Welcome hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Welcome to your dashboard
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Complete these steps to start growing your business
        </p>
      </motion.div>

      {/* Progress */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Your progress</span>
          <span className="text-xs text-muted-foreground">{completedSteps} of {steps.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </motion.div>

      {/* Steps */}
      <div className="space-y-3 mb-10">
        {steps.map((step, i) => (
          <motion.button
            key={step.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.07, duration: 0.3 }}
            onClick={() => navigate(step.href)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all text-left group ${
              step.done
                ? "bg-card border-border/50 opacity-60"
                : "bg-card border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40"
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              step.done
                ? "bg-primary/10 text-primary"
                : "bg-primary text-primary-foreground"
            }`}>
              {step.done ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-semibold ${step.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                {step.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
            </div>
            {!step.done && (
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
            )}
          </motion.button>
        ))}
      </div>

      {/* Quick add customers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Quick start — add customers from
        </p>
        <div className="flex gap-2">
          {quickSources.map(src => (
            <Button
              key={src.label}
              variant="outline"
              size="sm"
              className="gap-2 flex-1"
              onClick={() => navigate(src.href)}
            >
              <src.icon className={`w-4 h-4 ${src.color}`} />
              {src.label}
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
