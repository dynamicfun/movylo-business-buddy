import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  MapPin,
  Phone,
  Check,
  Users,
  Repeat,
  CalendarCheck,
  Globe,
  Instagram,
  Facebook,
  QrCode,
  MessageCircle,
  Megaphone,
  FileSpreadsheet,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

// --- Mock Google Places suggestions ---
const MOCK_PLACES = [
  {
    name: "Bella Napoli Pizzeria",
    address: "Via Roma 12, Milano, IT",
    category: "Restaurant",
    phone: "+39 02 1234 5678",
  },
  {
    name: "Aroma Coffee Bar",
    address: "Corso Vittorio 45, Torino, IT",
    category: "Café",
    phone: "+39 011 987 6543",
  },
  {
    name: "Studio Bellezza",
    address: "Via Garibaldi 8, Roma, IT",
    category: "Beauty salon",
    phone: "+39 06 5555 1212",
  },
  {
    name: "FitZone Gym",
    address: "Piazza Dante 3, Napoli, IT",
    category: "Fitness",
    phone: "+39 081 333 4444",
  },
];

type Business = (typeof MOCK_PLACES)[number];

const GOALS = [
  {
    id: "acquire",
    icon: Users,
    title: "Find new customers",
    desc: "Bring fresh people through your door",
  },
  {
    id: "retain",
    icon: Repeat,
    title: "Keep customers coming back",
    desc: "Increase repeat visits and loyalty",
  },
  {
    id: "bookings",
    icon: CalendarCheck,
    title: "Accept bookings",
    desc: "Let people reserve a table or slot",
  },
] as const;

type GoalId = (typeof GOALS)[number]["id"];

const ACQUIRE_CHANNELS = [
  { id: "website", icon: Globe, label: "Website" },
  { id: "instagram", icon: Instagram, label: "Instagram" },
  { id: "facebook", icon: Facebook, label: "Facebook" },
  { id: "qr", icon: QrCode, label: "QR in store" },
  { id: "whatsapp", icon: MessageCircle, label: "WhatsApp" },
  { id: "ads", icon: Megaphone, label: "Run ads" },
];

