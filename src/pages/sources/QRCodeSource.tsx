import { Download, FileImage, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const QRCodeSource = () => {
  const handleDownloadQR = () => {
    console.log("Downloading QR code...");
  };

  const handleDownloadDesign = () => {
    console.log("Downloading print-ready design...");
  };

  return (
    <InnerPageTemplate
      title="QR codes"
      subtitle="Turn in-store visits into customers"
      introText="Place QR codes where customers can see them, so they can join your business and stay in touch."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column - Info boxes */}
        <div className="space-y-4">
          {/* Why this matters */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wide mb-3">Why this matters</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Customers are already in your business.
                QR codes give them a simple way to join while they're there.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a low-cost way to build your customer list over time.
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
                  <span>Customers scan the code and join in a few seconds</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Customers stay connected after they leave</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Activity appears naturally over time</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right column - Where to place & CTA */}
        <div className="space-y-4">
          {/* Where to place it */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Where to place it</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Place your QR code where customers spend time or wait.
                The easier it is to see, the more people will scan it.
              </p>
              <p className="text-sm text-muted-foreground mb-2">Examples:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Near the counter</li>
                <li>• On tables</li>
                <li>• At the entrance</li>
              </ul>
            </CardContent>
          </Card>

          {/* Get your QR code */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Get your QR code</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Choose how you want to use it.
              </p>

              <div className="flex flex-col gap-3 mb-4">
                <Button 
                  onClick={handleDownloadQR}
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download QR code
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleDownloadDesign}
                  className="w-full"
                >
                  <FileImage className="h-4 w-4 mr-2" />
                  Download ready-to-print design
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                You can print this or display it on a screen.
              </p>
            </CardContent>
          </Card>

          {/* Background reassurance */}
          <p className="text-xs text-muted-foreground">
            This works quietly in the background.
          </p>
        </div>
      </div>
    </InnerPageTemplate>
  );
};

export default QRCodeSource;
