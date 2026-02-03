import { useState } from "react";
import { Wifi, CheckCircle2, Users, Zap, Copy, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { useToast } from "@/hooks/use-toast";

const WiFiSource = () => {
  const [isConfigured, setIsConfigured] = useState(false);
  const [networkName, setNetworkName] = useState("");
  const { toast } = useToast();

  const handleCopyCode = () => {
    navigator.clipboard.writeText("<script>/* WiFi captive portal code */</script>");
    toast({
      title: "Code copied!",
      description: "Paste this in your WiFi captive portal settings",
    });
  };

  return (
    <InnerPageTemplate
      title="WiFi"
      subtitle="Turn your WiFi into a customer magnet"
      helperText="Nothing happens until customers choose to join"
      introText="When customers connect to your WiFi, they can easily join your list. It's a natural moment to capture their information while providing value."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Info */}
        <div className="space-y-6">
          {/* Why this matters */}
          <div className="bg-gradient-to-br from-primary/5 to-background rounded-xl p-5 border border-border/50">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Why this matters
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              Every customer who uses your WiFi is already in your space. This turns that moment of connection into a lasting relationship, capturing their details while they enjoy your service.
            </p>
          </div>

          {/* What to expect */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              What to expect
            </h3>
            <ul className="space-y-2.5">
              {[
                "Customers sign up when connecting to WiFi",
                "Seamless experience—no extra steps for them",
                "Capture emails during natural interactions",
                "Works with most WiFi systems"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              How it works
            </h3>
            <div className="space-y-2">
              {[
                "Customer connects to your WiFi",
                "Sign-up page appears automatically",
                "They enter their details to get access",
                "You have a new connected customer"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Action */}
        <div className="space-y-6">
          {!isConfigured ? (
            <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Configure WiFi Capture</h3>
                  <p className="text-xs text-muted-foreground">Set up your captive portal</p>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="network-name" className="text-sm">WiFi Network Name</Label>
                <Input 
                  id="network-name"
                  placeholder="e.g., MyBusiness_Guest"
                  value={networkName}
                  onChange={(e) => setNetworkName(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <Label className="text-sm">Captive Portal Code</Label>
                <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs text-muted-foreground">
                  &lt;script src="movylo-wifi.js"&gt;&lt;/script&gt;
                </div>
                <Button variant="outline" size="sm" className="w-full" onClick={handleCopyCode}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Code
                </Button>
              </div>
              
              <Button 
                className="w-full"
                onClick={() => setIsConfigured(true)}
                disabled={!networkName}
              >
                <Settings className="w-4 h-4 mr-2" />
                Save Configuration
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Need help? Contact support for setup assistance
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-sky-500/30 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-sky-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WiFi Configured</h3>
                  <p className="text-xs text-muted-foreground">Capturing customers automatically</p>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Network</span>
                  <span className="font-medium">{networkName}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-sky-500 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Customers from WiFi</span>
                  <span className="font-semibold">—</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={() => setIsConfigured(false)}>
                Edit Configuration
              </Button>
            </div>
          )}

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/30 rounded-xl p-4 text-center">
              <Users className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">—</p>
              <p className="text-xs text-muted-foreground">Customers</p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4 text-center">
              <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">—</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default WiFiSource;
