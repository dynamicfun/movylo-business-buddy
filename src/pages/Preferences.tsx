import { motion } from "framer-motion";
import { ArrowLeft, Palette, Store, Globe, Link2, Scale, Clock, ShoppingCart, CreditCard, Package, Truck, Receipt, Megaphone, Key, Tag, Mail, Unlink, ChevronRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function SettingItem({ icon, label, onClick }: SettingItemProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-secondary/70 transition-colors group text-left"
    >
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-background transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-foreground flex-1">{label}</span>
      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
    </button>
  );
}

interface SettingsSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

function SettingsSection({ title, children, delay = 0 }: SettingsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <div className="flex flex-col">
            {children}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Preferences() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold">Preferences</h1>
            <p className="text-sm text-muted-foreground">Manage your store settings</p>
          </div>
        </motion.div>

        {/* Settings Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Appearance */}
          <SettingsSection title="Appearance" delay={0.05}>
            <SettingItem
              icon={<Palette className="w-4 h-4 text-muted-foreground" />}
              label="Store appearance"
            />
            <SettingItem
              icon={<FileText className="w-4 h-4 text-muted-foreground" />}
              label="Custom pages"
            />
          </SettingsSection>

          {/* Business settings */}
          <SettingsSection title="Business settings" delay={0.1}>
            <SettingItem
              icon={<Globe className="w-4 h-4 text-muted-foreground" />}
              label="Store language"
            />
            <SettingItem
              icon={<Link2 className="w-4 h-4 text-muted-foreground" />}
              label="Store URL"
            />
            <SettingItem
              icon={<Scale className="w-4 h-4 text-muted-foreground" />}
              label="Unit system"
            />
            <SettingItem
              icon={<Clock className="w-4 h-4 text-muted-foreground" />}
              label="Timezone"
            />
            <SettingItem
              icon={<Store className="w-4 h-4 text-muted-foreground" />}
              label="Digital store link"
            />
          </SettingsSection>

          {/* Orders & payments */}
          <SettingsSection title="Orders & payments" delay={0.15}>
            <SettingItem
              icon={<ShoppingCart className="w-4 h-4 text-muted-foreground" />}
              label="Checkout information"
            />
            <SettingItem
              icon={<Package className="w-4 h-4 text-muted-foreground" />}
              label="In-store pickup & stock"
            />
            <SettingItem
              icon={<Truck className="w-4 h-4 text-muted-foreground" />}
              label="Shipping costs"
            />
            <SettingItem
              icon={<Receipt className="w-4 h-4 text-muted-foreground" />}
              label="Tax settings"
            />
          </SettingsSection>

          {/* Advanced */}
          <SettingsSection title="Advanced" delay={0.2}>
            <SettingItem
              icon={<Megaphone className="w-4 h-4 text-muted-foreground" />}
              label="App ads"
            />
            <SettingItem
              icon={<Key className="w-4 h-4 text-muted-foreground" />}
              label="API keys"
            />
            <SettingItem
              icon={<Tag className="w-4 h-4 text-muted-foreground" />}
              label="Google Tag Manager"
            />
            <SettingItem
              icon={<Mail className="w-4 h-4 text-muted-foreground" />}
              label="Email notifications"
            />
            <SettingItem
              icon={<Unlink className="w-4 h-4 text-muted-foreground" />}
              label="Disconnect Google"
            />
          </SettingsSection>
        </div>
      </div>
    </div>
  );
}
