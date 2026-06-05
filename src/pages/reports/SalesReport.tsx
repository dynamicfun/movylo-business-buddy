import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, DollarSign, ChevronDown, TrendingUp, ShoppingBag, Store, Globe } from "lucide-react";
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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["hsl(var(--primary))", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

export default function SalesReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const trend = [
    { month: "Jan", sales: 820 },
    { month: "Feb", sales: 910 },
    { month: "Mar", sales: 960 },
    { month: "Apr", sales: 1050 },
    { month: "May", sales: 1180 },
    { month: "Jun", sales: 1240 },
  ];

  const topProducts = [
    { name: "Cappuccino & brioche", value: 38 },
    { name: "Pizza margherita", value: 27 },
    { name: "Pizza quattro stagioni", value: 15 },
    { name: "Estate a casa", value: 12 },
    { name: "Others", value: 8 },
  ];

  const channels = [
    { name: "In-store", value: 81.8, fill: "hsl(var(--primary))" },
    { name: "Digital", value: 18.2, fill: "#93c5fd" },
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
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Sales</h1>
                  <p className="text-sm text-muted-foreground">A simple overview of the money coming into your business</p>
                </div>
              </div>
            </div>

            {/* Hero */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">You made</p>
                      <p className="text-5xl font-semibold text-foreground tracking-tight">€1,240</p>
                      <p className="text-sm text-foreground/80 mt-1">in sales</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">+7.5% vs previous</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-3">
                        This grows when customers redeem offers or buy through your channels.
                      </p>
                    </div>
                    <div className="lg:col-span-3 h-[180px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trend} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                          <YAxis hide />
                          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `€${v}`} />
                          <Area type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2.5} fill="url(#salesGrad)" />
                        </AreaChart>
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
                  <CardTitle className="text-sm font-medium text-muted-foreground">Best sellers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topProducts.slice(0, 4)} layout="vertical" margin={{ left: 10 }}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} width={110} />
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
                        <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Where sales happen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[160px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={channels} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={70} stroke="none">
                          {channels.map((c, i) => <Cell key={i} fill={c.fill} />)}
                        </Pie>
                        <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-lg font-semibold text-foreground">82%</p>
                      <p className="text-xs text-muted-foreground">in-store</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {channels.map((c) => (
                      <div key={c.name} className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full" style={{ background: c.fill }} />
                        <span className="text-foreground flex-1">{c.name}</span>
                        <span className="text-muted-foreground">{c.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Coupons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-primary/5 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">5</p>
                      <p className="text-xs text-muted-foreground mt-1">Downloaded</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">€12</p>
                      <p className="text-xs text-muted-foreground mt-1">2 redeemed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick tiles */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { icon: Store, label: "In-store", value: "€1,014" },
                { icon: Globe, label: "Digital", value: "€226" },
                { icon: TrendingUp, label: "Last month", value: "€21.50" },
                { icon: ShoppingBag, label: "From offers", value: "€12" },
              ].map((t) => (
                <Card key={t.label} className="border-border/60">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <t.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground leading-none">{t.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{t.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                      <CardTitle className="text-base font-medium">All top selling items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[220px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={topProducts} layout="vertical" margin={{ left: 10 }}>
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} width={150} />
                            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
                            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
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
