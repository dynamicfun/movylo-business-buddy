import { ArrowLeft, QrCode, Download, FileImage } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const QRCodeSource = () => {
  const handleDownloadQR = () => {
    console.log("Downloading QR code...");
  };

  const handleDownloadDesign = () => {
    console.log("Downloading print-ready design...");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">QR codes</h1>
                <p className="text-sm text-muted-foreground">Turn in-store visits into customers</p>
              </div>
            </div>

            {/* Intro text */}
            <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
              Place QR codes where customers can see them, so they can join your business and stay in touch.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left column - Why & What to expect */}
              <div className="lg:col-span-1 space-y-4">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Why this matters</h3>
                    <p className="text-sm text-foreground leading-relaxed mb-3">
                      Customers are already in your business.
                      QR codes give them a simple way to join while they're there.
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      This is a low-cost way to build your customer list over time.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">What to expect</h3>
                    <ul className="space-y-2 text-sm text-foreground">
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

                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Where to place it</h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      Place your QR code where customers spend time or wait.
                      The easier it is to see, the more people will scan it.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Right column - Actions */}
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">What to do</h3>
                    <p className="text-sm text-foreground leading-relaxed">
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
                        className="flex-1"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download QR code
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={handleDownloadDesign}
                        className="flex-1"
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

                {/* Helper text */}
                <p className="text-xs text-muted-foreground">
                  This works quietly in the background.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default QRCodeSource;
