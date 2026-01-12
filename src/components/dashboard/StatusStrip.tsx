import { motion } from "framer-motion";
import { Users, MessageSquare, TrendingUp } from "lucide-react";

interface StatusItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}

export function StatusStrip() {
  const statusItems: StatusItem[] = [
    {
      icon: <Users className="w-4 h-4" />,
      label: "Customers",
      value: "1 added",
      highlight: true,
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      label: "Messages",
      value: "Active",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "My business",
      value: "Starting",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="flex flex-wrap items-center gap-2 md:gap-0 md:divide-x divide-border bg-card rounded-xl border border-border p-1 mb-6"
    >
      {statusItems.map((item, index) => (
        <div
          key={item.label}
          className="flex items-center gap-3 px-4 py-2.5 flex-1 min-w-[140px]"
        >
          <div className={`${item.highlight ? 'text-accent' : 'text-muted-foreground'}`}>
            {item.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground font-medium">
              {item.label}
            </span>
            <span className={`text-sm font-semibold ${item.highlight ? 'text-accent' : 'text-foreground'}`}>
              {item.value}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
