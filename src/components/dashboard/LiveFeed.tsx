import { motion } from "framer-motion";
import { UserPlus, Mail, Gift } from "lucide-react";

interface FeedItem {
  id: string;
  type: "signup" | "message" | "offer";
  title: string;
  description: string;
  time: string;
  customerName?: string;
}

const feedItems: FeedItem[] = [
  { 
    id: "1", 
    type: "signup", 
    title: "New customer",
    description: "just signed up.",
    customerName: "Carlo Mercado",
    time: "4 hours ago" 
  },
  { 
    id: "2", 
    type: "message", 
    title: "Message update",
    description: "Your message is opened by",
    customerName: "Jodi Frank",
    time: "9 hours ago" 
  },
  { 
    id: "3", 
    type: "offer", 
    title: "Offer update",
    description: "clicked on an offer.",
    customerName: "Tolga Akcay",
    time: "28 hours ago" 
  },
];

const iconMap = {
  signup: <UserPlus className="w-4 h-4 text-muted-foreground" />,
  message: <Mail className="w-4 h-4 text-muted-foreground" />,
  offer: <Gift className="w-4 h-4 text-muted-foreground" />,
};

export function LiveFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl border border-border/50 p-4 mb-4"
    >
      {/* Header + Feed items in horizontal layout */}
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        {/* Live indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-semibold text-foreground whitespace-nowrap">Live</span>
        </div>

        <div className="h-6 w-px bg-border/60 flex-shrink-0" />

        {/* Feed items - horizontal scroll */}
        <div className="flex items-center gap-3">
          {feedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-2.5 px-3 py-2 bg-secondary/40 rounded-xl hover:bg-secondary/60 transition-colors flex-shrink-0"
            >
              <div className="w-7 h-7 rounded-full bg-background flex items-center justify-center">
                {iconMap[item.type]}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-medium text-sm whitespace-nowrap">{item.customerName}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{item.description}</span>
              </div>
              <span className="text-xs text-muted-foreground/70 whitespace-nowrap">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
