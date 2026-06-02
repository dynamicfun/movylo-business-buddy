import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { CustomerCard } from "@/components/dashboard/CustomerCard";
import { EngagementCard } from "@/components/dashboard/EngagementCard";
import { SalesCard } from "@/components/dashboard/SalesCard";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { OrdersCard } from "@/components/dashboard/OrdersCard";
import { AlexConsultant } from "@/components/dashboard/AlexConsultant";
import { NewUserDashboard } from "@/components/dashboard/NewUserDashboard";
import { NewUserDashboardV2 } from "@/components/dashboard/NewUserDashboardV2";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useLanguage } from "@/contexts/LanguageContext";

type ViewMode = "steady" | "new" | "new-v2";

const sampleActivityData = {
  isActivationMode: false,
  messages: { sent: 10, opened: "50%", clicked: "0%" },
  contacts: { calls: 0, email: 0, whatsapp: 0 },
  socialClicks: { facebook: 11, instagram: 0, google: 0, tiktok: 0, linkedin: 0 },
  interactions: { reviews: { count: 0, total: 1 }, feedback: { count: 0, total: 2 } },
};

const sampleCustomerData = {
  isActivationMode: false,
  newCustomers: 247,
  newCustomersGrowth: 2.4,
  totalCustomers: 15689,
  totalCustomersGrowth: 1.9,
  sources: { website: 45, facebook: 32, instagram: 28, whatsapp: null, qrCodes: 12, excel: null, manual: 10, ads: null },
};

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("steady");
  const { t } = useLanguage();

  const modes: { key: ViewMode; label: string }[] = [
    { key: "steady", label: t.steadyState || "Steady State" },
    { key: "new", label: t.newUser || "New User" },
    { key: "new-v2", label: "New v2" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            <div className="flex items-center gap-2 mb-3 md:hidden">
              <SidebarTrigger />
              <span className="text-sm font-medium text-muted-foreground">Menu</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
              <QuickActions />

              <div className="flex items-center gap-0.5 p-0.5 bg-secondary/50 rounded-lg flex-shrink-0 self-start sm:self-auto">
                {modes.map(m => (
                  <button
                    key={m.key}
                    onClick={() => setViewMode(m.key)}
                    className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                      viewMode === m.key
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {viewMode === "steady" && (
                <div className="flex-1 min-w-0 hidden sm:block">
                  <LiveFeed />
                </div>
              )}
            </div>
            {viewMode === "steady" && (
              <div className="mb-4 sm:hidden">
                <LiveFeed />
              </div>
            )}

            {viewMode === "steady" ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <CustomerCard {...sampleCustomerData} />
                  <EngagementCard {...sampleActivityData} />
                  <SalesCard 
                    isActivationMode={false}
                    downloadedCoupons={22}
                    inStoreSales={{ closed: 3, value: "$25" }}
                    onlineSales={{ closed: 1, value: "$100" }}
                    reservations={{ covers: 259, value: "$8,975" }}
                  />
                </div>
                <div className="mb-4">
                  <OrdersCard />
                </div>
              </>
            ) : viewMode === "new" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <CustomerCard {...sampleCustomerData} />
                <EngagementCard isActivationMode />
                <SalesCard isActivationMode />
              </div>
            ) : (
              <NewUserDashboardV2 />
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
