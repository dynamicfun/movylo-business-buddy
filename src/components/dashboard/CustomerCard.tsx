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
      className="bg-card rounded-2xl border border-border/60 p-5 sm:p-6 flex flex-col shadow-sm"
    >
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg sm:text-xl font-bold text-foreground">My Customers</h2>
        <p className="text-sm text-muted-foreground">Where everything starts</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4 border border-orange-100/60">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center">
              <Users className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex-1">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">
                {newCustomers === 0 ? "—" : newCustomers}
              </span>
              {!isActivationMode && newCustomers > 0 && <GrowthBadge growth={newCustomersGrowth} />}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">New (30 days)</p>
        </div>
        
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-4 border border-violet-100/60">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/80 shadow-sm flex items-center justify-center">
              <Users className="w-5 h-5 text-violet-500" />
            </div>
            <div className="flex-1">
              <span className="text-2xl sm:text-3xl font-bold text-foreground">
                {totalCustomers === 0 ? "—" : totalCustomers}
              </span>
              {!isActivationMode && totalCustomers > 0 && <GrowthBadge growth={totalCustomersGrowth} />}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">Total customers</p>
        </div>
      </div>

      {/* Sources list */}
      <div className="space-y-1 flex-1">
        {sourceItems.map(({ icon, iconColor, label, count, sourceKey }) => {
          const isActive = count !== null;
          return (
            <button
              key={label}
              onClick={() => handleSourceClick(sourceKey, isActive)}
              className="w-full flex items-center justify-between py-2.5 px-3 hover:bg-secondary/50 rounded-xl transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className={`${iconColor} opacity-80`}>{icon}</span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
              {isActive ? (
                <span className="text-sm font-semibold text-foreground bg-secondary px-2.5 py-1 rounded-lg">{count}</span>
              ) : (
                <span className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">+ Add</span>
              )}
            </button>
          );
        })}
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-5 text-sm font-semibold h-11 rounded-xl"
        size="default"
      >
        Find & manage customers
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
