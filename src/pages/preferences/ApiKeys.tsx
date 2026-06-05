import { Key, Plus, Copy } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Button } from "@/components/ui/button";

const keys = [
  { name: "Production key", value: "pk_live_••••••••3a9f", created: "12 Jan 2026" },
  { name: "Development key", value: "pk_test_••••••••8c21", created: "3 Feb 2026" },
];

export default function ApiKeys() {
  return (
    <PreferencePageTemplate
      title="API keys"
      subtitle="Used to connect external tools to your store"
      icon={Key}
    >
      <div className="flex justify-start">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New key
        </Button>
      </div>

      <PreferenceSection title="Active keys">
        <div className="divide-y divide-border">
          {keys.map((k) => (
            <div key={k.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0 gap-3">
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground">{k.name}</p>
                <p className="text-xs text-muted-foreground truncate">{k.value} · created {k.created}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </PreferenceSection>
    </PreferencePageTemplate>
  );
}
