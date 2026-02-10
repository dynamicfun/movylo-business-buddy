import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Mail, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeedItem {
  id: string;
  type: "signup" | "message" | "offer";
  title: string;
  description: string;
  time: string;
  customerName?: string;
}

const iconMap = {
  signup: <UserPlus className="w-4 h-4 text-muted-foreground" />,
  message: <Mail className="w-4 h-4 text-muted-foreground" />,
  offer: <Gift className="w-4 h-4 text-muted-foreground" />,
};

export function LiveFeed() {
  const { t, currentLanguage } = useLanguage();
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedItems: FeedItem[] = currentLanguage === "it" ? [
    { id: "1", type: "signup", title: "Nuovo cliente", description: "si è iscritto.", customerName: "Carlo Mercado", time: "4 ore fa" },
    { id: "2", type: "message", title: "Aggiornamento messaggio", description: "ha aperto il tuo messaggio.", customerName: "Jodi Frank", time: "9 ore fa" },
  ] : [
    { id: "1", type: "signup", title: "New customer", description: "signed up.", customerName: "Carlo Mercado", time: "4 hours ago" },
    { id: "2", type: "message", title: "Message update", description: "opened your message.", customerName: "Jodi Frank", time: "9 hours ago" },
  ];

  // Auto-rotate on mobile
  useEffect(() => {
    if (!isMobile || feedItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile, feedItems.length]);

  const renderFeedItem = (item: FeedItem, index: number) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      transition={{ delay: isMobile ? 0 : 0.1 + index * 0.05 }}
      className="flex items-center gap-2.5 px-3 py-2 bg-card rounded-xl shadow-sm flex-shrink-0"
    >
      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {iconMap[item.type]}
      </div>
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.customerName}</span>
        <span className="text-xs text-foreground whitespace-nowrap">{item.description}</span>
      </div>
      <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-2xl border-2 border-primary/20 p-4 mb-4 shadow-sm"
    >
      <div className="flex items-center gap-4">
        {/* Live indicator */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="text-sm font-bold text-foreground whitespace-nowrap uppercase tracking-wide">{t.liveFeed}</span>
        </div>

        <div className="h-6 w-px bg-border flex-shrink-0" />

        {/* Feed items */}
        <div className="flex items-center gap-3 overflow-x-auto min-w-0 flex-1">
          {isMobile ? (
            <AnimatePresence mode="wait">
              {renderFeedItem(feedItems[currentIndex], currentIndex)}
            </AnimatePresence>
          ) : (
            feedItems.map((item, index) => renderFeedItem(item, index))
          )}
        </div>
      </div>
    </motion.div>
  );
}
