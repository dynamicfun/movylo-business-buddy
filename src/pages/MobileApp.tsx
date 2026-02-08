import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, QrCode, Activity, Award, Zap, Store, Bell, Heart, CreditCard, Calendar, Share2, Gift, MessageSquare, Link2 } from "lucide-react";

export default function MobileApp() {
  return (
    <InnerPageTemplate title="Movylo Mobile App" subtitle="Stay connected on the go">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Movylo Mobile App
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A simple way to stay connected — even when you're away from your desk
          </p>
          <p className="text-sm text-muted-foreground italic">
            Optional. Movylo works even if you don't use the app.
          </p>
        </div>

        {/* For Business Owners Section */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Store className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">For business owners</h2>
            </div>
            <p className="text-lg font-medium text-foreground mb-6">
              Manage everyday moments, wherever you are
            </p>
            
            <p className="text-sm text-muted-foreground mb-4">Use the Movylo app to:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <QrCode className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Validate coupons customers bring to your store</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Activity className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">See customer activity as it happens</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Manage loyalty points and rewards</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Create a promotion when you need a quick boost</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Everything else keeps running in the background.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Download the app</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* For Customers Section */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-secondary/50 to-background">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">For your customers</h2>
            </div>
            <p className="text-lg font-medium text-foreground mb-6">
              An easy way for customers to stay connected with your business
            </p>
            
            <p className="text-sm text-muted-foreground mb-4">Customers can use the free Movylo app to:</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Store className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Follow your business</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Bell className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">See bonuses and updates over time</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Keep their loyalty card in one place</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-xl border border-border">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Buy or book with you (when available)</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              Nothing is sent unless customers choose to follow you.
            </p>
          </CardContent>
        </Card>

        {/* Inviting Customers Section */}
        <Card className="border border-border">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Inviting customers is optional
            </h2>
            <p className="text-muted-foreground mb-6">
              You can invite customers to follow your business in the app if you want.
            </p>
            
            <p className="text-sm font-medium text-foreground mb-4">Common ways:</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                <Share2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Share the app during checkout</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                <Gift className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Include it with a bonus</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl">
                <Link2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">Share it in a message or link</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              You can decide when — or if — to do this.
            </p>
          </CardContent>
        </Card>
      </div>
    </InnerPageTemplate>
  );
}
