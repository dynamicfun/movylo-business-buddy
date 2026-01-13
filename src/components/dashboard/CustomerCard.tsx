import { SimpleCard } from "./SimpleCard";
import { Globe, Users, FileSpreadsheet } from "lucide-react";
import { GrowthIndicator } from "./GrowthIndicator";

function SourceChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors">
      {icon}
      {label}
    </button>
  );
}

interface CustomerCardProps {
  isActivationMode?: boolean;
  newCustomers?: number;
  totalCustomers?: number;
}

export function CustomerCard({ 
  isActivationMode = true,
  newCustomers = 0,
  totalCustomers = 0 
}: CustomerCardProps) {
  // Determine status based on customer count
  const getStatus = () => {
    if (totalCustomers >= 10) return "growing";
    if (totalCustomers > 0) return "starting";
    return "waiting";
  };

  return (
    <SimpleCard
      title="My Customers"
      cta="Find & manage customers"
      delay={0.1}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={isActivationMode} />}
    >
      <div className="space-y-5">
        {/* Stats */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-3xl font-bold text-foreground">
              {newCustomers === 0 && isActivationMode ? "—" : newCustomers}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">New (last 30 days)</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-foreground">
              {totalCustomers === 0 && isActivationMode ? "—" : totalCustomers}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">Total customers</p>
          </div>
        </div>

        {/* Add customers hint */}
        <div className="pt-2 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Add customers from:</p>
          <div className="flex flex-wrap gap-1.5">
            <SourceChip icon={<Globe className="w-3 h-3" />} label="Website" />
            <SourceChip icon={<Users className="w-3 h-3" />} label="Social" />
            <SourceChip icon={<FileSpreadsheet className="w-3 h-3" />} label="Excel" />
          </div>
        </div>
      </div>
    </SimpleCard>
  );
}
