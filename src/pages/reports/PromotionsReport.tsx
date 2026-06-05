import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Gift, ChevronDown, Send, Download, TrendingUp, DollarSign } from "lucide-react";
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

export default function PromotionsReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const promotions = [
    { name: "Pizze Golose per la Festa", date: "25 May 2026", sent: 120, email: 80, sms: 20, whatsapp: 15, app: 3, messenger: 2, opened: "1 (1%)", redeemed: 0 },
    { name: "Celebrate the Weekend", date: "29 Jan 2026", sent: 95, email: 60, sms: 18, whatsapp: 12, app: 3, messenger: 2, opened: "0", redeemed: 0 },
    { name: "Special Offer at Aleamex", date: "13 Jan 2026", sent: 110, email: 70, sms: 22, whatsapp: 14, app: 2, messenger: 2, opened: "3 (3%)", redeemed: 1 },
    { name: "Spice up your Tuesday", date: "13 Jan 2026", sent: 80, email: 50, sms: 16, whatsapp: 10, app: 2, messenger: 2, opened: "0", redeemed: 0 },
  ];

  const channelTotals = [
    { name: "Email", value: promotions.reduce((s, p) => s + p.email, 0), fill: CHANNEL_COLORS.Email },
    { name: "SMS", value: promotions.reduce((s, p) => s + p.sms, 0), fill: CHANNEL_COLORS.SMS },
    { name: "WhatsApp", value: promotions.reduce((s, p) => s + p.whatsapp, 0), fill: CHANNEL_COLORS.WhatsApp },
    { name: "App", value: promotions.reduce((s, p) => s + p.app, 0), fill: CHANNEL_COLORS.App },
    { name: "Messenger", value: promotions.reduce((s, p) => s + p.messenger, 0), fill: CHANNEL_COLORS.Messenger },
  ];

  const perPromo = promotions.map((p) => ({
    name: p.name.length > 18 ? p.name.slice(0, 18) + "…" : p.name,
    sent: p.sent,
  }));

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
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Promotions</h1>
                  <p className="text-sm text-muted-foreground">A simple overview of the offers you sent to your customers</p>
                </div>
              </div>
            </div>

            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">You have</p>
                      <p className="text-5xl font-semibold text-foreground tracking-tight">3</p>
                      <p className="text-sm text-foreground/80 mt-1">active promotions</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">1 redeemed recently</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-3">
                        Send a new offer when you want to bring customers back.
                      </p>
                    </div>
                    <div className="lg:col-span-3 h-[180px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={perPromo} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                          <Bar dataKey="sent" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
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
                  <CardTitle className="text-sm font-medium text-muted-foreground">Best performer</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <p className="text-sm font-medium text-foreground">Special Offer at Aleamex</p>
                    <p className="text-xs text-muted-foreground mt-1">Reached the most customers</p>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div>
                        <p className="text-xl font-semibold text-foreground">110</p>
                        <p className="text-xs text-muted-foreground">Sent</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-foreground">3</p>
                        <p className="text-xs text-muted-foreground">Opened</p>
                      </div>
                      <div>
                        <p className="text-xl font-semibold text-primary">1</p>
                        <p className="text-xs text-muted-foreground">Redeemed</p>
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
                      <p className="text-2xl font-semibold text-foreground leading-none">2</p>
                      <p className="text-xs text-muted-foreground mt-1">Sent last 30 days</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Download className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">5</p>
                      <p className="text-xs text-muted-foreground mt-1">Coupons downloaded</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">€12</p>
                      <p className="text-xs text-muted-foreground mt-1">From offers</p>
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
                      <CardTitle className="text-base font-medium">Promotion history</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-muted-foreground border-b border-border">
                              <th className="py-2 pr-4 font-medium">Promotion</th>
                              <th className="py-2 pr-4 font-medium">Date</th>
                              <th className="py-2 pr-4 font-medium">Sent</th>
                              <th className="py-2 pr-4 font-medium">Email</th>
                              <th className="py-2 pr-4 font-medium">SMS</th>
                              <th className="py-2 pr-4 font-medium">WhatsApp</th>
                              <th className="py-2 pr-4 font-medium">App</th>
                              <th className="py-2 pr-4 font-medium">Messenger</th>
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
                                <td className="py-2 pr-4 text-muted-foreground">{p.email}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.sms}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.whatsapp}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.app}</td>
                                <td className="py-2 pr-4 text-muted-foreground">{p.messenger}</td>
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
