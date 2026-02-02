import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sku?: string;
}

// Generate more mock products to demonstrate pagination
const mockProducts: Product[] = Array.from({ length: 47 }, (_, i) => {
  const categories = ["Pizza", "Salads", "Desserts", "Beverages", "Pasta", "Appetizers"];
  const names = [
    "Margherita Pizza", "Pepperoni Pizza", "Caesar Salad", "Tiramisu", "Espresso",
    "Lasagna", "Caprese Salad", "Carbonara", "Gelato", "Cappuccino", "Bruschetta",
    "Minestrone Soup", "Risotto", "Panna Cotta", "Limoncello"
  ];
  const category = categories[i % categories.length];
  const name = names[i % names.length];
  return {
    id: String(i + 1),
    name: i >= names.length ? `${name} #${Math.floor(i / names.length) + 1}` : name,
    price: Math.round((8 + Math.random() * 12) * 100) / 100,
    category,
    sku: `${category.substring(0, 3).toUpperCase()}-${String(i + 1).padStart(3, "0")}`,
  };
});

const ITEMS_PER_PAGE = 10;

export default function SelectProducts() {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return mockProducts;
    const query = searchQuery.toLowerCase();
    return mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.sku?.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when search changes
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAll = () => {
    const pageIds = paginatedProducts.map((p) => p.id);
    const allPageSelected = pageIds.every((id) => selectedProducts.includes(id));
    
    if (allPageSelected) {
      setSelectedProducts((prev) => prev.filter((id) => !pageIds.includes(id)));
    } else {
      setSelectedProducts((prev) => [...new Set([...prev, ...pageIds])]);
    }
  };

  const handleCreatePromo = () => {
    navigate("/messages/create-promo/ai", {
      state: {
        selectedProducts: selectedProducts.map((id) =>
          mockProducts.find((p) => p.id === id)
        ),
      },
    });
  };

  const pageIds = paginatedProducts.map((p) => p.id);
  const allPageSelected = pageIds.length > 0 && pageIds.every((id) => selectedProducts.includes(id));
  const somePageSelected = pageIds.some((id) => selectedProducts.includes(id)) && !allPageSelected;

  return (
    <InnerPageTemplate
      title="Select Products"
      subtitle="Choose one or more products to promote"
      backTo="/messages/create-promo"
    >
      <div className="space-y-4">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9 h-10 rounded-lg"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              {selectedProducts.length} selected
            </span>
            {selectedProducts.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProducts([])}
                className="text-xs h-8"
              >
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="border border-border/50 rounded-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="w-12">
                  <Checkbox
                    checked={allPageSelected}
                    ref={(el) => {
                      if (el) (el as any).indeterminate = somePageSelected;
                    }}
                    onCheckedChange={toggleAll}
                  />
                </TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="hidden sm:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">SKU</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProducts.map((product) => {
                const isSelected = selectedProducts.includes(product.id);
                return (
                  <TableRow
                    key={product.id}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-primary/5" : ""
                    }`}
                    onClick={() => toggleProduct(product.id)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleProduct(product.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="hidden sm:table-cell text-muted-foreground">
                      {product.category}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground text-xs">
                      {product.sku}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      ${product.price.toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
              {paginatedProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer with pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <p className="text-xs text-muted-foreground">
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} products
          </p>
          
          {totalPages > 1 && (
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 5) return true;
                  if (page === 1 || page === totalPages) return true;
                  return Math.abs(page - currentPage) <= 1;
                })
                .map((page, idx, arr) => (
                  <span key={page} className="flex items-center">
                    {idx > 0 && arr[idx - 1] !== page - 1 && (
                      <span className="px-1 text-muted-foreground">...</span>
                    )}
                    <Button
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="h-8 w-8 p-0"
                    >
                      {page}
                    </Button>
                  </span>
                ))}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          <Button
            onClick={handleCreatePromo}
            disabled={selectedProducts.length === 0}
            className="h-10 rounded-xl gap-2 px-6"
          >
            <Sparkles className="h-4 w-4" />
            Create Promotion ({selectedProducts.length})
          </Button>
        </div>
      </div>
    </InnerPageTemplate>
  );
}
