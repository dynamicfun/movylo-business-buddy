import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, UserPlus, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ContactsReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const sources = [
    { name: "Google", percentage: 45 },
    { name: "QR codes", percentage: 32 },
    { name: "Share a link", percentage: 12 },
    { name: "Facebook", percentage: 6 },
    { name: "Instagram", percentage: 3 },
    { name: "Others", percentage: 2 },
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
                  <UserPlus className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Contacts</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of the new people reaching your business
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
                  <CardTitle className="text-base font-medium">New contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    42 new contacts received
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Most came from Google and QR codes.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Contacts grow as you keep your sources active.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Top sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {sources.slice(0, 2).map((s) => (
                      <div key={s.name} className="flex items-center gap-3">
                        <span className="text-sm text-foreground w-28">{s.name}</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary/60 rounded-full"
                            style={{ width: `${s.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
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
                  <CardTitle className="text-base font-medium text-muted-foreground">Contact signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Recent activity</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Last 30 days</span>
                          <span className="text-foreground font-medium">42</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Previous 30 days</span>
                          <span className="text-foreground">35</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Reachability</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Email</span>
                          <span className="text-foreground">64%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Phone</span>
                          <span className="text-foreground">82%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Top sources</p>
                      <div className="space-y-1">
                        {sources.slice(0, 3).map((s) => (
                          <p key={s.name} className="text-sm text-muted-foreground">{s.name}</p>
                        ))}
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
                      <CardTitle className="text-base font-medium">All sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {sources.map((s) => (
                          <div key={s.name} className="flex items-center gap-3">
                            <span className="text-sm text-foreground w-28">{s.name}</span>
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary/60 rounded-full"
                                style={{ width: `${s.percentage}%` }}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground w-10 text-right">{s.percentage}%</span>
                          </div>
                        ))}
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
