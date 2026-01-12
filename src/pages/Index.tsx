import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SuccessBanner } from "@/components/dashboard/SuccessBanner";
import { StatusStrip } from "@/components/dashboard/StatusStrip";
import { GrowthTimeline } from "@/components/dashboard/GrowthTimeline";
import { Level1Customers } from "@/components/dashboard/Level1Customers";
import { Level2Engagement } from "@/components/dashboard/Level2Engagement";
import { Level3Sales } from "@/components/dashboard/Level3Sales";
import { BusinessTools } from "@/components/dashboard/BusinessTools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <SuccessBanner
          onViewCustomer={() => console.log("View customer")}
          onManageCustomers={() => console.log("Manage customers")}
        />

        <StatusStrip />

        {/* Growth Timeline */}
        <GrowthTimeline />

        {/* 3 Levels - Chronological Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Level1Customers />
          <Level2Engagement />
          <Level3Sales />
        </div>

        {/* Business Tools */}
        <div className="max-w-md mx-auto">
          <BusinessTools />
        </div>
      </div>
    </div>
  );
};

export default Index;
