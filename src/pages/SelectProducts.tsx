import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
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

const mockProducts: Product[] = [
  { id: "1", name: "Margherita Pizza", price: 12.99, category: "Pizza", sku: "PIZ-001" },
  { id: "2", name: "Pepperoni Pizza", price: 14.99, category: "Pizza", sku: "PIZ-002" },
  { id: "3", name: "Caesar Salad", price: 8.99, category: "Salads", sku: "SAL-001" },
  { id: "4", name: "Tiramisu", price: 6.99, category: "Desserts", sku: "DES-001" },
  { id: "5", name: "Espresso", price: 3.50, category: "Beverages", sku: "BEV-001" },
  { id: "6", name: "Lasagna", price: 15.99, category: "Pasta", sku: "PAS-001" },
  { id: "7", name: "Caprese Salad", price: 9.99, category: "Salads", sku: "SAL-002" },
  { id: "8", name: "Carbonara", price: 14.50, category: "Pasta", sku: "PAS-002" },
  { id: "9", name: "Gelato", price: 5.99, category: "Desserts", sku: "DES-002" },
  { id: "10", name: "Cappuccino", price: 4.50, category: "Beverages", sku: "BEV-002" },
];

export default function SelectProducts() {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const toggleProduct = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id));
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

  const allSelected = filteredProducts.length > 0 && selectedProducts.length === filteredProducts.length;
  const someSelected = selectedProducts.length > 0 && selectedProducts.length < filteredProducts.length;

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
              onChange={(e) => setSearchQuery(e.target.value)}
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
                    checked={allSelected}
                    ref={(el) => {
                      if (el) (el as any).indeterminate = someSelected;
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
              {filteredProducts.map((product) => {
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
              {filteredProducts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                    No products found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-muted-foreground">
            Showing {filteredProducts.length} of {mockProducts.length} products
          </p>
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
