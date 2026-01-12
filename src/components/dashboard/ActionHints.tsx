import { motion } from "framer-motion";
import { Globe, Users, FileSpreadsheet, ChevronRight } from "lucide-react";

interface ActionHintProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function ActionHint({ icon, label, onClick }: ActionHintProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2.5 bg-secondary/70 hover:bg-secondary rounded-lg transition-colors group"
    >
      <span className="text-accent">{icon}</span>
      <span className="text-sm font-medium text-foreground">{label}</span>
      <ChevronRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
    </button>
  );
}

export function ActionHints() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-6"
    >
      <p className="text-sm font-medium text-muted-foreground mb-3">
        Keep adding customers by:
      </p>
      <div className="flex flex-wrap gap-2">
        <ActionHint
          icon={<Globe className="w-4 h-4" />}
          label="Sign up website visitors"
        />
        <ActionHint
          icon={<Users className="w-4 h-4" />}
          label="Sign up social followers"
        />
        <ActionHint
          icon={<FileSpreadsheet className="w-4 h-4" />}
          label="Upload your Excel file"
        />
      </div>
    </motion.div>
  );
}
