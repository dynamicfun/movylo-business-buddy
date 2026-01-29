import { useState } from "react";
import { Globe, CheckCircle2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

type Platform = "wordpress" | "wix" | "other";

const WebsiteSource = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("wordpress");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [movyloCode, setMovyloCode] = useState("");
  const [codeCopied, setCodeCopied] = useState(false);
  
  // Feature toggles
  const [joinEnabled, setJoinEnabled] = useState(true);
  const [questionsEnabled, setQuestionsEnabled] = useState(false);
  const [contactEnabled, setContactEnabled] = useState(false);
  const [bookingEnabled, setBookingEnabled] = useState(false);
  
  // Look and feel
  const [mainColor, setMainColor] = useState("#3b82f6");
  const [cornerStyle, setCornerStyle] = useState<"rounded" | "square">("rounded");
  
  // Text customization
  const [title, setTitle] = useState("Stay in touch with us");
  const [shortMessage, setShortMessage] = useState("Join to get updates and offers from us.");
  const [buttonText, setButtonText] = useState("Join now");

  const handleCopyCode = () => {
    navigator.clipboard.writeText('<script src="https://movylo.com/widget.js"></script>');
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const restoreDefaults = () => {
    setTitle("Stay in touch with us");
    setShortMessage("Join to get updates and offers from us.");
    setButtonText("Join now");
  };

  return (
    <InnerPageTemplate
      title="Website"
      subtitle="Turn website visits into customers"
      helperText="Nothing happens until customers choose to join."
      introText="Add a simple way for visitors to connect with your business directly from your website. Visitors can join your business, contact you, or book with you — all in one place."
      icon={Globe}
      backTo="/"
    >
      <div className="space-y-6">
        {/* Why this matters */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Why this matters</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Visitors can join your business easily</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Customers stay connected after they leave</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">More chances for repeat visits and sales</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Primary CTA */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Connect your website</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Movylo places this on your website for you.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              You don't need to decide where it goes or change your site yourself.
            </p>
            <p className="text-xs text-muted-foreground/70">You can review or change this anytime.</p>
          </CardContent>
        </Card>

        {/* 1. Connect your website */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">1. Connect your website</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose the option that matches your website. We'll guide you through it.
            </p>

            <Tabs value={selectedPlatform} onValueChange={(v) => setSelectedPlatform(v as Platform)} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="wordpress">WordPress</TabsTrigger>
                <TabsTrigger value="wix">Wix</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>

              <TabsContent value="wordpress" className="space-y-4">
                <p className="text-sm font-medium text-foreground">My website is on WordPress</p>
                <p className="text-sm text-muted-foreground">
                  Install the Movylo plugin, then paste your details below.
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="website-url" className="text-sm">Website address</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input 
                        id="website-url" 
                        placeholder="https://yourwebsite.com" 
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                      />
                      <Button size="sm">Save</Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="movylo-code" className="text-sm">Movylo code</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input 
                        id="movylo-code" 
                        placeholder="Paste your code here" 
                        value={movyloCode}
                        onChange={(e) => setMovyloCode(e.target.value)}
                      />
                      <Button size="sm">Save</Button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/70">You can change this anytime.</p>
              </TabsContent>

              <TabsContent value="wix" className="space-y-4">
                <p className="text-sm font-medium text-foreground">My website is on Wix</p>
                <p className="text-sm text-muted-foreground">
                  Copy the code below into your Wix site settings.
                </p>
                <Button variant="outline" onClick={handleCopyCode} className="gap-2">
                  {codeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {codeCopied ? "Copied!" : "Copy code"}
                </Button>
                <p className="text-xs text-muted-foreground/70">You can change this anytime.</p>
              </TabsContent>

              <TabsContent value="other" className="space-y-4">
                <p className="text-sm font-medium text-foreground">My website is on another platform</p>
                <p className="text-sm text-muted-foreground">
                  Copy and paste this code into your site.<br />
                  If you're not sure where to add it, your web person can help.
                </p>
                <Button variant="outline" onClick={handleCopyCode} className="gap-2">
                  {codeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {codeCopied ? "Copied!" : "Copy code"}
                </Button>
                <p className="text-xs text-muted-foreground/70">You can change this anytime.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 2. What visitors can do */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">2. What visitors can do</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose what you want to show. Everything here is optional.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Join your business</p>
                  <p className="text-xs text-muted-foreground">Lets visitors sign up in a few seconds.</p>
                </div>
                <Switch checked={joinEnabled} onCheckedChange={setJoinEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Questions and answers</p>
                  <p className="text-xs text-muted-foreground">Helps visitors get quick answers on your website.</p>
                </div>
                <Switch checked={questionsEnabled} onCheckedChange={setQuestionsEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Contact you</p>
                  <p className="text-xs text-muted-foreground">Makes it easy for visitors to reach you.</p>
                </div>
                <Switch checked={contactEnabled} onCheckedChange={setContactEnabled} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Booking</p>
                  <p className="text-xs text-muted-foreground">Lets visitors request a reservation or booking.</p>
                </div>
                <Switch checked={bookingEnabled} onCheckedChange={setBookingEnabled} />
              </div>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4">You can change this anytime.</p>
          </CardContent>
        </Card>

        {/* 3. Look and feel */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">3. Look and feel (optional)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Optional. If you skip this, we'll match your website style.
            </p>

            <div className="space-y-4">
              <div>
                <Label className="text-sm">Main color</Label>
                <p className="text-xs text-muted-foreground mb-2">Used for buttons and highlights.</p>
                <div className="flex items-center gap-3">
                  <input 
                    type="color" 
                    value={mainColor}
                    onChange={(e) => setMainColor(e.target.value)}
                    className="w-10 h-10 rounded border border-input cursor-pointer"
                  />
                  <Input 
                    value={mainColor} 
                    onChange={(e) => setMainColor(e.target.value)}
                    className="w-28"
                  />
                </div>
              </div>

              <div>
                <Label className="text-sm">Corner style</Label>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setCornerStyle("rounded")}
                    className={`px-4 py-2 rounded-lg border text-sm transition-colors ${
                      cornerStyle === "rounded" 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-input text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    Rounded
                  </button>
                  <button
                    onClick={() => setCornerStyle("square")}
                    className={`px-4 py-2 border text-sm transition-colors ${
                      cornerStyle === "square" 
                        ? "border-primary bg-primary/10 text-primary" 
                        : "border-input text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    Square
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. The words visitors see */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">4. The words visitors see</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Optional. You can keep the defaults.
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="widget-title" className="text-sm">Title</Label>
                <Input 
                  id="widget-title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Stay in touch with us"
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="widget-message" className="text-sm">Short message</Label>
                <Input 
                  id="widget-message" 
                  value={shortMessage}
                  onChange={(e) => setShortMessage(e.target.value)}
                  placeholder="Join to get updates and offers from us."
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="widget-button" className="text-sm">Button text</Label>
                <Input 
                  id="widget-button" 
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="Join now"
                  className="mt-1.5"
                />
              </div>

              <button 
                onClick={restoreDefaults}
                className="text-sm text-primary hover:underline"
              >
                Restore default text
              </button>
            </div>
          </CardContent>
        </Card>

        {/* 5. Preview and save */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">5. Preview and save</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This is how it will look on your website.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button>Save and preview</Button>
              <Button variant="outline">Save changes</Button>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4">Nothing changes until you save.</p>
          </CardContent>
        </Card>

        {/* Background reassurance */}
        <p className="text-xs text-muted-foreground/70 text-center">
          This works quietly in the background.
        </p>
      </div>
    </InnerPageTemplate>
  );
};

export default WebsiteSource;
