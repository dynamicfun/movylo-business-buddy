import { useState } from "react";
import { UserPlus, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const ManualSource = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [singleConsent, setSingleConsent] = useState(false);
  
  const [pasteData, setPasteData] = useState("");
  const [multipleConsent, setMultipleConsent] = useState(false);
  const [col1, setCol1] = useState("email");
  const [col2, setCol2] = useState("phone");
  const [col3, setCol3] = useState("firstName");
  const [col4, setCol4] = useState("lastName");

  return (
    <InnerPageTemplate
      title="Manual"
      subtitle="Add customers you already know"
      helperText="Only add customers who have agreed to hear from you."
      introText="Add customers manually if you already have their details. You can add them one by one, or paste a list all at once."
      icon={UserPlus}
      backTo="/"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column - Info */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You may already have customers who want to hear from you. Adding them manually means you can stay connected without waiting for them to sign up again.
              </p>
            </CardContent>
          </Card>

          {/* What to expect */}
          <Card>
            <CardContent className="p-5">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">What to expect</h3>
              <ul className="space-y-2.5">
                {[
                  "Customers are added to your list",
                  "Activity appears naturally over time",
                  "You can edit or remove customers anytime"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Forms */}
        <div className="space-y-6">

        {/* Primary CTA intro */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Add customers manually</h3>
            <p className="text-sm text-muted-foreground">
              Choose the way that's easiest for you.
            </p>
          </CardContent>
        </Card>

        {/* Option 1 - Add one customer */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">Add one customer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Enter the customer's details below.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first-name" className="text-sm">First name</Label>
                  <Input 
                    id="first-name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="last-name" className="text-sm">Last name</Label>
                  <Input 
                    id="last-name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="mobile" className="text-sm">Mobile number</Label>
                <Input 
                  id="mobile" 
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox 
                  id="single-consent" 
                  checked={singleConsent}
                  onCheckedChange={(checked) => setSingleConsent(checked as boolean)}
                />
                <div>
                  <Label htmlFor="single-consent" className="text-sm font-normal cursor-pointer">
                    I confirm that the customers I'm adding have agreed to receive my messages
                  </Label>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    (This helps keep your account in good standing.)
                  </p>
                </div>
              </div>

              <Button disabled={!singleConsent}>Save</Button>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4">You can change or remove customers anytime.</p>
          </CardContent>
        </Card>

        {/* Option 2 - Add multiple customers */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">Add multiple customers</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Copy contacts from Excel or a similar list and paste them below.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-3">Choose what each column contains.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <Select value={col1} onValueChange={setCol1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={col2} onValueChange={setCol2}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={col3} onValueChange={setCol3}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={col4} onValueChange={setCol4}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Textarea
                  value={pasteData}
                  onChange={(e) => setPasteData(e.target.value)}
                  placeholder={`Paste your list here.\nEach customer should be on a new line.\n\nExample:\njohn@example.com   +39 312 345 6789   John   Doe\njane@example.com   +39 333 000 5555   Jane   Doe`}
                  className="min-h-[150px] font-mono text-sm"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox 
                  id="multiple-consent" 
                  checked={multipleConsent}
                  onCheckedChange={(checked) => setMultipleConsent(checked as boolean)}
                />
                <Label htmlFor="multiple-consent" className="text-sm font-normal cursor-pointer">
                  I confirm that the customers I'm adding have agreed to receive my messages
                </Label>
              </div>

              <Button disabled={!multipleConsent}>Save</Button>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4">Nothing is sent until customers are added.</p>
          </CardContent>
        </Card>
        </div>
      </div>

      {/* Background reassurance */}
      <p className="text-xs text-muted-foreground/70 text-center mt-6">
        This works quietly in the background.
      </p>
    </InnerPageTemplate>
  );
};

export default ManualSource;
