import { Megaphone } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function AppAds() {
  return (
    <PreferencePageTemplate
      title="App ads"
      subtitle="Promote your business through ads"
      icon={Megaphone}
    >
      <PreferenceSection title="Advertising preferences">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Show personalized ads</p>
            <p className="text-xs text-muted-foreground">Based on customer behaviour</p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Cross-promote with partners</p>
            <p className="text-xs text-muted-foreground">Appear in partner businesses</p>
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
