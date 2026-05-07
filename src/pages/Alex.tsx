import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Phone, Lightbulb, FileCheck2, PhoneCall, Sparkles, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function AlexMonogram({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full bg-[#042C53] flex items-center justify-center ${className || ""}`}
    >
      <span className="text-white font-bold" style={{ fontSize: "inherit" }}>
        A
      </span>
    </div>
  );
}

const capabilities = [
  {
    icon: Lightbulb,
    title: "Spots opportunities for you",
    desc: "Alex watches your business and calls you when he sees a chance to bring in customers or close more sales.",
  },
  {
    icon: PhoneCall,
    title: "Calls and explains what to do",
    desc: "When there's something worth doing, Alex calls you, walks you through it, and answers your questions.",
  },
  {
    icon: FileCheck2,
    title: "Prepares everything for you",
    desc: "Alex produces the promotion, message, or campaign and sends it to you for a quick check and approval.",
  },
  {
    icon: MessageCircle,
    title: "Follows up on results",
    desc: "Once it's live, Alex calls back to review the results together and decide the next move.",
  },
];

const Alex = () => {
  return (
    <InnerPageTemplate
      title="Alex"
      subtitle="Your personal consultant"
      backTo="/"
    >
      {/* Hero */}
      <Card className="border-primary/20 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <AlexMonogram className="w-20 h-20 text-3xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground mb-1">Hi, I'm Alex.</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I'm your personal consultant. I help you find new customers, close more sales,
                and keep the ones you already have active. I use Movylo to do the work for you —
                you just check and approve. Whenever you want, you can talk to me.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  Talk to Alex
                  <ArrowRight className="w-3.5 h-3.5" />
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
              <Card className="hover:border-primary/30 transition-colors h-full">
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

      {/* How it works */}
      <Card>
        <CardContent className="p-5">
          <h3 className="text-sm font-semibold text-foreground mb-3">How working with Alex feels</h3>
          <ul className="space-y-2.5">
            {[
              "Alex gets to know your business — what you sell, your customers, your goals.",
              "When he spots an opportunity, he calls you and explains what to do.",
              "Alex prepares everything in Movylo and sends it to you for approval.",
              "You approve — it goes live. Alex calls back to review results with you.",
              "Anytime you want advice, you can call Alex directly.",
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
              <span className="font-medium">Alex suggests:</span> your weekend traffic is below average —
              I can prepare a Friday promotion to bring customers in. Want me to draft it?
            </p>
          </div>
          <Button size="sm" variant="outline" className="font-normal text-xs flex-shrink-0">
            Talk to Alex
          </Button>
        </CardContent>
      </Card>
    </InnerPageTemplate>
  );
};

export default Alex;
