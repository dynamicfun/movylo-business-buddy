import { motion } from "framer-motion";
import { Eye, MessageCircle, Star, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  status: "waiting" | "no-activity";
  delay?: number;
}

function ActivityCard({ icon, title, status, delay = 0 }: ActivityCardProps) {
  const statusText = status === "waiting" ? "Waiting for activity" : "No activity yet";
  const statusIcon = status === "waiting" ? <Clock className="w-3.5 h-3.5" /> : null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-secondary/50 rounded-lg p-4 border border-border/50"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center border border-border">
          {icon}
        </div>
        <h4 className="text-sm font-medium text-foreground pt-2">{title}</h4>
      </div>
      <div className="flex items-center gap-2 text-muted-foreground">
        {statusIcon}
        <span className="text-sm">{statusText}</span>
      </div>
    </motion.div>
  );
}

export function ActivitySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="dashboard-card p-6"
    >
      <h2 className="text-lg font-semibold text-foreground mb-6">
        What customers are doing
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <ActivityCard
          icon={<Eye className="w-4 h-4 text-muted-foreground" />}
          title="Customers saw your messages"
          status="waiting"
          delay={0.25}
        />
        <ActivityCard
          icon={<MessageCircle className="w-4 h-4 text-muted-foreground" />}
          title="Customers contacted you"
          status="no-activity"
          delay={0.3}
        />
      </div>
      
      <div className="mb-6">
        <ActivityCard
          icon={<Star className="w-4 h-4 text-muted-foreground" />}
          title="Reviews & feedback"
          status="no-activity"
          delay={0.35}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <Button variant="outline" className="w-full gap-2 justify-center">
          Messages & offers
        </Button>
        
        <Button
          variant="ghost"
          className="w-full justify-between text-muted-foreground hover:text-foreground"
        >
          See details
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
}
