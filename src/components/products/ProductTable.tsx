import { Package, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
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

export function ProductTable({
  products,
  categories,
  onEditProduct,
  onDeleteProduct,
  onChangeCatProduct,
}: ProductTableProps) {
  const getCategoryName = (categoryId: number | null) => {
    if (!categoryId) return null;
    const category = categories.find((c) => c.id === categoryId);
    return category?.name || null;
  };

  if (products.length === 0) {
    return null;
  }

  return (
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
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <Select
                  value={product.categoryId?.toString() || "none"}
                  onValueChange={(value) =>
                    onChangeCatProduct(product.id, value === "none" ? null : parseInt(value))
                  }
                >
                  <SelectTrigger className="w-[140px] h-8 text-xs">
                    <SelectValue placeholder="No category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No category</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
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
