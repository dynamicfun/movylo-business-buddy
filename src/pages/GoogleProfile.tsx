import { useState } from "react";
import { ArrowLeft, MapPin, Phone, Clock, Star, Users, Search, Link2, CheckCircle2, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock Google Business profiles for selection
const mockGoogleProfiles = [
  { id: "1", name: "Mario's Pizza - Downtown", address: "123 Main St, New York, NY" },
  { id: "2", name: "Mario's Pizza - Brooklyn", address: "456 Ocean Ave, Brooklyn, NY" },
  { id: "3", name: "Mario's Catering", address: "789 Park Blvd, Queens, NY" },
];

const GoogleProfile = () => {
  const [selectedProfile, setSelectedProfile] = useState<typeof mockGoogleProfiles[0] | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if (selectedProfile) {
      setIsConnected(true);
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">My Google Profile</h1>
                <p className="text-sm text-muted-foreground">Connect your Google Business Profile to Movylo</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Hero Card - Connect Google Profile */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-lg font-semibold mb-1">Connect Google Profile</h2>
                      <p className="text-sm text-muted-foreground">
                        Link your Google Business Profile to sync information and reach more customers.
                      </p>
                    </div>
                  </div>

                  {!isConnected ? (
                    <div className="space-y-4">
                      {/* Dropdown to select Google page */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Select your Google Business Profile</label>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                              {selectedProfile ? (
                                <span className="truncate">{selectedProfile.name}</span>
                              ) : (
                                <span className="text-muted-foreground">Choose a profile...</span>
                              )}
                              <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] bg-background border shadow-lg z-50">
                            {mockGoogleProfiles.map((profile) => (
                              <DropdownMenuItem
                                key={profile.id}
                                onClick={() => setSelectedProfile(profile)}
                                className="flex flex-col items-start py-3 cursor-pointer"
                              >
                                <span className="font-medium">{profile.name}</span>
                                <span className="text-xs text-muted-foreground">{profile.address}</span>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {/* Connect Button */}
                      <Button 
                        onClick={handleConnect} 
                        disabled={!selectedProfile}
                        className="w-full"
                      >
                        <Link2 className="h-4 w-4 mr-2" />
                        Connect Google Profile
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-green-700">Connected</p>
                          <p className="text-sm text-muted-foreground">{selectedProfile?.name}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://business.google.com" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on Google
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Two column grid for info cards */}
              <div className="grid md:grid-cols-2 gap-4">
                {/* Why Google Profile Matters */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Search className="h-4 w-4 text-primary" />
                      Why Google Profile Matters
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span>Appear in local searches when customers look for businesses like yours</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Star className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span>Showcase reviews and build trust with new customers</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <Users className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span>Let customers find your hours, location, and contact info instantly</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* What Connecting Does */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Link2 className="h-4 w-4 text-primary" />
                      What connecting does
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Sync your business details</span>
                          <p className="text-muted-foreground text-xs mt-0.5">Name, address, phone, and hours stay consistent</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Post updates to Google</span>
                          <p className="text-muted-foreground text-xs mt-0.5">Share offers and news directly to your Google Profile</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Turn Google searches into customers</span>
                          <p className="text-muted-foreground text-xs mt-0.5">Track profile performance and see how customers find you</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Stats callout */}
              <Card className="bg-muted/30">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Did you know?</p>
                      <p className="text-sm text-muted-foreground">
                        Businesses with complete Google profiles get 7x more clicks than those without. 
                        Customers are 70% more likely to visit businesses with photos and updated information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default GoogleProfile;
