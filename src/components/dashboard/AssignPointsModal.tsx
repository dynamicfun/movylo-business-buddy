import { useState } from "react";
import { Search, QrCode, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AssignPointsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AssignPointsModal({ open, onOpenChange }: AssignPointsModalProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // TODO: Implement search/assign logic
    console.log("Searching for customer:", searchValue);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign loyalty points / rewards</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          {/* Input field */}
          <div className="space-y-2">
            <Label htmlFor="customer-search">
              Enter a last name, email, phone number, or card code
            </Label>
            <div className="flex gap-2">
              <Input
                id="customer-search"
                placeholder="e.g. Smith, john@example.com"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Scan option */}
          <Button variant="outline" className="w-full gap-2">
            <QrCode className="w-4 h-4" />
            Scan the loyalty card
          </Button>

          {/* Helper section */}
          <div className="rounded-lg bg-muted/50 p-4 space-y-1">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Use the Movylo app</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Assign points directly from your phone with the Movylo app.
            </p>
            <a href="#" className="text-xs text-primary hover:underline">
              Get the app
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
