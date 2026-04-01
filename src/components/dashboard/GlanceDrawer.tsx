import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp, Ticket, Phone, RotateCcw, ShoppingCart, Calendar, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  change?: string;
  iconBg: string;
}

function StatRow({ icon, label, value, change, iconBg }: StatRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-3 py-3"
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
      <div className="text-right shrink-0 flex items-center gap-2">
        <span className="text-lg font-bold text-foreground">{value}</span>
        {change && (
          <span className="text-xs font-medium text-emerald-600 flex items-center gap-0.5">
            <ArrowUpRight className="w-3 h-3" />
            {change}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest pt-4 pb-1 first:pt-0">
      {children}
    </p>
  );
}

export function GlanceDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5 text-muted-foreground font-normal flex-shrink-0">
          <BarChart3 className="h-4 w-4" />
          <span className="hidden sm:inline">At a Glance</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[340px] sm:w-[380px] overflow-y-auto">
        <SheetHeader className="pb-2">
          <SheetTitle className="text-base font-semibold">Stats at a Glance</SheetTitle>
          <p className="text-xs text-muted-foreground">Last 30 days</p>
        </SheetHeader>

        <div className="divide-y divide-border">
          {/* Customers */}
          <div className="pb-2">
            <SectionLabel>Customers</SectionLabel>
            <StatRow
              icon={<Users className="w-4 h-4 text-blue-600" />}
              label="New this month"
              value={247}
              change="+2.4%"
              iconBg="bg-blue-50 dark:bg-blue-950/40"
            />
            <StatRow
              icon={<TrendingUp className="w-4 h-4 text-indigo-600" />}
              label="Total customers"
              value="15,689"
              change="+1.9%"
              iconBg="bg-indigo-50 dark:bg-indigo-950/40"
            />
          </div>

          {/* Activity */}
          <div className="pb-2">
            <SectionLabel>Activity</SectionLabel>
            <StatRow
              icon={<Ticket className="w-4 h-4 text-amber-600" />}
              label="Offers downloaded"
              value={22}
              iconBg="bg-amber-50 dark:bg-amber-950/40"
            />
            <StatRow
              icon={<Phone className="w-4 h-4 text-green-600" />}
              label="Calls received"
              value={8}
              iconBg="bg-green-50 dark:bg-green-950/40"
            />
            <StatRow
              icon={<RotateCcw className="w-4 h-4 text-purple-600" />}
              label="Customers brought back"
              value={34}
              iconBg="bg-purple-50 dark:bg-purple-950/40"
            />
          </div>

          {/* Sales */}
          <div className="pb-2">
            <SectionLabel>Sales</SectionLabel>
            <StatRow
              icon={<ShoppingCart className="w-4 h-4 text-emerald-600" />}
              label="Revenue generated"
              value="$9,100"
              change="+12%"
              iconBg="bg-emerald-50 dark:bg-emerald-950/40"
            />
            <StatRow
              icon={<Calendar className="w-4 h-4 text-rose-600" />}
              label="Reservations"
              value="259"
              iconBg="bg-rose-50 dark:bg-rose-950/40"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
