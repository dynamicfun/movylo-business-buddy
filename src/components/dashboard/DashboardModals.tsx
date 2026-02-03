import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Users, Zap, ShoppingBag, UserSearch, UserPlus, Plus, Bot, Tag, Mail, Share2, Calendar, Award, CalendarCheck, UtensilsCrossed, Package, Store } from "lucide-react";

interface DashboardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Box 1 - Customers Modal
export function CustomersModal({ open, onOpenChange }: DashboardModalProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-bold text-primary">
                FIND AND<br />
                MANAGE<br />
                CUSTOMERS
              </DialogTitle>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
              <UserSearch className="w-12 h-12 text-primary" />
            </div>
          </div>
          <DialogDescription className="text-foreground mt-4">
            Manage your customer list and discover their interests
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <Button 
            className="w-full h-11 rounded-xl justify-start"
            onClick={() => handleNavigate("/customers/list")}
          >
            <Users className="w-4 h-4 mr-2" />
            My Customer List
          </Button>
          
          <Button 
            className="w-full h-11 rounded-xl justify-start"
            onClick={() => handleNavigate("/customers/signup")}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Sign up Page
          </Button>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-4">
          Find new customers and increase your customer list
        </p>

        <div className="space-y-3 mt-2">
          <Button 
            className="w-full h-11 rounded-xl justify-start"
            onClick={() => handleNavigate("/sources")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Customers
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Box 2 - Activity Modal
export function ActivityModal({ open, onOpenChange }: DashboardModalProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  const actions = [
    { icon: Zap, label: "Autopilot", path: "/autopilot" },
    { icon: Bot, label: "AI Assistant", path: "/ai-assistant" },
    { icon: Tag, label: "Create a Promo", path: "/messages/create-promo" },
    { icon: Mail, label: "Create a Newsletter", path: "/messages/newsletter" },
    { icon: Share2, label: "Create a Social Post", path: "/messages/social" },
    { icon: Calendar, label: "Campaign Scheduler", path: "/messages/scheduler" },
    { icon: Award, label: "Loyalty Program", path: "/customers/loyalty" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-bold text-primary">
                ENGAGE<br />
                YOUR<br />
                CUSTOMERS
              </DialogTitle>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
              <Zap className="w-12 h-12 text-primary" />
            </div>
          </div>
          <DialogDescription className="text-foreground mt-4">
            Send messages, create offers, and keep customers coming back
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2.5 mt-4">
          {actions.map(({ icon: Icon, label, path }) => (
            <Button 
              key={label}
              className="w-full h-11 rounded-xl justify-start"
              onClick={() => handleNavigate(path)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Box 3 - Sales Modal
export function SalesModal({ open, onOpenChange }: DashboardModalProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  const actions = [
    { icon: CalendarCheck, label: "Manage Reservations", path: "/sales/reservations" },
    { icon: UtensilsCrossed, label: "Digital Menu", path: "/sales/menu" },
    { icon: Package, label: "Upload Products", path: "/sales/products" },
    { icon: Store, label: "Sell Online", path: "/sales/sell-online" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-left">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="text-xl font-bold text-primary">
                CLOSE<br />
                MORE<br />
                SALES
              </DialogTitle>
            </div>
            <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
              <ShoppingBag className="w-12 h-12 text-primary" />
            </div>
          </div>
          <DialogDescription className="text-foreground mt-4">
            Manage reservations, menus, and online sales
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2.5 mt-4">
          {actions.map(({ icon: Icon, label, path }) => (
            <Button 
              key={label}
              className="w-full h-11 rounded-xl justify-start"
              onClick={() => handleNavigate(path)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
