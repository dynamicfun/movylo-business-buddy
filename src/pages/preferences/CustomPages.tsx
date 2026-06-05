import { FileText, Plus } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Button } from "@/components/ui/button";

const pages = [
  { name: "About us", status: "Published" },
  { name: "Contact", status: "Published" },
  { name: "Terms & conditions", status: "Draft" },
];

export default function CustomPages() {
  return (
    <PreferencePageTemplate
      title="Custom pages"
      subtitle="Add your own pages to your store"
      icon={FileText}
    >
      <div className="flex justify-start">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New page
        </Button>
      </div>

      <PreferenceSection title="Your pages">
        <div className="divide-y divide-border">
          {pages.map((p) => (
            <div key={p.name} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm font-medium text-foreground">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.status}</p>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          ))}
        </div>
      </PreferenceSection>
    </PreferencePageTemplate>
  );
}
