import { ShoppingCart } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function CheckoutInformation() {
  return (
    <PreferencePageTemplate
      title="Checkout information"
      subtitle="What customers see and provide during checkout"
      icon={ShoppingCart}
    >
      <PreferenceSection title="Required fields">
        {[
          { label: "Phone number", desc: "Helps you reach the customer about the order" },
          { label: "Delivery instructions", desc: "Optional notes for the courier" },
          { label: "Company name", desc: "For business customers" },
        ].map((f) => (
          <div key={f.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
            <Switch defaultChecked={f.label !== "Company name"} />
          </div>
        ))}
      </PreferenceSection>

      <PreferenceSection title="Checkout message">
        <div className="space-y-2">
          <Label>Shown after a successful order</Label>
          <Textarea defaultValue="Thanks for your order! We'll be in touch soon." />
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
