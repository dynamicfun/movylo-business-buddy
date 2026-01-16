import { motion } from "framer-motion";
import { Send, Mail, MousePointerClick, Phone, AtSign, MessageCircle, Facebook, Instagram, Search, Star, MessageSquare, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MetricRowProps {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  value: string | number;
}

function MetricRow({ icon, iconColor, label, value }: MetricRowProps) {
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
  };
  interactions?: {
    reviews: { count: number; total: number };
    feedback: { count: number; total: number };
    deliveries: { count: number; total: number };
  };
}

export function EngagementCard({
  isActivationMode = true,
  messages = { sent: 0, opened: "0%", clicked: "0%" },
  contacts = { calls: 0, email: 0, whatsapp: 0 },
  socialClicks = { facebook: 0, instagram: 0, google: 0 },
  interactions = {
    reviews: { count: 0, total: 0 },
    feedback: { count: 0, total: 0 },
    deliveries: { count: 0, total: 0 },
  },
}: EngagementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.3 }}
      className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-5 flex flex-col"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">Activity</h2>
        <p className="text-xs text-muted-foreground">What customers are doing</p>
      </div>

      <div className="space-y-4 flex-1">
        {/* Messages section */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">Messages</h3>
          <div className="space-y-0.5">
            <MetricRow
              icon={<Send className="w-3.5 h-3.5" />}
              iconColor="text-blue-500"
              label="Sent"
              value={messages.sent}
            />
            <MetricRow
              icon={<Mail className="w-3.5 h-3.5" />}
              iconColor="text-amber-500"
              label="Opened"
              value={messages.opened}
            />
            <MetricRow
              icon={<MousePointerClick className="w-3.5 h-3.5" />}
              iconColor="text-violet-500"
              label="Clicked"
              value={messages.clicked}
            />
          </div>
        </div>

        {/* Contacts received */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">Contacts received</h3>
          <div className="space-y-0.5">
            <MetricRow
              icon={<Phone className="w-3.5 h-3.5" />}
              iconColor="text-green-500"
              label="Calls"
              value={contacts.calls}
            />
            <MetricRow
              icon={<AtSign className="w-3.5 h-3.5" />}
              iconColor="text-red-500"
              label="Email"
              value={contacts.email}
            />
            <MetricRow
              icon={<MessageCircle className="w-3.5 h-3.5" />}
              iconColor="text-green-600"
              label="WhatsApp"
              value={contacts.whatsapp}
            />
          </div>
        </div>

        {/* Social clicks */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">Social clicks</h3>
          <div className="space-y-0.5">
            <MetricRow
              icon={<Facebook className="w-3.5 h-3.5" />}
              iconColor="text-blue-600"
              label="Facebook"
              value={socialClicks.facebook}
            />
            <MetricRow
              icon={<Instagram className="w-3.5 h-3.5" />}
              iconColor="text-pink-500"
              label="Instagram"
              value={socialClicks.instagram}
            />
            <MetricRow
              icon={<Search className="w-3.5 h-3.5" />}
              iconColor="text-blue-500"
              label="Google"
              value={socialClicks.google}
            />
          </div>
        </div>

        {/* Interactions */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">Interactions</h3>
          <div className="space-y-0.5">
            <MetricRow
              icon={<Star className="w-3.5 h-3.5" />}
              iconColor="text-amber-500"
              label="Reviews"
              value={`${interactions.reviews.count} (${interactions.reviews.total})`}
            />
            <MetricRow
              icon={<MessageSquare className="w-3.5 h-3.5" />}
              iconColor="text-emerald-500"
              label="Feedback"
              value={`${interactions.feedback.count} (${interactions.feedback.total})`}
            />
            <MetricRow
              icon={<Truck className="w-3.5 h-3.5" />}
              iconColor="text-orange-500"
              label="Deliveries"
              value={`${interactions.deliveries.count} (${interactions.deliveries.total})`}
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm"
        size="sm"
      >
        Messages & offers
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
