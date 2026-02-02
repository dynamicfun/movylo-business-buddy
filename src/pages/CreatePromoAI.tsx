import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { motion } from "framer-motion";

export default function CreatePromoAI() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // TODO: Integrate with AI service
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <InnerPageTemplate
      title="Create a Promo"
      subtitle="Use AI to generate promotions for your customers"
      backTo="/messages/create-promo"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-border/50">
          <CardContent className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Create with AI</h2>
                <p className="text-sm text-muted-foreground">Let AI help you craft the perfect message</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What do you want to talk about? <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your promotion idea, target audience, or any specific details..."
                  className="min-h-[160px] resize-none border-border/50 focus:border-primary/30"
                />
              </div>

              <Button 
                className="w-full h-11 rounded-xl gap-2"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate a Promotion
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </InnerPageTemplate>
  );
}
