import { motion } from "framer-motion";
import { ArrowLeft, Gift, Mail, Share2, Calendar, Zap, UserPlus, Clock, Eye, Activity, Lightbulb } from "lucide-react";
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
            Autopilot keeps your business active with customers over time — without you having to manage daily messages.
          </p>
        </motion.section>

        {/* Why it matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Why ongoing customer activity matters</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Customers rarely come back on their own.</p>
            <p>Staying visible in a simple, respectful way helps your business stay top of mind.</p>
            <p className="font-medium text-foreground">Movylo Autopilot is designed to do this quietly in the background.</p>
            <ul className="space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                No campaigns to manage.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                No daily work.
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Just consistent customer activity.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* What Autopilot does */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">What Autopilot does for you</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Once customers are added, Autopilot takes care of the basics automatically:
          </p>
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
              <span className="text-sm text-foreground">Creates ongoing customer activity you can see on your dashboard</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Nothing happens until customers join. Once they do, Autopilot starts working on its own.
            </p>
          </div>
        </motion.section>

        {/* What you can do */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-card rounded-2xl border border-border/50 p-6"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">What you can do anytime</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Autopilot runs automatically — but you're always in control.
          </p>
          <p className="text-sm text-foreground font-medium mb-4">If you want to do more, you can easily:</p>
          
          <div className="space-y-4">
            {/* Create a promotion */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Gift className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">Create a promotion</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Offer a discount, bonus, or special reward to customers.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Create a promo
              </Button>
            </div>

            {/* Send a newsletter */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">Send a newsletter</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Share news, updates, or offers with your customers.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Create a newsletter
              </Button>
            </div>

            {/* Post on social media */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Share2 className="w-5 h-5 text-primary" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">Post on social media</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Create and schedule social posts from one place.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Create a social post
              </Button>
            </div>

            {/* Schedule events */}
            <div className="p-4 bg-muted/30 rounded-xl">
              <div className="flex items-start gap-3 mb-3">
                <Calendar className="w-5 h-5 text-accent" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">Schedule events or reminders</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Plan messages, promotions, or appointments on your calendar.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full rounded-lg">
                Open calendar
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            (All of these are optional. Use only what you need.)
          </p>
        </motion.section>

        {/* How to get started */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl border border-primary/20 p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">How to get started</h3>
          <p className="text-sm text-foreground mb-2">Add customers once.</p>
          <p className="text-sm text-foreground font-medium mb-4">Autopilot takes care of the rest.</p>
          <p className="text-sm text-muted-foreground mb-6">
            You can step in anytime — or let it run quietly in the background.
          </p>
          <Button className="rounded-xl">
            Add customers
          </Button>
        </motion.section>

        {/* Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex items-start gap-3 p-4 bg-accent/10 rounded-xl"
        >
          <Lightbulb className="w-5 h-5 text-accent flex-shrink-0" />
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">Tip:</span> The more customers you add, the more activity you'll see.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
