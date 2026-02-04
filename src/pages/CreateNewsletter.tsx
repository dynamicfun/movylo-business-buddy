import { useState } from "react";
import { Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";
import { MessageArchive } from "@/components/messages/MessageArchive";

// Mock data for archive
const mockNewsletters = [
  { id: "1", title: "This is an example of a custom event", date: "2026-02-10" },
  { id: "2", title: "February Special Offers", date: "2026-02-01" },
  { id: "3", title: "New Year Welcome Newsletter", date: "2026-01-15" },
];

export default function CreateNewsletter() {
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  const handlePreview = (id: string) => {
    console.log("Preview newsletter:", id);
  };

  const handleEdit = (id: string) => {
    console.log("Edit newsletter:", id);
  };

  const handleDuplicate = (id: string) => {
    console.log("Duplicate newsletter:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete newsletter:", id);
  };

  const handleGroup = (id: string) => {
    console.log("Group newsletter:", id);
  };

  return (
    <InnerPageTemplate
      title="Create a Newsletter"
      subtitle="Create and send newsletters to keep your customers engaged"
      backTo="/"
    >
      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="create">Create Newsletter</TabsTrigger>
          <TabsTrigger value="archive">Newsletter Archive</TabsTrigger>
        </TabsList>

        <TabsContent value="create">
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
        </TabsContent>

        <TabsContent value="archive">
          <MessageArchive
            title="Newsletters Archive"
            messages={mockNewsletters}
            onPreview={handlePreview}
            onEdit={handleEdit}
            onDuplicate={handleDuplicate}
            onDelete={handleDelete}
            onGroup={handleGroup}
          />
        </TabsContent>
      </Tabs>
    </InnerPageTemplate>
  );
}
