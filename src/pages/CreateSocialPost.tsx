import { useState } from "react";
import { Share2, Sparkles, Users, Calendar, Globe, Link, Image, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { motion } from "framer-motion";

const goals = [
  { id: "new-customers", label: "Find new customers", icon: Users },
  { id: "bookings", label: "Increase bookings", icon: Calendar },
  { id: "website", label: "Promote my website", icon: Globe },
  { id: "external-url", label: "Promote an external URL", icon: Link },
  { id: "image", label: "Post an image", icon: Image },
  { id: "video", label: "Post a video", icon: Video },
];

export default function CreateSocialPost() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <InnerPageTemplate
      title="Create a Social Post"
      subtitle="Create and share engaging content on your social channels"
      backTo="/"
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
                <Share2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Create with AI</h2>
                <p className="text-sm text-muted-foreground">Let AI help you craft the perfect social post</p>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Goal Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">
                  What is your goal?
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all text-sm ${
                          isSelected
                            ? "border-primary bg-primary/5 text-foreground"
                            : "border-border/50 hover:border-primary/30 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Icon className={`h-4 w-4 flex-shrink-0 ${isSelected ? "text-primary" : ""}`} />
                        <span className="truncate">{goal.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  What do you want to talk about? <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your post idea, key message, or any specific details..."
                  className="min-h-[140px] resize-none border-border/50 focus:border-primary/30"
                />
              </div>

              <Button 
                className="w-full h-11 rounded-xl gap-2"
                onClick={handleGenerate}
                disabled={isGenerating || !selectedGoal}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Social Post
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
