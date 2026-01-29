import { useState } from "react";
import { FileSpreadsheet, CheckCircle2, Upload } from "lucide-react";
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
      introText="Upload a file if you already have a list of customers. This is useful if your contacts are saved in Excel or a similar file."
      icon={FileSpreadsheet}
      backTo="/"
    >
      <div className="space-y-6">
        {/* What to expect */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">What to expect</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Customers are added to your list</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">Activity appears naturally over time</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upload section */}
        <Card>
          <CardContent className="p-5">
            <h3 className="font-semibold text-foreground mb-2">Upload your file</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose a file from your computer to get started.
            </p>

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
            </div>
          </CardContent>
        </Card>

        {/* Column mapping - shown after file upload */}
        {file && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-1">Match your columns</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Tell us what each column contains.<br />
                We'll use this to add customers correctly.
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
                      <SelectItem value="phone">Mobile number</SelectItem>
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
                      <SelectItem value="phone">Mobile number</SelectItem>
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
                      <SelectItem value="phone">Mobile number</SelectItem>
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
                      <SelectItem value="phone">Mobile number</SelectItem>
                      <SelectItem value="firstName">First name</SelectItem>
                      <SelectItem value="lastName">Last name</SelectItem>
                      <SelectItem value="skip">Skip</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/70">You can leave columns empty if you don't need them.</p>
            </CardContent>
          </Card>
        )}

        {/* Consent - shown after file upload */}
        {file && (
          <Card>
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                />
                <div>
                  <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                    I confirm that the customers in this file have agreed to receive my messages
                  </Label>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    (This helps keep your account in good standing.)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview - shown after consent */}
        {file && consent && (
          <Card>
            <CardContent className="p-5">
              <h3 className="font-semibold text-foreground mb-1">Preview customers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review a few entries to make sure everything looks right.
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

        {/* Background reassurance */}
        <p className="text-xs text-muted-foreground/70 text-center">
          This works quietly in the background.
        </p>
      </div>
    </InnerPageTemplate>
  );
};

export default ExcelSource;
