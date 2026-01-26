import { Gift, Star, CreditCard, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InnerPageTemplate } from "@/components/layout/InnerPageTemplate";

const LoyaltyProgram = () => {
  return (
    <InnerPageTemplate
      title="Loyalty Program"
      subtitle="Reward customers who keep coming back"
      icon={Gift}
      whyDescription="Loyal customers spend more and refer friends. A simple rewards program keeps them engaged and gives them a reason to return — without extra effort from you."
      whatToExpectItems={[
        "Customers earn points automatically when they visit or take actions",
        "Points are awarded for birthdays, referrals, and purchases",
        "Rewards are redeemed when they reach the points threshold you set"
      ]}
      whatToDoDescription="Set up your reward below. You can always adjust the points needed or change the reward later."
    >
      {/* Info banner */}
      <Card className="border-accent/30 bg-accent/5">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            Nothing happens until customers join.
          </p>
        </CardContent>
      </Card>

      {/* Reward customers */}
      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center gap-2 mb-2">
            <Star className="h-5 w-5 text-primary" />
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
      <Card>
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
      <Card>
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
    </InnerPageTemplate>
  );
};

export default LoyaltyProgram;
