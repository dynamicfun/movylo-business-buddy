import { motion } from "framer-motion";
import { Activity, UserPlus, Star, ShoppingBag, MessageSquare, Heart, Calendar } from "lucide-react";

interface FeedItem {
  id: string;
  type: "signup" | "opened" | "clicked" | "contacted" | "saved" | "reservation" | "review";
  text: string;
  time: string;
}

// Customer-first, singular language - no batch/campaign terminology
const feedItems: FeedItem[] = [
  { id: "1", type: "signup", text: "New customer signed up", time: "2m ago" },
  { id: "2", type: "opened", text: "Customer opened a message", time: "15m ago" },
  { id: "3", type: "clicked", text: "Customer clicked an offer", time: "1h ago" },
];

const iconMap = {
  signup: <UserPlus className="w-3 h-3" />,
  opened: <MessageSquare className="w-3 h-3" />,
  clicked: <ShoppingBag className="w-3 h-3" />,
  contacted: <MessageSquare className="w-3 h-3" />,
  saved: <Heart className="w-3 h-3" />,
  reservation: <Calendar className="w-3 h-3" />,
  review: <Star className="w-3 h-3" />,
};

const colorMap = {
  signup: "text-emerald-600 bg-emerald-100",
  opened: "text-blue-600 bg-blue-100",
  clicked: "text-violet-600 bg-violet-100",
  contacted: "text-amber-600 bg-amber-100",
  saved: "text-rose-500 bg-rose-100",
  reservation: "text-indigo-600 bg-indigo-100",
  review: "text-amber-600 bg-amber-100",
};

export function LiveFeed() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="mb-5"
    >
      <div className="flex items-center gap-2 mb-2.5">
        <Activity className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Live</span>
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success"></span>
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {feedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + index * 0.04, ease: "easeOut" }}
            className="flex items-center gap-1.5 bg-card border border-border/70 rounded-lg px-2 py-1.5"
          >
            <span className={`w-4 h-4 rounded-full flex items-center justify-center ${colorMap[item.type]}`}>
              {iconMap[item.type]}
            </span>
            <span className="text-xs text-foreground">{item.text}</span>
            <span className="text-[10px] text-muted-foreground">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
