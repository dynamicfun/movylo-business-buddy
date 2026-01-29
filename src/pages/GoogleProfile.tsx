import { useState } from "react";
import { MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock Google Business profiles for selection
const mockGoogleProfiles = [
  { id: "1", name: "Mario's Pizza - Downtown", address: "123 Main St, New York, NY" },
  { id: "2", name: "Mario's Pizza - Brooklyn", address: "456 Ocean Ave, Brooklyn, NY" },
  { id: "3", name: "Mario's Catering", address: "789 Park Blvd, Queens, NY" },
];

const GoogleProfile = () => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const selectedProfile = mockGoogleProfiles.find(p => p.id === selectedProfileId);

  const handleConnectGoogle = () => {
    setIsConnecting(true);
  };

  const handleConnectProfile = () => {
    if (selectedProfile) {
      setIsConnected(true);
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setIsConnecting(false);
    setSelectedProfileId("");
  };

  return (
    <InnerPageTemplate
      title="Google"
      subtitle="Turn people who find you on Google into customers"
      introText="Connect your Google Business Profile so people can join your business and stay in touch."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column - Info boxes */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many people discover local businesses on Google. This helps turn those searches into customers you can stay connected with.
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
                  <span>People who find you on Google can join your business</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Customers stay connected after they leave Google</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Activity appears naturally over time</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right column - CTA */}
        <div>
          {/* Connect Google section */}
          {!isConnected && !isConnecting && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Connect Google</h3>
                
                <Button onClick={handleConnectGoogle} className="mb-3">
                  <MapPin className="h-4 w-4 mr-2" />
                  Connect Google
                </Button>

                <p className="text-sm text-muted-foreground">
                  You can change or disconnect this anytime.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Profile selection */}
          {isConnecting && !isConnected && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Select Profile</h3>
                
                <p className="text-sm text-muted-foreground mb-3">Choose the profile you want to connect.</p>
                
                <Select value={selectedProfileId} onValueChange={setSelectedProfileId}>
                  <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="Select a profile" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockGoogleProfiles.map((profile) => (
                      <SelectItem key={profile.id} value={profile.id}>
                        <div className="flex flex-col items-start">
                          <span className="font-medium">{profile.name}</span>
                          <span className="text-xs text-muted-foreground">{profile.address}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  onClick={handleConnectProfile} 
                  disabled={!selectedProfileId}
                  className="mb-3"
                >
                  Connect profile
                </Button>

                <p className="text-sm text-muted-foreground">
                  If you manage more than one profile, you can choose.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Connected Google Profile */}
          {isConnected && selectedProfile && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-4">Connected Google Profile</h3>
                
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">Google Business Profile</p>
                    <p className="font-semibold text-foreground">{selectedProfile.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedProfile.address}</p>
                    
                    <a 
                      href="https://business.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                    >
                      View on Google
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  This works quietly in the background.
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleDisconnect}
                  className="text-muted-foreground hover:text-destructive mt-2"
                >
                  Disconnect
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default GoogleProfile;
