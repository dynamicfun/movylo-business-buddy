import { useState } from "react";
import { Search, QrCode, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CheckCouponModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CheckCouponModal({ open, onOpenChange }: CheckCouponModalProps) {
  const [couponCode, setCouponCode] = useState("");

  const handleCheck = () => {
    // TODO: Implement coupon check logic
    console.log("Checking coupon:", couponCode);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Check a coupon</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          {/* Input field */}
          <div className="space-y-2">
            <Label htmlFor="coupon-code">Enter the coupon code</Label>
            <div className="flex gap-2">
              <Input
                id="coupon-code"
                placeholder="e.g. AFGH65P9"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleCheck} className="gap-2">
                <Search className="w-4 h-4" />
                Check
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Scan option */}
          <Button variant="secondary" className="w-full gap-2 h-12 text-base font-medium border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary">
            <QrCode className="w-5 h-5" />
            Scan the coupon
          </Button>

          {/* Helper section */}
          <div className="rounded-lg bg-muted/50 p-4 space-y-1">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Use the Movylo app</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Check coupons directly from your phone with the Movylo app.
            </p>
            <a href="#" className="text-xs text-primary hover:underline">
              Get the app
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
