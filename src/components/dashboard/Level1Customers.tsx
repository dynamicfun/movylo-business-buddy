import { Mail, Smartphone, Bell, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LevelCard } from "./LevelCard";

export function Level1Customers() {
  const channels = [
    { icon: Mail, label: "Email", color: "text-channel-email bg-channel-email/10" },
    { icon: Smartphone, label: "SMS", color: "text-channel-sms bg-channel-sms/10" },
    { icon: Bell, label: "Push", color: "text-channel-push bg-channel-push/10" },
  ];

  return (
    <LevelCard
      level={1}
      title="My Customers"
      subtitle="Where everything starts"
      delay={0.1}
    >
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-secondary/50 rounded-xl p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            New (last 30 days)
          </p>
          <p className="text-4xl font-bold text-accent">1</p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Total customers
          </p>
          <p className="text-4xl font-bold text-foreground">1</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
          How customers can reach you
        </p>
        <div className="flex flex-wrap gap-2">
          {channels.map(({ icon: Icon, label, color }) => (
            <div
              key={label}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${color}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button className="flex-1 gap-2">
          <Users className="w-4 h-4" />
          Find & manage customers
        </Button>
        <Button variant="ghost" className="gap-1 text-muted-foreground">
          View list
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </LevelCard>
  );
}
