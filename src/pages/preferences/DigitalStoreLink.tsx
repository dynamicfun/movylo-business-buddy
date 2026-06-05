import { Store, Copy } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function DigitalStoreLink() {
  return (
    <PreferencePageTemplate
      title="Digital store link"
      subtitle="A link customers can share to find your digital store"
      icon={Store}
    >
      <PreferenceSection title="Public link">
        <div className="space-y-2">
          <Label>Share link</Label>
          <div className="flex gap-2 max-w-md">
            <Input defaultValue="https://movylo.com/mystore" readOnly />
            <Button variant="outline" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">Share it on social media, WhatsApp or printed materials.</p>
        </div>
      </PreferenceSection>
    </PreferencePageTemplate>
  );
}
