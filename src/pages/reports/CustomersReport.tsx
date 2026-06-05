import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Users, ChevronDown, UserPlus, MessageSquare, Mail, Heart, TrendingUp } from "lucide-react";
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
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
} from "recharts";

const SOURCE_COLORS = ["hsl(var(--primary))", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe"];

export default function CustomersReport() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const totalCustomers = 907;

  const allSources = [
    { name: "Google", value: 45 },
    { name: "QR codes", value: 32 },
    { name: "Share a link", value: 12 },
    { name: "Facebook", value: 6 },
    { name: "Instagram", value: 3 },
    { name: "Others", value: 2 },
  ];

  const growthData = [
    { month: "Jan", customers: 620 },
    { month: "Feb", customers: 668 },
    { month: "Mar", customers: 712 },
    { month: "Apr", customers: 760 },
    { month: "May", customers: 830 },
    { month: "Jun", customers: 907 },
  ];

  const reachability = [
    { name: "Messages", value: 82, fill: "hsl(var(--primary))" },
    { name: "Email", value: 64, fill: "#60a5fa" },
    { name: "WhatsApp", value: 48, fill: "#93c5fd" },
  ];

  const activity = [
    { name: "Active", value: 68, fill: "hsl(var(--primary))" },
    { name: "Less active", value: 32, fill: "#dbeafe" },
  ];

  const ageData = [
    { range: "18-34", value: 38 },
    { range: "35-54", value: 45 },
    { range: "55+", value: 17 },
  ];

  const genderData = [
    { name: "Female", value: 52, fill: "hsl(var(--primary))" },
    { name: "Male", value: 46, fill: "#60a5fa" },
    { name: "Other", value: 2, fill: "#bfdbfe" },
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

            {/* Layer 1 — Hero outcome */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">You have</p>
                      <p className="text-5xl font-semibold text-foreground tracking-tight">
                        {totalCustomers.toLocaleString()}
                      </p>
                      <p className="text-sm text-foreground/80 mt-1">customers connected</p>
                      <div className="flex items-center gap-1.5 mt-3 text-sm text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-medium">+77 this month</span>
                      </div>
                      <p className="text-xs text-muted-foreground/70 mt-3">
                        This list grows as people join from your connected sources.
                      </p>
                    </div>
                    <div className="lg:col-span-3 h-[180px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                          <YAxis hide />
                          <Tooltip
                            contentStyle={{
                              background: "hsl(var(--card))",
                              border: "1px solid hsl(var(--border))",
                              borderRadius: 8,
                              fontSize: 12,
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="customers"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2.5}
                            fill="url(#grad)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Layer 2 — Visual signals */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
            >
              {/* Where they come from — donut */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Where they come from</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[160px] relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={allSources}
                          dataKey="value"
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={70}
                          paddingAngle={2}
                          stroke="none"
                        >
                          {allSources.map((_, i) => (
                            <Cell key={i} fill={SOURCE_COLORS[i % SOURCE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            background: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                          formatter={(v: number) => `${v}%`}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <p className="text-lg font-semibold text-foreground">Google</p>
                      <p className="text-xs text-muted-foreground">top source</p>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {allSources.slice(0, 3).map((s, i) => (
                      <div key={s.name} className="flex items-center gap-2 text-xs">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: SOURCE_COLORS[i] }}
                        />
                        <span className="text-foreground flex-1">{s.name}</span>
                        <span className="text-muted-foreground">{s.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reachability */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">How you can reach them</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[160px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadialBarChart
                        innerRadius="35%"
                        outerRadius="100%"
                        data={reachability}
                        startAngle={90}
                        endAngle={-270}
                      >
                        <RadialBar background dataKey="value" cornerRadius={8} />
                        <Tooltip
                          contentStyle={{
                            background: "hsl(var(--card))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: 8,
                            fontSize: 12,
                          }}
                          formatter={(v: number) => `${v}%`}
                        />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 space-y-1">
                    {reachability.map((r) => (
                      <div key={r.name} className="flex items-center gap-2 text-xs">
                        <span className="w-2 h-2 rounded-full" style={{ background: r.fill }} />
                        <span className="text-foreground flex-1">{r.name}</span>
                        <span className="text-muted-foreground">{r.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* New customers stat tiles */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">New customers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="rounded-lg bg-primary/5 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">42</p>
                      <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
                    </div>
                    <span className="text-xs font-medium text-primary">+20%</span>
                  </div>
                  <div className="rounded-lg bg-secondary/40 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Users className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-2xl font-semibold text-foreground leading-none">35</p>
                      <p className="text-xs text-muted-foreground mt-1">Previous 30 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Channel reach strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
            >
              {[
                { icon: MessageSquare, label: "Messages", value: "82%" },
                { icon: Mail, label: "Email", value: "64%" },
                { icon: Heart, label: "Loyalty", value: "234" },
                { icon: TrendingUp, label: "Growth", value: "+8.5%" },
              ].map((tile) => (
                <Card key={tile.label} className="border-border/60">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <tile.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground leading-none">{tile.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{tile.label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Activity donut */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Customer activity</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[180px] relative">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={activity}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={55}
                                outerRadius={80}
                                stroke="none"
                              >
                                {activity.map((a, i) => (
                                  <Cell key={i} fill={a.fill} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <p className="text-2xl font-semibold text-foreground">68%</p>
                            <p className="text-xs text-muted-foreground">active</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* All sources bar */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">All sources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[180px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={allSources} layout="vertical" margin={{ left: 10 }}>
                              <XAxis type="number" hide />
                              <YAxis
                                type="category"
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                                width={80}
                              />
                              <Tooltip
                                contentStyle={{
                                  background: "hsl(var(--card))",
                                  border: "1px solid hsl(var(--border))",
                                  borderRadius: 8,
                                  fontSize: 12,
                                }}
                                formatter={(v: number) => `${v}%`}
                              />
                              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 6, 6, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Age */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Age ranges</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[180px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ageData}>
                              <XAxis
                                dataKey="range"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                              />
                              <YAxis hide />
                              <Tooltip
                                contentStyle={{
                                  background: "hsl(var(--card))",
                                  border: "1px solid hsl(var(--border))",
                                  borderRadius: 8,
                                  fontSize: 12,
                                }}
                                formatter={(v: number) => `${v}%`}
                              />
                              <Bar dataKey="value" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Gender */}
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Gender distribution</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[180px]">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={genderData}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                stroke="none"
                                label={(e: any) => `${e.name} ${e.value}%`}
                                labelLine={false}
                              >
                                {genderData.map((g, i) => (
                                  <Cell key={i} fill={g.fill} />
                                ))}
                              </Pie>
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-4">
                    This information is based on available customer data.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
