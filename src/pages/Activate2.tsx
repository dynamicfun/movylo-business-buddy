import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, MapPin, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock Google Places suggestions
const MOCK_PLACES = [
  { name: "Bella Napoli Pizzeria", address: "Via Roma 12, Milano, IT", category: "Restaurant", phone: "+39 02 1234 5678" },
  { name: "Aroma Coffee Bar", address: "Corso Vittorio 45, Torino, IT", category: "Café", phone: "+39 011 987 6543" },
  { name: "Studio Bellezza", address: "Via Garibaldi 8, Roma, IT", category: "Beauty salon", phone: "+39 06 5555 1212" },
  { name: "FitZone Gym", address: "Piazza Dante 3, Napoli, IT", category: "Fitness", phone: "+39 081 333 4444" },
];

type Business = (typeof MOCK_PLACES)[number];

const GOAL_OPTIONS = [
  { id: "acquire", emoji: "🙌", label: "Get new customers" },
  { id: "retain", emoji: "💛", label: "Bring customers back" },
  { id: "bookings", emoji: "📅", label: "Take bookings" },
] as const;

type GoalId = (typeof GOAL_OPTIONS)[number]["id"];

export default function Activate2() {
  const navigate = useNavigate();
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [query, setQuery] = useState("");
  const [business, setBusiness] = useState<Business | null>(null);
  const [goal, setGoal] = useState<GoalId | null>(null);

  const results = useMemo(() => {
    if (!query.trim() || business) return [];
    const q = query.toLowerCase();
    return MOCK_PLACES.filter((p) => p.name.toLowerCase().includes(q));
  }, [query, business]);

  const back = () => {
    if (step === 0) navigate("/");
    else setStep((step - 1) as 0 | 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto px-4 py-6 sm:py-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" onClick={back} aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i <= step ? "bg-[#042C53]" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* STEP 0 — find business */}
            {step === 0 && (
              <section>
                <h1 className="text-3xl font-bold mb-2">What's your business?</h1>
                <p className="text-muted-foreground mb-6">
                  Type the name. We'll do the rest.
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
                    placeholder="e.g. Bella Napoli"
                    className="pl-9 h-14 text-base"
                  />
                </div>

                {results.length > 0 && (
                  <div className="mt-3 border rounded-2xl divide-y overflow-hidden bg-card">
                    {results.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => {
                          setBusiness(p);
                          setQuery(p.name);
                        }}
                        className="w-full text-left p-4 hover:bg-muted transition flex items-start gap-3"
                      >
                        <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium text-sm">{p.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{p.address}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {!business && query && results.length === 0 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    Try "Bella", "Aroma", "Studio" or "FitZone".
                  </p>
                )}

                {business && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 rounded-2xl bg-[#042C53]/5 border border-[#042C53]/20 flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#042C53] text-white flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm truncate">{business.name}</p>
                      <p className="text-xs text-muted-foreground truncate">
                        {business.category} · {business.address}
                      </p>
                    </div>
                  </motion.div>
                )}

                <Button
                  onClick={() => setStep(1)}
                  disabled={!business}
                  className="w-full mt-8 h-14 text-base bg-[#042C53] hover:bg-[#042C53]/90 text-white rounded-2xl"
                >
                  Continue
                </Button>
              </section>
            )}

            {/* STEP 1 — one goal */}
            {step === 1 && (
              <section>
                <h1 className="text-3xl font-bold mb-2">What do you want most?</h1>
                <p className="text-muted-foreground mb-6">Pick one. You can change it later.</p>

                <div className="space-y-3">
                  {GOAL_OPTIONS.map((g) => {
                    const active = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => {
                          setGoal(g.id);
                          setTimeout(() => setStep(2), 200);
                        }}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition flex items-center gap-4 ${
                          active
                            ? "border-[#042C53] bg-[#042C53]/5"
                            : "border-border hover:border-foreground/30"
                        }`}
                      >
                        <span className="text-3xl">{g.emoji}</span>
                        <span className="font-semibold text-base flex-1">{g.label}</span>
                        {active && (
                          <div className="w-6 h-6 rounded-full bg-[#042C53] text-white flex items-center justify-center">
                            <Check className="w-4 h-4" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* STEP 2 — done, turn on */}
            {step === 2 && (
              <section className="text-center py-4">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-[#042C53] text-white flex items-center justify-center mx-auto mb-6"
                >
                  <Sparkles className="w-9 h-9" />
                </motion.div>

                <h1 className="text-3xl font-bold mb-3">All set.</h1>
                <p className="text-muted-foreground mb-8 px-2">
                  Tap below and Autopilot starts working for{" "}
                  <span className="font-semibold text-foreground">{business?.name}</span>.
                  We'll send the occasional smart message — nothing happens until customers
                  choose to join.
                </p>

                <Button
                  onClick={() => navigate("/autopilot")}
                  className="w-full h-14 text-base bg-[#042C53] hover:bg-[#042C53]/90 text-white rounded-2xl"
                >
                  Turn on Autopilot
                </Button>

                <button
                  onClick={() => navigate("/")}
                  className="mt-4 text-sm text-muted-foreground hover:text-foreground"
                >
                  Not now
                </button>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
