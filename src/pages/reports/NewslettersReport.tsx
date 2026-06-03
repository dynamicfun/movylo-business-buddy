import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function NewslettersReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const newsletters = [
    { name: "Offerte Speciali di Maggio", date: "25 May 2026", reached: 110, opened: "0", clicks: "1" },
    { name: "Scopri le nostre deliziose pizze", date: "4 May 2026", reached: 95, opened: "0", clicks: "1" },
    { name: "All White: A Delightful Pizza", date: "25 Nov 2025", reached: 120, opened: "1", clicks: "14" },
    { name: "Autumn Flavours", date: "1 Oct 2025", reached: 102, opened: "1", clicks: "18" },
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
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Newsletters</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of the updates you've sent to your customers
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mb-6"
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Newsletter overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Your last update reached customers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Some customers opened it and clicked through.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Updates keep your business top of mind for returning customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Best performing update</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">Autumn Flavours</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Received the most clicks from your customers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card className="bg-secondary/30 border-secondary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Newsletter signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Sent</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last 90 days</span>
                        <span className="text-foreground font-medium">4</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Engagement</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Opened</span>
                          <span className="text-foreground">2%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Clicks</span>
                          <span className="text-foreground">34</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Channels</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Email</span>
                          <span className="text-foreground">Main</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">WhatsApp</span>
                          <span className="text-foreground">Some</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 3 */}
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
                      <CardTitle className="text-base font-medium">Newsletter history</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-muted-foreground border-b border-border">
                              <th className="py-2 pr-4 font-medium">Update</th>
                              <th className="py-2 pr-4 font-medium">Date</th>
                              <th className="py-2 pr-4 font-medium">Reached</th>
                              <th className="py-2 pr-4 font-medium">Opened</th>
                              <th className="py-2 font-medium">Clicks</th>
                            </tr>
                          </thead>
                          <tbody>
                            {newsletters.map((n) => (
                              <tr key={n.name} className="border-b border-border/50">
                                <td className="py-2 pr-4 text-foreground">{n.name}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.date}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.reached}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.opened}</td>
                                <td className="py-2 text-muted-foreground">{n.clicks}</td>
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
