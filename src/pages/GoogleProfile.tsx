import { ArrowLeft, MapPin, Phone, Clock, Star, Users, Search, Link2, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const GoogleProfile = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-6 md:p-8 overflow-auto">
          {/* Back navigation */}
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Hero Box - Connect Google Profile */}
          <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">My Google Profile</h1>
                  <p className="text-muted-foreground">
                    Connect your Google Business Profile to Movylo and keep your business information synced across platforms.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="gap-2">
                  <Link2 className="h-4 w-4" />
                  Connect Google Profile
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View on Google
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Why Google Profile Matters */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Why your Google Profile matters</h2>
                <p className="text-muted-foreground mb-4">
                  For local businesses, Google is often the first place customers look. Your Google Business Profile helps people find you, contact you, and trust you.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                      <Search className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Get found in local searches</p>
                      <p className="text-xs text-muted-foreground">Appear when customers search for businesses like yours nearby</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Make it easy to contact you</p>
                      <p className="text-xs text-muted-foreground">Customers can call, get directions, or visit your website in one tap</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                      <Star className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Build trust with reviews</p>
                      <p className="text-xs text-muted-foreground">Positive reviews help new customers choose your business</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-primary/10 mt-0.5">
                      <Clock className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">Show accurate hours</p>
                      <p className="text-xs text-muted-foreground">Customers know exactly when you're open</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* What Connecting Does */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">What connecting does</h2>
                <p className="text-muted-foreground mb-4">
                  When you connect your Google Profile to Movylo, your business information stays aligned across both platforms.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Sync your business details</p>
                      <p className="text-xs text-muted-foreground">Name, address, phone, and hours stay consistent</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Import your reviews</p>
                      <p className="text-xs text-muted-foreground">See and respond to Google reviews from Movylo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Post updates to Google</p>
                      <p className="text-xs text-muted-foreground">Share offers and news directly to your Google Profile</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Track profile performance</p>
                      <p className="text-xs text-muted-foreground">See how customers find and interact with your listing</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Stats callout */}
          <Card className="mt-6 bg-muted/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Did you know?</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Businesses with complete Google profiles are <span className="font-medium text-foreground">2.7x more likely</span> to be considered reputable by customers. They also get <span className="font-medium text-foreground">70% more visits</span> than businesses with incomplete information.
              </p>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default GoogleProfile;
