import { useNavigate } from "react-router-dom";
import { Tag, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

interface PromoOptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onStart: () => void;
}

function PromoOptionCard({ icon, title, description, onStart }: PromoOptionCardProps) {
  return (
    <Card className="flex-1 hover:shadow-lg hover:border-primary/30 transition-all duration-200">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-primary mb-4">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <Button className="w-full max-w-[200px]" onClick={onStart}>
          Start now
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CreatePromo() {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <InnerPageTemplate
            title="Create a Promo"
            subtitle="Create a promotion to engage your customers"
          >
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <PromoOptionCard
                icon={<Tag className="w-12 h-12 text-primary" />}
                title="Create a promotion for your customers"
                description="Create and send promotions to your customers, in real time!"
                onStart={() => navigate("/autopilot")}
              />
              
              <PromoOptionCard
                icon={<ShoppingBag className="w-12 h-12 text-primary" />}
                title="Promote one of your products or services"
                description="Promote a product or service from the ones you have uploaded"
                onStart={() => navigate("/autopilot")}
              />
            </div>
          </InnerPageTemplate>
        </main>
      </div>
    </SidebarProvider>
  );
}
