import { Palette } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function StoreAppearance() {
  return (
    <PreferencePageTemplate
      title="Store appearance"
      subtitle="Choose how your store looks to customers"
      icon={Palette}
    >
      <PreferenceSection title="Brand colors" description="Used across your store, emails and offers.">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Primary color</Label>
            <Input type="text" defaultValue="#042C53" />
          </div>
          <div className="space-y-2">
            <Label>Accent color</Label>
            <Input type="text" defaultValue="#F59E0B" />
          </div>
        </div>
      </PreferenceSection>

      <PreferenceSection title="Display options">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Show business hours</p>
            <p className="text-xs text-muted-foreground">Displayed on your storefront</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Show customer reviews</p>
            <p className="text-xs text-muted-foreground">Highlights happy feedback</p>
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
