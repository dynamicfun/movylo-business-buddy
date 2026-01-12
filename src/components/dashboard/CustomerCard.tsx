import { SimpleCard } from "./SimpleCard";
import { Mail, Smartphone, Bell } from "lucide-react";

export function CustomerCard() {
  return (
    <SimpleCard
      title="Customers"
      cta="Find & manage"
      delay={0.1}
    >
      <div className="space-y-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-accent">1</span>
          <span className="text-sm text-muted-foreground">new this month</span>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
            <Mail className="w-3 h-3" />
            Email
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
            <Smartphone className="w-3 h-3" />
            SMS
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
            <Bell className="w-3 h-3" />
            Push
          </div>
        </div>
      </div>
    </SimpleCard>
  );
}
