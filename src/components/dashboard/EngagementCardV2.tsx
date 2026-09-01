import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, Mail, MousePointerClick, Phone, AtSign, MessageCircle, Star,
  MessageSquare, ChevronRight, ChevronDown, Zap, Megaphone, Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ActivityModal } from "./DashboardModals";

function MetricRow({ icon, iconColor, label, value }: {
  icon: ReactNode; iconColor: string; label: string; value: string | number;
}) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

function Block({ icon, iconBg, iconColor, bg, title, summary, to, children }: {
  icon: ReactNode; iconBg: string; iconColor: string; bg: string;
  title: string; summary: string; to?: string; children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const content = (
    <div className="flex-1 flex items-center gap-3 p-3 text-left">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-foreground leading-tight">{title}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{summary}</p>
      </div>
      {!children && <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />}
    </div>
  );

  return (
    <div className={`${bg} rounded-xl overflow-hidden`}>
      <div className="flex items-stretch">
        {to ? (
          <Link to={to} className="flex-1 flex hover:bg-foreground/[0.03] transition-colors">{content}</Link>
        ) : (
          <button type="button" onClick={() => setOpen(o => !o)} className="flex-1 flex hover:bg-foreground/[0.03] transition-colors">
            {content}
          </button>
        )}
        {children && (
          <button
            type="button"
            aria-label={open ? "Collapse" : "Expand"}
            onClick={() => setOpen(o => !o)}
            className="px-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 border-t border-foreground/5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface EngagementCardV2Props {
  messages?: { sent: number; opened: string; clicked: string };
  contacts?: { calls: number; email: number; whatsapp: number };
  interactions?: { reviews: { count: number; total: number }; feedback: { count: number; total: number } };
}

export function EngagementCardV2({
  messages = { sent: 0, opened: "0%", clicked: "0%" },
  contacts = { calls: 0, email: 0, whatsapp: 0 },
  interactions = { reviews: { count: 0, total: 0 }, feedback: { count: 0, total: 0 } },
}: EngagementCardV2Props) {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const contactsTotal = contacts.calls + contacts.email + contacts.whatsapp;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-3">
        <h2 className="text-lg font-bold text-foreground">{t.activity}</h2>
        <p className="text-xs text-muted-foreground">{t.activitySubtitle}</p>
      </div>

      <div className="flex-1 space-y-3">
        <Block
          icon={<Zap className="w-4 h-4" />}
          iconBg="bg-amber-100"
          iconColor="text-amber-600"
          bg="bg-amber-50"
          title={t.getMoreActivity}
          summary="Turn on Autopilot and keep customers engaged"
          to="/autopilot"
        />

        <Block
          icon={<Megaphone className="w-4 h-4" />}
          iconBg="bg-primary/10"
          iconColor="text-primary"
          bg="bg-primary/5"
          title="Promote your business now"
          summary="Create a promotion or a newsletter"
          to="/messages/create-promo"
        />

        <Block
          icon={<Activity className="w-4 h-4" />}
          iconBg="bg-accent/10"
          iconColor="text-accent"
          bg="bg-accent/5"
          title="Ongoing activity"
          summary={`${messages.sent} ${t.sent.toLowerCase()} · ${contactsTotal} ${t.contacts.toLowerCase()}`}
        >
          <MetricRow icon={<Send className="w-3.5 h-3.5" />} iconColor="text-primary" label={t.sent} value={messages.sent} />
          <MetricRow icon={<Mail className="w-3.5 h-3.5" />} iconColor="text-accent" label={t.opened} value={messages.opened} />
          <MetricRow icon={<MousePointerClick className="w-3.5 h-3.5" />} iconColor="text-primary" label={t.clicked} value={messages.clicked} />
          <div className="my-2 border-t border-foreground/5" />
          <MetricRow icon={<Phone className="w-3.5 h-3.5" />} iconColor="text-accent" label={t.calls} value={contacts.calls} />
          <MetricRow icon={<AtSign className="w-3.5 h-3.5" />} iconColor="text-primary" label={t.email} value={contacts.email} />
          <MetricRow icon={<MessageCircle className="w-3.5 h-3.5" />} iconColor="text-accent" label={t.whatsapp} value={contacts.whatsapp} />
          <div className="my-2 border-t border-foreground/5" />
          <Link to="/reports/reviews" className="block -mx-1 px-1 rounded hover:bg-background/60 transition-colors">
            <MetricRow icon={<Star className="w-3.5 h-3.5" />} iconColor="text-accent" label={t.reviews} value={`${interactions.reviews.count}/${interactions.reviews.total}`} />
          </Link>
          <Link to="/reports/feedback" className="block -mx-1 px-1 rounded hover:bg-background/60 transition-colors">
            <MetricRow icon={<MessageSquare className="w-3.5 h-3.5" />} iconColor="text-primary" label={t.feedback} value={`${interactions.feedback.count}/${interactions.feedback.total}`} />
          </Link>
        </Block>
      </div>

      <Button className="w-full justify-between mt-4 text-sm h-10 rounded-xl" onClick={() => setShowModal(true)}>
        {t.activity}
        <ChevronRight className="w-4 h-4" />
      </Button>

      <ActivityModal open={showModal} onOpenChange={setShowModal} />
    </motion.div>
  );
}
