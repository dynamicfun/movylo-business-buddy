import { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CustomerCard } from "@/components/dashboard/CustomerCard";
import { EngagementCard } from "@/components/dashboard/EngagementCard";
import { SalesCard } from "@/components/dashboard/SalesCard";
import { ActivationBanner } from "@/components/dashboard/ActivationBanner";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Sample data for steady state preview
const sampleActivityData = {
  isActivationMode: false,
  messages: {
    sent: 10,
    opened: "50%",
    clicked: "0%",
  },
  contacts: {
    calls: 0,
    email: 0,
    whatsapp: 0,
  },
  socialClicks: {
    facebook: 11,
    instagram: 0,
    google: 0,
    tiktok: 0,
    linkedin: 0,
  },
  interactions: {
    reviews: { count: 0, total: 1 },
    feedback: { count: 0, total: 2 },
  },
};

const sampleCustomerData = {
  isActivationMode: false,
  newCustomers: 247,
  newCustomersGrowth: 2.4,
  totalCustomers: 15689,
  totalCustomersGrowth: 1.9,
  sources: {
    website: 45,
    facebook: 32,
    instagram: 28,
    whatsapp: null,
    qrCodes: 12,
    excel: null,
    manual: 10,
    ads: null,
  },
};


const Index = () => {
  const [showSteadyState, setShowSteadyState] = useState(true);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Compact header with Live Feed prominence */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between gap-4 mb-3"
            >
              <div className="flex items-center gap-3">
                <SidebarTrigger className="text-muted-foreground sm:hidden" />
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Preview toggle */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 bg-secondary/50 rounded-lg">
                  <Switch
                    id="preview-mode"
                    checked={showSteadyState}
                    onCheckedChange={setShowSteadyState}
                  />
                  <Label htmlFor="preview-mode" className="text-xs text-muted-foreground cursor-pointer hidden sm:inline">
                    {showSteadyState ? "Steady state" : "New user"}
                  </Label>
                </div>
                <QuickActions />
              </div>
            </motion.div>

            {/* Activation banner - only show in activation mode */}
            {!showSteadyState && <ActivationBanner completedSteps={2} totalSteps={5} />}

            {/* Live feed - above the main cards */}
            <LiveFeed />

            {/* Three equal columns: Customers, Activity, Sales */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {showSteadyState ? (
                <>
                  <CustomerCard {...sampleCustomerData} />
                  <EngagementCard {...sampleActivityData} />
                  <SalesCard 
                    isActivationMode={false}
                    downloadedCoupons={22}
                    inStoreSales={{ closed: 3, value: "$25" }}
                    onlineSales={{ closed: 1, value: "$100" }}
                    reservations={{ covers: 259, value: "$8,975" }}
                  />
                </>
              ) : (
                <>
                  <CustomerCard />
                  <EngagementCard />
                  <SalesCard />
                </>
              )}
            </div>

            {/* Footer */}
            <DashboardFooter />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
