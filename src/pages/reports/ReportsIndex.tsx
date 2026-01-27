import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  DollarSign, 
  UserPlus, 
  Gift, 
  Mail, 
  Star,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

// Mock data - in real app, this would come from API
const mockData = {
  hasCustomers: true,
  customersCount: 907,
  customersSources: "Google and QR codes",
  hasSales: true,
  salesAmount: "€1,240",
  salesSource: "offers and returning customers",
  hasPromotions: true,
  promotionsCount: 3,
  promotionNote: "One promotion was redeemed recently",
  hasNewsletters: true,
  newsletterNote: "Some customers opened it and clicked through",
  hasContacts: true,
  contactsCount: 42,
  contactsSources: "Google and QR codes",
  hasFeedback: true,
  feedbackNote: "4 new reviews received",
};

interface ReportCardProps {
  icon: React.ElementType;
  title: string;
  hasData: boolean;
  dataLine: string;
  dataSubline?: string;
  emptyLine: string;
  emptySubline: string;
  linkText: string;
  onClick: () => void;
  delay?: number;
}

function ReportCard({ 
  icon: Icon, 
  title, 
  hasData, 
  dataLine, 
  dataSubline,
  emptyLine,
  emptySubline,
  linkText,
  onClick,
  delay = 0 
}: ReportCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Card 
        className="group cursor-pointer hover:shadow-md transition-all duration-200 border-border hover:border-primary/20"
        onClick={onClick}
      >
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
              {hasData ? (
                <>
                  <p className="text-sm text-foreground">{dataLine}</p>
                  {dataSubline && (
                    <p className="text-xs text-muted-foreground mt-0.5">{dataSubline}</p>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground">{emptyLine}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">{emptySubline}</p>
                </>
              )}
              <div className="flex items-center gap-1 mt-3 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                <span>{linkText}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ReportsIndex() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const reports = [
    {
      icon: Users,
      title: t.reportCustomers,
      hasData: mockData.hasCustomers,
      dataLine: `${mockData.customersCount} customers connected`,
      dataSubline: `Most joined from ${mockData.customersSources}.`,
      emptyLine: "No customers yet",
      emptySubline: "Customers will appear here as people join your business.",
      linkText: "View customer report",
      path: "/reports/customers",
    },
    {
      icon: DollarSign,
      title: t.reportSales,
      hasData: mockData.hasSales,
      dataLine: `${mockData.salesAmount} in sales generated`,
      dataSubline: `Sales came mainly from ${mockData.salesSource}.`,
      emptyLine: "No sales yet",
      emptySubline: "Sales will appear here when customers make a purchase or redeem an offer.",
      linkText: "View sales report",
      path: "/reports/sales",
    },
    {
      icon: Gift,
      title: t.reportPromotions,
      hasData: mockData.hasPromotions,
      dataLine: `${mockData.promotionsCount} promotions active`,
      dataSubline: mockData.promotionNote,
      emptyLine: "No promotions yet",
      emptySubline: "This will show activity once you create an offer and customers start using it.",
      linkText: "View promotions report",
      path: "/reports/promotions",
    },
    {
      icon: Mail,
      title: t.reportNewsletters,
      hasData: mockData.hasNewsletters,
      dataLine: "Your last update reached customers",
      dataSubline: mockData.newsletterNote,
      emptyLine: "No updates yet",
      emptySubline: "This will appear after you send your first update to customers.",
      linkText: "View newsletter report",
      path: "/reports/newsletters",
    },
    {
      icon: UserPlus,
      title: t.reportContacts,
      hasData: mockData.hasContacts,
      dataLine: `${mockData.contactsCount} new contacts received`,
      dataSubline: `Most came from ${mockData.contactsSources}.`,
      emptyLine: "No contacts yet",
      emptySubline: "Contacts will appear here as people join from your connected sources.",
      linkText: "View contacts report",
      path: "/reports/contacts",
    },
    {
      icon: Star,
      title: t.reportReviews,
      hasData: mockData.hasFeedback,
      dataLine: "Recent feedback is positive",
      dataSubline: mockData.feedbackNote,
      emptyLine: "No feedback yet",
      emptySubline: "Customer feedback will appear once reviews start coming in.",
      linkText: "View feedback report",
      path: "/reports/reviews",
    },
  ];

  return (
    <InnerPageTemplate title={t.reports} subtitle="A simple overview of what's happening in your business.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((report, index) => (
          <ReportCard
            key={report.path}
            icon={report.icon}
            title={report.title}
            hasData={report.hasData}
            dataLine={report.dataLine}
            dataSubline={report.dataSubline}
            emptyLine={report.emptyLine}
            emptySubline={report.emptySubline}
            linkText={report.linkText}
            onClick={() => navigate(report.path)}
            delay={index * 0.05}
          />
        ))}
      </div>
    </InnerPageTemplate>
  );
}
