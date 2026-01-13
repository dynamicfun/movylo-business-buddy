import { useState } from "react";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CustomerCard } from "@/components/dashboard/CustomerCard";
import { EngagementCard } from "@/components/dashboard/EngagementCard";
import { SalesCard } from "@/components/dashboard/SalesCard";
import { OrdersCard } from "@/components/dashboard/OrdersCard";
import { ActivationBanner } from "@/components/dashboard/ActivationBanner";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardFooter } from "@/components/dashboard/DashboardFooter";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// Sample data for steady state preview
const sampleActivityData = {
  isActivationMode: false as const,
  messages: {
    growth: 11,
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
    growth: -21,
    facebook: 11,
    instagram: 0,
    google: 0,
  },
  interactions: {
    reviews: { count: 0, total: 1 },
    feedback: { count: 0, total: 2 },
    deliveries: { count: 0, total: 0 },
  },
};

const sampleCustomerData = {
  isActivationMode: false as const,
  newCustomers: 24,
  totalCustomers: 156,
  sources: {
    website: 45,
    facebook: 32,
    instagram: 28,
    whatsapp: null, // needs activation
    qrCodes: 12,
    excel: null, // needs activation
    manual: 10,
    ads: null, // needs activation
  },
};

const sampleSalesData = {
  isActivationMode: false as const,
  downloadedCoupons: 22,
  inStoreSales: { closed: 3, value: "£ 25" },
  onlineSales: { closed: 1, value: "£ 100" },
  reservations: { covers: 359, value: "£ 8,975" },
};

const sampleOrdersData = [
  { customer: "John D.", amount: "£ 45", status: "Completed", code: "ORD001", source: "Website", type: "Dine-in", date: "12 Jan" },
  { customer: "Sarah M.", amount: "£ 32", status: "Completed", code: "ORD002", source: "App", type: "Takeaway", date: "12 Jan" },
  { customer: "Mike R.", amount: "£ 78", status: "Pending", code: "ORD003", source: "Phone", type: "Delivery", date: "11 Jan" },
  { customer: "Emma L.", amount: "£ 25", status: "Completed", code: "ORD004", source: "Walk-in", type: "Dine-in", date: "11 Jan" },
  { customer: "Chris P.", amount: "£ 56", status: "Completed", code: "ORD005", source: "Website", type: "Takeaway", date: "10 Jan" },
];

const Index = () => {
  const [showSteadyState, setShowSteadyState] = useState(false);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Simple header */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="flex items-center gap-2">
                <SidebarTrigger className="text-muted-foreground" />
                <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
              </div>
              <div className="flex items-center gap-4">
                {/* Preview toggle */}
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg">
                  <Switch
                    id="preview-mode"
                    checked={showSteadyState}
                    onCheckedChange={setShowSteadyState}
                  />
                  <Label htmlFor="preview-mode" className="text-xs text-muted-foreground cursor-pointer">
                    {showSteadyState ? "Steady state" : "New user"}
                  </Label>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            {/* Activation banner - only show in activation mode */}
            {!showSteadyState && <ActivationBanner completedSteps={2} totalSteps={5} />}

            {/* Live feed */}
            <LiveFeed />

            {/* Frequent actions */}
            <QuickActions />

            {/* Three equal cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {showSteadyState ? (
                <>
                  <CustomerCard {...sampleCustomerData} />
                  <EngagementCard {...sampleActivityData} />
                  <SalesCard {...sampleSalesData} />
                </>
              ) : (
                <>
                  <CustomerCard />
                  <EngagementCard />
                  <SalesCard />
                </>
              )}
            </div>

            {/* Orders card - only in steady state */}
            {showSteadyState && (
              <div className="mt-4">
                <OrdersCard orders={sampleOrdersData} />
              </div>
            )}

            {/* Footer */}
            <DashboardFooter />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
