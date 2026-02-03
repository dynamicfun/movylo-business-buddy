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
      subtitle="Turn Instagram followers into customers"
      helperText="Nothing happens until customers choose to join."
      introText="People who find you on Instagram can join your business and stay in touch — without leaving the app feeling pressured."
      icon={Instagram}
      backTo="/"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Info */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many customers discover local businesses on Instagram. When they follow you, they see your updates in their feed. This helps turn those people into customers you can stay connected with.
              </p>
            </CardContent>
          </Card>

          {/* What to expect */}
          <Card>
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">What to expect</h3>
              <ul className="space-y-2.5">
                {[
                  "People who find you on Instagram can join your business",
                  "Customers stay connected even after they leave Instagram",
                  "You can change this anytime"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Options */}
        <div className="space-y-4">
          {/* Option 1 - Link in Bio */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <LinkIcon className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                Option 1 — Add a link in your bio (recommended)
              </h3>
            </div>
            
            <h4 className="font-medium text-foreground mb-2">
              Add a link in your bio
            </h4>
            
            <p className="text-sm text-muted-foreground mb-4">
              Copy this link and add it to the Website field in your Instagram profile.
              This lets people who visit your profile join your business easily.
            </p>

            <div className="flex gap-2 mb-3">
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
              className="inline-flex items-center gap-1 text-xs text-primary hover:underline mb-4"
            >
              <ExternalLink className="h-3 w-3" />
              Open Instagram to add link
            </a>

            <p className="text-xs text-muted-foreground/80">
              Customers decide if they want to join.
            </p>
          </CardContent>
        </Card>

        {/* Option 2 - Share Updates */}
        <Card className="border-muted">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <Instagram className="h-4 w-4 text-primary" />
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide">
                Option 2 — Share updates on Instagram (optional)
              </h3>
            </div>

            <h4 className="font-medium text-foreground mb-2">
              Share occasional updates on Instagram
            </h4>

            <p className="text-sm text-muted-foreground mb-4">
              If you want, Movylo can help you share simple posts that remind people they can join your business.
            </p>

            <p className="text-sm text-muted-foreground mb-2">These posts are:</p>
            <ul className="space-y-1.5 mb-4">
              {["occasional", "simple", "focused on inviting people to stay in touch"].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground/80 mb-4">
              Nothing is posted unless you choose to turn this on.
            </p>

            {!isConnected ? (
              <Button 
                onClick={handleConnect}
                className="w-full"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Connect Instagram to share posts
              </Button>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Instagram className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-foreground">Instagram Connected</p>
                    <p className="text-xs text-muted-foreground truncate">Ready to share posts</p>
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

            <p className="text-xs text-muted-foreground/80 mt-4">
              You can review or change posts anytime.
              You can pause or disconnect this whenever you want.
            </p>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Final Reassurance */}
      <p className="text-sm text-muted-foreground text-center mt-6">
        You're always in control.
        Customers choose to join, and you decide how visible you want to be.
      </p>
    </InnerPageTemplate>
  );
}