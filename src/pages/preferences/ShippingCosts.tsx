import { Truck } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ShippingCosts() {
  return (
    <PreferencePageTemplate
      title="Shipping costs"
      subtitle="Set how much shipping costs your customers"
      icon={Truck}
    >
      <PreferenceSection title="Standard shipping">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Flat rate (€)</Label>
            <Input type="number" defaultValue="5.00" />
          </div>
          <div className="space-y-2">
            <Label>Free shipping over (€)</Label>
            <Input type="number" defaultValue="50.00" />
          </div>
        </div>
      </PreferenceSection>

      <PreferenceSection title="Express shipping">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Express rate (€)</Label>
            <Input type="number" defaultValue="12.00" />
          </div>
          <div className="space-y-2">
            <Label>Delivery time</Label>
            <Input defaultValue="1-2 business days" />
          </div>
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
