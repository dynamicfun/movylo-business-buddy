import { useState } from "react";
import { ArrowLeft, Link2, CheckCircle2, MessageCircle, Send, Copy, Check, Search, Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { toast } from "sonner";

const ShareLinkSource = () => {
  const [copied, setCopied] = useState(false);
  const businessLink = "https://movylo.com/your-business";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(businessLink);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const message = encodeURIComponent(`Join our business! ${businessLink}`);
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleShareTelegram = () => {
    const message = encodeURIComponent(`Join our business! ${businessLink}`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(businessLink)}&text=${message}`, "_blank");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Share a link</h1>
                <p className="text-sm text-muted-foreground">Turn messages and conversations into customers</p>
              </div>
            </div>

            {/* Intro text */}
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Share a simple link so people can join your business and stay in touch.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left column - Why this matters */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Why this matters</h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      Many customers connect with businesses through messages.
                      This link helps turn those conversations into customers you can stay connected with.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right column - Link and actions */}
              <div className="lg:col-span-2 space-y-4">
                {/* Your sign-up link */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Your sign-up link</h3>
                    
                    <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border mb-4">
                      <Link2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-sm text-foreground font-mono flex-1 truncate">{businessLink}</span>
                    </div>

                    {/* Share buttons - equal weight */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      <Button 
                        variant="outline" 
                        onClick={handleShareWhatsApp}
                        className="flex-1 min-w-[140px]"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Share on WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleShareTelegram}
                        className="flex-1 min-w-[140px]"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Share on Telegram
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={handleCopyLink}
                        className="flex-1 min-w-[140px]"
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

                    <p className="text-xs text-muted-foreground">
                      You can use this link in messages, emails, or anywhere you talk to customers.
                    </p>
                  </CardContent>
                </Card>

                {/* Helper text */}
                <p className="text-xs text-muted-foreground">
                  This works quietly in the background.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ShareLinkSource;
