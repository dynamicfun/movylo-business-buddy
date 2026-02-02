import { useNavigate } from "react-router-dom";
import { Tag, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { motion } from "framer-motion";

interface PromoOptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onStart: () => void;
  delay?: number;
}

function PromoOptionCard({ icon, title, description, onStart, delay = 0 }: PromoOptionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
    >
      <Card className="h-full hover:shadow-md hover:border-primary/20 transition-all duration-200 border-border/50">
        <CardContent className="p-5 sm:p-6 flex flex-col h-full">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground mb-1 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <Button className="w-full rounded-xl h-10" onClick={onStart}>
              Start now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function CreatePromo() {
  const navigate = useNavigate();

  return (
    <InnerPageTemplate
      title="Create a Promo"
      subtitle="Create a promotion to engage your customers"
      backTo="/"
    >
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        <PromoOptionCard
          icon={<Tag className="w-5 h-5 text-primary" />}
          title="Create a promotion for your customers"
          description="Create and send promotions to your customers, in real time!"
          onStart={() => navigate("/messages/create-promo/ai")}
          delay={0.1}
        />
        
        <PromoOptionCard
          icon={<ShoppingBag className="w-5 h-5 text-primary" />}
          title="Promote one of your products or services"
          description="Promote a product or service from the ones you have uploaded"
          onStart={() => navigate("/autopilot")}
          delay={0.2}
        />
      </div>
    </InnerPageTemplate>
  );
}
