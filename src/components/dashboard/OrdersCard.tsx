import { motion } from "framer-motion";
import { ChevronRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Order {
  customer: string;
  amount: string;
  status: "Open" | "Completed" | "Cancelled" | string;
  code: string;
  source: string;
  type: string;
  date: string;
}

interface OrdersCardProps {
  orders?: Order[];
}

const defaultOrders: Order[] = [
  { customer: "—", amount: "€ 8,00", status: "Open", code: "JAVY4YZD5", source: "Movylo", type: "Product/service", date: "May 5, 2025" },
  { customer: "Guest #1", amount: "€ 8,00", status: "Open", code: "RK0E0CZGY", source: "Movylo", type: "Product/service", date: "May 5, 2025" },
  { customer: "Maria Rossi", amount: "€ 24,50", status: "Completed", code: "PX9KL2M4N", source: "Website", type: "Product/service", date: "May 4, 2025" },
  { customer: "Luca Bianchi", amount: "€ 12,00", status: "Completed", code: "QT3JH8B2C", source: "QR Code", type: "Reservation", date: "May 4, 2025" },
  { customer: "Anna Verdi", amount: "€ 45,00", status: "Completed", code: "BT5RY9P3D", source: "Instagram", type: "Product/service", date: "May 3, 2025" },
];

const statusClass = (status: string) => {
  switch (status) {
    case "Open":
      return "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30";
    case "Completed":
      return "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30";
    case "Cancelled":
      return "bg-muted text-muted-foreground border-border";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export function OrdersCard({ orders = defaultOrders }: OrdersCardProps) {
  const items = orders.slice(0, 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <Card>
        <CardHeader className="pb-3 flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-semibold">Last 5 orders</CardTitle>
          </div>
          <Link
            to="/orders"
            className="text-xs text-primary hover:underline inline-flex items-center gap-1"
          >
            See all orders
            <ChevronRight className="h-3 w-3" />
          </Link>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="h-9 text-xs">Customer</TableHead>
                  <TableHead className="h-9 text-xs">Amount</TableHead>
                  <TableHead className="h-9 text-xs">Status</TableHead>
                  <TableHead className="h-9 text-xs">Code</TableHead>
                  <TableHead className="h-9 text-xs">Source</TableHead>
                  <TableHead className="h-9 text-xs">Type</TableHead>
                  <TableHead className="h-9 text-xs">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((order) => (
                  <TableRow key={order.code}>
                    <TableCell className="py-2 text-xs font-medium">{order.customer}</TableCell>
                    <TableCell className="py-2 text-xs">{order.amount}</TableCell>
                    <TableCell className="py-2 text-xs">
                      <Badge variant="outline" className={`${statusClass(order.status)} text-[10px] px-1.5 py-0`}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-2 text-xs font-mono">{order.code}</TableCell>
                    <TableCell className="py-2 text-xs">{order.source}</TableCell>
                    <TableCell className="py-2 text-xs">{order.type}</TableCell>
                    <TableCell className="py-2 text-xs text-muted-foreground whitespace-nowrap">{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
