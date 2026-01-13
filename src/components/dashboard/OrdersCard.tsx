import { SimpleCard } from "./SimpleCard";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  status: string;
  code: string;
  source: string;
  type: string;
  date: string;
}

interface OrdersCardProps {
  orders: Order[];
}

export function OrdersCard({ orders }: OrdersCardProps) {
  return (
    <SimpleCard
      title="Last Orders"
      delay={0.25}
    >
      <div className="space-y-3">
        {/* Orders table */}
        <div className="-mx-2 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="text-[10px]">
                <TableHead className="h-7 px-2 text-[10px]">Customer</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Amount</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Status</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Code</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Source</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Type</TableHead>
                <TableHead className="h-7 px-2 text-[10px]">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index} className="text-[10px]">
                  <TableCell className="py-1 px-2 text-[10px]">{order.customer}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.amount}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.status}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.code}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.source}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.type}</TableCell>
                  <TableCell className="py-1 px-2 text-[10px]">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* See all orders link */}
        <Button
          variant="ghost"
          className="w-full justify-between text-muted-foreground hover:text-foreground h-8 px-0"
        >
          See all orders
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </SimpleCard>
  );
}
