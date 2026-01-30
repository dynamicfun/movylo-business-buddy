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
      <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-200 bg-card">
        <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5">
            {icon}
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 leading-snug">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-6 flex-1">
            {description}
          </p>
          
          <Button className="w-full max-w-[180px] rounded-xl h-11" onClick={onStart}>
            Start now
          </Button>
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
          icon={<Tag className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />}
          title="Create a promotion for your customers"
          description="Create and send promotions to your customers, in real time!"
          onStart={() => navigate("/autopilot")}
          delay={0.1}
        />
        
        <PromoOptionCard
          icon={<ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />}
          title="Promote one of your products or services"
          description="Promote a product or service from the ones you have uploaded"
          onStart={() => navigate("/autopilot")}
          delay={0.2}
        />
      </div>
    </InnerPageTemplate>
  );
}
