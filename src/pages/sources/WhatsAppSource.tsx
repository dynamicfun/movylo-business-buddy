import { useState } from "react";
import { MessageCircle, CheckCircle2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppSource = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { t } = useLanguage();

  return (
    <InnerPageTemplate
      title="WhatsApp"
      subtitle="Turn conversations into connected customers"
      helperText="Nothing happens until customers choose to join"
      introText="Connect WhatsApp to capture customers from your business conversations. Every chat becomes an opportunity to build your list."
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
              Your WhatsApp conversations are already happening. This turns those chats into lasting customer relationships, so you can stay connected long after the conversation ends.
            </p>
          </div>

          {/* What to expect */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              What to expect
            </h3>
            <ul className="space-y-2.5">
              {[
                "Customers can join your list directly from WhatsApp",
                "Send updates and promos to interested contacts",
                "Track who joined from WhatsApp conversations",
                "Works quietly in the background"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Action */}
        <div className="space-y-6">
          {!isConnected ? (
            <div className="bg-card rounded-xl border border-border/50 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Connect WhatsApp</h3>
                  <p className="text-xs text-muted-foreground">Link your WhatsApp Business account</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onClick={() => setIsConnected(true)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                This works quietly in the background
              </p>
            </div>
          ) : (
            <div className="bg-card rounded-xl border border-emerald-500/30 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">WhatsApp Connected</h3>
                  <p className="text-xs text-muted-foreground">Your account is linked and active</p>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-emerald-500 font-medium">Active</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Customers from WhatsApp</span>
                  <span className="font-semibold">—</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" onClick={() => setIsConnected(false)}>
                Disconnect
              </Button>
            </div>
          )}

          {/* Quick stats placeholder */}
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

export default WhatsAppSource;
