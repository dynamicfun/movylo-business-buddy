import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Check, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";

const packages = [
  { id: "basic", sms: 100, price: 5, perSms: "0.050" },
  { id: "plus", sms: 300, price: 12, perSms: "0.040", popular: false },
  { id: "business", sms: 700, price: 25, perSms: "0.036", popular: true },
  { id: "premium", sms: 1500, price: 45, perSms: "0.030" },
  { id: "enterprise", sms: 5000, price: 120, perSms: "0.024" },
];

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
          onChange={(e) => { setCoupon(e.target.value); setApplied(false); }}
          className="pl-9"
          maxLength={30}
        />
      </div>
      <Button variant="outline" size="sm" disabled={!coupon.trim()} onClick={() => setApplied(true)}>
        Apply
      </Button>
      {applied && (
        <motion.span initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }} className="text-xs text-primary font-medium whitespace-nowrap">
          ✓ Applied
        </motion.span>
      )}
    </div>
  );
}

export default function TopUpSms() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <InnerPageTemplate
      title={t.topUpSms}
      subtitle="Purchase SMS credits to reach your customers"
      backTo="/"
    >
      {/* Current balance */}
      <Card className="mb-6">
        <CardContent className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current balance</p>
              <p className="text-xl font-bold text-foreground">42 SMS</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Packages grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Card
              className={`cursor-pointer transition-all hover:shadow-md ${
                selected === pkg.id
                  ? "border-primary ring-2 ring-primary/20"
                  : ""
              } ${pkg.popular ? "border-primary/50 shadow-md" : ""}`}
              onClick={() => setSelected(pkg.id)}
            >
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold text-center py-1 rounded-t-lg -mt-px -mx-px">
                  Best Value
                </div>
              )}
              <CardContent className="py-5 text-center space-y-3">
                <p className="text-3xl font-bold text-foreground">{pkg.sms.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">SMS credits</p>

                <div className="border-t pt-3">
                  <span className="text-2xl font-bold text-foreground">${pkg.price}</span>
                  <p className="text-xs text-muted-foreground mt-1">
                    ${pkg.perSms} per SMS
                  </p>
                </div>

                <Button
                  className="w-full mt-2"
                  variant={selected === pkg.id || pkg.popular ? "default" : "outline"}
                  onClick={(e) => { e.stopPropagation(); setSelected(pkg.id); }}
                >
                  {selected === pkg.id ? (
                    <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Selected</span>
                  ) : (
                    "Buy Now"
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Coupon */}
      <Card className="mb-6">
        <CardContent className="py-4">
          <p className="text-sm text-center text-muted-foreground mb-3">Have a coupon code?</p>
          <CouponInput />
        </CardContent>
      </Card>

      {/* Proceed CTA */}
      {selected && (
        <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <Button size="lg" className="px-10">
            Proceed to Payment — ${packages.find((p) => p.id === selected)?.price}
          </Button>
        </motion.div>
      )}
    </InnerPageTemplate>
  );
}
