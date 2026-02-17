import { UserPlus, Mail, Gift } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Card, CardContent } from "@/components/ui/card";

interface FeedItem {
  id: string;
  type: "signup" | "message" | "offer";
  title: string;
  description: string;
  time: string;
  customerName?: string;
}

const iconMap = {
  signup: <UserPlus className="w-4 h-4 text-primary" />,
  message: <Mail className="w-4 h-4 text-primary" />,
  offer: <Gift className="w-4 h-4 text-primary" />,
};

const LiveFeedPage = () => {
  const { currentLanguage } = useLanguage();

  const feedItems: FeedItem[] = currentLanguage === "it" ? [
    { id: "1", type: "signup", title: "Nuovo cliente", description: "si è iscritto.", customerName: "Carlo Mercado", time: "4 ore fa" },
    { id: "2", type: "message", title: "Aggiornamento messaggio", description: "ha aperto il tuo messaggio.", customerName: "Jodi Frank", time: "9 ore fa" },
    { id: "3", type: "offer", title: "Offerta riscattata", description: "ha riscattato un'offerta.", customerName: "Maria Rossi", time: "1 giorno fa" },
    { id: "4", type: "signup", title: "Nuovo cliente", description: "si è iscritto.", customerName: "Luca Bianchi", time: "1 giorno fa" },
    { id: "5", type: "message", title: "Aggiornamento messaggio", description: "ha cliccato sul tuo link.", customerName: "Anna Verdi", time: "2 giorni fa" },
  ] : [
    { id: "1", type: "signup", title: "New customer", description: "signed up.", customerName: "Carlo Mercado", time: "4 hours ago" },
    { id: "2", type: "message", title: "Message update", description: "opened your message.", customerName: "Jodi Frank", time: "9 hours ago" },
    { id: "3", type: "offer", title: "Offer redeemed", description: "redeemed an offer.", customerName: "Maria Rossi", time: "1 day ago" },
    { id: "4", type: "signup", title: "New customer", description: "signed up.", customerName: "Luca Bianchi", time: "1 day ago" },
    { id: "5", type: "message", title: "Message update", description: "clicked your link.", customerName: "Anna Verdi", time: "2 days ago" },
  ];

  return (
    <InnerPageTemplate
      title={currentLanguage === "it" ? "Feed Attività" : "Activity Feed"}
      subtitle={currentLanguage === "it" ? "Tutte le attività recenti dei tuoi clienti" : "All recent activity from your customers"}
    >
      <div className="space-y-2">
        {feedItems.map((item) => (
          <Card key={item.id} className="border-border/50">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                {iconMap[item.type]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">{item.customerName}</span>
                  <span className="text-sm text-foreground">{item.description}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </InnerPageTemplate>
  );
};

export default LiveFeedPage;
