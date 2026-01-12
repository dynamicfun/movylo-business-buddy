import { motion } from "framer-motion";
import { Globe, Users, FileSpreadsheet } from "lucide-react";

interface HintChipProps {
  icon: React.ReactNode;
  label: string;
}

function HintChip({ icon, label }: HintChipProps) {
  return (
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors">
      {icon}
      {label}
    </button>
  );
}

export function AddCustomersHint() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 }}
      className="mb-6"
    >
      <p className="text-sm text-muted-foreground mb-2">Add customers from:</p>
      <div className="flex flex-wrap gap-2">
        <HintChip icon={<Globe className="w-3.5 h-3.5" />} label="Website" />
        <HintChip icon={<Users className="w-3.5 h-3.5" />} label="Social" />
        <HintChip icon={<FileSpreadsheet className="w-3.5 h-3.5" />} label="Excel" />
      </div>
    </motion.div>
  );
}
