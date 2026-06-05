import { Package } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PickupStock() {
  return (
    <PreferencePageTemplate
      title="In-store pickup & stock"
      subtitle="Let customers pick up orders or check stock"
      icon={Package}
    >
      <PreferenceSection title="In-store pickup">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Allow pickup</p>
            <p className="text-xs text-muted-foreground">Customers can collect orders at your store</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="space-y-2 max-w-sm">
          <Label>Pickup preparation time</Label>
          <Input defaultValue="30 minutes" />
        </div>
      </PreferenceSection>

      <PreferenceSection title="Stock">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Track product stock</p>
            <p className="text-xs text-muted-foreground">Hide products when sold out</p>
          </div>
          <Switch />
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
