import { SimpleCard } from "./SimpleCard";
import { Ticket, Calendar, ShoppingCart } from "lucide-react";

interface SalesRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

function SalesRow({ icon, label, value }: SalesRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-foreground">{label}</p>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{value}</span>
    </div>
  );
}

export function SalesCard() {
  return (
    <SimpleCard
      title="Sales"
      cta="Connect sales tools"
      delay={0.2}
    >
      <div className="space-y-3">
        <SalesRow
          icon={<Ticket className="w-4 h-4" />}
          label="Offers saved"
          value={0}
        />
        <SalesRow
          icon={<Calendar className="w-4 h-4" />}
          label="Reservations"
          value={0}
        />
        <SalesRow
          icon={<ShoppingCart className="w-4 h-4" />}
          label="Sales"
          value="—"
        />
      </div>
    </SimpleCard>
  );
}
