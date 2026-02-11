import { useState } from "react";
import { FolderOpen, Plus, Pencil, Trash2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface Category {
  id: number;
  name: string;
  parentId: number | null;
  level: 1 | 2 | 3;
  productCount: number;
}

interface CategoryManagerProps {
  categories: Category[];
  onAddCategory: (name: string, parentId: number | null, level: 1 | 2 | 3) => void;
  onEditCategory: (id: number, name: string) => void;
  onDeleteCategory: (id: number) => void;
}

const PAGE_SIZE = 5;

export function CategoryManager({
  categories,
  onAddCategory,
  onEditCategory,
  onDeleteCategory,
}: CategoryManagerProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setParentId] = useState<number | null>(null);
  const [level, setLevel] = useState<1 | 2 | 3>(1);
  const [page, setPage] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  // Build hierarchy: top-level categories with their children inline
  const topLevel = categories.filter((c) => c.level === 1);
  const getChildren = (parentId: number, targetLevel: 2 | 3) =>
    categories.filter((c) => c.parentId === parentId && c.level === targetLevel);

  // Build flat display list with hierarchy
  const displayRows: Category[] = [];
  topLevel.forEach((cat) => {
    displayRows.push(cat);
    if (expandedIds.has(cat.id)) {
      const subs = getChildren(cat.id, 2);
      subs.forEach((sub) => {
        displayRows.push(sub);
        if (expandedIds.has(sub.id)) {
          const subsubs = getChildren(sub.id, 3);
          subsubs.forEach((ss) => displayRows.push(ss));
        }
      });
    }
  });

  const totalPages = Math.max(1, Math.ceil(displayRows.length / PAGE_SIZE));
  const pagedRows = displayRows.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const hasChildren = (id: number) => categories.some((c) => c.parentId === id);

  const handleOpenAdd = (presetParentId: number | null = null, presetLevel: 1 | 2 | 3 = 1) => {
    setEditingCategory(null);
    setCategoryName("");
    setParentId(presetParentId);
    setLevel(presetLevel);
    setIsDialogOpen(true);
  };

  const handleOpenEdit = (category: Category) => {
    setEditingCategory(category);
    setCategoryName(category.name);
    setParentId(category.parentId);
    setLevel(category.level);
    setIsDialogOpen(true);
  };

  const handleSave = () => {
    if (!categoryName.trim()) return;
    if (editingCategory) {
      onEditCategory(editingCategory.id, categoryName.trim());
    } else {
      onAddCategory(categoryName.trim(), parentId, level);
    }
    setIsDialogOpen(false);
    setCategoryName("");
    setEditingCategory(null);
  };

  // Available parents for the dialog
  const parentOptions = (() => {
    if (level === 1) return [];
    if (level === 2) return categories.filter((c) => c.level === 1);
    // level 3 - parent must be level 2
    return categories.filter((c) => c.level === 2);
  })();

  const getLevelLabel = (l: number) => {
    if (l === 1) return "Category";
    if (l === 2) return "Subcategory";
    return "Sub-subcategory";
  };

  const getIndent = (l: number) => {
    if (l === 2) return "pl-8";
    if (l === 3) return "pl-14";
    return "";
  };

  return (
    <>
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Categories</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Organize products into categories and subcategories (up to 3 levels)
              </p>
            </div>
            <Button variant="outline" size="sm" className="gap-2" onClick={() => handleOpenAdd(null, 1)}>
              <Plus className="h-4 w-4" />
              Add category
            </Button>
          </div>

          {categories.length > 0 ? (
            <>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30">
                      <TableHead className="font-medium">Name</TableHead>
                      <TableHead className="font-medium">Level</TableHead>
                      <TableHead className="font-medium">Products</TableHead>
                      <TableHead className="w-[140px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pagedRows.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell className={`font-medium ${getIndent(category.level)}`}>
                          <div className="flex items-center gap-2">
                            {hasChildren(category.id) && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => toggleExpand(category.id)}
                              >
                                {expandedIds.has(category.id) ? (
                                  <ChevronUp className="h-3.5 w-3.5" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5" />
                                )}
                              </Button>
                            )}
                            <FolderOpen className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{category.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {getLevelLabel(category.level)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">
                            {category.productCount}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {category.level < 3 && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                title={`Add ${category.level === 1 ? "subcategory" : "sub-subcategory"}`}
                                onClick={() => {
                                  setExpandedIds((prev) => new Set(prev).add(category.id));
                                  handleOpenAdd(category.id, (category.level + 1) as 2 | 3);
                                }}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            )}
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
                              disabled={category.productCount > 0 || hasChildren(category.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
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
              {editingCategory ? `Edit ${getLevelLabel(level).toLowerCase()}` : `Add ${getLevelLabel(level).toLowerCase()}`}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {!editingCategory && (
              <div className="space-y-2">
                <Label>Level</Label>
                <Select
                  value={level.toString()}
                  onValueChange={(v) => {
                    const newLevel = parseInt(v) as 1 | 2 | 3;
                    setLevel(newLevel);
                    setParentId(null);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Category</SelectItem>
                    <SelectItem value="2" disabled={categories.filter((c) => c.level === 1).length === 0}>
                      Subcategory
                    </SelectItem>
                    <SelectItem value="3" disabled={categories.filter((c) => c.level === 2).length === 0}>
                      Sub-subcategory
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {!editingCategory && level > 1 && (
              <div className="space-y-2">
                <Label>Parent {level === 2 ? "category" : "subcategory"}</Label>
                <Select
                  value={parentId?.toString() || ""}
                  onValueChange={(v) => setParentId(parseInt(v))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select a ${level === 2 ? "category" : "subcategory"}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {parentOptions.map((p) => (
                      <SelectItem key={p.id} value={p.id.toString()}>
                        {p.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="category-name">Name</Label>
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
            <Button
              onClick={handleSave}
              disabled={!categoryName.trim() || (level > 1 && !parentId && !editingCategory)}
            >
              {editingCategory ? "Save changes" : `Add ${getLevelLabel(level).toLowerCase()}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
