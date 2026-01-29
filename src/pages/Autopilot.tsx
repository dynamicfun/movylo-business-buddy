import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Play, Pause, Settings, UserPlus, RefreshCw, Heart, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";

interface AutopilotMomentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
  delay?: number;
}

function AutopilotMomentCard({ icon, title, description, isOn, onToggle, delay = 0 }: AutopilotMomentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="border border-border/50">
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground mb-1">{title}</h4>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <Switch checked={isOn} onCheckedChange={onToggle} />
              <span className={`text-sm ${isOn ? 'text-green-600' : 'text-muted-foreground'}`}>
                {isOn ? 'On' : 'Off'}
              </span>
            </div>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Settings className="w-4 h-4 mr-1.5" />
              Customize
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Autopilot() {
  const [autopilotEnabled, setAutopilotEnabled] = useState(true);
  const [moments, setMoments] = useState({
    welcome: true,
    bringBack: true,
    thankReturning: true,
    askReview: true,
  });

  const toggleMoment = (key: keyof typeof moments) => {
    setMoments(prev => ({ ...prev, [key]: !prev[key] }));
  };

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
                <p className="text-sm text-muted-foreground">Keeps things moving once customers join</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground/70 ml-9 mb-6">
              Nothing happens until customers sign up.
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
                      Autopilot helps you stay in touch with customers over time.
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      It works quietly in the background and takes care of common moments — so customers 
                      remember you and come back, without daily work or planning.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Autopilot is already set up for you.</span>
                      <br />
                      You can leave it as it is, or adjust details anytime.
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
                          <h3 className="font-semibold text-foreground">
                            Autopilot is {autopilotEnabled ? 'on' : 'off'}
                          </h3>
                        </div>
                      </div>
                      <Switch 
                        checked={autopilotEnabled} 
                        onCheckedChange={setAutopilotEnabled}
                      />
                    </div>
                    {autopilotEnabled && (
                      <p className="text-sm text-muted-foreground">
                        Everything below is already working for you.
                        <br />
                        You can pause or change anything at any time.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* How Autopilot Helps */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-foreground">How Autopilot helps</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Autopilot handles everyday customer moments automatically.
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">For example, it can:</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>welcome new customers</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>bring customers back after some time</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>thank customers who return often</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>ask for a review at the right moment</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      These run automatically once customers are connected.
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      Messages and posts are spaced out over time and never sent all at once.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Autopilot Moments */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-foreground mb-2">Autopilot moments</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Each card below represents a moment when Autopilot checks in with customers.
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Inside each card, you can:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-3 ml-4">
                    <li>• see what happens</li>
                    <li>• turn the moment on or off</li>
                    <li>• adjust details if you want</li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    If you don't change anything, Autopilot keeps running as it is.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AutopilotMomentCard
                    icon={<UserPlus className="h-5 w-5 text-primary" />}
                    title="Welcome new customers"
                    description="Sends a short welcome after someone joins."
                    isOn={moments.welcome}
                    onToggle={() => toggleMoment('welcome')}
                    delay={0.25}
                  />
                  <AutopilotMomentCard
                    icon={<RefreshCw className="h-5 w-5 text-primary" />}
                    title="Bring customers back"
                    description="Sends a reminder after some time."
                    isOn={moments.bringBack}
                    onToggle={() => toggleMoment('bringBack')}
                    delay={0.3}
                  />
                  <AutopilotMomentCard
                    icon={<Heart className="h-5 w-5 text-primary" />}
                    title="Thank returning customers"
                    description="Sends a small thank-you to loyal customers."
                    isOn={moments.thankReturning}
                    onToggle={() => toggleMoment('thankReturning')}
                    delay={0.35}
                  />
                  <AutopilotMomentCard
                    icon={<Star className="h-5 w-5 text-primary" />}
                    title="Ask for a review"
                    description="Invites customers to leave a review at the right moment."
                    isOn={moments.askReview}
                    onToggle={() => toggleMoment('askReview')}
                    delay={0.4}
                  />
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  Want to adjust something? You can customize any moment above.
                </p>
              </motion.div>

              {/* Customization Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <Card className="bg-secondary/30">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-foreground">Customization</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      When you open Customize on a moment, you can:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1.5 mb-4 ml-4">
                      <li>• change the tone of the message</li>
                      <li>• update text or images</li>
                      <li>• choose when posts are shared</li>
                      <li>• add or remove channels like SMS or WhatsApp</li>
                      <li>• include or remove a bonus</li>
                      <li>• create your own custom moments</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      All of this is optional.
                      <br />
                      <span className="font-medium text-foreground">Autopilot works even if you never customize anything.</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bonuses */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 text-foreground">Bonuses</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Some moments can include a small bonus.
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">You decide:</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4 ml-4">
                      <li>• what type of bonus to include</li>
                      <li>• or to send no bonus at all</li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Customers only see a bonus if they choose to use it.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Safety & Reassurance */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold text-foreground">Safety & reassurance</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Nothing happens until customers join</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Nothing is sent all at once</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>You can pause Autopilot anytime</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>You can change or undo anything</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bottom Reassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center py-4"
              >
                <p className="text-xs text-muted-foreground/60">
                  Autopilot runs in the background.
                  <br />
                  You're always in control.
                </p>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
