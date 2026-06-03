import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, DollarSign, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function SalesReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const totalSales = "€1,240";
  const topProducts = [
    { name: "Cappuccino & brioche", percentage: 38 },
    { name: "Pizza margherita", percentage: 27 },
    { name: "Pizza quattro stagioni", percentage: 15 },
    { name: "Estate a casa", percentage: 12 },
    { name: "Others", percentage: 8 },
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
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Sales</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of the money coming into your business
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
                  <CardTitle className="text-base font-medium">Sales overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    You made {totalSales} in sales
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Most sales came from offers and returning customers.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    This grows when customers redeem offers or buy through your channels.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">What sells most</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Cappuccino & brioche and Pizza margherita are your best sellers.
                  </p>
                  <div className="space-y-2">
                    {topProducts.slice(0, 2).map((p) => (
                      <div key={p.name} className="flex items-center gap-3">
                        <span className="text-sm text-foreground w-40 truncate">{p.name}</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary/60 rounded-full"
                            style={{ width: `${p.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Where sales happen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Most sales happen in-store, with a small share from online channels.
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
                  <CardTitle className="text-base font-medium text-muted-foreground">Sales signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Coupons</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Downloaded</span>
                          <span className="text-foreground font-medium">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Redeemed</span>
                          <span className="text-foreground">2 (€12,00)</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Last month</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Sales</span>
                          <span className="text-foreground">€21,50</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">vs previous</span>
                          <span className="text-foreground">+7.5%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">In-store vs digital</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">In-store</span>
                          <span className="text-foreground">81.8%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Digital</span>
                          <span className="text-foreground">18.2%</span>
                        </div>
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
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Top selling items</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {topProducts.map((p) => (
                            <div key={p.name} className="flex items-center gap-3">
                              <span className="text-sm text-foreground w-44 truncate">{p.name}</span>
                              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary/60 rounded-full"
                                  style={{ width: `${p.percentage}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground w-10 text-right">{p.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Monthly trend</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {[
                            { m: "Mar 2026", v: 60 },
                            { m: "Apr 2026", v: 75 },
                            { m: "May 2026", v: 92 },
                          ].map((row) => (
                            <div key={row.m}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-foreground">{row.m}</span>
                                <span className="text-muted-foreground">{row.v}%</span>
                              </div>
                              <Progress value={row.v} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
