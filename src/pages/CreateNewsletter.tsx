import { useState } from "react";
import { Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

export default function CreateNewsletter() {
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <InnerPageTemplate
      title="Create a Newsletter"
      subtitle="Create and send newsletters to keep your customers engaged"
      backTo="/"
    >
      <Card className="border-border/50">
        <CardContent className="p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Create with AI</h2>
              <p className="text-sm text-muted-foreground">Let AI help you craft the perfect newsletter</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-foreground">
                What do you want to talk about? (optional)
              </Label>
              <Textarea
                id="description"
                placeholder="Describe your newsletter topic, upcoming events, news, or any updates you'd like to share..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[160px] resize-none border-border/50 focus:border-primary/30 rounded-xl"
              />
              <p className="text-xs text-muted-foreground">
                Leave empty and we'll suggest something based on your business
              </p>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full h-11 rounded-xl gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {isGenerating ? "Generating..." : "Generate Newsletter"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </InnerPageTemplate>
  );
}
