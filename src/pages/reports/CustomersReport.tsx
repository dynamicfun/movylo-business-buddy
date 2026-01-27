import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Users, ChevronDown } from "lucide-react";
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

export default function CustomersReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  // Sample data
  const totalCustomers = 907;
  const topSources = [
    { name: "Google", percentage: 45 },
    { name: "QR codes", percentage: 32 },
    { name: "Share a link", percentage: 12 },
  ];
  const allSources = [
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
            {/* Header */}
            <div className="mb-6">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3"
              >
                <ChevronLeft className="w-4 h-4" />
                Home
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Customers</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of the people connected to your business
                  </p>
                </div>
              </div>
            </div>

            {/* Layer 1 — Outcome (Always visible) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4 mb-6"
            >
              {/* Customer Overview */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Customer overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    You have {totalCustomers.toLocaleString()} customers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Most joined recently and are still connected to your business.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    This list grows as people join from your connected sources.
                  </p>
                </CardContent>
              </Card>

              {/* Where customers mostly come from */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Where customers mostly come from</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Google and QR codes bring in most of your customers.
                  </p>
                  <div className="space-y-2">
                    {topSources.slice(0, 2).map((source) => (
                      <div key={source.name} className="flex items-center gap-3">
                        <span className="text-sm text-foreground w-24">{source.name}</span>
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary/60 rounded-full"
                            style={{ width: `${source.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* How customers can be reached */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">How customers can be reached</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Most customers can be reached by message or email.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 2 — Signals (Visible, but secondary) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <Card className="bg-secondary/30 border-secondary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium text-muted-foreground">Customer signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* New customers */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">New customers</p>
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

                    {/* Reachability */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Reachability</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Can receive messages</span>
                          <span className="text-foreground">82%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Can receive email</span>
                          <span className="text-foreground">64%</span>
                        </div>
                      </div>
                    </div>

                    {/* Top sources */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Top sources</p>
                      <div className="space-y-1">
                        {topSources.map((source) => (
                          <p key={source.name} className="text-sm text-muted-foreground">
                            {source.name}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 3 — Details (Collapsed by default) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Collapsible open={detailsOpen} onOpenChange={setDetailsOpen}>
                <CollapsibleTrigger className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 cursor-pointer">
                  <ChevronDown className={`w-4 h-4 transition-transform ${detailsOpen ? 'rotate-180' : ''}`} />
                  <span>View more details</span>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="space-y-4">
                    {/* Customer activity breakdown */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Customer activity breakdown</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-foreground">Active customers</span>
                              <span className="text-muted-foreground">68%</span>
                            </div>
                            <Progress value={68} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-foreground">Less active customers</span>
                              <span className="text-muted-foreground">32%</span>
                            </div>
                            <Progress value={32} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Customer sources (full) */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Customer sources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {allSources.map((source) => (
                            <div key={source.name} className="flex items-center gap-3">
                              <span className="text-sm text-foreground w-28">{source.name}</span>
                              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary/60 rounded-full"
                                  style={{ width: `${source.percentage}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground w-10 text-right">{source.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Customer profile overview */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Customer profile overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {/* Age ranges */}
                          <div>
                            <p className="text-sm font-medium text-foreground mb-2">Age ranges</p>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">18-34</span>
                                <span className="text-foreground">38%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">35-54</span>
                                <span className="text-foreground">45%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">55+</span>
                                <span className="text-foreground">17%</span>
                              </div>
                            </div>
                          </div>

                          {/* Gender distribution */}
                          <div>
                            <p className="text-sm font-medium text-foreground mb-2">Gender distribution</p>
                            <div className="space-y-1">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Female</span>
                                <span className="text-foreground">52%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Male</span>
                                <span className="text-foreground">46%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Other</span>
                                <span className="text-foreground">2%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground/70 mt-4">
                          This information is based on available customer data.
                        </p>
                      </CardContent>
                    </Card>

                    {/* Preferences & loyalty */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Preferences & loyalty</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Customers with loyalty points</span>
                            <span className="text-foreground">234</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Preferred reward: Discounts</span>
                            <span className="text-foreground">67%</span>
                          </div>
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
