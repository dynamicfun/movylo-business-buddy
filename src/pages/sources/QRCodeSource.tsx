import { ArrowLeft, QrCode, Download, FileImage } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QRCodeSource = () => {
  const navigate = useNavigate();

  const handleDownloadQR = () => {
    // In a real app, this would generate and download a QR code
    console.log("Downloading QR code...");
  };

  const handleDownloadDesign = () => {
    // In a real app, this would download a print-ready design
    console.log("Downloading print-ready design...");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Button>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <QrCode className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">QR codes</h1>
              <p className="text-muted-foreground mt-1">Turn in-store visits into customers</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Place QR codes where customers can see them, so they can join your business and stay in touch.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Why & What to expect */}
          <div className="space-y-4">
            <Card className="border-border/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Why this matters</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Customers are already in your business.
                  QR codes give them a simple way to join while they're there.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is a low-cost way to build your customer list over time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">What to expect</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Customers scan the code and join in a few seconds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Customers stay connected after they leave
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    Activity appears naturally over time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-3">Where to place it</h3>
                <p className="text-sm text-muted-foreground">
                  Place your QR code where customers spend time or wait.
                  The easier it is to see, the more people will scan it.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-4">
            <Card className="border-border/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">What to do</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Download a QR code and place it where customers can easily see it.
                  For example: near the counter, on tables, or at the entrance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-2">Get your QR code</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose how you want to use it.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Button 
                    onClick={handleDownloadQR}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download QR code
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleDownloadDesign}
                    className="flex-1 border-primary/30 hover:bg-primary/10"
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

            <p className="text-sm text-muted-foreground text-center pt-2">
              This works quietly in the background.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeSource;
