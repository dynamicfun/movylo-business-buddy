import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Check, Eye, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

type Platform = "wordpress" | "wix" | "manual" | null;

const WebsiteSource = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(null);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [groupIconsOpen, setGroupIconsOpen] = useState(false);
  const [customCssOpen, setCustomCssOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signup");

  const platforms = [
    { id: "wordpress" as Platform, name: "WordPress", icon: "W" },
    { id: "wix" as Platform, name: "Wix", icon: "W" },
    { id: "manual" as Platform, name: "Manual setup", icon: "⚙" },
  ];

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
                    <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
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
                </CardContent>
              </Card>
            </motion.div>

            {/* Widget Options - Tabs */}
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

                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-6">
                      <TabsTrigger value="signup">Sign-up form</TabsTrigger>
                      <TabsTrigger value="contact">Contact button</TabsTrigger>
                      <TabsTrigger value="chat">Chat</TabsTrigger>
                      <TabsTrigger value="bookings">Bookings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="signup" className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h3 className="text-sm font-medium text-foreground mb-3">Sign-up form settings</h3>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="signup-title" className="text-sm">Form title</Label>
                            <Input id="signup-title" placeholder="Join our community" className="mt-1.5" />
                          </div>
                          <div>
                            <Label htmlFor="signup-button" className="text-sm">Button text</Label>
                            <Input id="signup-button" placeholder="Sign up" className="mt-1.5" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="contact" className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h3 className="text-sm font-medium text-foreground mb-3">Contact button settings</h3>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="contact-label" className="text-sm">Button label</Label>
                            <Input id="contact-label" placeholder="Contact us" className="mt-1.5" />
                          </div>
                          <div>
                            <Label htmlFor="contact-email" className="text-sm">Email address</Label>
                            <Input id="contact-email" type="email" placeholder="hello@yourbusiness.com" className="mt-1.5" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="chat" className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h3 className="text-sm font-medium text-foreground mb-3">Chat settings</h3>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="chat-greeting" className="text-sm">Welcome message</Label>
                            <Input id="chat-greeting" placeholder="Hi! How can we help you today?" className="mt-1.5" />
                          </div>
                          <div>
                            <Label htmlFor="chat-availability" className="text-sm">Availability hours</Label>
                            <Input id="chat-availability" placeholder="9am - 5pm" className="mt-1.5" />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="bookings" className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h3 className="text-sm font-medium text-foreground mb-3">Bookings settings</h3>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="booking-label" className="text-sm">Button label</Label>
                            <Input id="booking-label" placeholder="Book an appointment" className="mt-1.5" />
                          </div>
                          <div>
                            <Label htmlFor="booking-duration" className="text-sm">Default duration</Label>
                            <select id="booking-duration" className="mt-1.5 w-full p-2 border rounded-lg bg-background text-sm">
                              <option>15 minutes</option>
                              <option>30 minutes</option>
                              <option>45 minutes</option>
                              <option>1 hour</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <p className="text-xs text-muted-foreground mt-4">
                    You can change this later.
                  </p>

                  {/* Group Icons */}
                  <Collapsible open={groupIconsOpen} onOpenChange={setGroupIconsOpen} className="mt-6 border rounded-lg">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                      <span>Group Icons</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${groupIconsOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Group your widget icons together for a cleaner look.
                        </p>
                        <div className="flex items-center gap-3">
                          <input type="checkbox" id="group-icons" className="w-4 h-4 rounded border-border" />
                          <Label htmlFor="group-icons" className="text-sm">Enable grouped icons</Label>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Custom CSS */}
                  <Collapsible open={customCssOpen} onOpenChange={setCustomCssOpen} className="border rounded-lg">
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-sm font-medium text-primary hover:bg-muted/50 transition-colors">
                      <span>Custom CSS</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${customCssOpen ? "rotate-180" : ""}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-4 pb-4 space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Add custom CSS to further customize the widget appearance.
                        </p>
                        <textarea 
                          id="custom-css" 
                          placeholder=".movylo-widget { /* your styles */ }"
                          className="w-full p-3 border rounded-lg bg-background text-sm font-mono min-h-[100px]"
                        />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preview Section */}
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default WebsiteSource;
