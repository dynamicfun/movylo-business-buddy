import { useState } from "react";
import { MessageCircle, CheckCircle2, Link2, Users, Radio, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const WhatsAppSource = () => {
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnect = () => {
    setIsConnected(true);
    toast.success("WhatsApp connected successfully!");
  };

  return (
    <InnerPageTemplate
      title="WhatsApp"
      subtitle="Turn WhatsApp conversations into customers"
      helperText="Nothing is sent unless you choose to send it."
      introText="If you already talk to customers on WhatsApp, you can use those conversations to help them join your business and stay in touch. Customers always choose whether to join."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Info */}
        <div className="space-y-4">
          {/* Why this matters */}
          <div className="bg-gradient-to-br from-primary/5 to-background rounded-xl p-5 border border-border/50">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Why this matters
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many customers already talk to businesses on WhatsApp. Connecting your account helps turn those conversations into customers you can stay connected with — naturally and without pressure.
            </p>
          </div>

          {/* What to expect */}
          <div className="bg-gradient-to-br from-primary/5 to-background rounded-xl p-5 border border-border/50">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              What to expect
            </h3>
            <ul className="space-y-2.5">
              {[
                "Customers can join your business from WhatsApp",
                "Conversations stay personal and familiar",
                "You decide when messages are sent",
                "You can disconnect WhatsApp anytime"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Options */}
        <div className="space-y-4">
          {/* Option 1 - Connect WhatsApp */}
          <div className="bg-card rounded-xl border border-border/50 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">Recommended</span>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-1">Connect your WhatsApp account</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connecting WhatsApp lets Movylo work with your conversations securely and prepares your account for future features.
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              This does not send any messages.
            </p>
          </div>

          {!isConnected ? (
            <>
              <Button 
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onClick={handleConnect}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect WhatsApp
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                You stay in control. Messages are only sent when you choose.
              </p>
            </>
          ) : (
            <div className="space-y-3">
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp Connected</p>
                  <p className="text-xs text-muted-foreground">Your account is linked and ready</p>
                </div>
              </div>
              <Button variant="outline" className="w-full" onClick={() => setIsConnected(false)}>
                Disconnect
              </Button>
            </div>
          )}
        </div>

        {/* Option 2 - Invite during conversations */}
        <div className="bg-card rounded-xl border border-border/50 p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Invite customers while chatting</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When you talk to customers on WhatsApp, you can easily share your sign-up link so they can join your business.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">This works well:</p>
            <ul className="space-y-1.5">
              {["after a job", "after a booking", "after a question is answered"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary/50 rounded-lg p-3">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <Link2 className="w-3.5 h-3.5" />
              Your sign-up link is available in <button onClick={() => navigate('/sources/share-link')} className="text-primary hover:underline font-medium">Share a link</button>.
            </p>
          </div>
        </div>

        {/* Option 3 - Reach more people */}
        <div className="bg-card rounded-xl border border-border/50 p-5 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded">Optional</span>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-1">Reach more customers with WhatsApp</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you want to invite more people at once, you can use WhatsApp's built-in tools:
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Choose how you want to reach people</p>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                <Radio className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Channel</p>
                  <p className="text-xs text-muted-foreground">share updates publicly with followers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                <Users className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Broadcast list</p>
                  <p className="text-xs text-muted-foreground">send a message to selected contacts</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Movylo helps you include an invite to join your business.<br />
            You decide what to send and when.
          </p>
        </div>

        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default WhatsAppSource;
