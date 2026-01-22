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
    title: "Nuovo cliente",
    description: "si è iscritto.",
    customerName: "Carlo Mercado",
    time: "4 ore fa" 
  },
  { 
    id: "2", 
    type: "message", 
    title: "Aggiornamento messaggio",
    description: "ha aperto il tuo messaggio.",
    customerName: "Jodi Frank",
    time: "9 ore fa" 
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
      className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-2xl border-2 border-primary/20 p-4 mb-4 shadow-sm"
    >
      {/* Header + Feed items in horizontal layout */}
      <div className="flex items-center gap-4">
        {/* Live indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-bold text-foreground whitespace-nowrap uppercase tracking-wide">Live</span>
        </div>

        <div className="h-6 w-px bg-border flex-shrink-0" />

        {/* Feed items - horizontal scroll */}
        <div className="flex items-center gap-3">
          {feedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="flex items-center gap-2.5 px-3 py-2 bg-card rounded-xl hover:bg-secondary/60 transition-colors flex-shrink-0 shadow-sm"
            >
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                {iconMap[item.type]}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.customerName}</span>
                <span className="text-xs text-foreground whitespace-nowrap">{item.description}</span>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
