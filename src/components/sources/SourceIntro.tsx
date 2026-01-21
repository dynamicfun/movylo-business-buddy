import { LucideIcon } from "lucide-react";

interface Benefit {
  text: string;
}

interface SourceIntroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  benefits: Benefit[];
  customerViewTitle: string;
  customerViewItems: string[];
}

const SourceIntro = ({
  icon: Icon,
  title,
  subtitle,
  description,
  benefits,
  customerViewTitle,
  customerViewItems,
}: SourceIntroProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-1">{subtitle}</p>
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* What you get */}
        <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
          <h3 className="font-semibold text-foreground mb-3">What you get from this</h3>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">✓</span>
                {benefit.text}
              </li>
            ))}
          </ul>
        </div>

        {/* What customers see */}
        <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
          <h3 className="font-semibold text-foreground mb-3">{customerViewTitle}</h3>
          <ul className="space-y-2">
            {customerViewItems.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SourceIntro;