export default function Activate() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [query, setQuery] = useState("");
  const [business, setBusiness] = useState<Business | null>(null);
  const [goals, setGoals] = useState<GoalId[]>([]);
  const [channels, setChannels] = useState<string[]>([]);
  const [hasList, setHasList] = useState<"yes" | "no" | null>(null);

  const totalSteps = 4;
  const progress = ((step + 1) / totalSteps) * 100;

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return MOCK_PLACES.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  const toggleGoal = (id: GoalId) =>
    setGoals((g) => (g.includes(id) ? g.filter((x) => x !== id) : [...g, id]));
  const toggleChannel = (id: string) =>
    setChannels((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]));

  const canNext =
    (step === 0 && !!business) ||
    (step === 1 && goals.length > 0) ||
    (step === 2 &&
      (!goals.includes("acquire") || channels.length > 0) &&
      (!goals.includes("retain") || hasList !== null)) ||
    step === 3;

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else navigate("/autopilot");
  };
  const back = () => (step === 0 ? navigate("/") : setStep(step - 1));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={back} aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground mb-1">
              Step {step + 1} of {totalSteps}
            </p>
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <section>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-[#042C53]" />
                  <h1 className="text-2xl sm:text-3xl font-bold">
                    Let's set up your business
                  </h1>
                </div>
                <p className="text-muted-foreground mb-6">
                  Search for your business — we'll fill in the details for you.
                </p>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    autoFocus
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setBusiness(null);
                    }}
                    placeholder="Type your business name…"
                    className="pl-9 h-12"
                  />
                </div>

                {!business && results.length > 0 && (
                  <div className="mt-3 border rounded-xl divide-y overflow-hidden bg-card">
                    {results.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => {
                          setBusiness(p);
                          setQuery(p.name);
                        }}
                        className="w-full text-left p-3 hover:bg-muted transition flex items-start gap-3"
                      >
                        <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm">{p.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {p.address}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {!business && query && results.length === 0 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Try "Bella", "Aroma", "Studio" or "FitZone" (demo).
                  </p>
                )}

                {business && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-xl border bg-card"
                  >
                    <div className="flex items-center gap-2 mb-2 text-[#042C53]">
                      <Check className="w-4 h-4" />
                      <span className="text-xs font-semibold uppercase tracking-wide">
                        Found
                      </span>
                    </div>
                    <p className="font-semibold">{business.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {business.address}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" /> {business.phone}
                    </p>
                    <p className="text-xs mt-2 inline-block px-2 py-0.5 rounded-full bg-muted">
                      {business.category}
                    </p>
                  </motion.div>
                )}
              </section>
            )}

            {step === 1 && (
              <section>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  What's your main goal?
                </h1>
                <p className="text-muted-foreground mb-6">
                  Pick one or more — we'll tailor your setup.
                </p>
                <div className="space-y-3">
                  {GOALS.map((g) => {
                    const active = goals.includes(g.id);
                    return (
                      <button
                        key={g.id}
                        onClick={() => toggleGoal(g.id)}
                        className={`w-full text-left p-4 rounded-xl border transition flex items-center gap-4 ${
                          active
                            ? "border-[#042C53] bg-[#042C53]/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            active
                              ? "bg-[#042C53] text-white"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <g.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{g.title}</p>
                          <p className="text-xs text-muted-foreground">{g.desc}</p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            active
                              ? "bg-[#042C53] border-[#042C53] text-white"
                              : "border-border"
                          }`}
                        >
                          {active && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {step === 2 && (
              <section className="space-y-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Let's connect the right tools
                  </h1>
                  <p className="text-muted-foreground">
                    Based on your goals — pick what fits you.
                  </p>
                </div>

                {goals.includes("acquire") && (
                  <div>
                    <h2 className="text-sm font-semibold mb-3">
                      Find new customers — which channels can you connect?
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {ACQUIRE_CHANNELS.map((c) => {
                        const active = channels.includes(c.id);
                        return (
                          <button
                            key={c.id}
                            onClick={() => toggleChannel(c.id)}
                            className={`p-3 rounded-xl border transition flex flex-col items-center gap-2 ${
                              active
                                ? "border-[#042C53] bg-[#042C53]/5"
                                : "border-border hover:border-foreground/30"
                            }`}
                          >
                            <c.icon
                              className={`w-5 h-5 ${
                                active ? "text-[#042C53]" : "text-muted-foreground"
                              }`}
                            />
                            <span className="text-xs font-medium">{c.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {goals.includes("retain") && (
                  <div>
                    <h2 className="text-sm font-semibold mb-3">
                      Keep customers coming back — got a list to upload?
                    </h2>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setHasList("yes")}
                        className={`p-4 rounded-xl border transition flex items-center gap-3 ${
                          hasList === "yes"
                            ? "border-[#042C53] bg-[#042C53]/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <FileSpreadsheet className="w-5 h-5 text-[#042C53]" />
                        <span className="text-sm font-medium">Yes, I have one</span>
                      </button>
                      <button
                        onClick={() => setHasList("no")}
                        className={`p-4 rounded-xl border transition text-sm font-medium ${
                          hasList === "no"
                            ? "border-[#042C53] bg-[#042C53]/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        Not yet
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Nothing happens until customers choose to join.
                    </p>
                  </div>
                )}

                {goals.includes("bookings") && (
                  <div className="p-4 rounded-xl border bg-card">
                    <div className="flex items-center gap-2 mb-1">
                      <CalendarCheck className="w-4 h-4 text-[#042C53]" />
                      <h2 className="text-sm font-semibold">Reservations</h2>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We'll help you configure your reservation page right after this.
                    </p>
                  </div>
                )}
              </section>
            )}

            {step === 3 && (
              <section className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-[#042C53] text-white flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  You're ready to go
                </h1>
                <p className="text-muted-foreground mb-6">
                  We'll turn on Autopilot — it works in the background and sends
                  occasional messages to your customers.
                </p>

                <div className="text-left p-4 rounded-xl border bg-card space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Summary
                  </p>
                  {business && (
                    <p className="text-sm">
                      <span className="font-medium">{business.name}</span> ·{" "}
                      {business.category}
                    </p>
                  )}
                  <p className="text-sm">
                    <span className="text-muted-foreground">Goals:</span>{" "}
                    {goals
                      .map((g) => GOALS.find((x) => x.id === g)?.title)
                      .join(", ") || "—"}
                  </p>
                  {goals.includes("acquire") && (
                    <p className="text-sm">
                      <span className="text-muted-foreground">Channels:</span>{" "}
                      {channels
                        .map(
                          (id) =>
                            ACQUIRE_CHANNELS.find((c) => c.id === id)?.label,
                        )
                        .join(", ") || "—"}
                    </p>
                  )}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer actions */}
        <div className="mt-8 flex items-center justify-start gap-3">
          <Button
            onClick={next}
            disabled={!canNext}
            className="bg-[#042C53] hover:bg-[#042C53]/90 text-white gap-2"
            size="lg"
          >
            {step === totalSteps - 1 ? "Turn on Autopilot" : "Continue"}
            <ArrowRight className="w-4 h-4" />
          </Button>
          {step > 0 && (
            <Button variant="ghost" onClick={back} size="lg">
              Back
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
