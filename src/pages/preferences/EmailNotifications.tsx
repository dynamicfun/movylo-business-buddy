import { Mail } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const notifications = [
  { label: "New orders", desc: "Get notified when a customer places an order" },
  { label: "New customers", desc: "When someone joins your business" },
  { label: "Coupon redemptions", desc: "When a customer uses an offer" },
  { label: "New reviews", desc: "When a customer leaves a review" },
  { label: "Weekly summary", desc: "A snapshot of last week every Monday" },
];

export default function EmailNotifications() {
  return (
    <PreferencePageTemplate
      title="Email notifications"
      subtitle="Choose what you want to be emailed about"
      icon={Mail}
    >
      <PreferenceSection title="What to send me">
        {notifications.map((n, i) => (
          <div key={n.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{n.label}</p>
              <p className="text-xs text-muted-foreground">{n.desc}</p>
            </div>
            <Switch defaultChecked={i < 3} />
          </div>
        ))}
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
