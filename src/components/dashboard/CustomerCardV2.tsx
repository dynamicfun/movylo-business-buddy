import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, User, ChevronRight, Link2, Facebook, Instagram, MessageCircle, Store, LayoutGrid, ChevronDown, Globe, FileSpreadsheet, Hand, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { CustomersModal } from "./DashboardModals";

interface CustomerCardV2Props {
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

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.85 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.67 2.84c.86-2.6 3.29-4.53 6.15-4.53z" fill="#EA4335" />
    </svg>
  );
}

function SourceRow({ icon, title, subtitle, count, onClick }: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-3 px-3 hover:bg-secondary/40 rounded-xl transition-colors text-left group"
    >
      <div className="shrink-0 w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-foreground bg-primary/10 px-2.5 py-1 rounded-full">{count}</span>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </button>
  );
}

function SubSourceRow({ icon, title, count, onClick }: {
  icon: React.ReactNode;
  title: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 py-2.5 px-3 pl-14 hover:bg-secondary/30 rounded-xl transition-colors text-left group"
    >
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-foreground">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-foreground bg-primary/10 px-2 py-0.5 rounded-full">{count}</span>
        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </button>
  );
}

function ExpandableGroup({ icon, title, subtitle, count, children }: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  count: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-transparent hover:border-border/40 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-3 px-3 hover:bg-secondary/40 rounded-xl transition-colors text-left group"
      >
        <div className="shrink-0 w-10 h-10 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-foreground bg-primary/10 px-2.5 py-1 rounded-full">{count}</span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-1 space-y-0.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CustomerCardV2({
  isActivationMode = true,
  newCustomers = 0,
  totalCustomers = 0,
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
}: CustomerCardV2Props) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { t } = useLanguage();

  const socialCount = (sources.facebook || 0) + (sources.instagram || 0) + (sources.whatsapp || 0);
  const inStoreCount = sources.qrCodes || 0;
  const otherCount = (sources.website || 0) + (sources.excel || 0) + (sources.manual || 0) + (sources.ads || 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
      className="bg-card rounded-2xl border border-border/50 p-5 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-foreground">{t.customers}</h2>
        <p className="text-xs text-muted-foreground">{t.customersSubtitle}</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-emerald-50 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-medium text-emerald-700">
              {t.newCustomers.split(' ')[0]} {t.last30Days}
            </span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">
            {isActivationMode ? "—" : newCustomers.toLocaleString()}
          </p>
        </div>
        
        <div className="bg-amber-50 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <User className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-medium text-amber-700">{t.totalCustomers}</span>
          </div>
          <p className="text-2xl font-bold text-amber-600">
            {isActivationMode ? "—" : totalCustomers.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Sources section */}
      <div className="flex-1">
        <p className="text-xs font-semibold text-foreground mb-2">{t.findNewCustomersVia}</p>
        <div className="space-y-1">
          <SourceRow
            icon={<Link2 className="w-5 h-5 text-primary" />}
            title={t.shareLink}
            subtitle={t.shareLinkSubtitle}
            count={0}
            onClick={() => navigate("/sources/share-link")}
          />
          <SourceRow
            icon={<GoogleIcon className="w-5 h-5" />}
            title={t.googleProfile}
            subtitle={t.googleSubtitle}
            count={0}
            onClick={() => navigate("/business-info/google-profile")}
          />
          <ExpandableGroup
            icon={
              <div className="flex items-center gap-1">
                <Facebook className="w-4 h-4 text-blue-600" />
                <Instagram className="w-4 h-4 text-pink-500" />
                <MessageCircle className="w-4 h-4 text-emerald-500" />
              </div>
            }
            title={t.social}
            subtitle={`${t.facebook}, ${t.instagram}, ${t.whatsapp}`}
            count={socialCount}
          >
            <SubSourceRow
              icon={<Facebook className="w-4 h-4 text-blue-600" />}
              title={t.facebook}
              count={sources.facebook || 0}
              onClick={() => navigate("/sources/facebook")}
            />
            <SubSourceRow
              icon={<Instagram className="w-4 h-4 text-pink-500" />}
              title={t.instagram}
              count={sources.instagram || 0}
              onClick={() => navigate("/sources/instagram")}
            />
            <SubSourceRow
              icon={<MessageCircle className="w-4 h-4 text-emerald-500" />}
              title={t.whatsapp}
              count={sources.whatsapp || 0}
              onClick={() => navigate("/sources/whatsapp")}
            />
          </ExpandableGroup>

          <ExpandableGroup
            icon={<Store className="w-5 h-5 text-violet-500" />}
            title={t.inStoreSource}
            subtitle={`${t.qrCodes}, ${t.wifi}, ${t.tablet}`}
            count={inStoreCount}
          >
            <SubSourceRow
              icon={<LayoutGrid className="w-4 h-4 text-violet-500" />}
              title={t.qrCodes}
              count={sources.qrCodes || 0}
              onClick={() => navigate("/sources/qr-codes")}
            />
            <SubSourceRow
              icon={<Link2 className="w-4 h-4 text-violet-500" />}
              title={t.wifi}
              count={0}
              onClick={() => navigate("/sources/wifi")}
            />
            <SubSourceRow
              icon={<LayoutGrid className="w-4 h-4 text-violet-500" />}
              title={t.tablet}
              count={0}
              onClick={() => navigate("/sources/tablet")}
            />
          </ExpandableGroup>

          <ExpandableGroup
            icon={<LayoutGrid className="w-5 h-5 text-slate-500" />}
            title={t.otherSources}
            subtitle={t.otherSourcesSubtitle}
            count={otherCount}
          >
            <SubSourceRow
              icon={<Globe className="w-4 h-4 text-slate-500" />}
              title={t.website}
              count={sources.website || 0}
              onClick={() => navigate("/sources/website")}
            />
            <SubSourceRow
              icon={<FileSpreadsheet className="w-4 h-4 text-slate-500" />}
              title={t.excel}
              count={sources.excel || 0}
              onClick={() => navigate("/sources/excel")}
            />
            <SubSourceRow
              icon={<Hand className="w-4 h-4 text-slate-500" />}
              title={t.manual}
              count={sources.manual || 0}
              onClick={() => navigate("/sources/manual")}
            />
            <SubSourceRow
              icon={<Megaphone className="w-4 h-4 text-slate-500" />}
              title={t.ads}
              count={sources.ads || 0}
              onClick={() => navigate("/sources/meta-ads")}
            />
          </ExpandableGroup>
        </div>
      </div>

      {/* CTA */}
      <Button 
        className="w-full justify-between mt-4 text-sm h-10 rounded-xl"
        size="default"
        onClick={() => setShowModal(true)}
      >
        {t.customers}
        <ChevronRight className="w-4 h-4" />
      </Button>

      <CustomersModal open={showModal} onOpenChange={setShowModal} />
    </motion.div>
  );
}
