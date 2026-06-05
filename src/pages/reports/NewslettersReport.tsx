import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Mail, ChevronDown, Send, MousePointerClick, Eye, TrendingUp } from "lucide-react";
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const CHANNEL_COLORS: Record<string, string> = {
  Email: "hsl(var(--primary))",
  SMS: "#3b82f6",
  WhatsApp: "#60a5fa",
  App: "#93c5fd",
  Messenger: "#bfdbfe",
};

export default function NewslettersReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const newsletters = [
    { name: "Offerte Speciali di Maggio", date: "25 May 2026", reached: 110, email: 70, sms: 20, whatsapp: 14, app: 3, messenger: 3, opened: "0", clicks: 1 },
    { name: "Scopri le nostre deliziose pizze", date: "4 May 2026", reached: 95, email: 60, sms: 18, whatsapp: 12, app: 3, messenger: 2, opened: "0", clicks: 1 },
    { name: "All White: A Delightful Pizza", date: "25 Nov 2025", reached: 120, email: 80, sms: 20, whatsapp: 15, app: 3, messenger: 2, opened: "1", clicks: 14 },
    { name: "Autumn Flavours", date: "1 Oct 2025", reached: 102, email: 65, sms: 19, whatsapp: 13, app: 3, messenger: 2, opened: "1", clicks: 18 },
  ];

  const channelTotals = [
    { name: "Email", value: newsletters.reduce((s, n) => s + n.email, 0), fill: CHANNEL_COLORS.Email },
    { name: "SMS", value: newsletters.reduce((s, n) => s + n.sms, 0), fill: CHANNEL_COLORS.SMS },
    { name: "WhatsApp", value: newsletters.reduce((s, n) => s + n.whatsapp, 0), fill: CHANNEL_COLORS.WhatsApp },
    { name: "App", value: newsletters.reduce((s, n) => s + n.app, 0), fill: CHANNEL_COLORS.App },
    { name: "Messenger", value: newsletters.reduce((s, n) => s + n.messenger, 0), fill: CHANNEL_COLORS.Messenger },
  ];

  const clickHistory = newsletters
    .slice()
    .reverse()
    .map((n) => ({ name: n.name.length > 14 ? n.name.slice(0, 14) + "…" : n.name, clicks: n.clicks }));

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
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Newsletters</h1>
                  <p className="text-sm text-muted-foreground">A simple overview of the updates you've sent to your customers</p>
                </div>
              </div>
            </div>

            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Total clicks</p>
                      <p className="text-5xl font-semibold text-foreground tracking-tight">34</p>
                      <p className="text-sm text-foreground/80 mt-1">across 4 updates</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">Autumn Flavours leads</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-3">
                        Updates keep your business top of mind for returning customers.
                      </p>
                    </div>
                    <div className="lg:col-span-3 h-[180px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={clickHistory} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                          <Bar dataKey="clicks" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Visual signals */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Reach by channel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[160px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={channelTotals} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={2} stroke="none">
                          {channelTotals.map((c, i) => <Cell key={i} fill={c.fill} />)}
                        </Pie>
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-lg font-semibold text-foreground">Email</p>
                      <p className="text-xs text-muted-foreground">top channel</p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-1">
                    {channelTotals.map((c) => (
                      <div key={c.name} className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full" style={{ background: c.fill }} />
                        <span className="text-foreground flex-1 truncate">{c.name}</span>
                        <span className="text-muted-foreground">{c.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Best update</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <p className="text-sm font-medium text-foreground">Autumn Flavours</p>
                    <p className="text-xs text-muted-foreground mt-1">Most clicks from customers</p>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div>
                        <p className="text-xl font-semibold text-foreground">102</p>
                        <p className="text-xs text-muted-foreground">Reached</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-foreground">1</p>
                        <p className="text-xs text-muted-foreground">Opened</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-primary">18</p>
                        <p className="text-xs text-muted-foreground">Clicks</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-primary/5 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">4</p>
                      <p className="text-xs text-muted-foreground mt-1">Sent last 90 days</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">2%</p>
                      <p className="text-xs text-muted-foreground mt-1">Open rate</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <MousePointerClick className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">34</p>
                      <p className="text-xs text-muted-foreground mt-1">Total clicks</p>
                    </div>
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
                              <th className="py-2 pr-4 font-medium">Email</th>
                              <th className="py-2 pr-4 font-medium">SMS</th>
                              <th className="py-2 pr-4 font-medium">WhatsApp</th>
                              <th className="py-2 pr-4 font-medium">App</th>
                              <th className="py-2 pr-4 font-medium">Messenger</th>
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
                                <td className="py-2 pr-4 text-muted-foreground">{n.email}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.sms}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.whatsapp}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.app}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{n.messenger}</td>
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
