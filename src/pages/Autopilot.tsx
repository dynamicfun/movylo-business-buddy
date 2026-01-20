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
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Movylo Autopilot</h2>
          <p className="text-muted-foreground">
            Autopilot keeps your business active with customers over time — automatically.
          </p>
        </motion.section>

        {/* Why this matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Why this matters</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Customers don't always come back on their own.</p>
            <p>Staying visible helps your business stay top of mind.</p>
            <p className="font-medium text-foreground">Autopilot is designed to do this quietly in the background.</p>
          </div>
        </motion.section>

        {/* How Autopilot works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">How Autopilot works</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Once customers are added, Autopilot works on its own.
          </p>
          <p className="text-sm text-foreground font-medium mb-3">It:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl">
              <UserPlus className="w-5 h-5 text-primary mt-0.5" />
              <span className="text-sm text-foreground">Welcomes new customers</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-xl">
              <Clock className="w-5 h-5 text-accent mt-0.5" />
              <span className="text-sm text-foreground">Follows up if customers don't return</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-xl">
              <Eye className="w-5 h-5 text-primary mt-0.5" />
              <span className="text-sm text-foreground">Keeps your business visible over time</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-accent/5 rounded-xl">
              <Activity className="w-5 h-5 text-accent mt-0.5" />
              <span className="text-sm text-foreground">Creates ongoing activity you can see on your dashboard</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Autopilot runs automatically — but you're always in control.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Nothing happens until customers join.
            </p>
          </div>
        </motion.section>

        {/* What you can do on top of Autopilot */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">What you can do on top of Autopilot</h3>
          <p className="text-xs text-muted-foreground mb-4">(optional)</p>
          <p className="text-sm text-muted-foreground mb-6">
            Autopilot keeps things moving by default.<br />
            If you want to do more, you can also:
          </p>
          
          <div className="space-y-4">
            {/* Create an offer */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Gift className="w-5 h-5 text-primary" />
                <h4 className="text-sm font-medium text-foreground">Create an offer for customers</h4>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Create an offer
              </Button>
            </div>

            {/* Send a newsletter */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <h4 className="text-sm font-medium text-foreground">Send a newsletter</h4>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Send a newsletter
              </Button>
            </div>

            {/* Create social posts */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Share2 className="w-5 h-5 text-primary" />
                <h4 className="text-sm font-medium text-foreground">Create social posts</h4>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Create a social post
              </Button>
            </div>

            {/* Schedule messages or events */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="w-5 h-5 text-accent" />
                <h4 className="text-sm font-medium text-foreground">Schedule messages or events</h4>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Open calendar
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            (These are optional. Autopilot works even if you don't use them.)
          </p>
        </motion.section>

        {/* Get started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Get started</h3>
          <p className="text-sm text-foreground mb-2">Add customers once.</p>
          <p className="text-sm text-foreground font-medium mb-6">Autopilot takes care of the rest.</p>
          <Button className="rounded-xl gap-2">
            <Settings className="w-4 h-4" />
            Configure Autopilot
          </Button>
        </motion.section>
      </main>
    </div>
  );
}
