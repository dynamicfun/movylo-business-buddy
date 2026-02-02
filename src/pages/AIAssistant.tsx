import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Eye, MessageCircle, Percent, Plus, List, ExternalLink, AlertCircle } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AIAssistant() {
  const [activeTab, setActiveTab] = useState("new");
  const [instruction, setInstruction] = useState("");

  // Mock stats
  const stats = {
    views: 0,
    conversations: 0,
    engagement: 0,
  };

  // Mock chat history - empty for now
  const chatHistory: { id: string; date: string; visitor: string; messages: number }[] = [];

  // Mock instructions - empty for now
  const instructions: { id: string; text: string }[] = [];

  const handleSaveInstruction = () => {
    if (instruction.trim() && instruction.length <= 200) {
      // Would save the instruction here
      setInstruction("");
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger className="md:hidden" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AI Assistant</h1>
                  <p className="text-muted-foreground text-sm">
                    Add the AI-powered chatbot to your website
                  </p>
                </div>
              </div>
            </div>

            {/* Intro text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-muted-foreground"
            >
              <p>
                It will help you respond accurately and in real-time to your visitors 24/7.
              </p>
            </motion.div>

            {/* Installation Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    How to Install the AI Assistant on Your Website
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    To add the chatbot to your website, follow the instructions here
                  </p>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View Installation Guide
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Usage Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    Usage Statistics (Last 30 Days)
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    The AI Assistant is helping your customers!
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-secondary/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">Views</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stats.views}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">Conversations</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stats.conversations}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-secondary/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Percent className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-medium">Engagement</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{stats.engagement}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chat History */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">Chat History</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Here you can find the history of chats started and conducted by visitors on your website
                  </p>
                </CardHeader>
                <CardContent>
                  {chatHistory.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      No matching records found
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {chatHistory.map((chat) => (
                        <div
                          key={chat.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                        >
                          <div>
                            <p className="text-sm font-medium">{chat.visitor}</p>
                            <p className="text-xs text-muted-foreground">{chat.date}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {chat.messages} messages
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Instructions Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-semibold">
                    Instruct the Assistant on How to Respond
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Noticed the AI Assistant gave incorrect answers? Add the information below that the chat didn't know or answered incorrectly (maximum 200 characters per instruction and 2,000 characters for all instructions).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Once saved, you can immediately test the chat to verify the responses are correct.
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="mb-4">
                      <TabsTrigger value="new" className="gap-2">
                        <Plus className="h-4 w-4" />
                        New instruction
                      </TabsTrigger>
                      <TabsTrigger value="all" className="gap-2">
                        <List className="h-4 w-4" />
                        All instructions
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="new">
                      <div className="space-y-3">
                        <Textarea
                          placeholder="Enter instruction for the AI Assistant..."
                          value={instruction}
                          onChange={(e) => setInstruction(e.target.value.slice(0, 200))}
                          className="min-h-[100px]"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {instruction.length}/200 characters
                          </span>
                          <Button 
                            onClick={handleSaveInstruction}
                            disabled={!instruction.trim()}
                            size="sm"
                          >
                            Save Instruction
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="all">
                      {instructions.length === 0 ? (
                        <div className="text-center py-8">
                          <AlertCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            No instructions added yet
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {instructions.map((inst) => (
                            <div
                              key={inst.id}
                              className="p-3 rounded-lg bg-secondary/30 text-sm"
                            >
                              {inst.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
