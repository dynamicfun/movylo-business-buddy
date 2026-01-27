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
      whyDescription="This helps customers recognize your business and trust what they see. Clear information makes it easier for them to connect with you."
      whatToExpectItems={[
        "Add basic information customers will see",
        "Choose how customers can reach you",
        "Keep details up to date over time"
      ]}
      whatToDoDescription="Fill in what you can below. You can always come back and update this later."
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
                      <div className="flex gap-2">
                        <Select defaultValue="+1">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="+1" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border shadow-lg z-50">
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+39">+39</SelectItem>
                            <SelectItem value="+34">+34</SelectItem>
                            <SelectItem value="+33">+33</SelectItem>
                            <SelectItem value="+49">+49</SelectItem>
                            <SelectItem value="+81">+81</SelectItem>
                            <SelectItem value="+86">+86</SelectItem>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+55">+55</SelectItem>
                            <SelectItem value="+52">+52</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" placeholder="(555) 000-0000" className="pl-10" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <div className="flex gap-2">
                        <Select defaultValue="+1">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="+1" />
                          </SelectTrigger>
                          <SelectContent className="bg-background border shadow-lg z-50">
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+39">+39</SelectItem>
                            <SelectItem value="+34">+34</SelectItem>
                            <SelectItem value="+33">+33</SelectItem>
                            <SelectItem value="+49">+49</SelectItem>
                            <SelectItem value="+81">+81</SelectItem>
                            <SelectItem value="+86">+86</SelectItem>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+55">+55</SelectItem>
                            <SelectItem value="+52">+52</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          <Input id="whatsapp" placeholder="(555) 000-0000" className="pl-10" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="email" type="email" placeholder="hello@business.com" className="pl-10" />
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
