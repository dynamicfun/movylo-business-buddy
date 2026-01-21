import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  HelpCircle,
  Plus,
  X,
} from "lucide-react";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState("Sign up to receive our bonus!");
  const [menuLink, setMenuLink] = useState("Sign up for special offers");
  const [hideImage, setHideImage] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);
  const [newInterest, setNewInterest] = useState("");

  // Form fields configuration
  const [mandatoryFields, setMandatoryFields] = useState({
    email: true,
    phone: true,
    firstName: true,
    lastName: true,
  });

  const [optionalFields, setOptionalFields] = useState({
    gender: true,
    dateOfBirth: true,
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
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-5xl mx-auto">
            {/* Header with back navigation */}
            <motion.header
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2 mb-4 -ml-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <h1 className="text-xl font-bold text-foreground">Sign up page</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Use this section to customize the information that you ask your customers for on your sign-up page. 
                You can also add custom fields related to your business, such as "hair color" (for a salon), 
                "pet type" (for a pet store), "car type" (for a repair shop), "vegetarian" (for a restaurant), etc.
                <br />
                Custom fields will generate custom filters, enabling you to more accurately target customers from{" "}
                <a href="/customers/list" className="text-primary hover:underline">
                  Manage Customers
                </a>
                .
              </p>
            </motion.header>

            {/* Main content card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl border p-6 md:p-8 space-y-8"
            >
              {/* Page Info Section */}
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground">Page info</h2>
                
                <div className="space-y-2">
                  <Label className="text-sm text-muted-foreground">Your sign-up page:</Label>
                  <div className="flex gap-2">
                    <Input
                      value={signUpUrl}
                      readOnly
                      className="flex-1 bg-muted/50"
                    />
                    <Button variant="outline" onClick={copyLink} className="gap-2">
                      <Copy className="h-4 w-4" />
                      Copy link
                    </Button>
                  </div>
                  <a href="#" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Click here to download the QR code
                  </a>
                </div>
              </section>

              {/* Section 1 - Title and Menu Link */}
              <section className="space-y-4">
                <h3 className="text-primary font-medium flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
                  Change the title and the menu link
                </h3>

                <div className="space-y-4 pl-8">
                  <p className="text-sm text-muted-foreground">
                    Customize the image at the top of the page
                  </p>

                  <div className="flex items-center gap-4">
                    <Label className="text-sm">Customize the image</Label>
                    <Button variant="outline" size="sm">
                      Choose file image
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="hideImage"
                      checked={hideImage}
                      onCheckedChange={(checked) => setHideImage(checked as boolean)}
                    />
                    <Label htmlFor="hideImage" className="text-sm">Hide the image</Label>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Change the page title</Label>
                    <div className="flex gap-2">
                      <Input
                        value={pageTitle}
                        onChange={(e) => setPageTitle(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm" onClick={() => setPageTitle("Sign up to receive our bonus!")}>
                        Restore default
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">Change the menu link</Label>
                    <div className="flex gap-2">
                      <Input
                        value={menuLink}
                        onChange={(e) => setMenuLink(e.target.value)}
                        className="flex-1"
                      />
                      <Button variant="outline" size="sm" onClick={() => setMenuLink("Sign up for special offers")}>
                        Restore default
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 - Form Fields */}
              <section className="space-y-4">
                <h3 className="text-primary font-medium flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
                  Select what to show on the sign-up page.
                </h3>

                <div className="pl-8 grid md:grid-cols-2 gap-6">
                  {/* Mandatory Fields */}
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <h4 className="font-medium text-foreground mb-4">Mandatory fields</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="email"
                          checked={mandatoryFields.email}
                          onCheckedChange={(checked) =>
                            setMandatoryFields({ ...mandatoryFields, email: checked as boolean })
                          }
                        />
                        <Label htmlFor="email" className="text-sm">E-mail</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="phone"
                          checked={mandatoryFields.phone}
                          onCheckedChange={(checked) =>
                            setMandatoryFields({ ...mandatoryFields, phone: checked as boolean })
                          }
                        />
                        <Label htmlFor="phone" className="text-sm">Phone</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="firstName"
                          checked={mandatoryFields.firstName}
                          onCheckedChange={(checked) =>
                            setMandatoryFields({ ...mandatoryFields, firstName: checked as boolean })
                          }
                        />
                        <Label htmlFor="firstName" className="text-sm">First Name</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="lastName"
                          checked={mandatoryFields.lastName}
                          onCheckedChange={(checked) =>
                            setMandatoryFields({ ...mandatoryFields, lastName: checked as boolean })
                          }
                        />
                        <Label htmlFor="lastName" className="text-sm">Last Name</Label>
                      </div>
                    </div>
                  </div>

                  {/* Optional Fields */}
                  <div className="bg-muted/30 rounded-lg p-4 border">
                    <h4 className="font-medium text-foreground mb-4">Optional fields</h4>
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
                        <Label htmlFor="dateOfBirth" className="text-sm flex items-center gap-1">
                          Date of birth
                          <HelpCircle className="h-3 w-3 text-muted-foreground" />
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="requestDiscount"
                          checked={optionalFields.requestDiscount}
                          onCheckedChange={(checked) =>
                            setOptionalFields({ ...optionalFields, requestDiscount: checked as boolean })
                          }
                        />
                        <Label htmlFor="requestDiscount" className="text-sm">Request discount</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 - Custom Questions */}
              <section className="space-y-4">
                <h3 className="text-primary font-medium flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
                  Customize your sign-up page.
                </h3>

                <div className="pl-8 space-y-6">
                  {/* Simple answer question */}
                  <div className="space-y-2">
                    <Label className="font-medium flex items-center gap-1">
                      Simple answer question.
                      <HelpCircle className="h-3 w-3 text-muted-foreground" />
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Use this if you want your customers to select only 1 of the available options 
                      (e.g. what's the color of your hair? Brunette, Blonde, Red).
                    </p>
                    <Button variant="default" size="sm" className="gap-2">
                      <Plus className="h-4 w-4" />
                      Add
                    </Button>
                  </div>

                  {/* Multiple answer questions */}
                  <div className="space-y-2">
                    <Label className="font-medium flex items-center gap-1">
                      Multiple answer questions
                      <HelpCircle className="h-3 w-3 text-muted-foreground" />
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Create a list of interests (tags) that are relevant to your business. 
                      Customers will be able to select them (one or more) and if they do so, 
                      you'll then be able to reach and to send them specific promotions, based on their interests.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Use this if you want your customers to select more than one option available to the question 
                      "I'm interested in ..." (e.g. dinner, lunch, breakfast, night events, ...).
                    </p>

                    <div className="flex gap-2 mt-3">
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
                      <div className="flex flex-wrap gap-2 mt-3">
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
              </section>

              {/* Save Button */}
              <div className="pt-4">
                <Button className="w-full md:w-auto px-8" size="lg">
                  Save
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
