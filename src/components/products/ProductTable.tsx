import { useState } from "react";
import { Package, MoreHorizontal, Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category } from "./CategoryManager";

export interface Product {
  id: number;
  name: string;
  price: number;
  available: boolean;
  categoryId: number | null;
}

interface ProductTableProps {
  products: Product[];
  categories: Category[];
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: number) => void;
  onChangeCatProduct: (productId: number, categoryId: number | null) => void;
}

const PAGE_SIZE = 10;

export function ProductTable({
  products,
  categories,
  onEditProduct,
  onDeleteProduct,
  onChangeCatProduct,
}: ProductTableProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE));
  const pagedProducts = products.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  // Build hierarchical label for a category
  const getCategoryPath = (categoryId: number | null): string => {
    if (!categoryId) return "";
    const cat = categories.find((c) => c.id === categoryId);
    if (!cat) return "";
    if (!cat.parentId) return cat.name;
    const parent = categories.find((c) => c.id === cat.parentId);
    if (!parent) return cat.name;
    if (!parent.parentId) return `${parent.name} › ${cat.name}`;
    const grandparent = categories.find((c) => c.id === parent.parentId);
    return grandparent
      ? `${grandparent.name} › ${parent.name} › ${cat.name}`
      : `${parent.name} › ${cat.name}`;
  };

  // Build grouped options for the select
  const buildCategoryOptions = () => {
    const options: { id: number; label: string; indent: number }[] = [];
    const topLevel = categories.filter((c) => c.level === 1);
    topLevel.forEach((cat) => {
      options.push({ id: cat.id, label: cat.name, indent: 0 });
      const subs = categories.filter((c) => c.parentId === cat.id && c.level === 2);
      subs.forEach((sub) => {
        options.push({ id: sub.id, label: `› ${sub.name}`, indent: 1 });
        const subsubs = categories.filter((c) => c.parentId === sub.id && c.level === 3);
        subsubs.forEach((ss) => {
          options.push({ id: ss.id, label: `›› ${ss.name}`, indent: 2 });
        });
      });
    });
    return options;
  };

  const categoryOptions = buildCategoryOptions();

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Category</TableHead>
              <TableHead className="font-medium">Price</TableHead>
              <TableHead className="font-medium">Availability</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pagedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Select
                    value={product.categoryId?.toString() || "none"}
                    onValueChange={(value) =>
                      onChangeCatProduct(product.id, value === "none" ? null : parseInt(value))
                    }
                  >
                    <SelectTrigger className="w-[180px] h-8 text-xs">
                      <SelectValue placeholder="No category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No category</SelectItem>
                      {categoryOptions.map((opt) => (
                        <SelectItem key={opt.id} value={opt.id.toString()}>
                          <span className={opt.indent === 1 ? "pl-2" : opt.indent === 2 ? "pl-4" : ""}>
                            {opt.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={product.available ? "default" : "secondary"}
                    className={
                      product.available
                        ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        : ""
                    }
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
                      <DropdownMenuItem
                        className="gap-2"
                        onClick={() => onEditProduct(product)}
                      >
                        <Pencil className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="gap-2 text-destructive"
                        onClick={() => onDeleteProduct(product.id)}
                      >
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-muted-foreground">
            Page {page + 1} of {totalPages}
          </p>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={page >= totalPages - 1}
              onClick={() => setPage(page + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

interface EmptyProductStateProps {
  searchQuery: string;
  onAddProduct: () => void;
}

export function EmptyProductState({ searchQuery, onAddProduct }: EmptyProductStateProps) {
  return (
    <div className="text-center py-12 border rounded-lg bg-muted/10">
      <Package className="h-10 w-10 text-muted-foreground/40 mx-auto mb-3" />
      <p className="text-sm text-muted-foreground">
        {searchQuery ? "No products match your search" : "No products added yet"}
      </p>
      {!searchQuery && (
        <Button variant="outline" className="mt-4 gap-2" onClick={onAddProduct}>
          <Package className="h-4 w-4" />
          Add your first product
        </Button>
      )}
    </div>
  );
}
