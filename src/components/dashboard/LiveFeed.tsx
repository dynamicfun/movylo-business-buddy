import { motion } from "framer-motion";
import { Activity, UserPlus, Star, ShoppingBag, MessageSquare } from "lucide-react";

interface FeedItem {
  id: string;
  type: "customer" | "review" | "sale" | "message";
  text: string;
  time: string;
}

const feedItems: FeedItem[] = [
  { id: "1", type: "customer", text: "New customer signed up", time: "2m ago" },
  { id: "2", type: "message", text: "Campaign sent to 45 customers", time: "1h ago" },
  { id: "3", type: "sale", text: "Online order received", time: "3h ago" },
];

const iconMap = {
  customer: <UserPlus className="w-3 h-3" />,
  review: <Star className="w-3 h-3" />,
  sale: <ShoppingBag className="w-3 h-3" />,
  message: <MessageSquare className="w-3 h-3" />,
};

const colorMap = {
  customer: "text-emerald-600 bg-emerald-100",
  review: "text-amber-600 bg-amber-100",
  sale: "text-blue-600 bg-blue-100",
  message: "text-violet-600 bg-violet-100",
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
