import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

const mockProducts: Product[] = [
  { id: "1", name: "Margherita Pizza", price: 12.99, category: "Pizza" },
  { id: "2", name: "Pepperoni Pizza", price: 14.99, category: "Pizza" },
  { id: "3", name: "Caesar Salad", price: 8.99, category: "Salads" },
  { id: "4", name: "Tiramisu", price: 6.99, category: "Desserts" },
  { id: "5", name: "Espresso", price: 3.50, category: "Beverages" },
  { id: "6", name: "Lasagna", price: 15.99, category: "Pasta" },
];

export default function SelectProducts() {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCreatePromo = () => {
    // Navigate to AI promo page with selected products
    navigate("/messages/create-promo/ai", { 
      state: { selectedProducts: selectedProducts.map(id => 
        mockProducts.find(p => p.id === id)
      )}
    });
  };

  return (
    <InnerPageTemplate
      title="Select Products"
      subtitle="Choose one or more products to promote"
      backTo="/messages/create-promo"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {selectedProducts.length} product{selectedProducts.length !== 1 ? 's' : ''} selected
          </p>
          {selectedProducts.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedProducts([])}
              className="text-xs"
            >
              Clear selection
            </Button>
          )}
        </div>

        <div className="grid gap-3">
          {mockProducts.map((product) => {
            const isSelected = selectedProducts.includes(product.id);
            return (
              <Card 
                key={product.id}
                className={`cursor-pointer transition-all duration-200 border-border/50 hover:border-primary/30 ${
                  isSelected ? 'ring-2 ring-primary/20 border-primary/40 bg-primary/5' : ''
                }`}
                onClick={() => toggleProduct(product.id)}
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    isSelected 
                      ? 'bg-primary border-primary' 
                      : 'border-muted-foreground/30'
                  }`}>
                    {isSelected && <Check className="h-3 w-3 text-primary-foreground" />}
                  </div>
                  
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-muted/50 to-muted flex items-center justify-center flex-shrink-0">
                    <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  
                  <div className="text-right">
                    <span className="font-semibold text-foreground">${product.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {mockProducts.length === 0 && (
          <Card className="border-border/50">
            <CardContent className="p-8 text-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-1">No products yet</h3>
              <p className="text-sm text-muted-foreground">
                Upload your products to start creating promotions
              </p>
            </CardContent>
          </Card>
        )}

        <Button 
          onClick={handleCreatePromo}
          disabled={selectedProducts.length === 0}
          className="w-full h-11 rounded-xl gap-2 mt-4"
        >
          <Sparkles className="h-4 w-4" />
          Create Promotion ({selectedProducts.length})
        </Button>
      </div>
    </InnerPageTemplate>
  );
}
