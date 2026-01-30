import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Store, Globe, MapPin, Facebook, Instagram, Link2, QrCode, UserPlus, FileSpreadsheet, Tablet } from "lucide-react";

interface SourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  buttonLabel: string;
  onClick: () => void;
}

const SourceCard = ({ icon, title, description, details, buttonLabel, onClick }: SourceCardProps) => (
  <Card className="bg-card hover:shadow-md transition-shadow border-border/50">
    <CardContent className="p-5">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
      
      {details.length > 0 && (
        <ul className="text-sm text-muted-foreground space-y-1 mb-4 ml-1">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-primary/60">•</span>
              {detail}
            </li>
          ))}
        </ul>
      )}
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full"
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </CardContent>
  </Card>
);

export default function SourcesHub() {
  const navigate = useNavigate();

  const sources = [
    {
      icon: <Store className="w-5 h-5 text-primary" />,
      title: "In store",
      description: "Let customers join while they're with you.",
      details: ["QR codes", "Printed signs", "At the counter or tables"],
      buttonLabel: "Set up",
      path: "/sources/qr-codes"
    },
    {
      icon: <Globe className="w-5 h-5 text-primary" />,
      title: "Website",
      description: "Let visitors join from your website.",
      details: ["Sign up", "Contact you", "Book with you"],
      buttonLabel: "Set up",
      path: "/sources/website"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Google",
      description: "Turn people who find you on Google into customers.",
      details: ["Customers can join and stay connected after they leave Google"],
      buttonLabel: "Connect",
      path: "/business-info/google-profile"
    },
    {
      icon: <Facebook className="w-5 h-5 text-primary" />,
      title: "Facebook",
      description: "Turn people who follow you on Facebook into customers.",
      details: ["Movylo can share occasional updates for you"],
      buttonLabel: "Connect",
      path: "/sources/facebook"
    },
    {
      icon: <Instagram className="w-5 h-5 text-primary" />,
      title: "Instagram",
      description: "Turn people who follow you on Instagram into customers.",
      details: ["Movylo can share occasional updates for you"],
      buttonLabel: "Connect",
      path: "/sources/instagram"
    },
    {
      icon: <Link2 className="w-5 h-5 text-primary" />,
      title: "Share a link",
      description: "Use a simple link in messages and conversations.",
      details: ["WhatsApp", "Email", "Direct messages"],
      buttonLabel: "Get link",
      path: "/sources/share-link"
    },
    {
      icon: <QrCode className="w-5 h-5 text-primary" />,
      title: "QR codes",
      description: "Let customers join by scanning a code.",
      details: ["Near the counter", "At the entrance", "On tables"],
      buttonLabel: "Get QR code",
      path: "/sources/qr-codes"
    },
    {
      icon: <UserPlus className="w-5 h-5 text-primary" />,
      title: "Manual",
      description: "Add customers you already know.",
      details: ["Add one customer", "Paste a list"],
      buttonLabel: "Add customers",
      path: "/sources/manual"
    },
    {
      icon: <FileSpreadsheet className="w-5 h-5 text-primary" />,
      title: "Excel",
      description: "Upload a list of customers from a file.",
      details: ["Good if you already have contacts saved"],
      buttonLabel: "Upload file",
      path: "/sources/excel"
    },
    {
      icon: <Tablet className="w-5 h-5 text-primary" />,
      title: "App / Tablet",
      description: "Let customers join using a phone or tablet in store.",
      details: ["Events", "Front desk", "Checkout"],
      buttonLabel: "Set up",
      path: "/customers/signup"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-[1200px] mx-auto space-y-8">
            {/* Header */}
            <div>
              <button 
                onClick={() => navigate('/')}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Home
              </button>
              <h1 className="text-2xl font-bold text-foreground">Add customers</h1>
              <p className="text-muted-foreground mt-1">Simple ways for people to join your business</p>
            </div>

            {/* Intro */}
            <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
              <p className="text-foreground">
                Customers can join your business in different ways.
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                You can use one source or many.<br />
                Movylo keeps everything connected in the background.
              </p>
            </div>

            {/* Section Title */}
            <div>
              <h2 className="text-lg font-semibold text-foreground">Choose how customers join</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Pick the sources that make sense for your business.<br />
                Nothing happens until customers sign up.
              </p>
            </div>

            {/* Sources Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sources.map((source, index) => (
                <SourceCard
                  key={index}
                  icon={source.icon}
                  title={source.title}
                  description={source.description}
                  details={source.details}
                  buttonLabel={source.buttonLabel}
                  onClick={() => navigate(source.path)}
                />
              ))}
            </div>

            {/* Bottom Reassurance */}
            <div className="p-5 bg-gradient-to-br from-primary/5 to-background rounded-xl border border-border/50">
              <p className="font-medium text-foreground">You don't need to set everything up.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start with one source.<br />
                Add more anytime.
              </p>
            </div>

            {/* Footer Microcopy */}
            <p className="text-xs text-muted-foreground text-center pb-4">
              Customers join once. Movylo works in the background.
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
