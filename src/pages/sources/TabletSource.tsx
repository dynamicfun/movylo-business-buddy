import { useState } from "react";
import { Tablet, CheckCircle2, Users, Zap, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const TabletSource = () => {
  const [isSetup, setIsSetup] = useState(false);

  return (
    <InnerPageTemplate
      title="Tablet"
      subtitle="Let customers sign up right in your store"
      helperText="Nothing happens until customers choose to join"
      introText="Place a tablet at your counter or entrance and let customers sign up while they're with you. It's the easiest way to capture walk-in visitors."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Info */}
        <div className="space-y-6">
          {/* Why this matters */}
          <div className="bg-gradient-to-br from-primary/5 to-background rounded-xl p-5 border border-border/50">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Why this matters
            </h3>
            <p className="text-sm text-foreground leading-relaxed">
              Customers in your store are already interested in your business. A tablet makes it effortless for them to stay connected—no paper forms, no hassle, just a quick tap and they're on your list.
            </p>
          </div>

          {/* What to expect */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              What to expect
            </h3>
            <ul className="space-y-2.5">
              {[
                "Customers sign up in seconds",
                "Professional, branded sign-up screen",
                "Works offline—syncs when connected",
                "Perfect for counters, waiting areas, or events"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Where to place */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Where to place your tablet
            </h3>
            <ul className="space-y-2.5">
              {[
                "At the checkout counter",
                "Near the entrance or waiting area",
                "At trade shows or events",
                "In a dedicated kiosk stand"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Action */}
        <div className="space-y-6">
          {!isSetup ? (
            <div className="bg-card rounded-xl border border-border/50 p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <Tablet className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Set Up Tablet</h3>
                  <p className="text-xs text-muted-foreground">Get your sign-up kiosk ready</p>
                </div>
              </div>

              <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
                <h4 className="text-sm font-medium text-foreground">Quick setup steps:</h4>
                <ol className="space-y-2">
                  {[
                    "Download the Movylo app on your tablet",
                    "Log in with your account",
                    "Enable Kiosk Mode in settings",
                    "Place the tablet where customers can see it"
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col gap-2">
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download for iPad
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download for Android
                </Button>
              </div>
              
              <Button 
                variant="ghost" 
                className="w-full text-primary"
                onClick={() => setIsSetup(true)}
              >
                I've set up my tablet
              </Button>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-violet-500/30 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Tablet Active</h3>
                  <p className="text-xs text-muted-foreground">Capturing customers in-store</p>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-violet-500 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last sync</span>
                  <span className="font-medium">Just now</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Customers from tablet</span>
                  <span className="font-semibold">—</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open Kiosk Preview
              </Button>

              <Button variant="ghost" className="w-full text-muted-foreground" onClick={() => setIsSetup(false)}>
                Reset setup
              </Button>
            </div>
          )}

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/30 rounded-xl p-4 text-center">
              <Users className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">—</p>
              <p className="text-xs text-muted-foreground">Customers</p>
            </div>
            <div className="bg-secondary/30 rounded-xl p-4 text-center">
              <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <p className="text-lg font-bold text-foreground">—</p>
              <p className="text-xs text-muted-foreground">This month</p>
            </div>
          </div>
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default TabletSource;
