import { Tag } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function GoogleTagManager() {
  return (
    <PreferencePageTemplate
      title="Google Tag Manager"
      subtitle="Connect Google Tag Manager to your store"
      icon={Tag}
    >
      <PreferenceSection title="Container">
        <div className="space-y-2 max-w-sm">
          <Label>Container ID</Label>
          <Input placeholder="GTM-XXXXXXX" />
          <p className="text-xs text-muted-foreground">Find it in your Google Tag Manager account.</p>
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
