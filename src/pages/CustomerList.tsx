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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UserPlus,
  Upload,
  Download,
  Search,
  Filter,
  ChevronUp,
  ChevronDown,
  HelpCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

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
        <main className="flex-1 overflow-auto">
          <div className="max-w-[1200px] mx-auto p-4 md:p-6">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-4"
          >
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-foreground">My Customer List</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Stay in touch with your customers and prospects
              </p>
            </div>
          </motion.header>

          {/* Stats & Actions Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-xl border p-4 md:p-6 mb-6"
          >
            {/* Stats Row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-foreground">{mockCustomers.length}</span>
                <span className="text-muted-foreground">customers</span>
              </div>
              
              <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                {mockCustomers.length} / 2,500 in your plan
                <span className="mx-1.5">·</span>
                <a href="#" className="text-primary hover:underline font-medium">
                  Upgrade
                </a>
              </div>
            </div>

            {/* Actions Row */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Button size="sm" className="gap-2 rounded-lg">
                <UserPlus className="h-4 w-4" />
                Add customer
              </Button>

              <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                <Upload className="h-4 w-4" />
                Import Excel
              </Button>

              <Button variant="outline" size="sm" className="gap-2 rounded-lg">
                <Download className="h-4 w-4" />
                Export
              </Button>
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
                className="mt-4 space-y-4"
              >
                {/* First row of filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Age (more than)" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="18">18+</SelectItem>
                      <SelectItem value="25">25+</SelectItem>
                      <SelectItem value="35">35+</SelectItem>
                      <SelectItem value="45">45+</SelectItem>
                      <SelectItem value="55">55+</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Age (less than)" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="25">Under 25</SelectItem>
                      <SelectItem value="35">Under 35</SelectItem>
                      <SelectItem value="45">Under 45</SelectItem>
                      <SelectItem value="55">Under 55</SelectItem>
                      <SelectItem value="65">Under 65</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Signup" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="last7">Last 7 days</SelectItem>
                      <SelectItem value="last30">Last 30 days</SelectItem>
                      <SelectItem value="last90">Last 90 days</SelectItem>
                      <SelectItem value="thisyear">This year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Second row of filters */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Has birthday in" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="jan">January</SelectItem>
                      <SelectItem value="feb">February</SelectItem>
                      <SelectItem value="mar">March</SelectItem>
                      <SelectItem value="apr">April</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="jun">June</SelectItem>
                      <SelectItem value="jul">July</SelectItem>
                      <SelectItem value="aug">August</SelectItem>
                      <SelectItem value="sep">September</SelectItem>
                      <SelectItem value="oct">October</SelectItem>
                      <SelectItem value="nov">November</SelectItem>
                      <SelectItem value="dec">December</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Reached with promo discount" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Using the App" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Group of customers" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="vip">VIP</SelectItem>
                      <SelectItem value="new">New customers</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="loyal">Loyal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Third row - Source filter */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Source" />
                    </SelectTrigger>
                    <SelectContent className="bg-background z-50">
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="qrcode">QR Code</SelectItem>
                      <SelectItem value="manual">Manual entry</SelectItem>
                      <SelectItem value="import">Import</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter links */}
                <div className="flex flex-col gap-2 pt-2">
                  <a href="#" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Create a new public filter
                    <HelpCircle className="h-3 w-3" />
                  </a>
                  <a href="#" className="text-primary hover:underline text-sm inline-flex items-center gap-1">
                    Create new private filter
                    <HelpCircle className="h-3 w-3" />
                  </a>
                </div>
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
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
