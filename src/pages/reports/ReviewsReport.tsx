import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ReviewsReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const satisfaction = [
    { label: "Very satisfied", percentage: 64, color: "bg-green-500" },
    { label: "Satisfied", percentage: 22, color: "bg-green-400" },
    { label: "Somewhat", percentage: 11, color: "bg-green-300" },
    { label: "Not really", percentage: 2, color: "bg-orange-400" },
    { label: "Not at all", percentage: 1, color: "bg-red-500" },
  ];

  const reviews = [
    { name: "Giulia De Candia", title: "Soddisfatta", text: "Professionali e disponibili oltre...", date: "Apr 28, 2026" },
    { name: "Valentina Sardaro", title: "Ottima esperienza", text: "Mi danno consigli utili sul materiale...", date: "Apr 28, 2026" },
    { name: "Sergio D'Ambrosio", title: "Ottima disponibilità", text: "Ottima disponibilità e personale...", date: "Mar 9, 2026" },
    { name: "Nunzia Squeo", title: "TOP", text: "Sempre molto fornite e super disp...", date: "Feb 6, 2026" },
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
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Reviews</h1>
                  <p className="text-sm text-muted-foreground">
                    A simple overview of what your customers think of your business
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
                  <CardTitle className="text-base font-medium">Customer feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold text-foreground mb-1">
                    Most customers are very satisfied
                  </p>
                  <p className="text-sm text-muted-foreground">
                    4 new reviews received recently.
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    Happy customers come back more often and bring friends.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Satisfaction level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex h-6 rounded-md overflow-hidden mb-3">
                    {satisfaction.map((s) => (
                      <div key={s.label} className={s.color} style={{ width: `${s.percentage}%` }} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    {satisfaction.map((s) => (
                      <div key={s.label} className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${s.color}`} />
                        <span>{s.label} ({s.percentage}%)</span>
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
                  <CardTitle className="text-base font-medium text-muted-foreground">Review signals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Recent reviews</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last 30 days</span>
                        <span className="text-foreground font-medium">4</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Average sentiment</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Positive</span>
                        <span className="text-foreground">86%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Published</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Visible publicly</span>
                        <span className="text-foreground">5</span>
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
                      <CardTitle className="text-base font-medium">What customers are saying</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {reviews.map((r) => (
                          <div key={r.name} className="pb-3 border-b border-border/50 last:border-0 last:pb-0">
                            <div className="flex items-start justify-between gap-3 mb-1">
                              <div>
                                <p className="text-sm font-medium text-foreground">{r.name}</p>
                                <p className="text-xs text-muted-foreground">{r.title}</p>
                              </div>
                              <span className="text-xs text-muted-foreground shrink-0">{r.date}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{r.text}</p>
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
