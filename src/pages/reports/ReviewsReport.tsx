import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ChevronLeft, Star, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Review {
  id: number;
  name: string;
  title: string;
  review: string;
  date: string;
  published: boolean;
}

const initialReviews: Review[] = [
  { id: 1, name: "Seline Casalgrande", title: "Giusto", review: "Veloce, semplice, un affare", date: "Jun 2, 2026", published: false },
  { id: 2, name: "Antonio Di Nocera", title: "SCONTISSIMI", review: "Ho acquistato un forno ad incasso con uno sconto eccezionale", date: "May 26, 2026", published: true },
  { id: 3, name: "Sabatina Tucci", title: "Acquisto lavastoviglie", review: "Ho acquistato questo modello di lavastoviglie e funziona alla perfezione", date: "May 26, 2026", published: true },
  { id: 4, name: "Remo Luciano Attorresi", title: "Belle gomme", review: "Bel disegno montate solo al posteriore", date: "May 5, 2026", published: false },
  { id: 5, name: "Gerardo Catania", title: "Cucina per esterno", review: "Ottima qualità prezzo e molta disponibilità", date: "May 5, 2026", published: true },
  { id: 6, name: "Davide Del gaudio", title: "mac neo", review: "ho visto l'ottima offerta sul sito", date: "Apr 29, 2026", published: false },
  { id: 7, name: "Francesco Marchese", title: "Siete i migliori per cortesia e competenze", review: "Ambiente accogliente e personale preparato", date: "Apr 14, 2026", published: true },
  { id: 8, name: "Anna Russo", title: "Servizio ottimo", review: "Tutto perfetto, consigliato", date: "Apr 10, 2026", published: true },
  { id: 9, name: "Luca Bianchi", title: "Veloce", review: "Spedizione rapidissima", date: "Apr 3, 2026", published: false },
  { id: 10, name: "Maria Conte", title: "Top", review: "Prezzi imbattibili", date: "Mar 28, 2026", published: true },
];

type SortKey = "name" | "title" | "date" | "published";

export default function ReviewsReport() {
  const [reviews, setReviews] = useState(initialReviews);
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const togglePublish = (id: number) => {
    setReviews((prev) => prev.map((r) => (r.id === id ? { ...r, published: !r.published } : r)));
  };

  const sort = (key: SortKey) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const sorted = [...reviews].sort((a, b) => {
    let cmp = 0;
    if (sortKey === "date") cmp = new Date(a.date).getTime() - new Date(b.date).getTime();
    else if (sortKey === "published") cmp = Number(a.published) - Number(b.published);
    else cmp = String(a[sortKey]).localeCompare(String(b[sortKey]));
    return sortDir === "asc" ? cmp : -cmp;
  });

  const SortHead = ({ k, children }: { k: SortKey; children: React.ReactNode }) => (
    <TableHead>
      <button onClick={() => sort(k)} className="flex items-center gap-1 hover:text-foreground transition-colors font-semibold">
        {children}
        <ArrowUpDown className={`w-3 h-3 ${sortKey === k ? "text-primary" : "text-muted-foreground/50"}`} />
      </button>
    </TableHead>
  );

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
                  <p className="text-sm text-muted-foreground">
                    Show or hide the reviews your customers have left so they become your testimonials. You can also copy them onto your website or other promotional material.
                  </p>
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <SortHead k="name">Name</SortHead>
                        <SortHead k="title">Review title</SortHead>
                        <TableHead>Review</TableHead>
                        <SortHead k="date">Date</SortHead>
                        <SortHead k="published">Publish</SortHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sorted.map((r) => (
                        <TableRow key={r.id}>
                          <TableCell className="font-medium">{r.name}</TableCell>
                          <TableCell>{r.title}</TableCell>
                          <TableCell className="text-primary max-w-[280px] truncate">{r.review}</TableCell>
                          <TableCell className="text-muted-foreground whitespace-nowrap">{r.date}</TableCell>
                          <TableCell>
                            <Checkbox checked={r.published} onCheckedChange={() => togglePublish(r.id)} />
                          </TableCell>
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
