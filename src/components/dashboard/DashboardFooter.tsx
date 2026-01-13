import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardFooter = () => {
  return (
    <>
      {/* Upsell Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-card rounded-2xl p-6 shadow-sm border border-border/50"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Get More */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-400" />
            <div>
              <h3 className="text-lg font-bold text-primary">GET MORE</h3>
              <h3 className="text-lg font-bold text-primary">FROM MOVYLO</h3>
            </div>
            <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
          </div>

          {/* Center - Plan info */}
          <div className="text-center">
            <p className="text-sm text-primary mb-1">Plan:</p>
            <p className="font-bold text-primary mb-2">Premium Plus</p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Upgrade
            </Button>
          </div>

          {/* Right - SMS credit */}
          <div className="text-center">
            <p className="text-sm text-primary mb-1">SMS credit</p>
            <p className="font-bold text-primary mb-2">19</p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Top Up
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-8 bg-primary text-primary-foreground py-4 -mx-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm">2026 © Movylo | Made with passion.</p>
        </div>
      </footer>

      {/* Help Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 right-6 flex items-center gap-2 bg-card text-foreground px-4 py-3 rounded-full shadow-lg border border-border hover:shadow-xl transition-shadow"
      >
        <span className="text-sm font-medium">Need help?</span>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-primary-foreground" />
        </div>
      </motion.button>
    </>
  );
};
