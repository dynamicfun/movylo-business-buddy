import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Check, Eye, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

type Platform = "wordpress" | "wix" | "manual" | null;

interface WidgetOption {
  id: string;
  label: string;
  enabled: boolean;
}

const WebsiteSource = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [widgetOptions, setWidgetOptions] = useState<WidgetOption[]>([
    { id: "signup", label: "Sign-up form", enabled: true },
    { id: "contact", label: "Contact button", enabled: true },
    { id: "chat", label: "Chat", enabled: false },
    { id: "bookings", label: "Bookings", enabled: false },
  ]);

  const platforms = [
    { id: "wordpress" as Platform, name: "WordPress", icon: "W" },
    { id: "wix" as Platform, name: "Wix", icon: "W" },
    { id: "manual" as Platform, name: "Manual setup", icon: "⚙" },
  ];

  const toggleWidget = (id: string) => {
    setWidgetOptions(prev =>
      prev.map(opt => (opt.id === id ? { ...opt, enabled: !opt.enabled } : opt))
    );
  };

  const handleConnect = () => {
    if (selectedPlatform) {
      setIsConnected(true);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Connect your website</h1>
                  <p className="text-sm text-muted-foreground">This takes a few minutes.</p>
                </div>
              </div>
            </motion.div>

            {/* Platform Selection */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    My website is built with
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                          selectedPlatform === platform.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                            selectedPlatform === platform.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {platform.icon}
                          </div>
                          <span className="font-medium text-foreground">{platform.name}</span>
                        </div>
                        {selectedPlatform === platform.id && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Technical fields for manual setup */}
                  {selectedPlatform === "manual" && (
                    <div className="space-y-4 p-4 bg-muted/30 rounded-lg mb-6">
                      <div>
                        <Label htmlFor="website-url" className="text-sm font-medium">Website URL</Label>
                        <Input id="website-url" placeholder="https://yourwebsite.com" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="embed-code" className="text-sm font-medium">Embed code</Label>
                        <div className="mt-1.5 p-3 bg-background border rounded-lg font-mono text-xs text-muted-foreground">
                          {'<script src="https://movylo.com/widget.js"></script>'}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Copy this code and paste it before the closing &lt;/body&gt; tag.
                        </p>
                      </div>
                    </div>
                  )}

                  {!isConnected ? (
                    <Button
                      onClick={handleConnect}
                      disabled={!selectedPlatform}
                      className="w-full sm:w-auto"
                    >
                      Connect website
                    </Button>
                  ) : (
                    <div className="flex items-center gap-2 text-success">
                      <Check className="w-5 h-5" />
                      <span className="font-medium">Connected</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Widget Options - shown after connection */}
            {isConnected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2">
                      What shows on your website
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      Choose what visitors can see:
                    </p>

                    <div className="space-y-3 mb-4">
                      {widgetOptions.map((option) => (
                        <div key={option.id} className="flex items-center gap-3">
                          <Checkbox
                            id={option.id}
                            checked={option.enabled}
                            onCheckedChange={() => toggleWidget(option.id)}
                          />
                          <Label htmlFor={option.id} className="text-sm font-medium cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground">
                      You can change this later.
                    </p>

                    {/* Advanced Options */}
                    <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen} className="mt-6">
                      <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ChevronDown className={`w-4 h-4 transition-transform ${advancedOpen ? "rotate-180" : ""}`} />
                        Advanced options
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4 p-4 bg-muted/30 rounded-lg">
                        <div>
                          <Label htmlFor="widget-color" className="text-sm font-medium">Widget color</Label>
                          <Input id="widget-color" type="color" defaultValue="#3b82f6" className="mt-1.5 w-20 h-10" />
                        </div>
                        <div>
                          <Label htmlFor="widget-position" className="text-sm font-medium">Position</Label>
                          <select id="widget-position" className="mt-1.5 w-full p-2 border rounded-lg bg-background text-sm">
                            <option>Bottom right</option>
                            <option>Bottom left</option>
                          </select>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Preview Section */}
            {isConnected && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-lg font-semibold text-foreground mb-2">
                      Preview
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      This is how it will look to customers.<br />
                      You can update it anytime.
                    </p>

                    <Button variant="outline" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Show preview
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default WebsiteSource;
