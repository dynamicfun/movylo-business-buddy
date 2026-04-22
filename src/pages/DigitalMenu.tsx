import { useState, useRef } from "react";
import { UtensilsCrossed, ExternalLink, Copy, Download, Eye, EyeOff, Edit3, CheckCircle2, Sparkles, X, Loader2, ImagePlus, FileImage, Settings2, QrCode } from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function DigitalMenu() {
  const [showBackgroundImage, setShowBackgroundImage] = useState(true);
  const [pageTitle, setPageTitle] = useState("Our menu");
  const [menuDescription, setMenuDescription] = useState("");
  const [disableOrdering, setDisableOrdering] = useState(false);
  const [allowPayAtTill, setAllowPayAtTill] = useState(true);
  const [aiExpanded, setAiExpanded] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<{ file: File; preview: string }[]>([]);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [aiStep, setAiStep] = useState<"upload" | "processing" | "done">("upload");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const menuLink = "https://bella-capri-restaurant-limited.movylo.com/digital-menu";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleAiBuild = () => {
    if (uploadedImages.length === 0) return;
    setAiStep("processing");
    setAiProcessing(true);
    setTimeout(() => {
      setAiProcessing(false);
      setAiStep("done");
    }, 3500);
  };

  const handleAiClose = () => {
    setAiExpanded(false);
    setTimeout(() => {
      setAiStep("upload");
      uploadedImages.forEach(img => URL.revokeObjectURL(img.preview));
      setUploadedImages([]);
    }, 200);
  };

  const handleAiDone = () => {
    toast.success("Menu items imported successfully!");
    handleAiClose();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(menuLink);
    toast.success("Link copied to clipboard");
  };

  const handleOpenMenu = () => {
    window.open(menuLink, "_blank");
  };

  const handleDownloadQR = () => {
    toast.success("QR code download started");
  };

  const handleDownloadSticker = () => {
    toast.success("Print-ready sticker download started");
  };

  return (
    <InnerPageTemplate
      title="Digital Menu"
      subtitle="Let customers view your menu and place orders"
      helperText="Optional. You can change this anytime."
      icon={UtensilsCrossed}
      backTo="/"
    >
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
          <TabsTrigger value="create" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Create & share
          </TabsTrigger>
          <TabsTrigger value="configure" className="gap-2">
            <Settings2 className="h-4 w-4" />
            Configuration
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: Create with AI + QR codes */}
        <TabsContent value="create" className="space-y-6 mt-0">
          {/* AI Menu Builder */}
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden transition-all">
            <CardContent className="p-5">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <h3 className="text-sm font-semibold text-foreground">Build your menu with AI</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload a photo of your paper menu or daily specials and let AI turn it into your digital Movylo menu in seconds.
                  </p>
                  {!aiExpanded && (
                    <Button onClick={() => setAiExpanded(true)} className="gap-2">
                      <Sparkles className="h-4 w-4" />
                      Build your digital menu with AI
                    </Button>
                  )}
                </div>
              </div>

              {aiExpanded && (
                <div className="mt-4 pt-5 border-t border-primary/20 animate-in fade-in slide-in-from-top-2 duration-300">
                  {aiStep === "upload" && (
                    <div className="space-y-4">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleImageUpload}
                      />

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full border-2 border-dashed border-primary/30 rounded-lg p-8 flex flex-col items-center gap-3 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-pointer bg-background/50"
                      >
                        <ImagePlus className="h-10 w-10 text-primary/50" />
                        <div className="text-center">
                          <p className="text-sm font-medium text-foreground">Click to upload menu photos</p>
                          <p className="text-xs text-muted-foreground mt-1">JPG, PNG — menu cards, daily specials, chalkboards</p>
                        </div>
                      </button>

                      {uploadedImages.length > 0 && (
                        <div className="space-y-3">
                          <p className="text-xs text-muted-foreground font-medium">{uploadedImages.length} photo{uploadedImages.length > 1 ? "s" : ""} ready</p>
                          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                            {uploadedImages.map((img, i) => (
                              <div key={i} className="relative group rounded-lg overflow-hidden border border-border aspect-square">
                                <img src={img.preview} alt={`Menu ${i + 1}`} className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={() => removeImage(i)}
                                  className="absolute top-1 right-1 bg-background/80 backdrop-blur-sm rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-3.5 w-3.5 text-foreground" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={handleAiClose}>Cancel</Button>
                        <Button onClick={handleAiBuild} disabled={uploadedImages.length === 0} className="gap-2">
                          <Sparkles className="h-4 w-4" />
                          Build menu
                        </Button>
                      </div>
                    </div>
                  )}

                  {aiStep === "processing" && (
                    <div className="py-10 flex flex-col items-center gap-4">
                      <Loader2 className="h-10 w-10 text-primary animate-spin" />
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">AI is reading your menu…</p>
                        <p className="text-xs text-muted-foreground mt-1">Extracting items, prices and categories</p>
                      </div>
                    </div>
                  )}

                  {aiStep === "done" && (
                    <div className="space-y-4">
                      <div className="py-4 flex flex-col items-center gap-3">
                        <CheckCircle2 className="h-10 w-10 text-primary" />
                        <div className="text-center">
                          <p className="text-sm font-medium text-foreground">Menu imported!</p>
                          <p className="text-xs text-muted-foreground mt-1">12 items across 4 categories have been added to your digital menu.</p>
                        </div>
                      </div>

                      <div className="rounded-lg border border-border divide-y divide-border text-sm bg-background/50">
                        {[
                          { cat: "Starters", count: 3 },
                          { cat: "Mains", count: 4 },
                          { cat: "Desserts", count: 3 },
                          { cat: "Drinks", count: 2 },
                        ].map((c) => (
                          <div key={c.cat} className="flex items-center justify-between px-3 py-2">
                            <span className="text-foreground">{c.cat}</span>
                            <span className="text-muted-foreground">{c.count} items</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-muted-foreground">You can edit items anytime from Products.</p>

                      <div className="flex justify-end gap-2 pt-2">
                        <Button variant="outline" onClick={handleAiClose}>Close</Button>
                        <Button onClick={handleAiDone} className="gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          Confirm & save
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
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

          {/* QR codes for tables */}
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-1">
                <QrCode className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">QR codes for tables</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Place one per table or counter. Customers scan and order from their phone.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={handleDownloadQR} className="gap-2">
                  <Download className="h-4 w-4" />
                  Download QR code
                </Button>
                <Button variant="outline" onClick={handleDownloadSticker} className="gap-2">
                  <FileImage className="h-4 w-4" />
                  Download ready-to-print sticker
                </Button>
              </div>

              <p className="text-xs text-muted-foreground/70 mt-3">
                The sticker comes pre-designed with your QR code, ready to print and place on tables.
              </p>
            </CardContent>
          </Card>

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
        </TabsContent>

        {/* TAB 2: Configuration */}
        <TabsContent value="configure" className="space-y-6 mt-0">
          {/* Customize your menu */}
          <Card>
            <CardContent className="p-5 space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Customize your menu</h3>
                <p className="text-xs text-muted-foreground">Customize the menu page</p>
              </div>

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

                {!disableOrdering && (
                  <>
                    <div className="p-3 rounded-lg bg-muted/30">
                      <p className="text-sm font-medium text-foreground">Pay online</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Customers place and pay for orders online.
                      </p>
                    </div>

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
        </TabsContent>
      </Tabs>
    </InnerPageTemplate>
  );
}
