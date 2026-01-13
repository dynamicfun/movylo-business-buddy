import { SimpleCard } from "./SimpleCard";
import { Globe, Facebook, Instagram, MessageCircle, QrCode, FileSpreadsheet, UserPlus, Megaphone } from "lucide-react";
import { GrowthIndicator } from "./GrowthIndicator";

function SourceChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors">
      {icon}
      {label}
    </button>
  );
}

interface CustomerSource {
  icon: React.ReactNode;
  label: string;
  count: number;
}

// Activation mode props
interface ActivationModeProps {
  isActivationMode?: true;
  newCustomers?: number;
  totalCustomers?: number;
}

// Steady state props with source breakdown
interface SteadyStateProps {
  isActivationMode: false;
  newCustomers: number;
  totalCustomers: number;
  sources: {
    website: number;
    facebook: number;
    instagram: number;
    whatsapp: number;
    qrCodes: number;
    excel: number;
    manual: number;
    ads: number;
  };
}

type CustomerCardProps = ActivationModeProps | SteadyStateProps;

export function CustomerCard(props: CustomerCardProps) {
  // Check if we're in steady state mode
  if (props.isActivationMode === false) {
    const { newCustomers, totalCustomers, sources } = props;

    const sourceItems: CustomerSource[] = [
      { icon: <Globe className="w-3 h-3" />, label: "Website", count: sources.website },
      { icon: <Facebook className="w-3 h-3" />, label: "Facebook", count: sources.facebook },
      { icon: <Instagram className="w-3 h-3" />, label: "Instagram", count: sources.instagram },
      { icon: <MessageCircle className="w-3 h-3" />, label: "WhatsApp", count: sources.whatsapp },
      { icon: <QrCode className="w-3 h-3" />, label: "QR codes", count: sources.qrCodes },
      { icon: <FileSpreadsheet className="w-3 h-3" />, label: "Excel", count: sources.excel },
      { icon: <UserPlus className="w-3 h-3" />, label: "Manual", count: sources.manual },
      { icon: <Megaphone className="w-3 h-3" />, label: "Ads", count: sources.ads },
    ];

    return (
      <SimpleCard
        title="My Customers"
        cta="Find & manage customers"
        delay={0.1}
      >
        <div className="space-y-4">
          {/* Stats */}
          <div className="flex justify-between items-baseline">
            <div>
              <span className="text-3xl font-bold text-foreground">{newCustomers}</span>
              <p className="text-xs text-muted-foreground mt-0.5">New (last 30 days)</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-foreground">{totalCustomers}</span>
              <p className="text-xs text-muted-foreground mt-0.5">Total customers</p>
            </div>
          </div>

          {/* Sources breakdown */}
          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Customer sources:</p>
            <div className="grid grid-cols-2 gap-1.5">
              {sourceItems.map(({ icon, label, count }) => (
                <div key={label} className="flex items-center justify-between py-1 px-2 rounded bg-secondary/30">
                  <div className="flex items-center gap-1.5">
                    <span className="text-muted-foreground">{icon}</span>
                    <span className="text-xs text-foreground">{label}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SimpleCard>
    );
  }

  // Activation mode - simple view (default)
  const { 
    newCustomers = 0,
    totalCustomers = 0 
  } = props;

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
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={true} />}
    >
      <div className="space-y-5">
        {/* Stats */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-3xl font-bold text-foreground">
              {newCustomers === 0 ? "—" : newCustomers}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">New (last 30 days)</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-foreground">
              {totalCustomers === 0 ? "—" : totalCustomers}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">Total customers</p>
          </div>
        </div>

        {/* Add customers hint */}
        <div className="pt-2 border-t border-border/50">
          <p className="text-xs text-muted-foreground mb-2">Add customers from:</p>
          <div className="flex flex-wrap gap-1.5">
            <SourceChip icon={<Globe className="w-3 h-3" />} label="Website" />
            <SourceChip icon={<Facebook className="w-3 h-3" />} label="Social" />
            <SourceChip icon={<FileSpreadsheet className="w-3 h-3" />} label="Excel" />
          </div>
        </div>
      </div>
    </SimpleCard>
  );
}
