import { useNavigate } from "react-router-dom";
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
  count: number | null; // null means needs activation
  sourceKey: string;
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
    website: number | null;
    facebook: number | null;
    instagram: number | null;
    whatsapp: number | null;
    qrCodes: number | null;
    excel: number | null;
    manual: number | null;
    ads: number | null;
  };
}

type CustomerCardProps = ActivationModeProps | SteadyStateProps;

export function CustomerCard(props: CustomerCardProps) {
  const navigate = useNavigate();

  const handleSourceClick = (sourceKey: string, isActive: boolean) => {
    if (isActive) {
      navigate(`/customers?source=${sourceKey}`);
    } else {
      // Navigate to setup/activation for this source
      navigate(`/settings/integrations?setup=${sourceKey}`);
    }
  };

  // Check if we're in steady state mode
  if (props.isActivationMode === false) {
    const { newCustomers, totalCustomers, sources } = props;

    const sourceItems: CustomerSource[] = [
      { icon: <Globe className="w-3 h-3" />, label: "Website", count: sources.website, sourceKey: "website" },
      { icon: <Facebook className="w-3 h-3" />, label: "Facebook", count: sources.facebook, sourceKey: "facebook" },
      { icon: <Instagram className="w-3 h-3" />, label: "Instagram", count: sources.instagram, sourceKey: "instagram" },
      { icon: <MessageCircle className="w-3 h-3" />, label: "WhatsApp", count: sources.whatsapp, sourceKey: "whatsapp" },
      { icon: <QrCode className="w-3 h-3" />, label: "QR codes", count: sources.qrCodes, sourceKey: "qr-codes" },
      { icon: <FileSpreadsheet className="w-3 h-3" />, label: "Excel", count: sources.excel, sourceKey: "excel" },
      { icon: <UserPlus className="w-3 h-3" />, label: "Manual", count: sources.manual, sourceKey: "manual" },
      { icon: <Megaphone className="w-3 h-3" />, label: "Ads", count: sources.ads, sourceKey: "ads" },
    ];

    return (
      <SimpleCard
        title="My Customers"
        subtitle="Where everything starts"
        cta="Find & manage customers"
        delay={0.1}
      >
        <div className="space-y-3 sm:space-y-4">
          {/* Stats */}
          <div className="flex justify-between items-baseline">
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-foreground">{newCustomers}</span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">New (30 days)</p>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">{totalCustomers}</span>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Total</p>
            </div>
          </div>

          <div className="pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Add customers from:</p>
            
            {/* All sources in single column */}
            <div className="flex flex-col gap-1">
              {sourceItems.map(({ icon, label, count, sourceKey }) => {
                const isActive = count !== null;
                return (
                  <button
                    key={label}
                    onClick={() => handleSourceClick(sourceKey, isActive)}
                    className={`flex items-center justify-between py-1.5 px-2 rounded transition-colors cursor-pointer ${
                      isActive 
                        ? "bg-secondary/30 hover:bg-secondary/50" 
                        : "border border-dashed border-border hover:border-accent"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className={isActive ? "text-muted-foreground" : "text-muted-foreground/60"}>{icon}</span>
                      <span className={`text-xs ${isActive ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
                    </div>
                    <span className={`text-xs font-medium ${isActive ? "text-foreground" : "text-muted-foreground/60"}`}>
                      {isActive ? count : "Activate"}
                    </span>
                  </button>
                );
              })}
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
      subtitle="Where everything starts"
      cta="Find & manage customers"
      delay={0.1}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={true} />}
    >
      <div className="space-y-4 sm:space-y-5">
        {/* Stats */}
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-2xl sm:text-3xl font-bold text-foreground">
              {newCustomers === 0 ? "—" : newCustomers}
            </span>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">New (30 days)</p>
          </div>
          <div className="text-right">
            <span className="text-2xl sm:text-3xl font-bold text-foreground">
              {totalCustomers === 0 ? "—" : totalCustomers}
            </span>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">Total</p>
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
