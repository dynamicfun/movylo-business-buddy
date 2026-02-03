import { useState } from "react";
import { Package, Plus, Search, Upload, CheckCircle2, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock products data
const mockProducts = [
  { id: 1, name: "Espresso", price: 2.50, available: true },
  { id: 2, name: "Cappuccino", price: 3.50, available: true },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products] = useState(mockProducts);
  
  const productLimit = 25;
  const currentCount = products.length;

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery)
  );

  return (
    <InnerPageTemplate
      title="Products"
      subtitle="What customers can buy from you"
      helperText="Optional. You can add products or services anytime."
      icon={Package}
      backTo="/"
    >
      <div className="space-y-6">
        {/* How this works */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-primary mb-2">How this works</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Products and services you add here can be:
            </p>
            <ul className="space-y-1.5">
              {[
                "shared with customers",
                "ordered online",
                "included in your digital menu (if enabled)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground/70 mt-3">
              You don't need to add everything at once.
            </p>
          </CardContent>
        </Card>

        {/* Your products section */}
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Your products</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {currentCount} {currentCount === 1 ? "product" : "products"} added
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  You can add up to {productLimit} products on your current plan.
                  {currentCount >= productLimit - 5 && (
                    <Link to="/upgrade" className="text-primary hover:underline ml-1">
                      Upgrade for more
                    </Link>
                  )}
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add product or service
              </Button>
            </div>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or price"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Product table */}
            {filteredProducts.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30">
                      <TableHead className="font-medium">Name</TableHead>
                      <TableHead className="font-medium">Price</TableHead>
                      <TableHead className="font-medium">Availability</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={product.available ? "default" : "secondary"}
                            className={product.available ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : ""}
                          >
                            {product.available ? "Available" : "Unavailable"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="gap-2">
                                <Pencil className="h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2 text-destructive">
                                <Trash2 className="h-4 w-4" />
                                Remove
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-muted/10">
                <Package className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">
                  {searchQuery ? "No products match your search" : "No products added yet"}
                </p>
                {!searchQuery && (
                  <Button variant="outline" className="mt-4 gap-2">
                    <Plus className="h-4 w-4" />
                    Add your first product
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Import section */}
        <Card>
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-foreground mb-1">Import products</h3>
            <p className="text-xs text-muted-foreground mb-4">
              You can upload products from a file if you already have a list.
            </p>
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import from file
            </Button>
          </CardContent>
        </Card>

        {/* Reassurance footer */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
          <CardContent className="p-5">
            <ul className="space-y-2">
              {[
                "Products can be edited or removed anytime",
                "Customers only see products you choose to show",
                "You can start with just one product"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </InnerPageTemplate>
  );
}
