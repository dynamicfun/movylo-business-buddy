import { QuickActions } from "@/components/dashboard/QuickActions";
import { CustomerCardV2 } from "@/components/dashboard/CustomerCardV2";
import { EngagementCardV2 } from "@/components/dashboard/EngagementCardV2";
import { SalesCard } from "@/components/dashboard/SalesCard";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { OrdersCard } from "@/components/dashboard/OrdersCard";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const sampleActivityData = {
  messages: { sent: 10, opened: "50%", clicked: "0%" },
  contacts: { calls: 0, email: 0, whatsapp: 0 },
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

const IndexV2 = () => {
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
              <div className="flex-1 min-w-0 hidden sm:block">
                <LiveFeed />
              </div>
            </div>
            <div className="mb-4 sm:hidden">
              <LiveFeed />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <CustomerCardV2 {...sampleCustomerData} />
              <EngagementCardV2 {...sampleActivityData} />
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default IndexV2;
