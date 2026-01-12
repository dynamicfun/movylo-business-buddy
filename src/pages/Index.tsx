import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ActionHints } from "@/components/dashboard/ActionHints";
import { BusinessTools } from "@/components/dashboard/BusinessTools";
import { StatusStrip } from "@/components/dashboard/StatusStrip";
import { Level1Customers } from "@/components/dashboard/Level1Customers";
import { Level2Engagement } from "@/components/dashboard/Level2Engagement";
import { Level3Sales } from "@/components/dashboard/Level3Sales";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        {/* Action Hints - What to do now */}
        <ActionHints />

        {/* Business Tools - Prominent at top */}
        <div className="mb-6">
          <BusinessTools />
        </div>

        {/* Status Strip */}
        <StatusStrip />

        {/* 3 Levels - Chronological Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Level1Customers />
          <Level2Engagement />
          <Level3Sales />
        </div>
      </div>
    </div>
  );
};

export default Index;
