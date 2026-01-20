import { motion } from "framer-motion";
import { ArrowLeft, Gift, Mail, Share2, Calendar, Zap, UserPlus, Clock, Eye, Activity, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Autopilot() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border/50">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold text-foreground">Autopilot</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Autopilot Hero Box with CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-primary/5 rounded-2xl border border-primary/20 p-6"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 shrink-0">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Movylo Autopilot</h2>
              <p className="text-sm text-muted-foreground">
                Autopilot keeps your business active with customers over time — automatically.
              </p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3">
              <UserPlus className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Welcomes new customers</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Follows up if customers don't return</span>
            </div>
            <div className="flex items-center gap-3">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Keeps your business visible over time</span>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground">Creates ongoing activity on your dashboard</span>
            </div>
          </div>

          <Button className="w-full rounded-xl gap-2">
            <Settings className="w-4 h-4" />
            Configure Autopilot
          </Button>
          
          <p className="text-xs text-muted-foreground text-center mt-3">
            Add customers once. Autopilot takes care of the rest.
          </p>
        </motion.section>

        {/* Why this matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-base font-semibold text-foreground mb-3">Why this matters</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Customers don't always come back on their own.</p>
            <p>Staying visible helps your business stay top of mind.</p>
            <p className="text-foreground/80">Autopilot is designed to do this quietly in the background.</p>
          </div>
        </motion.section>

        {/* What you can do on top of Autopilot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-base font-semibold text-foreground mb-1">What you can do on top of Autopilot</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Optional — Autopilot works even if you don't use these.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-xl">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-xs">Create an offer</span>
            </Button>

            <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-xl">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-xs">Send newsletter</span>
            </Button>

            <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-xl">
              <Share2 className="w-5 h-5 text-primary" />
              <span className="text-xs">Social posts</span>
            </Button>

            <Button variant="outline" className="h-auto flex-col gap-2 p-4 rounded-xl">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-xs">Open calendar</span>
            </Button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
