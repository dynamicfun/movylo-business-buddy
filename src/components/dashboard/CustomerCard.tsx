import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Facebook, Instagram, MessageCircle, QrCode, FileSpreadsheet, UserPlus, Megaphone, Users, TrendingUp, ChevronRight, ChevronDown, MapPin } from "lucide-react";
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
  const [showAllSources, setShowAllSources] = useState(false);

  const handleSourceClick = (sourceKey: string, isActive: boolean) => {
    // Source pages have their own dedicated routes
    if (sourceKey === "website-source") {
      navigate("/sources/website");
      return;
    }
    if (sourceKey === "instagram") {
      navigate("/sources/instagram");
      return;
    }
    if (sourceKey === "google") {
      navigate("/business-info/google-profile");
      return;
    }
    if (isActive) {
      navigate(`/customers?source=${sourceKey}`);
    } else {
      navigate(`/settings/integrations?setup=${sourceKey}`);
    }
  };

  // Default collapsed sources (first 5) - reordered: Share link, QR codes, Google, Facebook, Instagram
  const collapsedSourceItems: CustomerSource[] = [
    { icon: <Globe className="w-4 h-4" />, iconColor: "text-blue-500", label: "Condividi il tuo link", count: sources.website, sourceKey: "website" },
    { icon: <QrCode className="w-4 h-4" />, iconColor: "text-violet-500", label: "Codici QR", count: sources.qrCodes, sourceKey: "qr-codes" },
    { icon: <MapPin className="w-4 h-4" />, iconColor: "text-red-500", label: "Google", count: null, sourceKey: "google" },
    { icon: <Facebook className="w-4 h-4" />, iconColor: "text-blue-600", label: "Facebook", count: sources.facebook, sourceKey: "facebook" },
    { icon: <Instagram className="w-4 h-4" />, iconColor: "text-pink-500", label: "Instagram", count: sources.instagram, sourceKey: "instagram" },
  ];

  // All sources for expanded view
  const allSourceItems: CustomerSource[] = [
    { icon: <Globe className="w-4 h-4" />, iconColor: "text-blue-500", label: "Condividi il tuo link", count: sources.website, sourceKey: "website" },
    { icon: <QrCode className="w-4 h-4" />, iconColor: "text-violet-500", label: "Codici QR", count: sources.qrCodes, sourceKey: "qr-codes" },
    { icon: <MapPin className="w-4 h-4" />, iconColor: "text-red-500", label: "Google", count: null, sourceKey: "google" },
    { icon: <Facebook className="w-4 h-4" />, iconColor: "text-blue-600", label: "Facebook", count: sources.facebook, sourceKey: "facebook" },
    { icon: <Instagram className="w-4 h-4" />, iconColor: "text-pink-500", label: "Instagram", count: sources.instagram, sourceKey: "instagram" },
    { icon: <MessageCircle className="w-4 h-4" />, iconColor: "text-green-500", label: "WhatsApp", count: sources.whatsapp, sourceKey: "whatsapp" },
    { icon: <Globe className="w-4 h-4" />, iconColor: "text-cyan-500", label: "Sito Web", count: sources.website, sourceKey: "website-source" },
    { icon: <FileSpreadsheet className="w-4 h-4" />, iconColor: "text-emerald-600", label: "Excel", count: sources.excel, sourceKey: "excel" },
    { icon: <UserPlus className="w-4 h-4" />, iconColor: "text-slate-500", label: "Manuale", count: sources.manual, sourceKey: "manual" },
    { icon: <Megaphone className="w-4 h-4" />, iconColor: "text-amber-500", label: "Annunci", count: sources.ads, sourceKey: "ads" },
  ];

  // Show 4 collapsed sources by default, all when expanded
  const sourceItems = showAllSources ? allSourceItems : collapsedSourceItems;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground">I Miei Clienti</h2>
        <p className="text-xs text-muted-foreground">Clienti connessi alla tua attività</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-primary/5 rounded-xl p-3">
          <div className="flex items-center gap-1 mb-1">
            <Users className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-sm font-bold text-foreground tabular-nums min-w-[3ch]">
              {isActivationMode || newCustomers === 0 ? "—" : newCustomers.toLocaleString()}
            </span>
            {!isActivationMode && newCustomers > 0 && <GrowthBadge growth={newCustomersGrowth} />}
          </div>
          <p className="text-xs text-muted-foreground">Nuovi (30 giorni)</p>
        </div>
        
        <div className="bg-accent/10 rounded-xl p-3">
          <div className="flex items-center gap-1 mb-1">
            <Users className="w-3.5 h-3.5 text-accent flex-shrink-0" />
            <span className="text-sm font-bold text-foreground tabular-nums min-w-[5ch]">
              {isActivationMode || totalCustomers === 0 ? "—" : totalCustomers.toLocaleString()}
            </span>
            {!isActivationMode && totalCustomers > 0 && <GrowthBadge growth={totalCustomersGrowth} />}
          </div>
          <p className="text-xs text-muted-foreground">Totale</p>
        </div>
      </div>

      {/* Sources list */}
      <div className="flex-1 space-y-0.5">
        <p className="text-xs font-medium text-muted-foreground mb-2">Aggiungi clienti da</p>
        {sourceItems.map(({ icon, iconColor, label, count, sourceKey }) => {
          const isActive = count !== null;
          return (
            <button
              key={label}
              onClick={() => handleSourceClick(sourceKey, isActive)}
              className="w-full flex items-center justify-between py-2 px-2 hover:bg-secondary/60 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className={iconColor}>{icon}</span>
                <span className="text-sm text-foreground">{label}</span>
              </div>
              {isActive ? (
                <span className="text-xs font-semibold text-foreground bg-secondary/80 px-2 py-0.5 rounded-md">{count}</span>
              ) : (
                <span className="text-xs font-medium text-primary">+ Aggiungi</span>
              )}
            </button>
          );
        })}
        
        {/* Expand/Collapse button */}
        {!showAllSources && (
          <button
            onClick={() => setShowAllSources(true)}
            className="w-full flex items-center justify-center gap-1 py-2 px-2 text-xs font-medium text-primary hover:bg-secondary/60 rounded-lg transition-colors"
          >
            <span>Mostra altre fonti</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        )}
        {showAllSources && (
          <button
            onClick={() => setShowAllSources(false)}
            className="w-full flex items-center justify-center gap-1 py-2 px-2 text-xs font-medium text-muted-foreground hover:bg-secondary/60 rounded-lg transition-colors"
          >
            <span>Mostra meno</span>
            <ChevronDown className="w-3.5 h-3.5 rotate-180" />
          </button>
        )}
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
        size="default"
      >
        Trova e gestisci clienti
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  );
}
