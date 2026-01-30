import { motion } from "framer-motion";
import { CheckCircle2, Play, Pause, Settings, UserPlus, RefreshCw, Heart, Star, Percent, DollarSign, Crown, X, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

interface AutopilotMomentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
}

function AutopilotMomentCard({ icon, title, description, isOn, onToggle }: AutopilotMomentCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="border border-border/50">
        <CollapsibleTrigger asChild>
          <CardContent className="p-4 cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                {icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${isOn ? 'bg-green-500/20 text-green-600' : 'bg-muted text-muted-foreground'}`}>
                  {isOn ? 'On' : 'Paused'}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </div>
          </CardContent>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-4 pt-0 border-t border-border/50">
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-2">
                <Switch checked={isOn} onCheckedChange={onToggle} />
                <span className="text-sm text-muted-foreground">
                  {isOn ? 'On' : 'Paused'}
                </span>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-1.5" />
                Customize
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

type IncentiveType = 'percent' | 'dollar' | 'vip' | 'none';

export default function Autopilot() {
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  const [selectedIncentive, setSelectedIncentive] = useState<IncentiveType>('percent');
  const [customizationOpen, setCustomizationOpen] = useState(false);
  const [momentsOpen, setMomentsOpen] = useState(false);
  const [moments, setMoments] = useState({
    welcome: true,
    bringBack: true,
    thankLoyal: true,
    askReview: true,
  });

  const toggleMoment = (key: keyof typeof moments) => {
    setMoments(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const incentiveOptions: { type: IncentiveType; icon: React.ReactNode; label: string }[] = [
    { type: 'percent', icon: <Percent className="h-4 w-4" />, label: '% Discount' },
    { type: 'dollar', icon: <DollarSign className="h-4 w-4" />, label: '$ Off' },
    { type: 'vip', icon: <Crown className="h-4 w-4" />, label: 'VIP perk' },
    { type: 'none', icon: <X className="h-4 w-4" />, label: 'No incentive' },
  ];

  return (
    <InnerPageTemplate
      title="Autopilot"
      subtitle="Brings customers back over time"
      helperText="Nothing happens until customers join."
      backTo="/"
    >
      <div className="space-y-6">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
            <CardContent className="p-6">
              <p className="text-sm text-foreground mb-4">
                Autopilot helps you stay in touch with customers after they join your business.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                It sends a few simple, human messages at the right moments to help customers remember you and come back.
              </p>
              <p className="text-sm text-muted-foreground">
                This runs quietly in the background.
                <br />
                You can change or pause it anytime.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Autopilot Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className={`border-2 ${autopilotEnabled ? 'border-green-500/30 bg-green-500/5' : 'border-border'}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${autopilotEnabled ? 'bg-green-500/20' : 'bg-muted'}`}>
                    {autopilotEnabled ? (
                      <Play className="h-5 w-5 text-green-600" />
                    ) : (
                      <Pause className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Autopilot is currently</p>
                    <h3 className="font-semibold text-foreground text-lg">
                      {autopilotEnabled ? 'On' : 'Off'}
                    </h3>
                  </div>
                </div>
                <Switch 
                  checked={autopilotEnabled} 
                  onCheckedChange={setAutopilotEnabled}
                />
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><span className="font-medium text-foreground">When On,</span> Movylo sends messages over time after customers join</p>
                <p><span className="font-medium text-foreground">When Off,</span> nothing is sent</p>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-3">
                You're always in control.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Standard configuration - Encourage customers to come back */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-1 text-foreground">Encourage customers to come back</h3>
              <p className="text-xs text-muted-foreground/70 mb-4">(optional)</p>
              <p className="text-sm text-muted-foreground mb-4">
                A small incentive can be included in messages sent over time.
              </p>
              <p className="text-sm text-muted-foreground mb-3">Choose what you'd like to include:</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {incentiveOptions.map((option) => (
                  <button
                    key={option.type}
                    onClick={() => setSelectedIncentive(option.type)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all ${
                      selectedIncentive === option.type
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {option.icon}
                    <span className="text-xs font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground/70">
                You can change this anytime. Customers only see it if they choose to use it.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Customization entry point - Collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Collapsible open={customizationOpen} onOpenChange={setCustomizationOpen}>
            <Card className="border-dashed">
              <CollapsibleTrigger asChild>
                <CardContent className="p-4 cursor-pointer hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Customize Autopilot</h3>
                      <p className="text-xs text-muted-foreground">(optional)</p>
                    </div>
                    {customizationOpen ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-6 pb-6 border-t border-border/50">
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Autopilot works as it is.<br />
                      If you want, you can customize how individual moments work.
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">Here you can:</p>
                    <ul className="space-y-1.5 mb-4">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>manage single moments</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>decide how and when social posts are shared</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>add or remove channels like SMS or WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>change message tone or images</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>create your own custom moments</span>
                      </li>
                    </ul>
                    <p className="text-xs text-muted-foreground/70">
                      This is optional. Autopilot keeps working even if you don't change anything.
                    </p>
                  </div>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </motion.div>

        {/* Autopilot Moments - Collapsible */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Collapsible open={momentsOpen} onOpenChange={setMomentsOpen}>
            <Card>
              <CollapsibleTrigger asChild>
                <CardContent className="p-4 cursor-pointer hover:bg-muted/30 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">Autopilot moments</h3>
                      <p className="text-sm text-muted-foreground">These are the moments Autopilot uses to stay in touch.</p>
                    </div>
                    {momentsOpen ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardContent>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4 border-t border-border/50">
                  <div className="pt-4 mb-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      Each moment:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4 ml-4">
                      <li>• runs automatically once customers join</li>
                      <li>• can be turned on or off</li>
                      <li>• can be customized if needed</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <AutopilotMomentCard
                      icon={<UserPlus className="h-4 w-4 text-primary" />}
                      title="Welcome new customers"
                      description="Sends a short welcome when someone joins."
                      isOn={moments.welcome}
                      onToggle={() => toggleMoment('welcome')}
                    />
                    <AutopilotMomentCard
                      icon={<RefreshCw className="h-4 w-4 text-primary" />}
                      title="Bring customers back"
                      description="Reaches out after a quiet period."
                      isOn={moments.bringBack}
                      onToggle={() => toggleMoment('bringBack')}
                    />
                    <AutopilotMomentCard
                      icon={<Heart className="h-4 w-4 text-primary" />}
                      title="Thank loyal customers"
                      description="Sends a small thank-you to returning customers."
                      isOn={moments.thankLoyal}
                      onToggle={() => toggleMoment('thankLoyal')}
                    />
                    <AutopilotMomentCard
                      icon={<Star className="h-4 w-4 text-primary" />}
                      title="Ask for a review"
                      description="Invites customers to leave a review at the right time."
                      isOn={moments.askReview}
                      onToggle={() => toggleMoment('askReview')}
                    />
                    
                    {/* Custom moments card */}
                    <Card className="border border-dashed border-border/70 bg-muted/20">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-muted shrink-0">
                              <Plus className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground text-sm">Custom moments</h4>
                              <p className="text-xs text-muted-foreground">Create your own reminders or events.</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Create a moment
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground/70 mt-3 ml-11">
                          Optional. Use this only if you want.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </motion.div>

        {/* Bottom reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center pt-4"
        >
          <p className="text-xs text-muted-foreground/60">
            Autopilot works in the background.
            <br />
            You decide when and how it helps.
          </p>
        </motion.div>
      </div>
    </InnerPageTemplate>
  );
}
