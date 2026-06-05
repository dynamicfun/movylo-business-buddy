import { Scale } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function UnitSystem() {
  return (
    <PreferencePageTemplate
      title="Unit system"
      subtitle="Choose how weights, sizes and currency are shown"
      icon={Scale}
    >
      <PreferenceSection title="Measurement units">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Weight</Label>
            <Select defaultValue="kg">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="kg">Kilograms (kg)</SelectItem>
                <SelectItem value="lb">Pounds (lb)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Length</Label>
            <Select defaultValue="cm">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="cm">Centimeters (cm)</SelectItem>
                <SelectItem value="in">Inches (in)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Currency</Label>
            <Select defaultValue="eur">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="eur">Euro (€)</SelectItem>
                <SelectItem value="usd">US Dollar ($)</SelectItem>
                <SelectItem value="gbp">British Pound (£)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </PreferenceSection>

      <div className="flex justify-start">
        <Button>Save changes</Button>
      </div>
    </PreferencePageTemplate>
  );
}
