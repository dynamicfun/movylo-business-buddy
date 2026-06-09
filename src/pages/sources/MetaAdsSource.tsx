import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Sparkles,
  Upload,
  X,
  MapPin,
  Tag,
  Users,
  Gift,
  Facebook,
  Instagram,
  CheckCircle2,
  ArrowRight,
  ArrowLeft as ArrowLeftIcon,
  CreditCard,
  Wand2,
  Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { toast } from "@/hooks/use-toast";

const STEPS = [
  { id: 1, label: "Create post" },
  { id: 2, label: "Audience" },
  { id: 3, label: "Bonus" },
  { id: 4, label: "Budget & launch" },
];

const CATEGORIES = [
  "Restaurant",
  "Café / Bakery",
  "Beauty & Wellness",
  "Retail Store",
  "Fitness & Gym",
  "Professional Services",
  "Other",
];

const BUDGETS = [
  { value: 50, reach: "1,500 – 4,000", days: 3 },
  { value: 100, reach: "3,500 – 9,000", days: 7 },
  { value: 250, reach: "9,000 – 22,000", days: 14, recommended: true },
  { value: 500, reach: "20,000 – 50,000", days: 30 },
];

export default function MetaAdsSource() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [creative, setCreative] = useState<{ name: string; url: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Step 2
  const [radius, setRadius] = useState<number[]>([5]);
  const [category, setCategory] = useState("Restaurant");
  const [customCategory, setCustomCategory] = useState("");
  const [gender, setGender] = useState<"all" | "female" | "male">("all");
  const [ageRange, setAgeRange] = useState<number[]>([25, 55]);

  // Step 3
  const [bonusEnabled, setBonusEnabled] = useState(true);
  const [bonus, setBonus] = useState("10% off your first visit");

  // Step 4
  const [budget, setBudget] = useState(250);
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setGenerated(
        prompt
          ? `✨ ${prompt}\n\nDiscover what everyone's talking about! Visit us this week and experience something special. Tap below to learn more 👇`
          : "✨ Looking for somewhere new to love? We're just around the corner — come say hi and see what makes us special. Tap below to learn more 👇"
      );
      setIsGenerating(false);
    }, 1200);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) setCreative({ name: f.name, url: URL.createObjectURL(f) });
  };

  const handleLaunch = () => {
    setLaunching(true);
    setTimeout(() => {
      setLaunching(false);
      setLaunched(true);
      toast({ title: "Campaign launched", description: `Your Meta Ad is live with a $${budget} budget.` });
    }, 1500);
  };

  const canNext =
    (step === 1 && generated.trim().length > 0) ||
    (step === 2 && (category !== "Other" || customCategory.trim().length > 0)) ||
    step === 3 ||
    step === 4;

  return (
    <InnerPageTemplate
      title="Create a Meta Ad"
      subtitle="Reach new customers on Facebook and Instagram"
      helperText="Nothing goes live until you purchase the budget."
      icon={Megaphone}
      backTo="/"
    >
      {/* Stepper */}
      <Card className="border-border/50">
        <CardContent className="p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            {STEPS.map((s, i) => {
              const active = step === s.id;
              const done = step > s.id;
              return (
                <div key={s.id} className="flex items-center flex-1 last:flex-none">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                        done
                          ? "bg-primary text-primary-foreground"
                          : active
                          ? "bg-primary/10 text-primary border border-primary/40"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {done ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                    </div>
                    <span
                      className={`text-xs sm:text-sm whitespace-nowrap ${
                        active ? "font-semibold text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-px mx-2 ${done ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && (
            <Card className="border-border/50">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Create your post with AI</h2>
                    <p className="text-sm text-muted-foreground">
                      Tell us what to highlight, or let AI write it for you.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>What do you want to promote? (optional)</Label>
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. New summer menu, weekend brunch, grand opening..."
                    className="min-h-[80px]"
                  />
                  <Button onClick={handleGenerate} disabled={isGenerating} className="gap-2 rounded-xl">
                    <Wand2 className="w-4 h-4" />
                    {isGenerating ? "Generating..." : generated ? "Regenerate" : "Generate post"}
                  </Button>
                </div>

                {generated && (
                  <div className="space-y-2">
                    <Label>Your post (you can edit it)</Label>
                    <Textarea
                      value={generated}
                      onChange={(e) => setGenerated(e.target.value)}
                      className="min-h-[140px]"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>Image or video (optional)</Label>
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*,video/*"
                    className="hidden"
                    onChange={handleFile}
                  />
                  {!creative ? (
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="w-full flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed border-border/50 hover:border-primary/30 hover:bg-muted/20 transition-all"
                    >
                      <div className="p-2.5 rounded-full bg-muted/50">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Upload your own creative, or we'll pick a great one for you.
                      </p>
                    </button>
                  ) : (
                    <div className="relative rounded-xl border border-border/50 overflow-hidden">
                      <img src={creative.url} alt="Creative" className="w-full h-48 object-cover" />
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute top-2 right-2 h-8 w-8 p-0 rounded-full shadow"
                        onClick={() => setCreative(null)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="border-border/50">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Who should see your ad?</h2>
                    <p className="text-sm text-muted-foreground">A few simple filters — we handle the rest.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> Distance from your location
                  </Label>
                  <Slider value={radius} onValueChange={setRadius} min={1} max={50} step={1} />
                  <p className="text-xs text-muted-foreground">Within {radius[0]} km of your store</p>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" /> Business category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {category === "Other" && (
                    <Input
                      placeholder="Enter your category"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Gender</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["all", "female", "male"] as const).map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`py-2 rounded-xl text-sm font-medium border transition-colors capitalize ${
                          gender === g
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border/50 text-muted-foreground hover:bg-muted/30"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Age range</Label>
                  <Slider value={ageRange} onValueChange={setAgeRange} min={18} max={75} step={1} />
                  <p className="text-xs text-muted-foreground">
                    {ageRange[0]} – {ageRange[1]} years old
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="border-border/50">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                    <Gift className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Offer a bonus (optional)</h2>
                    <p className="text-sm text-muted-foreground">
                      A small reward for people who sign up — boosts conversions significantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl border border-border/50">
                  <div>
                    <p className="text-sm font-medium">Include a sign-up bonus</p>
                    <p className="text-xs text-muted-foreground">Shown to people who join from this ad.</p>
                  </div>
                  <Switch checked={bonusEnabled} onCheckedChange={setBonusEnabled} />
                </div>

                {bonusEnabled && (
                  <div className="space-y-2">
                    <Label>Bonus offer</Label>
                    <Input
                      value={bonus}
                      onChange={(e) => setBonus(e.target.value)}
                      placeholder="e.g. Free coffee, 10% off, welcome gift..."
                    />
                    <p className="text-xs text-muted-foreground">
                      Nothing happens until customers choose to join.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {step === 4 && !launched && (
            <div className="space-y-6">
              {/* Previews */}
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-lg font-semibold">Preview on Meta</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Facebook", icon: Facebook, color: "text-blue-600" },
                      { name: "Instagram", icon: Instagram, color: "text-pink-500" },
                    ].map(({ name, icon: Icon, color }) => (
                      <div key={name} className="rounded-xl border border-border/50 overflow-hidden">
                        <div className="flex items-center gap-2 p-3 border-b border-border/50">
                          <Icon className={`w-4 h-4 ${color}`} />
                          <span className="text-sm font-medium">{name}</span>
                          <Badge variant="secondary" className="ml-auto text-[10px]">Sponsored</Badge>
                        </div>
                        {creative ? (
                          <img src={creative.url} alt="" className="w-full h-40 object-cover" />
                        ) : (
                          <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                        <div className="p-3 space-y-2">
                          <p className="text-xs text-foreground whitespace-pre-wrap line-clamp-4">{generated}</p>
                          {bonusEnabled && bonus && (
                            <div className="text-[11px] font-medium text-primary bg-primary/5 rounded-md px-2 py-1 inline-block">
                              🎁 {bonus}
                            </div>
                          )}
                          <Button size="sm" className="w-full h-8 text-xs rounded-lg">Sign up</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Budget */}
              <Card className="border-border/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">Choose your budget</h2>
                      <p className="text-sm text-muted-foreground">
                        Purchase a budget to launch your campaign.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUDGETS.map((b) => {
                      const selected = budget === b.value;
                      return (
                        <button
                          key={b.value}
                          onClick={() => setBudget(b.value)}
                          className={`text-left p-4 rounded-xl border transition-all ${
                            selected
                              ? "border-primary bg-primary/5"
                              : "border-border/50 hover:border-primary/30 hover:bg-muted/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-lg font-bold">${b.value}</span>
                            {b.recommended && (
                              <Badge className="text-[10px]">Recommended</Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Est. reach: <span className="font-medium text-foreground">{b.reach}</span> people
                          </p>
                          <p className="text-xs text-muted-foreground">Runs for ~{b.days} days</p>
                        </button>
                      );
                    })}
                  </div>

                  <Button
                    className="w-full h-11 rounded-xl gap-2"
                    onClick={handleLaunch}
                    disabled={launching}
                  >
                    {launching ? (
                      <>Processing payment...</>
                    ) : (
                      <>
                        <CreditCard className="w-4 h-4" />
                        Purchase ${budget} & launch campaign
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {step === 4 && launched && (
            <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Your ad is live 🎉</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    We're running your campaign on Facebook and Instagram with a ${budget} budget.
                    You'll see new customers come in over the next few days.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-center">
                  <Button onClick={() => navigate("/")} className="rounded-xl">Back to dashboard</Button>
                  <Button variant="outline" onClick={() => navigate("/reports/customers")} className="rounded-xl">
                    View results
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Nav buttons */}
      {!launched && (
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="gap-2"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Back
          </Button>
          {step < 4 && (
            <Button
              onClick={() => setStep((s) => Math.min(4, s + 1))}
              disabled={!canNext}
              className="gap-2 rounded-xl"
            >
              Next <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      )}
    </InnerPageTemplate>
  );
}
