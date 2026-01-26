import { motion } from "framer-motion";
import { ArrowLeft, Gift, Mail, Share2, Calendar, Zap, UserPlus, Clock, Eye, Activity, Settings, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Autopilot() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <main className="flex-1 overflow-x-hidden">
          <div className="max-w-[1200px] mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header - consistent with other pages */}
            <div className="flex items-center gap-4 mb-6">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Autopilot</h1>
                <p className="text-sm text-muted-foreground">Automatic customer engagement that works while you focus on your business</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Hero Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Zap className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold mb-1">Let Movylo work for you</h2>
                        <p className="text-sm text-muted-foreground">
                          Autopilot automatically engages your customers with personalized messages, 
                          keeping them coming back without any effort on your part.
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Welcome new customers automatically</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Send birthday and anniversary offers</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Re-engage customers who haven't visited in a while</span>
                      </li>
                      <li className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span>Reward your most loyal customers</span>
                      </li>
                    </ul>

                    <Button className="w-full sm:w-auto">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Configure Autopilot
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Why This Matters */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3">Why this matters</h3>
                    <p className="text-sm text-muted-foreground">
                      Most customers don't come back simply because they forget about you. 
                      Autopilot keeps your business top of mind with timely, relevant messages 
                      that feel personal — not promotional. It's like having a marketing team 
                      that never sleeps.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Optional Actions */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">What you can do on top of Autopilot</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Want to take a more hands-on approach? These optional actions let you create 
                      custom campaigns whenever you want.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                        <Gift className="h-5 w-5 text-primary" />
                        <span className="text-xs">Send Offer</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="text-xs">Newsletter</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                        <Share2 className="h-5 w-5 text-primary" />
                        <span className="text-xs">Social Post</span>
                      </Button>
                      <Button variant="outline" className="flex-col h-auto py-4 gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-xs">Schedule</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
