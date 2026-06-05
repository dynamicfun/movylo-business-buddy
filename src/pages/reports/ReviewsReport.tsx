import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Star, ChevronDown, Smile, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

export default function ReviewsReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const satisfaction = [
    { label: "Very satisfied", percentage: 64, color: "hsl(var(--primary))" },
    { label: "Satisfied", percentage: 22, color: "#60a5fa" },
    { label: "Somewhat", percentage: 11, color: "#bfdbfe" },
    { label: "Not really", percentage: 2, color: "#fbbf24" },
    { label: "Not at all", percentage: 1, color: "#f59e0b" },
  ];

  const overallScore = 86;
  const gauge = [{ name: "Score", value: overallScore, fill: "hsl(var(--primary))" }];

  const reviews = [
    { name: "Giulia De Candia", title: "Soddisfatta", text: "Professionali e disponibili oltre...", date: "Apr 28, 2026", rating: 5 },
    { name: "Valentina Sardaro", title: "Ottima esperienza", text: "Mi danno consigli utili sul materiale...", date: "Apr 28, 2026", rating: 5 },
    { name: "Sergio D'Ambrosio", title: "Ottima disponibilità", text: "Ottima disponibilità e personale...", date: "Mar 9, 2026", rating: 5 },
    { name: "Nunzia Squeo", title: "TOP", text: "Sempre molto fornite e super disp...", date: "Feb 6, 2026", rating: 5 },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            <div className="mb-6">
              <Link to="/reports" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-3">
                <ChevronLeft className="w-4 h-4" />
                Reports
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Reviews</h1>
                  <p className="text-sm text-muted-foreground">A simple overview of what your customers think of your business</p>
                </div>
              </div>
            </div>

            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    <div className="lg:col-span-3">
                      <p className="text-sm text-muted-foreground mb-1">Most customers are</p>
                      <p className="text-4xl font-semibold text-foreground tracking-tight">Very satisfied</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm text-primary">
                        <Smile className="w-4 h-4" />
                        <span className="font-medium">86% positive sentiment</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-3">
                        Happy customers come back more often and bring friends.
                      </p>

                      {/* Stacked satisfaction bar */}
                      <div className="mt-5">
                        <div className="flex h-3 rounded-full overflow-hidden">
                          {satisfaction.map((s) => (
                            <div key={s.label} style={{ width: `${s.percentage}%`, background: s.color }} />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground mt-2">
                          {satisfaction.map((s) => (
                            <div key={s.label} className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                              <span>{s.label} ({s.percentage}%)</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 h-[200px] relative">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart innerRadius="70%" outerRadius="100%" data={gauge} startAngle={180} endAngle={0}>
                          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                          <RadialBar background dataKey="value" cornerRadius={20} />
                        </RadialBarChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-6">
                        <p className="text-4xl font-semibold text-foreground">{overallScore}</p>
                        <p className="text-xs text-muted-foreground">Sentiment score</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick tiles */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground leading-none">4</p>
                    <p className="text-xs text-muted-foreground mt-1">Reviews last 30 days</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Smile className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground leading-none">86%</p>
                    <p className="text-xs text-muted-foreground mt-1">Positive sentiment</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-foreground leading-none">5</p>
                    <p className="text-xs text-muted-foreground mt-1">Visible publicly</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {reviews.map((r) => (
                          <div key={r.name} className="rounded-lg border border-border/60 p-4">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div>
                                <p className="text-sm font-medium text-foreground">{r.name}</p>
                                <div className="flex items-center gap-0.5 mt-0.5">
                                  {Array.from({ length: r.rating }).map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                                  ))}
                                </div>
                              </div>
                              <span className="text-xs text-muted-foreground shrink-0">{r.date}</span>
                            </div>
                            <p className="text-sm font-medium text-foreground mb-1">{r.title}</p>
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
