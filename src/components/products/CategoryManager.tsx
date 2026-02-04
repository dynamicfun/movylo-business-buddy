import { useState } from "react";
import { FolderOpen, Plus, Pencil, Trash2, GripVertical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export interface Category {
  id: number;
  name: string;
  productCount: number;
}

interface CategoryManagerProps {
  categories: Category[];
  onAddCategory: (name: string) => void;
  onEditCategory: (id: number, name: string) => void;
  onDeleteCategory: (id: number) => void;
}

export function CategoryManager({
  categories,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
}: CategoryManagerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState("");

  const handleOpenAdd = () => {
    setEditingCategory(null);
    setCategoryName("");
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!categoryName.trim()) return;
    
    if (editingCategory) {
      onEditCategory(editingCategory.id, categoryName.trim());
    } else {
      onAddCategory(categoryName.trim());
    }
    setIsDialogOpen(false);
    setCategoryName("");
    setEditingCategory(null);
  };

  return (
    <>
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Organize your products into groups
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleOpenAdd}>
              <Plus className="h-4 w-4" />
              Add category
            </Button>
          </div>

          {categories.length > 0 ? (
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center justify-between p-3 border rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <GripVertical className="h-4 w-4 text-muted-foreground/50" />
                    <FolderOpen className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.productCount} {category.productCount === 1 ? "product" : "products"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleOpenEdit(category)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => onDeleteCategory(category.id)}
                      disabled={category.productCount > 0}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border rounded-lg bg-muted/10">
              <FolderOpen className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">No categories yet</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Categories help organize your products for customers
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingCategory ? "Edit category" : "Add category"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="category-name">Category name</Label>
              <Input
                id="category-name"
                placeholder="e.g., Beverages, Main Courses, Desserts"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!categoryName.trim()}>
              {editingCategory ? "Save changes" : "Add category"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
