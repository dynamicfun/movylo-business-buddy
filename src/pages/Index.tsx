import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SuccessBanner } from "@/components/dashboard/SuccessBanner";
import { StatusStrip } from "@/components/dashboard/StatusStrip";
import { CustomersSection } from "@/components/dashboard/CustomersSection";
import { ActivitySection } from "@/components/dashboard/ActivitySection";
import { BusinessSection } from "@/components/dashboard/BusinessSection";
import { BusinessTools } from "@/components/dashboard/BusinessTools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        
        <SuccessBanner
          onViewCustomer={() => console.log("View customer")}
          onManageCustomers={() => console.log("Manage customers")}
        />
        
        <StatusStrip />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <CustomersSection />
            <ActivitySection />
          </div>
          
          {/* Sidebar - 1 column on large screens */}
          <div className="space-y-6">
            <BusinessSection />
            <BusinessTools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
