import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export function DashboardHeader() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between mb-4"
    >
      <div>
        <h1 className="text-xl font-bold text-foreground">Dashboard</h1>
      </div>
      <Link to="/business-info/profile">
        <Button variant="outline" size="sm" className="gap-2">
          <User className="h-4 w-4" />
          My Profile
        </Button>
      </Link>
    </motion.header>
  );
}
