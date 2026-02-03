import { useState } from "react";
import { UtensilsCrossed, ExternalLink, Copy, Download, Eye, EyeOff, Edit3, CheckCircle2 } from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export default function DigitalMenu() {
  const [menuFormat, setMenuFormat] = useState("web");
  const [showBackgroundImage, setShowBackgroundImage] = useState(true);
  const [pageTitle, setPageTitle] = useState("Our menu");
  const [menuDescription, setMenuDescription] = useState("");
  const [disableOrdering, setDisableOrdering] = useState(false);
  const [allowPayAtTill, setAllowPayAtTill] = useState(true);

  const menuLink = "https://bella-capri-restaurant-limited.movylo.com/digital-menu";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(menuLink);
    toast.success("Link copied to clipboard");
  };

  const handleOpenMenu = () => {
    window.open(menuLink, "_blank");
  };

  return (
    <InnerPageTemplate
      title="Digital Menu"
      subtitle="Let customers view your menu and place orders"
      helperText="Optional. You can change this anytime."
      icon={UtensilsCrossed}
      backTo="/"
    >
      <div className="space-y-6">
        {/* How this works */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-primary mb-2">How this works</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Customers scan a QR code or open your menu link to:
            </p>
            <ul className="space-y-1.5">
              {["view your menu", "place an order", "choose how to pay"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-3">
              You don't need extra devices or apps.
            </p>
          </CardContent>
        </Card>

        {/* Your digital menu link */}
        <Card>
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-1">Your digital menu</h3>
            <p className="text-xs text-muted-foreground mb-4">This is your menu page</p>
            
            <div className="p-3 bg-muted/30 rounded-lg mb-4">
              <p className="text-sm text-foreground font-mono break-all">{menuLink}</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button onClick={handleOpenMenu} className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Open menu
              </Button>
              <Button variant="outline" onClick={handleCopyLink} className="gap-2">
                <Copy className="h-4 w-4" />
                Copy link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* QR code for tables */}
        <Card>
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-1">QR code for tables</h3>
            <p className="text-xs text-muted-foreground mb-4">
              Use QR codes in your location
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Download QR codes for your menu and place one per table or counter.
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download QR codes
            </Button>
            <p className="text-xs text-muted-foreground/70 mt-3">
              Customers scan and order from their phone.
            </p>
          </CardContent>
        </Card>

        {/* How customers see the menu */}
        <Card>
          <CardContent className="p-5 space-y-5">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">How customers see the menu</h3>
              
              {/* Menu format */}
              <div className="space-y-3">
                <Label className="text-xs text-muted-foreground uppercase tracking-wide">Menu format</Label>
                <RadioGroup value={menuFormat} onValueChange={setMenuFormat} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="web" id="web" />
                    <Label htmlFor="web" className="text-sm cursor-pointer">Web (recommended)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="pdf" />
                    <Label htmlFor="pdf" className="text-sm cursor-pointer">PDF</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Customize your menu */}
            <div className="pt-4 border-t border-border/40 space-y-4">
              <h4 className="text-sm font-medium text-foreground">Customize your menu</h4>
              <p className="text-xs text-muted-foreground">Customize the menu page</p>
              
              {/* Background image */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground">Background image (mobile only)</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs">
                    Change image
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => setShowBackgroundImage(!showBackgroundImage)}
                  >
                    {showBackgroundImage ? (
                      <>
                        <EyeOff className="h-3 w-3 mr-1" />
                        Hide image
                      </>
                    ) : (
                      <>
                        <Eye className="h-3 w-3 mr-1" />
                        Show image
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Page title */}
              <div className="space-y-2">
                <Label htmlFor="pageTitle" className="text-sm">Page title</Label>
                <div className="flex items-center gap-2">
                  <Input 
                    id="pageTitle"
                    value={pageTitle}
                    onChange={(e) => setPageTitle(e.target.value)}
                    placeholder="Our menu"
                    className="max-w-xs"
                  />
                  <Button variant="ghost" size="sm">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Menu description */}
              <div className="space-y-2">
                <Label htmlFor="menuDescription" className="text-sm">Short description</Label>
                <Input 
                  id="menuDescription"
                  value={menuDescription}
                  onChange={(e) => setMenuDescription(e.target.value)}
                  placeholder="Add menu description"
                  className="max-w-md"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How customers pay */}
        <Card>
          <CardContent className="p-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">How customers pay</h3>
              <p className="text-xs text-muted-foreground">Choose how customers pay for orders</p>
            </div>
            
            <div className="space-y-4 pt-2">
              {/* Browse only option */}
              <div className="flex items-start justify-between gap-4 p-3 rounded-lg border border-border/50">
                <div>
                  <p className="text-sm font-medium text-foreground">Browse only</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Customers can view the menu but not place orders.
                  </p>
                </div>
                <Switch
                  checked={disableOrdering}
                  onCheckedChange={setDisableOrdering}
                />
              </div>
              
              {/* Pay online info */}
              {!disableOrdering && (
                <>
                  <div className="p-3 rounded-lg bg-muted/30">
                    <p className="text-sm font-medium text-foreground">Pay online</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Customers place and pay for orders online.
                    </p>
                  </div>
                  
                  {/* Pay at the till */}
                  <div className="flex items-start justify-between gap-4 p-3 rounded-lg border border-border/50">
                    <div>
                      <p className="text-sm font-medium text-foreground">Pay at the till</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Customers place an order and pay later in person.
                      </p>
                    </div>
                    <Switch
                      checked={allowPayAtTill}
                      onCheckedChange={setAllowPayAtTill}
                    />
                  </div>
                </>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground/70 pt-2">
              Customers always see how they will pay before ordering.
            </p>
          </CardContent>
        </Card>

        {/* Order preparation */}
        <Card>
          <CardContent className="p-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1">Order preparation</h3>
              <p className="text-xs text-muted-foreground">Receive and prepare orders</p>
            </div>
            
            <p className="text-sm text-muted-foreground">
              When a customer places an order, it appears in your kitchen view so it can be prepared.
            </p>
            
            {/* Kitchen access */}
            <div className="pt-4 border-t border-border/40">
              <h4 className="text-sm font-medium text-foreground mb-1">Kitchen access for staff</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Create access codes for staff who prepare orders.
              </p>
              <Button variant="outline" className="gap-2">
                Create access
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3">
                Staff use these codes to see incoming orders.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Reassurance footer */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <ul className="space-y-2">
              {[
                "Customers order directly from their phone",
                "Orders appear automatically for preparation",
                "You can turn this on or off anytime"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </InnerPageTemplate>
  );
}
