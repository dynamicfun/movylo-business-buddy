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
        <Card className="bg-card">
          <CardContent className="p-6 sm:p-8">
            {/* Header with underline accent */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground">Create with AI</h2>
              <div className="w-16 h-1 bg-amber-400 rounded-full mt-2" />
            </div>

            {/* Form */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  What do you want to talk about? (optional)
                </label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your promotion idea..."
                  className="min-h-[180px] resize-none"
                />
              </div>

              <Button 
                className="w-full h-12 text-base rounded-xl"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                    Generating...
                  </>
                ) : (
                  "Generate a Promotion"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </InnerPageTemplate>
  );
}
