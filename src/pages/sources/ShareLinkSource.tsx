import { useState } from "react";
import { Link2, CheckCircle2, MessageCircle, Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ShareLinkSource = () => {
  const [copied, setCopied] = useState(false);
  const businessLink = "https://movylo.com/your-business";
  const [suggestedMessage, setSuggestedMessage] = useState(
    `Hi 👋\nThis is the easiest way to stay in touch with us.\nYou'll only hear from us occasionally.`
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(businessLink);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const fullMessage = `${suggestedMessage}\n\n${businessLink}`;
    const encoded = encodeURIComponent(fullMessage);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  const handleShareTelegram = () => {
    const fullMessage = `${suggestedMessage}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(businessLink)}&text=${encodeURIComponent(fullMessage)}`, "_blank");
  };

  return (
    <InnerPageTemplate
      title="Share a link"
      subtitle="Turn messages and conversations into customers"
      introText="Share a simple link so people you talk to can join your business and stay in touch."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column - Info boxes */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many customers connect with businesses through messages. This link helps turn those conversations into customers you can stay connected with.
              </p>
            </CardContent>
          </Card>

          {/* What to expect */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">What to expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>People can join your business from the link</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Customers stay connected after the conversation ends</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Activity appears naturally over time</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Background reassurance */}
          <p className="text-xs text-muted-foreground px-1">
            This works quietly in the background.
          </p>
        </div>

        {/* Right column - Link and actions */}
        <div>
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Your sign-up link */}
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Your sign-up link</h3>
                
                <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border">
                  <Link2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground font-mono flex-1 truncate">{businessLink}</span>
                </div>
              </div>

              {/* Suggested message */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Suggested message
                  <span className="text-xs ml-1">(You can edit this before sharing)</span>
                </p>
                <Textarea
                  value={suggestedMessage}
                  onChange={(e) => setSuggestedMessage(e.target.value)}
                  className="min-h-[100px] text-sm resize-none"
                />
              </div>

              {/* Share buttons */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-3">
                  <Button 
                    onClick={handleShareWhatsApp}
                    className="flex-1 min-w-[140px] bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Share on WhatsApp
                  </Button>
                  <Button 
                    onClick={handleShareTelegram}
                    className="flex-1 min-w-[140px] bg-sky-500 hover:bg-sky-600 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Share on Telegram
                  </Button>
                </div>
                <Button 
                  variant="outline"
                  onClick={handleCopyLink}
                  className="w-full"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy link
                    </>
                  )}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                You can use this link in messages, emails, or anywhere you talk to customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default ShareLinkSource;
