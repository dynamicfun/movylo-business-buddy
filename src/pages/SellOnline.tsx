import { useState } from "react";
import { Store, Truck, CreditCard, CheckCircle2 } from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SellOnline() {
  const [payInStoreEnabled, setPayInStoreEnabled] = useState(true);
  const [payOnDeliveryEnabled, setPayOnDeliveryEnabled] = useState(true);
  const [paypalAccount, setPaypalAccount] = useState("info@dynamicfun.com");
  const [currency, setCurrency] = useState("usd");

  return (
    <InnerPageTemplate
      title="Sell Online"
      subtitle="Choose how customers order and pay"
      helperText="Optional. You can change this anytime."
      introText="When customers come back to your business, this is how they can order or pay — whether you sell products, food, services, or offers. You don't need an online store to get started."
      icon={Store}
      backTo="/"
    >
      <div className="space-y-6">
        {/* Option 1 - Pay in Store */}
        <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 mt-0.5">
                  <Store className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pay in store</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Customers place an order or receive an offer, then pay when they visit you.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Works well for: Shops · Cafés · Restaurants · In-store services
                  </p>
                </div>
              </div>
              <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                Recommended
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex items-center gap-2">
                <Switch
                  id="pay-in-store"
                  checked={payInStoreEnabled}
                  onCheckedChange={setPayInStoreEnabled}
                />
                <Label htmlFor="pay-in-store" className="text-sm font-medium">
                  Get paid in store
                </Label>
              </div>
              {payInStoreEnabled && (
                <span className="text-xs text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Enabled
                </span>
              )}
            </div>

            {payInStoreEnabled && (
              <p className="text-xs text-muted-foreground mt-3">
                Customers show their order or offer when they arrive.
              </p>
            )}
          </CardContent>
        </Card>

        {/* Option 2 - Pay on Delivery */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-500/10 mt-0.5">
                <Truck className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Pay on delivery</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Customers place an order or request a service, then pay when it's delivered or completed.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  Works well for: Restaurants · Take-away · Delivery · On-site services
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/40">
              <div className="flex items-center gap-2">
                <Switch
                  id="pay-on-delivery"
                  checked={payOnDeliveryEnabled}
                  onCheckedChange={setPayOnDeliveryEnabled}
                />
                <Label htmlFor="pay-on-delivery" className="text-sm font-medium">
                  Get paid on delivery
                </Label>
              </div>
              {payOnDeliveryEnabled && (
                <span className="text-xs text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Enabled
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Option 3 - Pay Online */}
        <Card className="border-border/30">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-violet-500/10 mt-0.5">
                  <CreditCard className="h-5 w-5 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Pay online</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Customers pay online when they buy a product, place an order, or book a service.
                    This can help save time and reduce no-shows.
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full whitespace-nowrap">
                Optional
              </span>
            </div>

            {/* Credit Card Section */}
            <div className="space-y-4 pt-4 border-t border-border/40">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">Credit card</h4>
                <p className="text-sm text-muted-foreground">
                  Accept credit card payments
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Connect the bank account where you want to receive payments.
                </p>
                <Button variant="outline" className="mt-2">
                  Connect bank account
                </Button>
              </div>

              {/* PayPal Section */}
              <div className="space-y-3 pt-4 border-t border-border/40">
                <h4 className="text-sm font-medium text-foreground">PayPal</h4>
                <p className="text-sm text-muted-foreground">
                  Accept payments with PayPal
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Enter the PayPal account where payments should be sent.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="paypal-account" className="text-xs text-muted-foreground">
                    PayPal account
                  </Label>
                  <Input
                    id="paypal-account"
                    type="email"
                    value={paypalAccount}
                    onChange={(e) => setPaypalAccount(e.target.value)}
                    placeholder="info@dynamicfun.com"
                    className="max-w-sm"
                  />
                </div>
              </div>

              {/* Currency Section */}
              <div className="space-y-3 pt-4 border-t border-border/40">
                <h4 className="text-sm font-medium text-foreground">Currency</h4>
                <p className="text-xs text-muted-foreground/70">
                  This is the currency customers will pay in.
                </p>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="max-w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">U.S. Dollar</SelectItem>
                    <SelectItem value="eur">Euro</SelectItem>
                    <SelectItem value="gbp">British Pound</SelectItem>
                    <SelectItem value="cad">Canadian Dollar</SelectItem>
                    <SelectItem value="aud">Australian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reassurance Footer */}
        <Card className="bg-muted/30 border-border/30">
          <CardContent className="p-5">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Customers always see how they will pay</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>You can sell products, take food orders, or accept payments without an online shop</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>You can change or turn off any payment option anytime</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </InnerPageTemplate>
  );
}
