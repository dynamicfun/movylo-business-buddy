import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Gift, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function PromotionsReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const promotions = [
    { name: "Pizze Golose per la Festa", date: "25 May 2026", sent: 120, opened: "1 (1%)", redeemed: 0 },
    { name: "Celebrate the Weekend", date: "29 Jan 2026", sent: 95, opened: "0", redeemed: 0 },
    { name: "Special Offer at Aleamex", date: "13 Jan 2026", sent: 110, opened: "3 (3%)", redeemed: 1 },
    { name: "Spice up your Tuesday", date: "13 Jan 2026", sent: 80, opened: "0", redeemed: 0 },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            <div className="mb-6">
              <Link
                to="/reports"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3"
              >
                <ChevronLeft className="w-4 h-4" />
                Reports
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Promotions</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of the offers you sent to your customers
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 1 — Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mb-6"
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Promotions overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    3 promotions active
                  </p>
                  <p className="text-sm text-muted-foreground">
                    One promotion was redeemed recently.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Send a new offer when you want to bring customers back.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Best performing offer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">Special Offer at Aleamex</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Reached the most customers and had one redemption.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 2 — Signals */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card className="bg-secondary/30 border-secondary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Promotion signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Sent</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last 30 days</span>
                        <span className="text-foreground font-medium">2</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Coupons</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Downloaded</span>
                          <span className="text-foreground">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Redeemed</span>
                          <span className="text-foreground">2</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Sales generated</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">From offers</span>
                        <span className="text-foreground">€12,00</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 3 — Details */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Collapsible open={detailsOpen} onOpenChange={setDetailsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 cursor-pointer">
                  <ChevronDown className={`w-4 h-4 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
                  <span>View more details</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Promotion history</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-muted-foreground border-b border-border">
                              <th className="py-2 pr-4 font-medium">Promotion</th>
                              <th className="py-2 pr-4 font-medium">Sent</th>
                              <th className="py-2 pr-4 font-medium">Reached</th>
                              <th className="py-2 pr-4 font-medium">Opened</th>
                              <th className="py-2 font-medium">Redeemed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {promotions.map((p) => (
                              <tr key={p.name} className="border-b border-border/50">
                                <td className="py-2 pr-4 text-foreground">{p.name}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.date}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.sent}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.opened}</td>
                                <td className="py-2 text-muted-foreground">{p.redeemed}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
