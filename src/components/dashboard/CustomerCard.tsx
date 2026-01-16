import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Facebook, Instagram, MessageCircle, QrCode, FileSpreadsheet, UserPlus, Megaphone, Users, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomerSource {
  icon: React.ReactNode;
  iconColor: string;
  label: string;
  count: number | null;
  sourceKey: string;
}

interface CustomerCardProps {
  isActivationMode?: boolean;
  newCustomers?: number;
  newCustomersGrowth?: number;
  totalCustomers?: number;
  totalCustomersGrowth?: number;
  sources?: {
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

function GrowthBadge({ growth }: { growth: number }) {
  const isPositive = growth >= 0;
  return (
    <span className={`flex items-center gap-0.5 text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-500'}`}>
      <TrendingUp className={`w-3 h-3 ${!isPositive ? 'rotate-180' : ''}`} />
      {Math.abs(growth)}%
    </span>
  );
}

export function CustomerCard({
  isActivationMode = true,
  newCustomers = 0,
  newCustomersGrowth = 2.4,
  totalCustomers = 0,
  totalCustomersGrowth = 1.9,
  sources = {
    website: null,
    facebook: null,
    instagram: null,
    whatsapp: null,
    qrCodes: null,
    excel: null,
    manual: null,
    ads: null,
  },
}: CustomerCardProps) {
  const navigate = useNavigate();

  const handleSourceClick = (sourceKey: string, isActive: boolean) => {
    if (isActive) {
      navigate(`/customers?source=${sourceKey}`);
    } else {
      navigate(`/settings/integrations?setup=${sourceKey}`);
    }
  };

  const sourceItems: CustomerSource[] = [
    { icon: <Globe className="w-4 h-4" />, iconColor: "text-blue-500", label: "Website", count: sources.website, sourceKey: "website" },
    { icon: <Facebook className="w-4 h-4" />, iconColor: "text-blue-600", label: "Facebook", count: sources.facebook, sourceKey: "facebook" },
    { icon: <Instagram className="w-4 h-4" />, iconColor: "text-pink-500", label: "Instagram", count: sources.instagram, sourceKey: "instagram" },
    { icon: <MessageCircle className="w-4 h-4" />, iconColor: "text-green-500", label: "WhatsApp", count: sources.whatsapp, sourceKey: "whatsapp" },
    { icon: <QrCode className="w-4 h-4" />, iconColor: "text-violet-500", label: "QR codes", count: sources.qrCodes, sourceKey: "qr-codes" },
    { icon: <FileSpreadsheet className="w-4 h-4" />, iconColor: "text-emerald-600", label: "Excel", count: sources.excel, sourceKey: "excel" },
    { icon: <UserPlus className="w-4 h-4" />, iconColor: "text-slate-500", label: "Manual", count: sources.manual, sourceKey: "manual" },
    { icon: <Megaphone className="w-4 h-4" />, iconColor: "text-amber-500", label: "Ads", count: sources.ads, sourceKey: "ads" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      className="bg-card rounded-xl sm:rounded-2xl border border-border p-4 sm:p-5 flex flex-col"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-foreground">My Customers</h2>
        <p className="text-xs text-muted-foreground">Where everything starts</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-secondary/30 rounded-xl p-3 border border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                {newCustomers === 0 ? "—" : newCustomers}
              </span>
              {!isActivationMode && newCustomers > 0 && <GrowthBadge growth={newCustomersGrowth} />}
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">Next 30 days</p>
        </div>
        
        <div className="bg-secondary/30 rounded-xl p-3 border border-border/50">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
              <Users className="w-4 h-4 text-violet-600" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                {totalCustomers === 0 ? "—" : totalCustomers}
              </span>
              {!isActivationMode && totalCustomers > 0 && <GrowthBadge growth={totalCustomersGrowth} />}
            </div>
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground">Total</p>
        </div>
      </div>

      {/* Sources grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 flex-1">
        {sourceItems.map(({ icon, iconColor, label, count, sourceKey }) => {
          const isActive = count !== null;
          return (
            <button
              key={label}
              onClick={() => handleSourceClick(sourceKey, isActive)}
              className="flex items-center justify-between py-2 px-1 hover:bg-secondary/30 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className={iconColor}>{icon}</span>
                <span className="text-sm text-foreground">{label}</span>
              </div>
              {isActive ? (
                <span className="text-sm font-medium text-foreground">{count}</span>
              ) : (
                <Button size="sm" className="h-7 px-3 text-xs bg-primary hover:bg-primary/90">
                  Add
                </Button>
              )}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm"
        size="sm"
      >
        Find & manage customers
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
