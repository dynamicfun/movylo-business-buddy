import { Clock } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Timezone() {
  return (
    <PreferencePageTemplate
      title="Timezone"
      subtitle="Used for orders, scheduling and reports"
      icon={Clock}
    >
      <PreferenceSection title="Your timezone">
        <div className="space-y-2 max-w-sm">
          <Label>Timezone</Label>
          <Select defaultValue="rome">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="rome">(GMT+1) Europe/Rome</SelectItem>
              <SelectItem value="london">(GMT) Europe/London</SelectItem>
              <SelectItem value="ny">(GMT-5) America/New_York</SelectItem>
              <SelectItem value="la">(GMT-8) America/Los_Angeles</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
