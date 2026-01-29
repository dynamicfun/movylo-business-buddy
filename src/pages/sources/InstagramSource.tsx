import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, CheckCircle2, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function InstagramSource() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // Simulate connection
    setIsConnected(true);
    toast.success("Instagram connected successfully!");
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    toast.success("Instagram disconnected");
  };

  return (
    <InnerPageTemplate
      title="Instagram"
      subtitle="Turn people who follow you on Instagram into customers"
      helperText="Nothing happens until customers choose to join."
      introText="Connect your Instagram account so people who follow you there can join your business and stay in touch."
      icon={Instagram}
      backTo="/"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - Why this matters */}
        <div className="space-y-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                Why this matters
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Many customers discover local businesses on Instagram.
                </p>
                <p>
                  When they follow your account, they see your updates in their feed.
                </p>
                <p>
                  This helps turn those people into customers you can stay connected with.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-muted">
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                What to expect
              </h3>
              <ul className="space-y-2.5">
                {[
                  "People who find you on Instagram can join your business",
                  "Movylo shares occasional updates for you",
                  "You can review or change this anytime",
                  "Customers stay connected after they leave Instagram"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground/70 mt-4">
                Want to adjust this? You can review posts anytime in{" "}
                <a href="/autopilot" className="text-primary hover:underline">Autopilot</a>.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Connect Instagram */}
        <div className="space-y-4">
          <Card className="border-primary/20">
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                Connect Instagram
              </h3>

              {!isConnected ? (
                <>
                  <Button 
                    onClick={handleConnect}
                    className="w-full mb-3"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Connect Instagram
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    You can change or disconnect this anytime.
                  </p>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground">Your Instagram Account</p>
                      <p className="text-xs text-muted-foreground truncate">Connected</p>
                    </div>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      <LinkIcon className="h-3 w-3" />
                      View
                    </a>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleDisconnect}
                    className="w-full"
                  >
                    Disconnect
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Background reassurance */}
          <p className="text-xs text-muted-foreground/70 text-center">
            This works quietly in the background.
          </p>
        </div>
      </div>
    </InnerPageTemplate>
  );
}
