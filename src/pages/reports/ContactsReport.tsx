import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Phone, Mail, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Generate 30 daily data points
function makeData(seed: number) {
  const days = [];
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    const label = `${date.getDate()}/${date.getMonth() + 1}`;
    // Pseudo-random based on seed and index
    const v = Math.max(0, Math.round(Math.sin(i * seed * 0.7) * 2 + Math.cos(i * seed) * 1.5 + 1));
    days.push({ day: label, value: v });
  }
  return days;
}

interface ChannelChartProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  data: { day: string; value: number }[];
}

function ChannelChart({ title, icon, color, data }: ChannelChartProps) {
  const total = data.reduce((s, d) => s + d.value, 0);
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span style={{ color }}>{icon}</span>
            {title}
          </CardTitle>
          <span className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">{total}</span> total
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[140px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.4} />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} interval={4} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} width={24} allowDecimals={false} />
              <Tooltip
                contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }}
                cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
              />
              <Bar dataKey="value" fill={color} radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContactsReport() {
  const channels = [
    { title: "Calls", icon: <Phone className="w-4 h-4" />, color: "#0d9488", data: makeData(1) },
    { title: "Email clicks", icon: <Mail className="w-4 h-4" />, color: "#a78bfa", data: makeData(2) },
    { title: "WhatsApp", icon: <MessageCircle className="w-4 h-4" />, color: "#7c3aed", data: makeData(3) },
    { title: "Facebook page clicks", icon: <Facebook className="w-4 h-4" />, color: "#ec4899", data: makeData(4) },
    { title: "Instagram page clicks", icon: <Instagram className="w-4 h-4" />, color: "#f43f5e", data: makeData(5) },
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
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">Contacts</h1>
                  <p className="text-sm text-muted-foreground">
                    Contacts Movylo brought you in the last 30 days. Calls, email clicks, WhatsApp chats and clicks on your social pages.
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {channels.map((c) => (
                <ChannelChart key={c.title} {...c} />
              ))}
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
