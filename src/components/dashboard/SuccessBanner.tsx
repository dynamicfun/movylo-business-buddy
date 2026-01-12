import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, X, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessBannerProps {
  onViewCustomer?: () => void;
  onManageCustomers?: () => void;
}

export function SuccessBanner({ onViewCustomer, onManageCustomers }: SuccessBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-banner-success border border-banner-success-border rounded-xl p-5 mb-6"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-success/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4 text-success" />
        </button>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success/15 flex items-center justify-center">
            <PartyPopper className="w-5 h-5 text-success" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              You have your first customer
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              A customer just signed up. This is where activity will start appearing.
            </p>
            
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={onManageCustomers}
                className="gap-2"
                size="sm"
              >
                <Users className="w-4 h-4" />
                Find & manage customers
              </Button>
              
              <Button
                variant="ghost"
                onClick={onViewCustomer}
                className="gap-2 text-muted-foreground hover:text-foreground"
                size="sm"
              >
                View customer
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
