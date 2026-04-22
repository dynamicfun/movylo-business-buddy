import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Calendar,
  Clock,
  Users,
  Mail,
  Bell,
  CreditCard,
  Link2,
  QrCode,
  Globe,
  ChevronDown,
  Copy,
  ExternalLink,
  ArrowLeft,
  CalendarDays,
  BookOpen,
  MessageCircle,
  CalendarX,
  MapPin,
  Plus,
  Copy as CopyIcon,
  Trash2,
  Pencil,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Reservations = () => {
  const navigate = useNavigate();
  const [reservationsEnabled, setReservationsEnabled] = useState(false);
  const [bookingType, setBookingType] = useState("appointments");
  const [duration, setDuration] = useState("60");
  const [capacity, setCapacity] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("owner@mybusiness.com");
  
  const [availabilityOpen, setAvailabilityOpen] = useState(false);
  const [remindersOpen, setRemindersOpen] = useState(false);
  const [depositsOpen, setDepositsOpen] = useState(false);
  const [calendarSyncOpen, setCalendarSyncOpen] = useState(false);
  
  const [sendReminders, setSendReminders] = useState(true);
  const [reminderTime, setReminderTime] = useState("24h");
  const [requireDeposit, setRequireDeposit] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");

  // Restaurant zones (only shown for "tables" / dine-in)
  type Zone = {
    id: string;
    name: string;
    duration: string;
    capacity: string;
    hours: string;
    notes: string;
  };
  const [zones, setZones] = useState<Zone[]>([
    { id: "main", name: "Main dining room", duration: "60", capacity: "8", hours: "Business hours", notes: "" },
  ]);
  const [zonesOpen, setZonesOpen] = useState(true);
  const [editingZoneId, setEditingZoneId] = useState<string | null>(null);

  const addZone = () => {
    // Replicate current configuration into a new zone
    const base = zones[zones.length - 1] ?? {
      duration,
      capacity: capacity || "4",
      hours: "Business hours",
      notes: "",
    };
    const newZone: Zone = {
      id: `zone-${Date.now()}`,
      name: `New zone ${zones.length + 1}`,
      duration: base.duration ?? duration,
      capacity: base.capacity ?? capacity ?? "4",
      hours: base.hours ?? "Business hours",
      notes: "",
    };
    setZones([...zones, newZone]);
    setEditingZoneId(newZone.id);
    toast.success("Zone added — same rules as the previous one. Adjust as needed.");
  };

  const duplicateZone = (id: string) => {
    const z = zones.find((z) => z.id === id);
    if (!z) return;
    const copy: Zone = { ...z, id: `zone-${Date.now()}`, name: `${z.name} (copy)` };
    setZones([...zones, copy]);
    toast.success("Zone duplicated.");
  };

  const removeZone = (id: string) => {
    if (zones.length <= 1) {
      toast.error("Keep at least one zone.");
      return;
    }
    setZones(zones.filter((z) => z.id !== id));
  };

  const updateZone = (id: string, patch: Partial<Zone>) => {
    setZones(zones.map((z) => (z.id === id ? { ...z, ...patch } : z)));
  };

  const bookingLink = "https://yourbusiness.movylo.com/book";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookingLink);
    toast.success("Link copied to clipboard!");
  };

  const handleSaveSetup = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-6">
            {/* Page Header */}
            <motion.header
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4"
            >
              <button 
                onClick={() => navigate("/")} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-foreground">Reservations</h1>
                <p className="text-sm text-muted-foreground">
                  Let customers book time with your business — automatically.
                </p>
              </div>
            </motion.header>

            {/* SECTION 1: Enable Reservations */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6 space-y-4"
            >
              <div className="space-y-1">
                <h2 className="text-lg font-medium text-foreground">Turn on reservations</h2>
                <p className="text-sm text-muted-foreground">
                  Allow customers to book appointments, tables, or services online.
                  <br />
                  Movylo handles availability and confirmations for you.
                </p>
              </div>

              <div className="flex items-center gap-3 py-3 px-4 bg-muted/30 rounded-lg">
                <Switch
                  checked={reservationsEnabled}
                  onCheckedChange={setReservationsEnabled}
                />
                <span className="font-medium text-foreground">Reservations</span>
              </div>

              <p className="text-sm text-muted-foreground">
                {reservationsEnabled
                  ? "✓ Customers can start booking right away."
                  : "Reservations are currently off."}
              </p>
            </motion.div>

            {/* SECTION 2-7: Only shown when enabled */}
            <AnimatePresence>
              {reservationsEnabled && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Quick Action Buttons - Very Visible */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button 
                      variant="outline" 
                      className="h-auto py-4 flex flex-col items-center gap-2 border-2 border-primary/30 bg-primary/5 hover:bg-primary/10"
                    >
                      <CalendarDays className="h-6 w-6 text-primary" />
                      <span className="font-medium">See your calendar</span>
                      <span className="text-xs text-muted-foreground">Where reservations are</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto py-4 flex flex-col items-center gap-2 border-2 border-border hover:bg-muted/50"
                      asChild
                    >
                      <a href="https://help.movylo.com/reservations" target="_blank" rel="noopener noreferrer">
                        <BookOpen className="h-6 w-6 text-muted-foreground" />
                        <span className="font-medium">How to configure it</span>
                        <span className="text-xs text-muted-foreground">Step-by-step guide</span>
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto py-4 flex flex-col items-center gap-2 border-2 border-accent/50 bg-accent/5 hover:bg-accent/10"
                    >
                      <MessageCircle className="h-6 w-6 text-accent-foreground" />
                      <span className="font-medium">Talk with AI</span>
                      <span className="text-xs text-muted-foreground">Configure by voice</span>
                    </Button>
                  </div>

                  {/* Block Specific Dates - Most Used Action, Very Visible */}
                  <div className="bg-card border-2 border-destructive/30 rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-destructive/10">
                        <CalendarX className="h-6 w-6 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">Block specific dates or times</h3>
                        <p className="text-sm text-muted-foreground">Prevent bookings during holidays, events, or when you're unavailable.</p>
                      </div>
                      <Button variant="default" className="gap-2">
                        <CalendarX className="h-4 w-4" />
                        Block dates
                      </Button>
                    </div>
                  </div>
                  {/* SECTION 2: Quick Setup */}
                  <div className="bg-card border border-border rounded-xl p-6 space-y-6">
                    <div className="space-y-1">
                      <h2 className="text-lg font-medium text-foreground">Quick setup</h2>
                      <p className="text-sm text-muted-foreground">
                        Just the essentials. You can adjust everything later.
                      </p>
                    </div>

                    {/* Booking Type */}
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">What can customers book?</Label>
                      <RadioGroup value={bookingType} onValueChange={setBookingType} className="space-y-2">
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                          <RadioGroupItem value="appointments" id="appointments" />
                          <Label htmlFor="appointments" className="cursor-pointer flex-1">
                            Appointments (one customer at a time)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                          <RadioGroupItem value="tables" id="tables" />
                          <Label htmlFor="tables" className="cursor-pointer flex-1">
                            Tables (multiple customers at once)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                          <RadioGroupItem value="classes" id="classes" />
                          <Label htmlFor="classes" className="cursor-pointer flex-1">
                            Classes or group sessions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
                          <RadioGroupItem value="services" id="services" />
                          <Label htmlFor="services" className="cursor-pointer flex-1">
                            Services with staff or resources
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">How long is each booking?</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="45">45 minutes</SelectItem>
                          <SelectItem value="60">60 minutes</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Capacity */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">How many bookings can you accept at the same time?</Label>
                      <Input
                        type="number"
                        placeholder="e.g. 5"
                        value={capacity}
                        onChange={(e) => setCapacity(e.target.value)}
                        className="w-full"
                      />
                    </div>

                    {/* Notifications */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Send booking notifications to</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="email"
                          value={notificationEmail}
                          onChange={(e) => setNotificationEmail(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        You'll be notified when customers book or cancel.
                      </p>
                    </div>

                    <Button onClick={handleSaveSetup} className="w-full">
                      Save & continue
                    </Button>
                  </div>

                  {/* SECTION 3: Availability (collapsed) */}
                  <Collapsible open={availabilityOpen} onOpenChange={setAvailabilityOpen}>
                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                      <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-primary" />
                          <div className="text-left">
                            <h3 className="font-medium text-foreground">Availability</h3>
                            <p className="text-sm text-muted-foreground">Set when customers can book you.</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${availabilityOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 space-y-4">
                        <div className="p-4 bg-muted/30 rounded-lg flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Using your business hours.</span>
                          <Button variant="outline" size="sm">Edit availability</Button>
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>

                  {/* SECTION 4: Customer Reminders (collapsed) */}
                  <Collapsible open={remindersOpen} onOpenChange={setRemindersOpen}>
                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                      <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-primary" />
                          <div className="text-left">
                            <h3 className="font-medium text-foreground">Customer reminders</h3>
                            <p className="text-sm text-muted-foreground">Reduce no-shows with automatic reminders.</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${remindersOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="send-reminders"
                            checked={sendReminders}
                            onCheckedChange={(checked) => setSendReminders(checked as boolean)}
                          />
                          <Label htmlFor="send-reminders" className="cursor-pointer">
                            Send a reminder before the reservation
                          </Label>
                        </div>
                        {sendReminders && (
                          <Select value={reminderTime} onValueChange={setReminderTime}>
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1h">1 hour before</SelectItem>
                              <SelectItem value="24h">24 hours before</SelectItem>
                              <SelectItem value="custom">Custom time</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Reminders are sent automatically.
                        </p>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>

                  {/* SECTION 5: Deposits & Payments (collapsed) */}
                  <Collapsible open={depositsOpen} onOpenChange={setDepositsOpen}>
                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                      <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-primary" />
                          <div className="text-left">
                            <h3 className="font-medium text-foreground">Deposits & payments</h3>
                            <p className="text-sm text-muted-foreground">Optional — require a deposit to confirm.</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${depositsOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="require-deposit"
                            checked={requireDeposit}
                            onCheckedChange={(checked) => setRequireDeposit(checked as boolean)}
                          />
                          <Label htmlFor="require-deposit" className="cursor-pointer">
                            Require a deposit to confirm reservations
                          </Label>
                        </div>
                        {requireDeposit && (
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label className="text-sm">Deposit amount</Label>
                              <Input
                                type="text"
                                placeholder="e.g. $25"
                                value={depositAmount}
                                onChange={(e) => setDepositAmount(e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label className="text-sm">Notes or conditions (optional)</Label>
                              <Input placeholder="e.g. Non-refundable within 24 hours" />
                            </div>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground">
                          You can change or disable this anytime.
                        </p>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>

                  {/* SECTION 6: Booking Link */}
                  <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Link2 className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium text-foreground">Your booking link</h3>
                        <p className="text-sm text-muted-foreground">Share this link so customers can book instantly.</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Input
                        value={bookingLink}
                        readOnly
                        className="flex-1 bg-muted/30 text-sm"
                      />
                      <Button variant="outline" size="icon" onClick={handleCopyLink}>
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="justify-start gap-2">
                        <QrCode className="h-4 w-4" />
                        Get a QR code
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start gap-2">
                        <Calendar className="h-4 w-4" />
                        Add to Google
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start gap-2">
                        <Globe className="h-4 w-4" />
                        Add to your website
                      </Button>
                      <Button variant="outline" size="sm" className="justify-start gap-2">
                        <Users className="h-4 w-4" />
                        Enable Google Reserve
                      </Button>
                    </div>
                  </div>

                  {/* SECTION 7: Calendar Sync (collapsed) */}
                  <Collapsible open={calendarSyncOpen} onOpenChange={setCalendarSyncOpen}>
                    <div className="bg-card border border-border rounded-xl overflow-hidden">
                      <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          <div className="text-left">
                            <h3 className="font-medium text-foreground">Calendar sync</h3>
                            <p className="text-sm text-muted-foreground">Keep your personal calendar up to date.</p>
                          </div>
                        </div>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${calendarSyncOpen ? "rotate-180" : ""}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6 space-y-4">
                        <Button variant="outline" className="w-full">
                          Connect Google Calendar
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Reservations will appear in your calendar automatically.
                        </p>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>

                  {/* Footer Reassurance */}
                  <p className="text-center text-xs text-muted-foreground py-2">
                    You stay in control. You can edit or turn off reservations at any time.
                  </p>

                  {/* Sticky Footer */}
                  <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">✓ Reservations are ready</span>
                    <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to dashboard
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Reservations;
