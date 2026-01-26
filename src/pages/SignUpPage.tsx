import { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Copy,
  Download,
  Plus,
  X,
} from "lucide-react";

export default function SignUpPage() {
  const [pageTitle, setPageTitle] = useState("Sign up to receive our bonus!");
  const [buttonText, setButtonText] = useState("Sign up for special offers");
  const [hideImage, setHideImage] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState("");

  // Form fields configuration
  const [requiredFields, setRequiredFields] = useState({
    email: true,
    phone: true,
    firstName: true,
    lastName: true,
  });

  const [optionalFields, setOptionalFields] = useState({
    gender: false,
    dateOfBirth: false,
    requestDiscount: false,
  });

  const signUpUrl = "https://bella-capri-restaurant-limited.movylo.com/signup";

  const copyLink = () => {
    navigator.clipboard.writeText(signUpUrl);
  };

  const addInterest = () => {
    if (newInterest.trim() && !interests.includes(newInterest.trim())) {
      setInterests([...interests, newInterest.trim()]);
      setNewInterest("");
    }
  };

  const removeInterest = (interest: string) => {
    setInterests(interests.filter((i) => i !== interest));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header - consistent with other pages */}
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Sign-up Page</h1>
                <p className="text-sm text-muted-foreground">Help customers sign up easily</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-2">
              This page is where customers join your business.<br />
              You can customize what they see and choose what information to collect.
            </p>
            <p className="text-sm text-muted-foreground mb-6 italic">
              Keep it simple — you can always add more later.
            </p>

            <div className="space-y-6">
              {/* Your sign-up page Section */}
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Your sign-up page</h2>
                  
                  <div className="space-y-3">
                    <Label className="text-sm text-muted-foreground">Link to your sign-up page</Label>
                    <Input
                      value={signUpUrl}
                      readOnly
                      className="bg-muted/50"
                    />
                    
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" onClick={copyLink} className="gap-2">
                        <Copy className="h-4 w-4" />
                        Copy link
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download QR code
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      (Share this link or QR code to let customers sign up.)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 1 - Page appearance */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary font-medium flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
                    Page appearance
                  </h3>

                  <div className="space-y-6">
                    {/* Page header subsection */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-foreground">Page header</h4>
                      
                      {/* Top image */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Top image</Label>
                        <div className="flex flex-wrap items-center gap-3">
                          <Button variant="outline" size="sm">
                            Upload an image
                          </Button>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="hideImage"
                              checked={hideImage}
                              onCheckedChange={(checked) => setHideImage(checked as boolean)}
                            />
                            <Label htmlFor="hideImage" className="text-sm">Hide image</Label>
                          </div>
                        </div>
                      </div>

                      {/* Page title */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Page title</Label>
                        <p className="text-xs text-muted-foreground">Default: Sign up to receive our bonus!</p>
                        <div className="flex flex-wrap gap-2">
                          <Input
                            value={pageTitle}
                            onChange={(e) => setPageTitle(e.target.value)}
                            className="flex-1 min-w-[200px]"
                          />
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setPageTitle("Sign up to receive our bonus!")}
                          >
                            Restore default
                          </Button>
                        </div>
                      </div>

                      {/* Button text */}
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Button text</Label>
                        <p className="text-xs text-muted-foreground">Default: Sign up for special offers</p>
                        <div className="flex flex-wrap gap-2">
                          <Input
                            value={buttonText}
                            onChange={(e) => setButtonText(e.target.value)}
                            className="flex-1 min-w-[200px]"
                          />
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => setButtonText("Sign up for special offers")}
                          >
                            Restore default
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 - Information to collect */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary font-medium flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
                    Information to collect
                  </h3>

                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Choose what customers must fill in when they sign up.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Required Fields */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">Required fields</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="email"
                              checked={requiredFields.email}
                              onCheckedChange={(checked) =>
                                setRequiredFields({ ...requiredFields, email: checked as boolean })
                              }
                            />
                            <Label htmlFor="email" className="text-sm">Email</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="phone"
                              checked={requiredFields.phone}
                              onCheckedChange={(checked) =>
                                setRequiredFields({ ...requiredFields, phone: checked as boolean })
                              }
                            />
                            <Label htmlFor="phone" className="text-sm">Phone</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="firstName"
                              checked={requiredFields.firstName}
                              onCheckedChange={(checked) =>
                                setRequiredFields({ ...requiredFields, firstName: checked as boolean })
                              }
                            />
                            <Label htmlFor="firstName" className="text-sm">First name</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="lastName"
                              checked={requiredFields.lastName}
                              onCheckedChange={(checked) =>
                                setRequiredFields({ ...requiredFields, lastName: checked as boolean })
                              }
                            />
                            <Label htmlFor="lastName" className="text-sm">Last name</Label>
                          </div>
                        </div>
                      </div>

                      {/* Optional Fields */}
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground">Optional fields</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="gender"
                              checked={optionalFields.gender}
                              onCheckedChange={(checked) =>
                                setOptionalFields({ ...optionalFields, gender: checked as boolean })
                              }
                            />
                            <Label htmlFor="gender" className="text-sm">Gender</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="dateOfBirth"
                              checked={optionalFields.dateOfBirth}
                              onCheckedChange={(checked) =>
                                setOptionalFields({ ...optionalFields, dateOfBirth: checked as boolean })
                              }
                            />
                            <Label htmlFor="dateOfBirth" className="text-sm">Date of birth</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="requestDiscount"
                              checked={optionalFields.requestDiscount}
                              onCheckedChange={(checked) =>
                                setOptionalFields({ ...optionalFields, requestDiscount: checked as boolean })
                              }
                            />
                            <Label htmlFor="requestDiscount" className="text-sm">Request a discount</Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground italic">
                      (Tip: fewer fields = more sign-ups.)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 - Custom Questions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary font-medium flex items-center gap-2 mb-4">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
                    Ask custom questions (optional)
                  </h3>

                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      Use custom questions to better understand your customers and send more relevant offers.
                    </p>

                    {/* Single-choice question */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Single-choice question</h4>
                      <p className="text-sm text-muted-foreground">
                        Use this when customers should pick one option.
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-medium">Examples</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>Hair color (Brunette, Blonde, Red)</li>
                          <li>Pet type (Dog, Cat, Other)</li>
                          <li>Car type</li>
                        </ul>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add question
                      </Button>
                    </div>

                    {/* Multiple-choice question */}
                    <div className="space-y-3 border-t pt-6">
                      <h4 className="font-medium text-foreground">Multiple-choice question (interests)</h4>
                      <p className="text-sm text-muted-foreground">
                        Let customers select one or more interests.
                      </p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p className="font-medium">Examples</p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                          <li>Lunch</li>
                          <li>Dinner</li>
                          <li>Events</li>
                          <li>Promotions</li>
                        </ul>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        These interests help you target messages later.
                      </p>

                      <div className="space-y-3 pt-2">
                        <Label className="text-sm">Enter an interest</Label>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Enter an interest..."
                            value={newInterest}
                            onChange={(e) => setNewInterest(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && addInterest()}
                            className="max-w-xs"
                          />
                          <Button variant="outline" size="sm" onClick={addInterest}>
                            Add
                          </Button>
                        </div>

                        {interests.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {interests.map((interest) => (
                              <span
                                key={interest}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                              >
                                {interest}
                                <button
                                  onClick={() => removeInterest(interest)}
                                  className="hover:text-destructive"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end pt-4 pb-8">
                <Button size="lg" className="px-8">
                  Save
                </Button>
              </div>

              {/* Footer reassurance */}
              <div className="text-sm text-muted-foreground text-center pb-4">
                <p>You can change this page anytime.</p>
                <p>Your customers will always see the latest version.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
