import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Mail, Gift, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface FeedItem {
  id: string;
  type: "signup" | "message" | "offer";
  title: string;
  description: string;
  time: string;
  customerName?: string;
}

const iconMap = {
  signup: <UserPlus className="w-3.5 h-3.5 text-muted-foreground" />,
  message: <Mail className="w-3.5 h-3.5 text-muted-foreground" />,
  offer: <Gift className="w-3.5 h-3.5 text-muted-foreground" />,
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

  // Auto-rotate
  useEffect(() => {
    if (feedItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [feedItems.length]);

  const renderFeedItem = (item: FeedItem) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 8 }}
      className="flex items-center gap-2 min-w-0"
    >
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {iconMap[item.type]}
      </div>
      <span className="text-primary font-semibold text-xs whitespace-nowrap">{item.customerName}</span>
      <span className="text-xs text-foreground whitespace-nowrap truncate">{item.description}</span>
      <span className="text-[10px] text-muted-foreground whitespace-nowrap">{item.time}</span>
    </motion.div>
  );

  return (
    <div className="flex items-center gap-2 bg-primary/5 rounded-xl border border-primary/15 px-3 py-2 min-w-0 overflow-hidden">
      {/* Live dot + label */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-xs font-bold text-foreground uppercase tracking-wide hidden sm:inline">{t.liveFeed}</span>
      </div>

      <div className="h-4 w-px bg-border flex-shrink-0" />

      {/* Single rotating item */}
      <div className="flex-1 min-w-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {renderFeedItem(feedItems[currentIndex])}
        </AnimatePresence>
      </div>

      {/* See more link */}
      <Link 
        to="/feed" 
        className="flex items-center gap-0.5 text-xs text-primary hover:text-primary/80 font-medium whitespace-nowrap flex-shrink-0"
      >
        <span className="hidden sm:inline">{t.seeMore || "See more"}</span>
        <ChevronRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
