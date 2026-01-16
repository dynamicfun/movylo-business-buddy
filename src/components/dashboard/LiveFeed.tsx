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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-card rounded-2xl border border-border/60 p-5 sm:p-6 shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <h2 className="text-lg sm:text-xl font-bold text-foreground">Live Feed</h2>
      </div>

      {/* Feed items */}
      <div className="space-y-4">
        {feedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + index * 0.05 }}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-secondary/30 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center flex-shrink-0">
              {iconMap[item.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className="text-sm font-semibold text-foreground">{item.title}</span>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {item.type === "message" ? (
                  <>
                    {item.description} <span className="text-primary font-semibold">{item.customerName}</span>.
                  </>
                ) : (
                  <>
                    <span className="text-primary font-semibold">{item.customerName}</span> {item.description}
                  </>
                )}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
