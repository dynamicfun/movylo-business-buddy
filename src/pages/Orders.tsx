import { useState, useMemo } from "react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { ShoppingBag, Search, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Order = {
  customer: string;
  amount: string;
  status: "Open" | "Completed" | "Cancelled";
  code: string;
  source: string;
  type: string;
  date: string;
};

const allOrders: Order[] = [
  { customer: "—", amount: "€ 8,00", status: "Open", code: "JAVY4YZD5", source: "Movylo", type: "Product/service", date: "May 5, 2025" },
  { customer: "Guest #1", amount: "€ 8,00", status: "Open", code: "RK0E0CZGY", source: "Movylo", type: "Product/service", date: "May 5, 2025" },
  { customer: "Maria Rossi", amount: "€ 24,50", status: "Completed", code: "PX9KL2M4N", source: "Website", type: "Product/service", date: "May 4, 2025" },
  { customer: "Luca Bianchi", amount: "€ 12,00", status: "Completed", code: "QT3JH8B2C", source: "QR Code", type: "Reservation", date: "May 4, 2025" },
  { customer: "Guest #2", amount: "€ 6,50", status: "Cancelled", code: "ZW1MN6V7X", source: "Movylo", type: "Product/service", date: "May 3, 2025" },
  { customer: "Anna Verdi", amount: "€ 45,00", status: "Completed", code: "BT5RY9P3D", source: "Instagram", type: "Product/service", date: "May 3, 2025" },
  { customer: "Marco Neri", amount: "€ 18,00", status: "Open", code: "HN8KF2L9M", source: "Facebook", type: "Reservation", date: "May 2, 2025" },
  { customer: "Sara Russo", amount: "€ 32,00", status: "Completed", code: "VC6XB1Q4T", source: "Website", type: "Product/service", date: "May 2, 2025" },
];

const statusVariant = (status: Order["status"]) => {
  switch (status) {
    case "Open":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30";
    case "Completed":
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30";
    case "Cancelled":
      return "bg-muted text-muted-foreground border-border";
  }
};

const Orders = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sourceFilter, setSourceFilter] = useState<string>("all");

  const sources = useMemo(
    () => Array.from(new Set(allOrders.map((o) => o.source))),
    []
  );

  const filtered = useMemo(() => {
    return allOrders.filter((o) => {
      const matchesSearch =
        !search ||
        o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.code.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "all" || o.status === statusFilter;
      const matchesSource = sourceFilter === "all" || o.source === sourceFilter;
      return matchesSearch && matchesStatus && matchesSource;
    });
  }, [search, statusFilter, sourceFilter]);

  return (
    <InnerPageTemplate
      title="Orders"
      subtitle="Check the status of your orders and review your customer details."
      icon={ShoppingBag}
      backTo="/"
    >
      <Card>
        <CardContent className="p-4 sm:p-6 space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by customer or code…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All statuses</SelectItem>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-full sm:w-[160px]">
                <SelectValue placeholder="Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All sources</SelectItem>
                {sources.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                      No orders found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((order) => (
                    <TableRow key={order.code}>
                      <TableCell className="font-medium">{order.customer}</TableCell>
                      <TableCell>{order.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={statusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs">{order.code}</TableCell>
                      <TableCell>{order.source}</TableCell>
                      <TableCell>{order.type}</TableCell>
                      <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          <p className="text-xs text-muted-foreground">
            Showing {filtered.length} of {allOrders.length} orders
          </p>
        </CardContent>
      </Card>
    </InnerPageTemplate>
  );
};

export default Orders;
