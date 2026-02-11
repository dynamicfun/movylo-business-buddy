import { useState } from "react";
import { Package, Plus, Search, Upload, CheckCircle2 } from "lucide-react";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { CategoryManager, Category } from "@/components/products/CategoryManager";
import { ProductTable, Product, EmptyProductState } from "@/components/products/ProductTable";

// Mock data
const initialCategories: Category[] = [
  { id: 1, name: "Hot Drinks", parentId: null, level: 1, productCount: 2 },
  { id: 2, name: "Cold Drinks", parentId: null, level: 1, productCount: 0 },
  { id: 3, name: "Coffee", parentId: 1, level: 2, productCount: 0 },
  { id: 4, name: "Tea", parentId: 1, level: 2, productCount: 0 },
];

const initialProducts: Product[] = [
  { id: 1, name: "Espresso", price: 2.5, available: true, categoryId: 3 },
  { id: 2, name: "Cappuccino", price: 3.5, available: true, categoryId: 3 },
];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const productLimit = 25;
  const currentCount = products.length;

  // Category handlers
  const handleAddCategory = (name: string, parentId: number | null, level: 1 | 2 | 3) => {
    const newCategory: Category = {
      id: Date.now(),
      name,
      parentId,
      level,
      productCount: 0,
    };
    setCategories([...categories, newCategory]);
  };

  const handleEditCategory = (id: number, name: string) => {
    setCategories(categories.map((c) => (c.id === id ? { ...c, name } : c)));
  };

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((c) => c.id !== id));
    setProducts(products.map((p) => (p.categoryId === id ? { ...p, categoryId: null } : p)));
  };

  // Product handlers
  const handleChangeProductCategory = (productId: number, categoryId: number | null) => {
    const oldProduct = products.find((p) => p.id === productId);
    const oldCategoryId = oldProduct?.categoryId;

    setProducts(products.map((p) => (p.id === productId ? { ...p, categoryId } : p)));

    setCategories(
      categories.map((c) => {
        if (c.id === oldCategoryId) {
          return { ...c, productCount: Math.max(0, c.productCount - 1) };
        }
        if (c.id === categoryId) {
          return { ...c, productCount: c.productCount + 1 };
        }
        return c;
      })
    );
  };

  const handleEditProduct = (product: Product) => {
    console.log("Edit product:", product);
  };

  const handleDeleteProduct = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (product?.categoryId) {
      setCategories(
        categories.map((c) =>
          c.id === product.categoryId ? { ...c, productCount: Math.max(0, c.productCount - 1) } : c
        )
      );
    }
    setProducts(products.filter((p) => p.id !== id));
  };

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
                "included in your digital menu (if enabled)",
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

        {/* Categories section */}
        <CategoryManager
          categories={categories}
          onAddCategory={handleAddCategory}
          onEditCategory={handleEditCategory}
          onDeleteCategory={handleDeleteCategory}
        />

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
              <ProductTable
                products={filteredProducts}
                categories={categories}
                onEditProduct={handleEditProduct}
                onDeleteProduct={handleDeleteProduct}
                onChangeCatProduct={handleChangeProductCategory}
              />
            ) : (
              <EmptyProductState
                searchQuery={searchQuery}
                onAddProduct={() => console.log("Add product")}
              />
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
                "You can start with just one product",
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
