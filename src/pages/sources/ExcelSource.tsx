import { useState } from "react";
import { FileSpreadsheet, CheckCircle2, Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const ExcelSource = () => {
  const [file, setFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [col1, setCol1] = useState("email");
  const [col2, setCol2] = useState("phone");
  const [col3, setCol3] = useState("firstName");
  const [col4, setCol4] = useState("lastName");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Mock preview data
  const previewData = [
    { email: "john@example.com", phone: "+39 312 345 6789", firstName: "John", lastName: "Doe" },
    { email: "jane@example.com", phone: "+39 333 000 5555", firstName: "Jane", lastName: "Smith" },
    { email: "marco@example.com", phone: "+39 345 678 1234", firstName: "Marco", lastName: "Rossi" },
  ];

  return (
    <InnerPageTemplate
      title="Excel"
      subtitle="Upload a list of customers"
      helperText="Only upload customers who have agreed to hear from you."
      introText="Already have a customer list in Excel? You can upload it to Movylo in a simple and safe way."
      icon={FileSpreadsheet}
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
                If you already have a customer list in a spreadsheet, you don't need to start from scratch. Uploading it here saves time and keeps everyone connected.
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
                  "Nothing is sent right away",
                  "Activity appears over time"
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

        {/* Right Column - Steps */}
        <div className="space-y-6">

        {/* 1. Download template */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">1. Download the template</h3>
            <p className="text-sm text-muted-foreground mb-1">
              Use our template to prepare your file.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              This helps us read customer details correctly.
            </p>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Download template
            </Button>
          </CardContent>
        </Card>

        {/* 2. Confirm consent */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-4">2. Confirm consent</h3>
            <div className="flex items-start gap-3">
              <Checkbox 
                id="consent" 
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
              />
              <div>
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                  I confirm that all customers I'm uploading have given explicit consent (opt-in) to receive my communications
                </Label>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  This helps protect you and your customers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3. Upload file */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-1">3. Upload the file</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose the Excel file from your computer.
            </p>

            {consent ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    {file ? (
                      <p className="text-sm font-medium text-foreground">{file.name}</p>
                    ) : (
                      <>
                        <p className="text-sm font-medium text-foreground mb-1">Click to upload</p>
                        <p className="text-xs text-muted-foreground">Excel (.xlsx, .xls) or CSV</p>
                      </>
                    )}
                  </label>
                </div>

                {!file && (
                  <Button className="w-full" asChild>
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload file
                    </label>
                  </Button>
                )}

                <p className="text-xs text-muted-foreground/70">
                  Supported formats: Excel (.xlsx, .xls) or CSV
                </p>
              </div>
            ) : (
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  To start the upload, please confirm consent in step 2.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Match fields - shown after file upload */}
        {file && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-1">Match fields</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tell us what each column contains.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Column A</Label>
                  <Select value={col1} onValueChange={setCol1}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                      <SelectItem value="skip">Skip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Column B</Label>
                  <Select value={col2} onValueChange={setCol2}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                      <SelectItem value="skip">Skip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Column C</Label>
                  <Select value={col3} onValueChange={setCol3}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                      <SelectItem value="skip">Skip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground mb-1.5 block">Column D</Label>
                  <Select value={col4} onValueChange={setCol4}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                      <SelectItem value="skip">Skip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/70">You can leave fields empty if you don't need them.</p>
            </CardContent>
          </Card>
        )}

        {/* Preview - shown after file upload */}
        {file && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-1">Customer preview</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review a few entries before saving.
              </p>

              <div className="border rounded-lg overflow-hidden mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-2 font-medium text-muted-foreground">Email</th>
                      <th className="text-left p-2 font-medium text-muted-foreground">Phone</th>
                      <th className="text-left p-2 font-medium text-muted-foreground">First name</th>
                      <th className="text-left p-2 font-medium text-muted-foreground">Last name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previewData.map((row, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="p-2 text-foreground">{row.email}</td>
                        <td className="p-2 text-foreground">{row.phone}</td>
                        <td className="p-2 text-foreground">{row.firstName}</td>
                        <td className="p-2 text-foreground">{row.lastName}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground/70 mb-4">Nothing is added until you save.</p>

              <Button>Save</Button>
            </CardContent>
          </Card>
        )}
        </div>
      </div>

      {/* Background reassurance */}
      <p className="text-xs text-muted-foreground/70 text-center mt-6">
        This works quietly in the background.
      </p>
    </InnerPageTemplate>
  );
};

export default ExcelSource;
