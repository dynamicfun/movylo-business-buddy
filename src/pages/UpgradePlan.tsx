import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Tag, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    customers: 500,
    highlighted: false,
    features: [
      "Email campaigns",
      "Basic loyalty program",
      "QR code sign-up",
      "1 user",
      "Standard support",
      "Monthly reports",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    price: 59,
    customers: 2000,
    highlighted: true,
    features: [
      "Everything in Starter",
      "SMS campaigns",
      "Autopilot mode",
      "Advanced loyalty & rewards",
      "3 users",
      "Priority support",
      "Weekly reports",
      "Social post creator",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 99,
    customers: 10000,
    highlighted: false,
    features: [
      "Everything in Growth",
      "Unlimited SMS",
      "AI Assistant",
      "Custom branding",
      "Unlimited users",
      "Dedicated account manager",
      "Real-time analytics",
      "API access",
      "White-label options",
    ],
  },
];

function PlanCard({
  plan,
  showPrices,
  onSelect,
}: {
  plan: (typeof plans)[0];
  showPrices: boolean;
  onSelect: () => void;
}) {
  const [open, setOpen] = useState(false);
  const visibleFeatures = plan.features.slice(0, 3);
  const hiddenFeatures = plan.features.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: plans.indexOf(plan) * 0.08 }}
      className="flex"
    >
      <Card
        className={`flex flex-col w-full ${
          plan.highlighted
            ? "border-primary shadow-lg ring-2 ring-primary/20"
            : ""
        }`}
      >
        {plan.highlighted && (
          <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1.5 rounded-t-lg -mt-px -mx-px">
            Most Popular
          </div>
        )}
        <CardHeader className="pb-2 text-center">
          <CardTitle className="text-lg">{plan.name}</CardTitle>
          {showPrices ? (
            <div className="mt-2">
              <span className="text-3xl font-bold text-foreground">
                €{plan.price}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground mt-2">
              Custom pricing
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-1">
            Up to{" "}
            <span className="font-semibold text-foreground">
              {plan.customers.toLocaleString()}
            </span>{" "}
            customers
          </p>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 pt-2">
          <Collapsible open={open} onOpenChange={setOpen}>
            <ul className="space-y-2 mb-4">
              {visibleFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            {hiddenFeatures.length > 0 && (
              <>
                <CollapsibleContent>
                  <ul className="space-y-2 mb-4">
                    {hiddenFeatures.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
                <CollapsibleTrigger asChild>
                  <button className="flex items-center gap-1 text-xs text-primary font-medium mb-4 hover:underline">
                    {open ? "Show less" : `+${hiddenFeatures.length} more features`}
                    {open ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </CollapsibleTrigger>
              </>
            )}
          </Collapsible>
          <div className="mt-auto">
            <Button
              className="w-full"
              variant={plan.highlighted ? "default" : "outline"}
              onClick={onSelect}
            >
              {showPrices ? "Choose Plan" : "Contact Us"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-6"
      >
        <Check className="w-10 h-10 text-primary mx-auto mb-2" />
        <p className="font-semibold text-foreground">Request sent!</p>
        <p className="text-sm text-muted-foreground">
          Our team will reach out to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="grid sm:grid-cols-2 gap-3"
    >
      <Input placeholder="Your name" required maxLength={100} />
      <Input placeholder="Email" type="email" required maxLength={255} />
      <Input placeholder="Phone (optional)" type="tel" maxLength={20} className="sm:col-span-2" />
      <textarea
        placeholder="Tell us about your business needs..."
        className="sm:col-span-2 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        maxLength={1000}
      />
      <Button type="submit" className="sm:col-span-2 gap-2">
        <Send className="w-4 h-4" />
        Send Request
      </Button>
    </form>
  );
}

function CouponInput() {
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  return (
    <div className="flex items-center gap-2 max-w-sm mx-auto">
      <div className="relative flex-1">
        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setApplied(false);
          }}
          className="pl-9"
          maxLength={30}
        />
      </div>
      <Button
        variant="outline"
        size="sm"
        disabled={!coupon.trim()}
        onClick={() => setApplied(true)}
      >
        Apply
      </Button>
      {applied && (
        <motion.span
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs text-primary font-medium whitespace-nowrap"
        >
          ✓ Applied
        </motion.span>
      )}
    </div>
  );
}

export default function UpgradePlan() {
  const { t } = useLanguage();
  const [showPrices, setShowPrices] = useState(true);

  return (
    <InnerPageTemplate
      title={t.upgradePlan}
      subtitle="Choose the plan that fits your business"
      backTo="/"
    >
      {/* Toggle: Pricing vs Contact */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <Label
          htmlFor="price-toggle"
          className={`text-sm cursor-pointer ${showPrices ? "text-foreground font-medium" : "text-muted-foreground"}`}
        >
          See prices
        </Label>
        <Switch
          id="price-toggle"
          checked={!showPrices}
          onCheckedChange={(checked) => setShowPrices(!checked)}
        />
        <Label
          htmlFor="price-toggle"
          className={`text-sm cursor-pointer ${!showPrices ? "text-foreground font-medium" : "text-muted-foreground"}`}
        >
          Contact us
        </Label>
      </div>

      {/* Plans Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            showPrices={showPrices}
            onSelect={() => {}}
          />
        ))}
      </div>

      {/* Contact Form (only in contact mode) */}
      {!showPrices && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Get in touch</CardTitle>
              <p className="text-sm text-muted-foreground">
                Fill out the form and we'll find the best plan for you.
              </p>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Coupon Input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Card>
          <CardContent className="py-4">
            <p className="text-sm text-center text-muted-foreground mb-3">
              Have a coupon code?
            </p>
            <CouponInput />
          </CardContent>
        </Card>
      </motion.div>
    </InnerPageTemplate>
  );
}
