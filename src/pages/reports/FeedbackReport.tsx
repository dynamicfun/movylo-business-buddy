import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LEVELS = [
  { key: "none", label: "Not at all", color: "#ef4444" },
  { key: "little", label: "A little", color: "#f97316" },
  { key: "enough", label: "Enough", color: "#84cc16" },
  { key: "satisfied", label: "Satisfied", color: "#22c55e" },
  { key: "very", label: "Very satisfied", color: "#16a34a" },
];

interface PeriodRow {
  label: string;
  values: number[]; // length 5, sums to 100
}

const rows: PeriodRow[] = [
  { label: "Last 6 months", values: [3, 4, 10, 36, 47] },
  { label: "All time", values: [4, 3, 13, 28, 52] },
];

function StackedBar({ values }: { values: number[] }) {
  return (
    <div className="flex h-7 w-full rounded-md overflow-hidden border border-border/40">
      {values.map((v, i) => (
        <div
          key={i}
          style={{ width: `${v}%`, background: LEVELS[i].color }}
          className="flex items-center justify-center text-[10px] font-semibold text-white"
        >
          {v >= 6 ? `${v}%` : ""}
        </div>
      ))}
    </div>
  );
}

const comments = [
  { name: "Noah Cacace", text: "Niente siete i n1", date: "May 20, 2026" },
  { name: "Rosanova Marzio", text: "Tutto fatto bene", date: "May 13, 2026" },
  { name: "Giulio Curto", text: "Penso sia tutto ok", date: "May 13, 2026" },
  { name: "Maullu Simone", text: "Certe volte la consegna più veloce", date: "May 13, 2026" },
  { name: "Debora", text: "Tutto, perché tutte le volte faccio il sondaggio e alla fine…", date: "May 13, 2026" },
  { name: "Maria Delfina", text: "Va bene così", date: "May 6, 2026" },
];

export default function FeedbackReport() {
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
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-foreground">Customer satisfaction</h1>
                    <p className="text-sm text-muted-foreground max-w-2xl">
                      Collect useful information from your customers: ask them to send a private message (only you'll see it) telling you how satisfied they are and what they'd improve.
                    </p>
                  </div>
                </div>
                <Button className="gap-2 shrink-0 hidden sm:flex">
                  <Send className="w-4 h-4" />
                  Get responses
                </Button>
              </div>
            </div>

            {/* Satisfaction levels */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Your customers' satisfaction level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rows.map((r) => (
                      <div key={r.label} className="grid grid-cols-[110px_1fr] items-center gap-3">
                        <span className="text-sm text-muted-foreground">{r.label}</span>
                        <StackedBar values={r.values} />
                      </div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-border/40">
                    {LEVELS.map((l) => (
                      <div key={l.key} className="flex items-center gap-2 text-xs">
                        <span className="w-3 h-3 rounded-sm" style={{ background: l.color }} />
                        <span className="text-muted-foreground">{l.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Comments */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-semibold">What customers think about your business</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>To improve</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comments.map((c, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{c.name}</TableCell>
                          <TableCell className="text-primary">{c.text}</TableCell>
                          <TableCell className="text-muted-foreground whitespace-nowrap">{c.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
