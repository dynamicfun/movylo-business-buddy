import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Instagram, Eye, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import SourceIntro from "@/components/sources/SourceIntro";

type LinkPlacement = "bio" | "stories" | "messages";

const InstagramSource = () => {
  const [selectedPlacements, setSelectedPlacements] = useState<LinkPlacement[]>([]);

  const placements = [
    { id: "bio" as LinkPlacement, name: "Bio link", description: "Add to your profile bio" },
    { id: "stories" as LinkPlacement, name: "Story highlights", description: "Pin in your highlights" },
    { id: "messages" as LinkPlacement, name: "Messages", description: "Send via DM" },
  ];

  const togglePlacement = (id: LinkPlacement) => {
    setSelectedPlacements((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <SourceIntro
                icon={Instagram}
                title="Connect your Instagram"
                subtitle="Turn Instagram followers into customers."
                description="Once connected, Movylo keeps them in touch with your business. You can change or remove this anytime."
                benefits={[
                  { text: "Followers can join your business in one step" },
                  { text: "Customers stay connected after they leave Instagram" },
                  { text: "More chances for repeat visits and sales" },
                ]}
                customerViewTitle="What customers see"
                customerViewItems={[
                  "Customers see a simple link on your Instagram profile.",
                  "They can join your business in a few seconds.",
                  "Some of them come back or buy again.",
                ]}
              />
            </motion.div>

            {/* Connection Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Connect your Instagram
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    This takes a moment.
                  </p>

                  <p className="text-sm text-muted-foreground mb-6">
                    Connect your Instagram account to Movylo.<br />
                    Choose where the sign-up link appears.
                  </p>

                  <Button className="gap-2">
                    <Instagram className="w-4 h-4" />
                    Connect Instagram
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Link Placement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Where the link appears
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose where customers can find you:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {placements.map((placement) => (
                      <button
                        key={placement.id}
                        onClick={() => togglePlacement(placement.id)}
                        className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                          selectedPlacements.includes(placement.id)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40 hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          <span className="font-medium text-foreground">{placement.name}</span>
                          <span className="text-xs text-muted-foreground">{placement.description}</span>
                        </div>
                        {selectedPlacements.includes(placement.id) && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground">
                    You can change this later.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    Preview
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    This is how it will look to customers.<br />
                    You can update it anytime.
                  </p>

                  <Button variant="outline" className="gap-2">
                    <Eye className="w-4 h-4" />
                    Show preview
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default InstagramSource;
