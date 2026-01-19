import { motion } from "framer-motion";
import { Send, Mail, MousePointerClick, Phone, AtSign, MessageCircle, Facebook, Instagram, Search, Star, MessageSquare, ChevronRight, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

// TikTok and LinkedIn icons as custom components
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

interface MetricRowProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string | number;
  showValue?: boolean;
}

function MetricRow({ icon, iconColor, label, value, showValue = true }: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-1">
      <div className="flex items-center gap-2">
        <span className={iconColor}>{icon}</span>
        <span className="text-sm text-foreground">{label}</span>
      </div>
      {showValue && <span className="text-sm font-medium text-foreground">{value}</span>}
    </div>
  );
}

interface EngagementCardProps {
  isActivationMode?: boolean;
  messages?: {
    sent: number;
    opened: string;
    clicked: string;
  };
  contacts?: {
    calls: number;
    email: number;
    whatsapp: number;
  };
  socialClicks?: {
    facebook: number;
    instagram: number;
    google: number;
    tiktok: number;
    linkedin: number;
  };
  interactions?: {
    reviews: { count: number; total: number };
    feedback: { count: number; total: number };
  };
}

export function EngagementCard({
  isActivationMode = true,
  messages = { sent: 0, opened: "0%", clicked: "0%" },
  contacts = { calls: 0, email: 0, whatsapp: 0 },
  socialClicks = { facebook: 0, instagram: 0, google: 0, tiktok: 0, linkedin: 0 },
  interactions = {
    reviews: { count: 0, total: 0 },
    feedback: { count: 0, total: 0 },
  },
}: EngagementCardProps) {
  // Check if there's any activity
  const hasActivity = !isActivationMode && (
    messages.sent > 0 || 
    contacts.calls > 0 || contacts.email > 0 || contacts.whatsapp > 0 ||
    socialClicks.facebook > 0 || socialClicks.instagram > 0 || socialClicks.google > 0 ||
    interactions.reviews.count > 0 || interactions.feedback.count > 0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="mb-3">
        <h2 className="text-base font-semibold text-foreground">Activity</h2>
        <p className="text-xs text-muted-foreground">What customers are doing</p>
      </div>

      {/* Autopilot notice */}
      <a 
        href="#" 
        className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg mb-3 border border-amber-200/50 hover:bg-amber-100 transition-colors cursor-pointer"
      >
        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        <span className="text-xs text-amber-700 font-medium">Autopilot is off</span>
      </a>

      {/* Waiting message for activation mode */}
      {isActivationMode && (
        <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg mb-3">
          <Clock className="w-4 h-4 text-amber-600" />
          <span className="text-sm text-amber-700 font-medium">Waiting for activity</span>
        </div>
      )}

      <div className="flex-1 space-y-3">
        {/* Messages section */}
        <div className="bg-primary/5 rounded-xl p-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Messages</h3>
          <MetricRow icon={<Send className="w-3.5 h-3.5" />} iconColor="text-primary" label="Sent" value={messages.sent} showValue={hasActivity} />
          <MetricRow icon={<Mail className="w-3.5 h-3.5" />} iconColor="text-accent" label="Opened" value={messages.opened} showValue={hasActivity} />
          <MetricRow icon={<MousePointerClick className="w-3.5 h-3.5" />} iconColor="text-primary" label="Clicked" value={messages.clicked} showValue={hasActivity} />
        </div>

        {/* Contacts received */}
        <div className="bg-accent/5 rounded-xl p-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Contacts received</h3>
          <MetricRow icon={<Phone className="w-3.5 h-3.5" />} iconColor="text-accent" label="Calls" value={contacts.calls} showValue={hasActivity} />
          <MetricRow icon={<AtSign className="w-3.5 h-3.5" />} iconColor="text-primary" label="Email" value={contacts.email} showValue={hasActivity} />
          <MetricRow icon={<MessageCircle className="w-3.5 h-3.5" />} iconColor="text-accent" label="WhatsApp" value={contacts.whatsapp} showValue={hasActivity} />
        </div>

        {/* Social clicks */}
        <div className="bg-primary/5 rounded-xl p-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Social clicks</h3>
          <MetricRow icon={<Facebook className="w-3.5 h-3.5" />} iconColor="text-primary" label="Facebook" value={socialClicks.facebook} showValue={hasActivity} />
          <MetricRow icon={<Instagram className="w-3.5 h-3.5" />} iconColor="text-accent" label="Instagram" value={socialClicks.instagram} showValue={hasActivity} />
          <MetricRow icon={<Search className="w-3.5 h-3.5" />} iconColor="text-primary" label="Google" value={socialClicks.google} showValue={hasActivity} />
          <MetricRow icon={<TikTokIcon className="w-3.5 h-3.5" />} iconColor="text-foreground" label="TikTok" value={socialClicks.tiktok} showValue={hasActivity} />
          <MetricRow icon={<LinkedInIcon className="w-3.5 h-3.5" />} iconColor="text-primary" label="LinkedIn" value={socialClicks.linkedin} showValue={hasActivity} />
        </div>

        {/* Interactions */}
        <div className="bg-accent/5 rounded-xl p-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">Interactions</h3>
          <MetricRow icon={<Star className="w-3.5 h-3.5" />} iconColor="text-accent" label="Reviews" value={hasActivity ? `${interactions.reviews.count}/${interactions.reviews.total}` : "—"} showValue={true} />
          <MetricRow icon={<MessageSquare className="w-3.5 h-3.5" />} iconColor="text-primary" label="Feedback" value={hasActivity ? `${interactions.feedback.count}/${interactions.feedback.total}` : "—"} showValue={true} />
        </div>
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
        size="default"
      >
        Messages & offers
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
