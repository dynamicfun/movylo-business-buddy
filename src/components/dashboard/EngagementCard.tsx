import { SimpleCard } from "./SimpleCard";
import { MessageSquare, MousePointerClick, Star } from "lucide-react";
import { GrowthIndicator } from "./GrowthIndicator";

interface ActivityRowProps {
  icon: React.ReactNode;
  label: string;
  status: string;
}

function ActivityRow({ icon, label, status }: ActivityRowProps) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0">
      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{status}</p>
      </div>
    </div>
  );
}

interface MetricItemProps {
  label: string;
  value: string | number;
}

function MetricItem({ label, value }: MetricItemProps) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-medium text-foreground">{value}</span>
    </div>
  );
}

interface MetricSectionProps {
  title: string;
  growth?: number;
  children: React.ReactNode;
}

function MetricSection({ title, growth, children }: MetricSectionProps) {
  return (
    <div className="py-2 border-b border-border/50 last:border-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-foreground">{title}</span>
        {growth !== undefined && (
          <span className={`text-xs font-medium ${growth >= 0 ? 'text-emerald-600' : 'text-muted-foreground'}`}>
            {growth >= 0 ? '+' : ''}{growth}%
          </span>
        )}
      </div>
      <div className="pl-0">
        {children}
      </div>
    </div>
  );
}

// Activation mode props (simple)
interface ActivationModeProps {
  isActivationMode?: true;
  messagesOpened?: number;
  socialClicks?: number;
  reviews?: number;
}

// Steady state props (detailed)
interface SteadyStateProps {
  isActivationMode: false;
  messages: {
    growth?: number;
    sent: number;
    opened: string;
    clicked: string;
  };
  contacts: {
    calls: number;
    email: number;
    whatsapp: number;
  };
  socialClicks: {
    growth?: number;
    facebook: number;
    instagram: number;
    google: number;
  };
  interactions: {
    reviews: { count: number; total: number };
    feedback: { count: number; total: number };
    deliveries: { count: number; total: number };
  };
}

type EngagementCardProps = ActivationModeProps | SteadyStateProps;

export function EngagementCard(props: EngagementCardProps) {
  // Check if we're in steady state mode
  if (props.isActivationMode === false) {
    const { messages, contacts, socialClicks, interactions } = props;

    return (
      <SimpleCard
        title="Activity"
        cta="Messages & offers"
        delay={0.15}
      >
        <div className="space-y-0 -mt-1">
          {/* Messages section */}
          <MetricSection title="Messages" growth={messages.growth}>
            <MetricItem label="Sent" value={messages.sent} />
            <MetricItem label="Opened" value={messages.opened} />
            <MetricItem label="Clicked" value={messages.clicked} />
          </MetricSection>

          {/* Contacts received */}
          <MetricSection title="Contacts received">
            <MetricItem label="Calls" value={contacts.calls} />
            <MetricItem label="Email" value={contacts.email} />
            <MetricItem label="WhatsApp" value={contacts.whatsapp} />
          </MetricSection>

          {/* Social clicks */}
          <MetricSection title="Social clicks" growth={socialClicks.growth}>
            <MetricItem label="Facebook" value={socialClicks.facebook} />
            <MetricItem label="Instagram" value={socialClicks.instagram} />
            <MetricItem label="Google" value={socialClicks.google} />
          </MetricSection>

          {/* Interactions */}
          <MetricSection title="Interactions">
            <MetricItem label="Reviews" value={`${interactions.reviews.count} (${interactions.reviews.total})`} />
            <MetricItem label="Feedback" value={`${interactions.feedback.count} (${interactions.feedback.total})`} />
            <MetricItem label="Deliveries" value={`${interactions.deliveries.count} (${interactions.deliveries.total})`} />
          </MetricSection>
        </div>
      </SimpleCard>
    );
  }

  // Activation mode - simple view (default)
  const { messagesOpened = 0, socialClicks = 0, reviews = 0 } = props;
  
  const getStatus = () => {
    const totalActivity = messagesOpened + socialClicks + reviews;
    if (totalActivity > 0) return "starting";
    return "waiting";
  };

  const getActivityStatus = (value: number) => {
    if (value > 0) return "Just started";
    return "Waiting for activity";
  };

  return (
    <SimpleCard
      title="Activity"
      cta="Messages & offers"
      delay={0.15}
      headerRight={<GrowthIndicator status={getStatus()} isActivationMode={true} />}
    >
      <div>
        <ActivityRow
          icon={<MessageSquare className="w-4 h-4" />}
          label="Saw your messages"
          status={getActivityStatus(messagesOpened)}
        />
        <ActivityRow
          icon={<MousePointerClick className="w-4 h-4" />}
          label="Contacted you"
          status={getActivityStatus(socialClicks)}
        />
        <ActivityRow
          icon={<Star className="w-4 h-4" />}
          label="Reviews & feedback"
          status={getActivityStatus(reviews)}
        />
      </div>
    </SimpleCard>
  );
}
