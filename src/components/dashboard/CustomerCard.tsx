import { SimpleCard } from "./SimpleCard";
import { Globe, Users, FileSpreadsheet } from "lucide-react";

function SourceChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors">
      {icon}
      {label}
    </button>
  );
}

export function CustomerCard() {
  return (
    <SimpleCard
      title="My Customers"
      cta="Find & manage"
      delay={0.1}
    >
      <div className="space-y-5">
        {/* Stats */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-3xl font-bold text-foreground">1</span>
            <p className="text-xs text-muted-foreground mt-0.5">New this month</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-foreground">1</span>
            <p className="text-xs text-muted-foreground mt-0.5">Total</p>
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
