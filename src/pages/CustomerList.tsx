import { useState } from "react";
import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  UserPlus,
  Upload,
  Download,
  Search,
  Filter,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

// Mock data for customers
const mockCustomers = [
  { id: 1, name: "Sarah Johnson", email: "sarah.j@gmail.com", phone: "+1 555-0101", points: 120 },
  { id: 2, name: "Michael Chen", email: "m.chen@example.com", phone: "+1 555-0102", points: 85 },
  { id: 3, name: "Emma Williams", email: "emma.w@example.com", phone: "", points: 45 },
  { id: 4, name: "James Rodriguez", email: "james.r@gmail.com", phone: "+1 555-0104", points: 200 },
  { id: 5, name: "Lisa Thompson", email: "lisa.t@example.com", phone: "+1 555-0105", points: 0 },
];

type SortField = "name" | "email" | "phone" | "points";
type SortDirection = "asc" | "desc";

export default function CustomerList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [selectedCustomers, setSelectedCustomers] = useState<number[]>([]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) {
      return <ChevronUp className="h-3 w-3 opacity-30" />;
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="h-3 w-3" />
    ) : (
      <ChevronDown className="h-3 w-3" />
    );
  };

  const filteredCustomers = mockCustomers
    .filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.includes(searchQuery)
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      const direction = sortDirection === "asc" ? 1 : -1;

      if (typeof aValue === "number" && typeof bValue === "number") {
        return (aValue - bValue) * direction;
      }
      return String(aValue).localeCompare(String(bValue)) * direction;
    });

  const toggleCustomer = (id: number) => {
    setSelectedCustomers((prev) =>
      prev.includes(id) ? prev.filter((cId) => cId !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedCustomers.length === filteredCustomers.length) {
      setSelectedCustomers([]);
    } else {
      setSelectedCustomers(filteredCustomers.map((c) => c.id));
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-6 md:p-8 mb-6 border border-primary/10"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="h-1 w-8 bg-accent rounded-full mt-3" />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  Manage your customers
                </h1>
                <p className="text-muted-foreground mt-2">
                  Stay in touch with your customers and prospects, below you can update the list.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl border p-4 md:p-6 mb-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg text-muted-foreground">Total customers:</span>
                  <span className="text-3xl font-bold text-accent">{mockCustomers.length}</span>
                </div>

                <Button className="gap-2">
                  <UserPlus className="h-4 w-4" />
                  Add a new customer
                </Button>

                <Button variant="link" className="gap-2 text-primary">
                  <Upload className="h-4 w-4" />
                  Import an Excel file
                </Button>

                <Button variant="link" className="gap-2 text-primary">
                  <Download className="h-4 w-4" />
                  Export via: xlsx
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Your plan can contain max <strong>2500 customers</strong> |{" "}
                <a href="#" className="text-primary hover:underline">
                  Upgrade now!
                </a>
              </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2 w-fit"
              >
                <Filter className="h-4 w-4" />
                Show/hide filters
              </Button>

              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>

            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-4 bg-muted/50 rounded-lg"
              >
                <p className="text-sm text-muted-foreground">
                  Filter options coming soon...
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Customer Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl border overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedCustomers.length === filteredCustomers.length && filteredCustomers.length > 0}
                      onCheckedChange={toggleAll}
                    />
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-foreground"
                    onClick={() => handleSort("name")}
                  >
                    <div className="flex items-center gap-1">
                      Name <SortIcon field="name" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-foreground"
                    onClick={() => handleSort("email")}
                  >
                    <div className="flex items-center gap-1">
                      Email <SortIcon field="email" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-foreground"
                    onClick={() => handleSort("phone")}
                  >
                    <div className="flex items-center gap-1">
                      Phone <SortIcon field="phone" />
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer hover:text-foreground text-right"
                    onClick={() => handleSort("points")}
                  >
                    <div className="flex items-center gap-1 justify-end">
                      Points <SortIcon field="points" />
                    </div>
                  </TableHead>
                  <TableHead className="text-center">Send...</TableHead>
                  <TableHead className="text-center">Notes</TableHead>
                  <TableHead className="text-center">Stats</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-muted/30">
                    <TableCell>
                      <Checkbox
                        checked={selectedCustomers.includes(customer.id)}
                        onCheckedChange={() => toggleCustomer(customer.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <a href="#" className="text-primary hover:underline font-medium">
                        {customer.name}
                      </a>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {customer.email}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {customer.phone || "—"}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {customer.points}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                        Promotion<br />Message
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                        View stats
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

                {filteredCustomers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      No customers found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </motion.div>
        </main>
      </div>
    </SidebarProvider>
  );
}
