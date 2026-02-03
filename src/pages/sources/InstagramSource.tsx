import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, CheckCircle2, Link as LinkIcon, Copy, ExternalLink } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function InstagramSource() {
  const [isConnected, setIsConnected] = useState(false);
  const signupLink = "https://movylo.com/signup/your-business";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(signupLink);
    toast.success("Link copied to clipboard!");
  };

  const handleConnect = () => {
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
        {/* Left Column - Link in Bio */}
        <div className="space-y-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <LinkIcon className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Add a Link in Bio
                </h3>
              </div>
              
              <h4 className="font-medium text-foreground mb-2">
                Engage with Customers via Instagram
              </h4>
              
              <p className="text-sm text-muted-foreground mb-4">
                Copy this link and add it to the field 'Website' in your Instagram profile. This will help you sign up customers via Instagram.
              </p>

              <div className="flex gap-2">
                <Input 
                  value={signupLink} 
                  readOnly 
                  className="text-sm bg-background"
                />
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handleCopyLink}
                  className="flex-shrink-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3"
              >
                <ExternalLink className="h-3 w-3" />
                Open Instagram to add link
              </a>
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
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Connect Instagram to Post */}
        <div className="space-y-4">
          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Instagram className="h-4 w-4 text-primary" />
                <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Connect Instagram to Post
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Connect your Instagram page, so that Movylo can post on it and invite your viewers and those who like your page to sign up to be on your Customer List. You can customize the frequency and the content of the posts at any time. Movylo will not post until you activate them.
              </p>

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
                      <ExternalLink className="h-3 w-3" />
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

              <p className="text-xs text-muted-foreground/70 mt-4">
                Want to adjust posts? You can review them anytime in{" "}
                <a href="/autopilot" className="text-primary hover:underline">Autopilot</a>.
              </p>
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
