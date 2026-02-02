import { useState, useRef } from "react";
import { Share2, Sparkles, Users, Calendar, Globe, Link, Image, Video, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { motion } from "framer-motion";

interface Goal {
  id: string;
  label: string;
  icon: React.ElementType;
  requiresMedia?: "image" | "video";
}

const goals: Goal[] = [
  { id: "new-customers", label: "Find new customers", icon: Users },
  { id: "bookings", label: "Increase bookings", icon: Calendar },
  { id: "website", label: "Promote my website", icon: Globe },
  { id: "external-url", label: "Promote an external URL", icon: Link },
  { id: "image", label: "Post an image", icon: Image, requiresMedia: "image" },
  { id: "video", label: "Post a video", icon: Video, requiresMedia: "video" },
];

export default function CreateSocialPost() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string; type: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedGoalData = goals.find(g => g.id === selectedGoal);
  const requiresMedia = selectedGoalData?.requiresMedia;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedFile({ name: file.name, url, type: file.type });
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const canGenerate = selectedGoal && (!requiresMedia || uploadedFile);

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
                <div className="space-y-2">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = selectedGoal === goal.id;
                    return (
                      <button
                        key={goal.id}
                        type="button"
                        onClick={() => {
                          setSelectedGoal(goal.id);
                          if (!goal.requiresMedia) {
                            setUploadedFile(null);
                          }
                        }}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5"
                            : "border-border/50 hover:border-primary/30 hover:bg-muted/30"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          isSelected 
                            ? "bg-primary/10" 
                            : "bg-muted/50"
                        }`}>
                          <Icon className={`h-4 w-4 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <span className={`text-sm font-medium ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                          {goal.label}
                        </span>
                        {goal.requiresMedia && (
                          <span className="ml-auto text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                            Upload required
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Media Upload - Only show when a media goal is selected */}
              {requiresMedia && (
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">
                    {requiresMedia === "image" ? "Upload an image" : "Upload a video"}
                  </Label>
                  
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={requiresMedia === "image" ? "image/*" : "video/*"}
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!uploadedFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex flex-col items-center justify-center gap-2 p-8 rounded-xl border-2 border-dashed border-border/50 hover:border-primary/30 hover:bg-muted/20 transition-all cursor-pointer"
                    >
                      <div className="p-3 rounded-full bg-muted/50">
                        <Upload className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">
                          Click to upload {requiresMedia === "image" ? "an image" : "a video"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {requiresMedia === "image" ? "PNG, JPG, GIF up to 10MB" : "MP4, MOV up to 100MB"}
                        </p>
                      </div>
                    </button>
                  ) : (
                    <div className="relative rounded-xl border border-border/50 overflow-hidden">
                      {uploadedFile.type.startsWith("image/") ? (
                        <img
                          src={uploadedFile.url}
                          alt="Preview"
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <video
                          src={uploadedFile.url}
                          className="w-full h-48 object-cover"
                          controls
                        />
                      )}
                      <div className="absolute top-2 right-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 rounded-full shadow-md"
                          onClick={handleRemoveFile}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-3 bg-muted/30">
                        <p className="text-sm text-foreground truncate">{uploadedFile.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  What do you want to talk about? <span className="text-muted-foreground font-normal">(optional)</span>
                </Label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your post idea, key message, or any specific details..."
                  className="min-h-[120px] resize-none border-border/50 focus:border-primary/30"
                />
              </div>

              <Button 
                className="w-full h-11 rounded-xl gap-2"
                onClick={handleGenerate}
                disabled={isGenerating || !canGenerate}
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
