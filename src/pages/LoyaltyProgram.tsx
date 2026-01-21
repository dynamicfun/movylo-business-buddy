import { Link } from "react-router-dom";
import { ArrowLeft, Gift, Star, CreditCard, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const LoyaltyProgram = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <Link 
                to="/" 
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
              </Link>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Your loyalty program is ready</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  Customers earn rewards as they come back. This runs in the background.
                </p>
              </div>
            </div>

            {/* Info banner */}
            <Card className="mb-6 border-accent/30 bg-accent/5">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Nothing happens until customers join.
                </p>
              </CardContent>
            </Card>

            {/* How this works */}
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">How this works</h2>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Customers collect points when they visit and for their actions, like birthdays or referring friends.
                  </p>
                  <p>
                    Points add up over time. Rewards help bring them back.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reward customers */}
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Gift className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Reward customers when they come back</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  You can offer a simple reward. For example, a free item or a discount. You can change this anytime.
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reward-name">Reward name</Label>
                    <Input 
                      id="reward-name"
                      placeholder="Free coffee"
                      defaultValue="Free coffee"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="points-needed">Points needed for a reward</Label>
                    <Input 
                      id="points-needed"
                      type="number"
                      placeholder="100"
                      defaultValue="100"
                    />
                  </div>

                  <Button className="mt-2">
                    Save reward
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Points are added automatically */}
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Points are added automatically</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Customers earn points when they visit or for actions like birthdays and referrals.
                </p>
                <Button variant="outline" size="sm">
                  Add points manually
                </Button>
              </CardContent>
            </Card>

            {/* Loyalty cards */}
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">Optional: loyalty cards</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Some businesses like to print cards for customers. This is optional.
                </p>
                <Button variant="outline">
                  Create loyalty cards
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LoyaltyProgram;
