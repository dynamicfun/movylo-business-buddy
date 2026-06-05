import { Unlink } from "lucide-react";
import { PreferencePageTemplate, PreferenceSection } from "@/components/layout/PreferencePageTemplate";
import { Button } from "@/components/ui/button";

export default function DisconnectGoogle() {
  return (
    <PreferencePageTemplate
      title="Disconnect Google"
      subtitle="Remove the connection between your store and Google"
      icon={Unlink}
    >
      <PreferenceSection
        title="Google account"
        description="You are connected as business@example.com"
      >
        <p className="text-sm text-muted-foreground">
          Disconnecting will stop syncing your Google Business Profile, reviews and ads.
          Your customers and existing data will remain.
        </p>
        <div className="flex justify-start">
          <Button variant="outline">Disconnect Google</Button>
        </div>
      </PreferenceSection>
    </PreferencePageTemplate>
  );
}
