import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Upload, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Instagram, 
  MapPin,
  Clock,
  Shield,
  ChevronDown,
  Plus,
  Trash2,
  Twitter
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const businessCategories = [
  "Restaurant",
  "Retail Store",
  "Salon & Spa",
  "Fitness & Gym",
  "Professional Services",
  "Healthcare",
  "Automotive",
  "Home Services",
  "Other"
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const MyProfile = () => {
  const [showAdvancedSocial, setShowAdvancedSocial] = useState(false);
  const [legalSectionOpen, setLegalSectionOpen] = useState(false);
  const [locations, setLocations] = useState([{ id: 1, address: "" }]);
  const [hours, setHours] = useState(
    days.map(day => ({ 
      day, 
      isOpen: day !== "Sunday", 
      openTime: "09:00", 
      closeTime: "18:00" 
    }))
  );

  const addLocation = () => {
    setLocations([...locations, { id: Date.now(), address: "" }]);
  };

  const removeLocation = (id: number) => {
    if (locations.length > 1) {
      setLocations(locations.filter(loc => loc.id !== id));
    }
  };

  const toggleDay = (index: number) => {
    const updated = [...hours];
    updated[index].isOpen = !updated[index].isOpen;
    setHours(updated);
  };

  return (
    <InnerPageTemplate
      title="My Business Profile"
      subtitle="Manage your business information"
      icon={Building2}
      whyDescription="Your business profile is the foundation of how customers perceive you. Complete and accurate information builds trust and makes it easier for customers to find and connect with you."
      whatToExpectItems={[
        "Fill in your basic business details and contact information",
        "Set your business hours so customers know when you're available",
        "Add your locations and social media links"
      ]}
      whatToDoDescription="Complete each section below. Don't worry — you can always come back and update your information later."
    >
      {/* SECTION 1 — Business Identity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Building2 className="h-5 w-5 text-primary" />
            Business Identity
          </CardTitle>
                  <CardDescription>Who you are</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business name</Label>
                    <Input id="businessName" placeholder="Your business name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border shadow-lg z-50">
                        {businessCategories.map((cat) => (
                          <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Business logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload logo
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    This information appears on your signup page and in customer messages.
                  </p>
                </CardContent>
              </Card>

              {/* SECTION 2 — About Your Business */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About your business</CardTitle>
                  <CardDescription>What customers should know</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="description">Short description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Tell customers what makes your business special..."
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* SECTION 3 — Contact & Online Presence */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Contact & Online Presence
                  </CardTitle>
                  <CardDescription>How customers reach you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="phone" placeholder="+1 (555) 000-0000" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="hello@business.com" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website (optional)</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="website" placeholder="https://yourbusiness.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-4">
                    <Label className="text-sm font-medium">Social links</Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="facebook" className="text-xs text-muted-foreground">Facebook</Label>
                        <div className="relative">
                          <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="facebook" placeholder="facebook.com/yourbusiness" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instagram" className="text-xs text-muted-foreground">Instagram</Label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="instagram" placeholder="@yourbusiness" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <Collapsible open={showAdvancedSocial} onOpenChange={setShowAdvancedSocial}>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <ChevronDown className={`h-4 w-4 mr-2 transition-transform ${showAdvancedSocial ? 'rotate-180' : ''}`} />
                          {showAdvancedSocial ? 'Hide' : 'Show more'}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="twitter" className="text-xs text-muted-foreground">X (Twitter)</Label>
                            <div className="relative">
                              <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input id="twitter" placeholder="@yourbusiness" className="pl-10" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telegram" className="text-xs text-muted-foreground">Telegram</Label>
                            <Input id="telegram" placeholder="t.me/yourbusiness" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
              </Card>

              {/* SECTION 4 — Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    Business Hours
                  </CardTitle>
                  <CardDescription>When customers can interact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hours.map((schedule, index) => (
                      <div key={schedule.day} className="flex items-center gap-4 py-2 border-b last:border-0">
                        <div className="w-24">
                          <span className={`text-sm ${!schedule.isOpen ? 'text-muted-foreground' : 'font-medium'}`}>
                            {schedule.day}
                          </span>
                        </div>
                        <Switch 
                          checked={schedule.isOpen} 
                          onCheckedChange={() => toggleDay(index)}
                        />
                        {schedule.isOpen ? (
                          <div className="flex items-center gap-2 flex-1">
                            <Input 
                              type="time" 
                              value={schedule.openTime}
                              onChange={(e) => {
                                const updated = [...hours];
                                updated[index].openTime = e.target.value;
                                setHours(updated);
                              }}
                              className="w-28"
                            />
                            <span className="text-muted-foreground">to</span>
                            <Input 
                              type="time" 
                              value={schedule.closeTime}
                              onChange={(e) => {
                                const updated = [...hours];
                                updated[index].closeTime = e.target.value;
                                setHours(updated);
                              }}
                              className="w-28"
                            />
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">Closed</span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SECTION 5 — Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Business Locations
                  </CardTitle>
                  <CardDescription>Where customers find you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={location.id} className="flex gap-2">
                      <div className="flex-1 space-y-2">
                        <Label className="text-xs text-muted-foreground">
                          Location {index + 1}
                        </Label>
                        <Input 
                          placeholder="Enter full address" 
                          value={location.address}
                          onChange={(e) => {
                            const updated = locations.map(loc => 
                              loc.id === location.id ? { ...loc, address: e.target.value } : loc
                            );
                            setLocations(updated);
                          }}
                        />
                      </div>
                      {locations.length > 1 && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="mt-6 text-muted-foreground hover:text-destructive"
                          onClick={() => removeLocation(location.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" size="sm" onClick={addLocation}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add location
                  </Button>
                </CardContent>
              </Card>

              {/* SECTION 6 — Legal & Privacy (Collapsed) */}
              <Collapsible open={legalSectionOpen} onOpenChange={setLegalSectionOpen}>
                <Card className="border-muted">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <CardTitle className="text-lg text-muted-foreground">Legal & Privacy</CardTitle>
                            <CardDescription>Required for compliance</CardDescription>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${legalSectionOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="space-y-4 border-t">
                      <div className="space-y-2">
                        <Label htmlFor="privacy">Privacy policy</Label>
                        <Textarea 
                          id="privacy" 
                          placeholder="Enter your privacy policy or paste a link..."
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="terms">Terms & conditions</Label>
                        <Textarea 
                          id="terms" 
                          placeholder="Enter your terms and conditions or paste a link..."
                          className="min-h-[100px] resize-none"
                        />
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
      </Collapsible>

      {/* SECTION 7 — Save */}
      <div className="flex justify-end pt-4 pb-8">
        <Button size="lg" className="px-8">
          Save changes
        </Button>
      </div>
    </InnerPageTemplate>
  );
};

export default MyProfile;
