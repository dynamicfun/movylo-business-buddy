import { SimpleCard } from "./SimpleCard";

export function CustomerCard() {
  return (
    <SimpleCard
      title="My Customers"
      cta="Find & manage"
      delay={0.1}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-baseline">
          <div>
            <span className="text-3xl font-bold text-foreground">1</span>
            <p className="text-xs text-muted-foreground mt-0.5">New this month</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-foreground">1</span>
            <p className="text-xs text-muted-foreground mt-0.5">Total customers</p>
          </div>
        </div>
      </div>
    </SimpleCard>
  );
}
