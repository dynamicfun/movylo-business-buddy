import { useState } from "react";
import { motion } from "framer-motion";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Link2,
  Copy,
  ExternalLink,
  Plus,
  Trash2,
} from "lucide-react";

// Types
interface TimeSlot {
  id: string;
  from: string;
  to: string;
  lastAvailable: string;
}

interface DaySchedule {
  day: string;
  slots: TimeSlot[];
}

export default function Reservations() {
  const [moduleEnabled, setModuleEnabled] = useState(true);
  const [timezone, setTimezone] = useState("Europe/Berlin");
  const [serviceType, setServiceType] = useState("movylo");
  const [businessType, setBusinessType] = useState("restaurant");
  const [seatsPerHour, setSeatsPerHour] = useState("20");
  const [duration, setDuration] = useState("15");
  const [revenuePerCover, setRevenuePerCover] = useState("0");
  const [notificationEmail, setNotificationEmail] = useState("a.colombo@movylo.com");
  const [stopBookingMinutes, setStopBookingMinutes] = useState("60");
  const [smsReminderEnabled, setSmsReminderEnabled] = useState(false);
  const [moreInfo, setMoreInfo] = useState("");
  const [depositRequired, setDepositRequired] = useState(false);
  const [depositContactRequired, setDepositContactRequired] = useState(false);
  const [menuLink, setMenuLink] = useState("Book a table");
  const [additionalEmails, setAdditionalEmails] = useState("example@yahoo.com,example2@gmail.com");
  const [googleReserve, setGoogleReserve] = useState(false);
  const [blockSlotsTab, setBlockSlotsTab] = useState<"time-slot" | "period">("time-slot");
  const [blockDate, setBlockDate] = useState("Friday, Jan 23");
  const [blockTime, setBlockTime] = useState("12:00");
  const [blockSeats, setBlockSeats] = useState("");

  const [schedule, setSchedule] = useState<DaySchedule[]>([
    { day: "Monday", slots: [] },
    { day: "Tuesday", slots: [] },
    { day: "Wednesday", slots: [] },
    { day: "Thursday", slots: [] },
    { day: "Friday", slots: [
      { id: "1", from: "12:00", to: "14:00", lastAvailable: "13:45" },
      { id: "2", from: "17:00", to: "22:30", lastAvailable: "22:15" },
    ]},
    { day: "Saturday", slots: [] },
    { day: "Sunday", slots: [] },
  ]);

  const bookingUrl = "https://demostore.movylo.com/booking/en";

  const addSlot = (dayIndex: number) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].slots.push({
      id: Date.now().toString(),
      from: "09:00",
      to: "17:00",
      lastAvailable: "16:45",
    });
    setSchedule(newSchedule);
  };

  const removeSlot = (dayIndex: number, slotId: string) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].slots = newSchedule[dayIndex].slots.filter(s => s.id !== slotId);
    setSchedule(newSchedule);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4"
          >
            <h1 className="text-xl font-bold text-foreground">Reservation Module</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Here you can enable your reservation module, to have your customers make reservations with you.
              <br />
              E.g. A restaurant can have customers reserving tables, a Salon can have customers booking a massage and so on.
            </p>
          </motion.header>

          <div className="space-y-6 max-w-4xl">
            {/* Enable the Reservation Module */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Enable the Reservation Module</h2>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="enableModule" 
                    checked={moduleEnabled}
                    onCheckedChange={(checked) => setModuleEnabled(checked as boolean)}
                  />
                  <Label htmlFor="enableModule">Enable Module</Label>
                  <span className="text-sm text-muted-foreground ml-4">Total Reservations: 2</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Show reservations</Button>
                  <Button variant="outline" size="sm">Reservations archive</Button>
                </div>
              </div>
            </motion.section>

            {/* Timezone */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Before continuing, please check your time zone</h2>
              <div className="flex items-center gap-4">
                <Label className="whitespace-nowrap">Set the timezone:</Label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger className="flex-1 max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Europe/Berlin">Europe/Berlin</SelectItem>
                    <SelectItem value="Europe/London">Europe/London</SelectItem>
                    <SelectItem value="America/New_York">America/New York</SelectItem>
                    <SelectItem value="America/Los_Angeles">America/Los Angeles</SelectItem>
                  </SelectContent>
                </Select>
                <Button size="sm">Save</Button>
              </div>
            </motion.section>

            {/* Service to use */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Choose which service to use</h2>
              <RadioGroup value={serviceType} onValueChange={setServiceType}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="movylo" id="service-movylo" />
                  <Label htmlFor="service-movylo">Movylo reservation module</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="existing" id="service-existing" />
                  <Label htmlFor="service-existing">Your existing reservation module (Movylo will drive traffic to it)</Label>
                </div>
              </RadioGroup>
            </motion.section>

            {/* Type of service */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Select the type of service you offer</h2>
              <RadioGroup value={businessType} onValueChange={setBusinessType}>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="restaurant" id="type-restaurant" />
                  <Label htmlFor="type-restaurant">Restaurant, pizza shop, ... (customers can reserve tables)</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="shop" id="type-shop" />
                  <Label htmlFor="type-shop">Shop, pharmacy, ... (customers can make a reservation at a given hour)</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="service" id="type-service" />
                  <Label htmlFor="type-service">Customers reserve a service and a specific person or resource at a set time</Label>
                </div>
              </RadioGroup>
            </motion.section>

            {/* Configure the module */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Configure the module</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-4">
                    <Label className="min-w-[200px]">Number of available seats per hour:</Label>
                    <Input 
                      type="number" 
                      value={seatsPerHour} 
                      onChange={(e) => setSeatsPerHour(e.target.value)}
                      className="w-20"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <Label className="min-w-[150px]">Duration of the service:</Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                        <SelectItem value="90">90 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Label className="min-w-[200px]">Average revenue per cover ($):</Label>
                  <Input 
                    type="number" 
                    value={revenuePerCover} 
                    onChange={(e) => setRevenuePerCover(e.target.value)}
                    className="w-20"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Label className="min-w-[200px]">Send notifications to:</Label>
                  <Input 
                    type="email" 
                    value={notificationEmail} 
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    className="flex-1 max-w-sm"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <Label className="min-w-[200px]">Stop accepting bookings X minutes before:</Label>
                  <Input 
                    type="number" 
                    value={stopBookingMinutes} 
                    onChange={(e) => setStopBookingMinutes(e.target.value)}
                    className="w-20"
                  />
                  <span className="text-sm text-muted-foreground">minutes</span>
                </div>
              </div>
              <Button className="mt-6 w-full md:w-auto">Save</Button>
            </motion.section>

            {/* Weekly Schedule */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Select when the resource accepts reservations</h2>
              <div className="space-y-4">
                {schedule.map((day, dayIndex) => (
                  <div key={day.day} className="border-b border-border pb-4 last:border-0">
                    <div className="font-medium text-foreground mb-2">{day.day}</div>
                    {day.slots.length === 0 ? (
                      <Button 
                        variant="link" 
                        className="text-primary p-0 h-auto text-sm"
                        onClick={() => addSlot(dayIndex)}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add a new slot
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        {day.slots.map((slot) => (
                          <div key={slot.id} className="flex items-center gap-3 text-sm">
                            <span className="text-muted-foreground">From</span>
                            <Select defaultValue={slot.from}>
                              <SelectTrigger className="w-24">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 24 }, (_, i) => (
                                  <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                                    {`${i.toString().padStart(2, '0')}:00`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span className="text-muted-foreground">to</span>
                            <Select defaultValue={slot.to}>
                              <SelectTrigger className="w-24">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Array.from({ length: 24 }, (_, i) => (
                                  <SelectItem key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                                    {`${i.toString().padStart(2, '0')}:00`}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <span className="text-muted-foreground ml-4">Last available slot</span>
                            <span className="text-foreground">{slot.lastAvailable}</span>
                            <Button 
                              variant="link" 
                              className="text-destructive p-0 h-auto ml-auto"
                              onClick={() => removeSlot(dayIndex, slot.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        ))}
                        <Button 
                          variant="link" 
                          className="text-primary p-0 h-auto text-sm"
                          onClick={() => addSlot(dayIndex)}
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add a new slot
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Block seats */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-xl border p-6"
            >
              <div className="flex gap-4 mb-4">
                <Button 
                  variant={blockSlotsTab === "time-slot" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBlockSlotsTab("time-slot")}
                >
                  Block seats for a time slot
                </Button>
                <Button 
                  variant={blockSlotsTab === "period" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setBlockSlotsTab("period")}
                >
                  Suspend reservations for a period
                </Button>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2">Block seats for a time slot</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Do you want to stop accepting reservations for a particular slot?
                <br />
                Choose here which slot is no longer allow or reduce availability.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Input 
                  value={blockDate}
                  onChange={(e) => setBlockDate(e.target.value)}
                  className="w-40"
                  placeholder="Date"
                />
                <Input 
                  value={blockTime}
                  onChange={(e) => setBlockTime(e.target.value)}
                  className="w-24"
                  placeholder="Time"
                />
                <Input 
                  value={blockSeats}
                  onChange={(e) => setBlockSeats(e.target.value)}
                  className="w-48"
                  placeholder="How many seats do you want to block?"
                />
              </div>
              <Button className="mt-4">Save</Button>
            </motion.section>

            {/* SMS Reminder */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-2">SMS reminder</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Send an SMS reminder to customers who have reservation with you. The SMS will be sent 2 hours before the time of the reservation.
                <br />
                In any case customers will receive a notification also via email.
              </p>
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="smsReminder" 
                  checked={smsReminderEnabled}
                  onCheckedChange={(checked) => setSmsReminderEnabled(checked as boolean)}
                />
                <Label htmlFor="smsReminder" className="text-sm">
                  Enable SMS reminder (you need SMS credit, your current balance is 10 SMS(s))
                </Label>
              </div>
            </motion.section>

            {/* More Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-2">More Info</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Enter additional details that you want to include in the email that is sent to your customers when they make a reservation.
              </p>
              <Textarea 
                value={moreInfo}
                onChange={(e) => setMoreInfo(e.target.value)}
                placeholder="Enter additional information..."
                className="min-h-[120px]"
              />
              <Button className="mt-4">Save</Button>
            </motion.section>

            {/* Deposit for reservations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-2">Deposit for reservations</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Do you want to allow customers to reserve only if they pay a deposit?
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="depositRequired" 
                    checked={depositRequired}
                    onCheckedChange={(checked) => setDepositRequired(checked as boolean)}
                  />
                  <Label htmlFor="depositRequired" className="text-sm">
                    Confirm reservations to customers only if they pay a deposit
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox 
                    id="depositContact" 
                    checked={depositContactRequired}
                    onCheckedChange={(checked) => setDepositContactRequired(checked as boolean)}
                  />
                  <Label htmlFor="depositContact" className="text-sm">
                    Do not allow online reservations for more than a certain number of covers, but ask to be contacted
                  </Label>
                </div>
              </div>
            </motion.section>

            {/* Change the menu link */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Change the menu link</h2>
              <div className="flex items-center gap-4">
                <Label className="whitespace-nowrap">Link text:</Label>
                <Input 
                  value={menuLink}
                  onChange={(e) => setMenuLink(e.target.value)}
                  className="flex-1 max-w-sm"
                />
              </div>
            </motion.section>

            {/* Additional emails */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Insert more email addresses to send reservation notifications to:</h2>
              <Input 
                value={additionalEmails}
                onChange={(e) => setAdditionalEmails(e.target.value)}
                placeholder="email1@example.com,email2@example.com"
              />
            </motion.section>

            {/* Connect Google Calendar */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-2">Connect Google Calendar</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Here you can connect your Google Calendar so that reservations created in Movylo are automatically displayed in your calendar.
              </p>
              <Button>Connect Google Calendar</Button>
            </motion.section>

            {/* Customers can book via */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="bg-card rounded-xl border p-6"
            >
              <h2 className="text-lg font-semibold text-primary mb-4">Customers can book via</h2>
              
              <div className="space-y-6">
                {/* Via Movylo URL */}
                <div>
                  <h3 className="font-medium text-foreground mb-1">Via your Movylo url</h3>
                  <p className="text-sm text-muted-foreground mb-2">This is your booking page:</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Input value={bookingUrl} readOnly className="flex-1 max-w-md bg-muted/50" />
                    <Button variant="outline" size="sm" className="gap-2">
                      <Copy className="h-4 w-4" />
                      Copy link
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 text-accent border-accent/30 bg-accent/10 hover:bg-accent/20">
                      <ExternalLink className="h-4 w-4" />
                      Open URL
                    </Button>
                  </div>
                </div>

                {/* Google Reserve */}
                <div>
                  <h3 className="font-medium text-foreground mb-2">Google Reserve</h3>
                  <div className="flex items-center gap-2">
                    <Checkbox 
                      id="googleReserve" 
                      checked={googleReserve}
                      onCheckedChange={(checked) => setGoogleReserve(checked as boolean)}
                    />
                    <Label htmlFor="googleReserve" className="text-sm">Google Reserve</Label>
                  </div>
                </div>

                {/* Via Movylo App */}
                <div>
                  <h3 className="font-medium text-foreground mb-1">Via the Movylo App</h3>
                  <p className="text-sm text-muted-foreground mb-2">Tell customers to download the Movylo App</p>
                  <Button className="bg-primary">Tell customers about the App</Button>
                </div>

                {/* Via website */}
                <div>
                  <h3 className="font-medium text-foreground mb-1">Via your website</h3>
                  <p className="text-sm text-muted-foreground mb-2">Publish the 'Booking' Module on your website</p>
                  <Button className="bg-primary">Publish</Button>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
