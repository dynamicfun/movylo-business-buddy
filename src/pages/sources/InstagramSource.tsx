import { useState } from "react";
import { Instagram, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const InstagramSource = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectInstagram = () => {
    // Placeholder for Instagram connection logic
    setIsConnected(true);
  };

  return (
    <InnerPageTemplate
      title="Instagram"
      subtitle="Turn people who follow you on Instagram into customers"
      helperText="Nothing happens until customers choose to join."
      introText="Connect your Instagram account so people who follow you there can join your business and stay in touch."
      icon={Instagram}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column - Info boxes */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>Many customers discover local businesses on Instagram.</p>
                <p>When they follow your account, they see your updates in their feed.</p>
                <p>This helps turn those people into customers you can stay connected with.</p>
              </div>
            </CardContent>
          </Card>

          {/* What to expect */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">What to expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>People who find you on Instagram can join your business</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Movylo shares occasional updates for you</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>You can review or change this anytime</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Customers stay connected after they leave Instagram</span>
                </li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Want to adjust this? You can review posts anytime in{" "}
                <a href="/autopilot" className="text-primary hover:underline">Autopilot</a>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right column - CTA */}
        <div className="space-y-4">
          {!isConnected ? (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Connect Instagram</h3>
                
                <Button onClick={handleConnectInstagram} className="mb-4">
                  <Instagram className="h-4 w-4 mr-2" />
                  Connect Instagram
                </Button>

                <p className="text-sm text-muted-foreground mb-4">
                  You can change or disconnect this anytime.
                </p>

                <p className="text-xs text-muted-foreground">
                  This works quietly in the background.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-sm text-primary">Instagram Connected</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Your Instagram account is connected. People who follow you can now join your business.
                </p>

                <Button variant="outline" size="sm" onClick={() => setIsConnected(false)}>
                  Disconnect
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  This works quietly in the background.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default InstagramSource;
