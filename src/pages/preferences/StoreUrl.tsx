import { Link2, Copy } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StoreUrl() {
  return (
    <PreferencePageTemplate
      title="Store URL"
      subtitle="The web address customers use to find your store"
      icon={Link2}
    >
      <PreferenceSection title="Your store address">
        <div className="space-y-2">
          <Label>Custom URL</Label>
          <div className="flex gap-2 max-w-md">
            <Input defaultValue="mystore.movylo.com" />
            <Button variant="outline" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
