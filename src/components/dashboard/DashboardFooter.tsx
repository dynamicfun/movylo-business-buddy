import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardFooter = () => {
  return (
    <>
      {/* Plan & SMS Credits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 sm:mt-8 bg-card rounded-2xl p-4 sm:p-6 shadow-sm border border-border/50"
      >
        <div className="flex items-center justify-between gap-4">
          {/* Plan info */}
          <div className="flex-1 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">Plan:</p>
            <p className="font-bold text-foreground text-sm sm:text-base mb-2">Premium Plus</p>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6 text-xs sm:text-sm">
              Upgrade
            </Button>
          </div>

          {/* SMS credit */}
          <div className="flex-1 text-center">
            <p className="text-xs sm:text-sm text-muted-foreground mb-0.5 sm:mb-1">SMS credit</p>
            <p className="font-bold text-foreground text-sm sm:text-base mb-2">19</p>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4 sm:px-6 text-xs sm:text-sm">
              Top Up
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-6 sm:mt-8 bg-primary text-primary-foreground py-3 sm:py-4 -mx-3 sm:-mx-4 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm">2026 © Movylo | Made with passion.</p>
        </div>
      </footer>

      {/* Help Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 bg-card text-foreground px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg border border-border hover:shadow-xl transition-shadow z-50"
      >
        <span className="text-xs sm:text-sm font-medium hidden sm:inline">Need help?</span>
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
        </div>
      </motion.button>
    </>
  );
};
