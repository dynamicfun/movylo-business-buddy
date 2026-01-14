import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardFooter = () => {
  return (
    <>
      {/* Plan & SMS Credits */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 sm:mt-8 bg-card rounded-xl p-4 sm:p-5 border border-border/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center justify-around gap-6">
          {/* Plan info */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">Plan</p>
            <p className="font-semibold text-foreground text-sm mb-2.5">Premium Plus</p>
            <Button size="sm" className="rounded-full px-4 h-7 text-xs font-medium">
              Upgrade
            </Button>
          </div>

          {/* Divider */}
          <div className="w-px h-16 bg-border/60" />

          {/* SMS credit */}
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1">SMS Credits</p>
            <p className="font-semibold text-foreground text-sm mb-2.5">19</p>
            <Button size="sm" variant="outline" className="rounded-full px-4 h-7 text-xs font-medium">
              Top Up
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-6 sm:mt-8 bg-primary/95 text-primary-foreground py-3 -mx-3 sm:-mx-4 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs opacity-90">2026 © Movylo · Made with passion</p>
        </div>
      </footer>

      {/* Help Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 flex items-center gap-2 bg-card text-foreground pl-3 pr-1.5 py-1.5 rounded-full shadow-lg border border-border/70 hover:shadow-xl transition-all z-50"
      >
        <span className="text-xs font-medium hidden sm:inline">Need help?</span>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-primary-foreground" />
        </div>
      </motion.button>
    </>
  );
};
