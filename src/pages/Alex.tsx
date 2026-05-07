import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { Phone, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

const Alex = () => {
  return (
    <InnerPageTemplate
      title="Alex"
      subtitle="Your personal consultant"
      backTo="/"
    >
      <Card className="border-primary/20 bg-gradient-to-br from-primary/8 via-primary/4 to-transparent overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <AlexMonogram className="w-20 h-20 text-3xl" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Alex, Your personal consultant
              </h2>
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
    </InnerPageTemplate>
  );
};

export default Alex;
