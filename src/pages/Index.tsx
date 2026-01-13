import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CustomerCard } from "@/components/dashboard/CustomerCard";
import { EngagementCard } from "@/components/dashboard/EngagementCard";
import { SalesCard } from "@/components/dashboard/SalesCard";
import { ActivationBanner } from "@/components/dashboard/ActivationBanner";
import { LiveFeed } from "@/components/dashboard/LiveFeed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Simple header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between mb-6"
        >
          <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="w-5 h-5" />
          </Button>
        </motion.div>

        {/* Activation banner */}
        <ActivationBanner completedSteps={2} totalSteps={5} />

        {/* Live feed */}
        <LiveFeed />

        {/* Frequent actions */}
        <QuickActions />

        {/* Three equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomerCard />
          <EngagementCard />
          <SalesCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
