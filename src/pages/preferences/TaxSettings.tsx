import { Receipt } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function TaxSettings() {
  return (
    <PreferencePageTemplate
      title="Tax settings"
      subtitle="How taxes are calculated on your orders"
      icon={Receipt}
    >
      <PreferenceSection title="Tax rate">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Default rate (%)</Label>
            <Input type="number" defaultValue="22" />
          </div>
          <div className="space-y-2">
            <Label>Tax ID</Label>
            <Input defaultValue="IT12345678901" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Prices include tax</p>
            <p className="text-xs text-muted-foreground">Show product prices tax-inclusive</p>
          </div>
          <Switch defaultChecked />
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
