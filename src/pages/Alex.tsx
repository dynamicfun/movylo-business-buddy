import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Mic, Phone, MessageCircle, Calendar, Users, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const capabilities = [
  { icon: Phone, title: "Answers calls", desc: "Picks up when you can't, 24/7, in your business voice." },
  { icon: Calendar, title: "Books reservations", desc: "Confirms tables, handles changes, and avoids double-bookings." },
  { icon: MessageCircle, title: "Replies to questions", desc: "Hours, menu, location, parking — Alex knows your business." },
  { icon: Users, title: "Captures customers", desc: "Adds callers to your list so you can stay in touch later." },
];

const results = [
  { icon: Users, value: "47", label: "New customers brought in" },
  { icon: MessageCircle, value: "182", label: "Conversations handled" },
  { icon: TrendingUp, value: "$1,240", label: "Sales generated" },
];

const Alex = () => {
  return (
    <InnerPageTemplate
      title="Alex"
      subtitle="Your Voice AI consultant"
      icon={Mic}
      backTo="/"
    >
      {/* Hero */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Mic className="w-9 h-9 text-primary-foreground" />
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-background" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold text-foreground">Hi, I'm Alex.</h2>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I'm your voice consultant. I answer your calls, advise your customers, take reservations,
                and bring people back to your business. Think of me as a teammate who's always on the line —
                and the numbers you see on your dashboard reflect what I brought you.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="gap-1.5">
                  Talk to Alex
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
                <Button size="sm" variant="outline" className="gap-1.5 font-normal">
                  Listen to a sample call
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What Alex does */}
      <div>
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          What Alex does for you
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Card className="hover:border-primary/30 transition-colors">
                <CardContent className="p-4 flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-0.5">{c.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            What Alex brought you
          </h3>
          <span className="text-[11px] text-muted-foreground">Last 30 days</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {results.map((r) => (
            <Card key={r.label}>
              <CardContent className="p-4">
                <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                  <r.icon className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{r.label}</span>
                </div>
                <div className="text-2xl font-semibold text-foreground">{r.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How it works */}
      <Card>
        <CardContent className="p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">How Alex works</h3>
          <ul className="space-y-2.5">
            {[
              "Alex learns about your business from your profile, menu, and hours.",
              "When a call comes in, Alex answers in your tone of voice.",
              "Alex helps the customer — booking, info, or next steps — and logs everything.",
              "You see results on your dashboard: customers brought, conversations handled, sales generated.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Suggestion strip */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-4 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm text-foreground/90">
              <span className="font-medium">Alex suggests:</span> 12 customers asked about weekend hours this month —
              consider extending Saturday opening.
            </p>
          </div>
          <Button size="sm" variant="outline" className="font-normal text-xs flex-shrink-0">
            Review
          </Button>
        </CardContent>
      </Card>
    </InnerPageTemplate>
  );
};

export default Alex;
