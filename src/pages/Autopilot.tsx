import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Play, Pause, Settings, UserPlus, RefreshCw, Heart, Star, Shield, Percent, DollarSign, Crown, X, Plus, ChevronDown, ChevronUp, BarChart3, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AutopilotMomentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
  delay?: number;
}

function AutopilotMomentCard({ icon, title, description, isOn, onToggle, delay = 0 }: AutopilotMomentCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
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
                    {isOn ? 'On' : 'Off'}
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
                    {isOn ? 'Active' : 'Paused'}
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
    </motion.div>
  );
}

type IncentiveType = 'percent' | 'dollar' | 'vip' | 'none';

export default function Autopilot() {
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  const [selectedIncentive, setSelectedIncentive] = useState<IncentiveType>('percent');
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Autopilot</h1>
                <p className="text-sm text-muted-foreground">Brings customers back over time</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground/70 ml-9 mb-6">
              Nothing happens until customers join.
            </p>

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

              {/* Encourage customers to come back */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-foreground">Encourage customers to come back</h3>
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

              {/* How Autopilot Helps */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-foreground">How Autopilot helps</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once customers join, Autopilot checks in at natural moments.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">For example, it can:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>welcome new customers</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>remind customers after some time</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>thank customers who return often</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>ask for a review when it makes sense</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Messages are spaced out and never sent all at once.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      You don't need to plan or schedule anything.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Autopilot Moments */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-foreground mb-1">Autopilot moments</h3>
                  <p className="text-sm text-primary font-medium mb-3">When messages are sent</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Below are the moments Autopilot uses to stay in touch.
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Each moment runs automatically once customers join.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Inside each one, you can:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-3 ml-4">
                    <li>• see what happens</li>
                    <li>• turn it on or off</li>
                    <li>• adjust details if you want</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    If you don't change anything, Autopilot keeps working as it is.
                  </p>
                </div>

                <div className="space-y-3">
                  <AutopilotMomentCard
                    icon={<UserPlus className="h-4 w-4 text-primary" />}
                    title="Welcome new customers"
                    description="Sends a short welcome after someone joins."
                    isOn={moments.welcome}
                    onToggle={() => toggleMoment('welcome')}
                    delay={0.3}
                  />
                  <AutopilotMomentCard
                    icon={<RefreshCw className="h-4 w-4 text-primary" />}
                    title="Bring customers back"
                    description="Reaches out after a quiet period."
                    isOn={moments.bringBack}
                    onToggle={() => toggleMoment('bringBack')}
                    delay={0.35}
                  />
                  <AutopilotMomentCard
                    icon={<Heart className="h-4 w-4 text-primary" />}
                    title="Thank loyal customers"
                    description="Sends a small thank-you to returning customers."
                    isOn={moments.thankLoyal}
                    onToggle={() => toggleMoment('thankLoyal')}
                    delay={0.4}
                  />
                  <AutopilotMomentCard
                    icon={<Star className="h-4 w-4 text-primary" />}
                    title="Ask for a review"
                    description="Invites customers to leave a review at the right time."
                    isOn={moments.askReview}
                    onToggle={() => toggleMoment('askReview')}
                    delay={0.45}
                  />
                  
                  {/* Custom moments card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
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
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>

              {/* What you'll see in your dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <Card className="bg-secondary/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">What you'll see in your dashboard</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      You'll see real outcomes, like:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>a customer signed up</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>someone made a reservation</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>a sale came from a message</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      You won't see every small action.
                      <br />
                      <span className="font-medium text-foreground">Just what matters.</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Change anything, anytime */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <RotateCcw className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Change anything, anytime</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">You can:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>turn Autopilot on or off</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>change the incentive</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>adjust messages or images</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>pause individual moments</span>
                      </li>
                    </ul>
                    <p className="text-sm font-medium text-foreground">
                      Nothing is permanent.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bottom Reassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="text-center py-4"
              >
                <p className="text-xs text-muted-foreground/60">
                  Autopilot works in the background.
                  <br />
                  You decide when and how it helps.
                </p>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
