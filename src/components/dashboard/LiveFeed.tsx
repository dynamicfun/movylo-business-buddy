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
  { id: "4", type: "contacted", text: "Customer contacted you", time: "2h ago" },
  { id: "5", type: "saved", text: "Offer saved by a customer", time: "3h ago" },
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
      transition={{ delay: 0.1 }}
      className="mb-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-muted-foreground" />
        <h2 className="text-sm font-medium text-muted-foreground">Live feed</h2>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
        {feedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            className="flex-shrink-0 flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2"
          >
            <span className={`w-5 h-5 rounded-full flex items-center justify-center ${colorMap[item.type]}`}>
              {iconMap[item.type]}
            </span>
            <span className="text-sm text-foreground whitespace-nowrap">{item.text}</span>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
