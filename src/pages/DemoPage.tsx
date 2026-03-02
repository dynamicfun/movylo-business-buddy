import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Globe, Users, Activity, TrendingUp, QrCode, Link, Facebook, Instagram, MessageCircle, Search, Store, Monitor, CalendarCheck, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Script data ──────────────────────────────────────────────────────────────
type Lang = "en" | "it" | "es";

const SCRIPT: Record<Lang, { time: [number, number]; text: string; highlight: "none" | "customers" | "activity" | "sales" | "all"; sub?: string }[]> = {
  en: [
    { time: [0, 4], text: "You run a local business. You're busy. And you want results.", highlight: "none" },
    { time: [4, 8], text: "Movylo turns nearby customers into repeat sales—automatically.", highlight: "all", sub: "My Customers → Activity → My Sales" },
    { time: [8, 18], text: "Start here: My Customers. Connect the channels you already use—Google, your link, QR codes, Facebook, Instagram, WhatsApp.", highlight: "customers" },
    { time: [18, 26], text: "As your list grows, Movylo Autopilot reaches out with personal messages—'Thanks for joining,' 'Come back soon,' 'Happy birthday.'", highlight: "activity" },
    { time: [26, 32], text: "That creates Activity—offers downloaded, calls received, customers brought back.", highlight: "activity", sub: "Activity" },
    { time: [32, 38], text: "And activity converts into Sales—in-store, online, or reservations—your choice.", highlight: "sales", sub: "In-store · Online · Reservations" },
    { time: [38, 44], text: "Every month: more customers, more activity, more sales. Movylo runs it for you.", highlight: "all", sub: "Set it up. Autopilot takes over." },
  ],
  it: [
    { time: [0, 4], text: "Gestisci un'attività locale. Sei sempre impegnato. E vuoi risultati.", highlight: "none" },
    { time: [4, 8], text: "Movylo trasforma i clienti vicini in vendite ripetute—in automatico.", highlight: "all", sub: "I Miei Clienti → Attività → Le Mie Vendite" },
    { time: [8, 18], text: "Inizia da qui: I Miei Clienti. Collega i canali che usi già—Google, il tuo link, QR code, Facebook, Instagram, WhatsApp.", highlight: "customers" },
    { time: [18, 26], text: "Man mano che la lista cresce, il Pilota Automatico di Movylo invia messaggi personalizzati—'Grazie per esserti iscritto,' 'Torna presto,' 'Buon compleanno.'", highlight: "activity" },
    { time: [26, 32], text: "Questo genera Attività—offerte scaricate, chiamate ricevute, clienti fatti tornare.", highlight: "activity", sub: "Attività" },
    { time: [32, 38], text: "E l'attività si converte in Vendite—in negozio, online o prenotazioni—come preferisci.", highlight: "sales", sub: "In Negozio · Online · Prenotazioni" },
    { time: [38, 44], text: "Ogni mese: più clienti, più attività, più vendite. Il Pilota Automatico fa il resto.", highlight: "all", sub: "Configuralo. Il Pilota Automatico fa il resto." },
  ],
  es: [
    { time: [0, 4], text: "Tienes un negocio local. Estás ocupado. Y quieres resultados.", highlight: "none" },
    { time: [4, 8], text: "Movylo convierte clientes cercanos en ventas repetidas—automáticamente.", highlight: "all", sub: "Mis Clientes → Actividad → Mis Ventas" },
    { time: [8, 18], text: "Empieza aquí: Mis Clientes. Conecta los canales que ya usas—Google, tu enlace, códigos QR, Facebook, Instagram, WhatsApp.", highlight: "customers" },
    { time: [18, 26], text: "A medida que tu lista crece, el Piloto Automático de Movylo envía mensajes personales—'Gracias por unirte,' 'Vuelve pronto,' 'Feliz cumpleaños.'", highlight: "activity" },
    { time: [26, 32], text: "Eso genera Actividad—ofertas descargadas, llamadas recibidas, clientes que vuelven.", highlight: "activity", sub: "Actividad" },
    { time: [32, 38], text: "Y la actividad se convierte en Ventas—en tienda, online o reservas—tú eliges.", highlight: "sales", sub: "En Tienda · Online · Reservas" },
    { time: [38, 44], text: "Cada mes: más clientes, más actividad, más ventas. El Piloto Automático lo hace por ti.", highlight: "all", sub: "Configúralo. El Piloto Automático se encarga." },
  ],
};

const TOTAL_DURATION = 44;

const LANG_LABELS: Record<Lang, string> = { en: "🇬🇧 EN", it: "🇮🇹 IT", es: "🇪🇸 ES" };

// ─── Source channels (for customers card animation) ──────────────────────────
const SOURCES = [
  { icon: Search, label: "Google" },
  { icon: Link, label: "Link" },
  { icon: QrCode, label: "QR Code" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp" },
];

// ─── Message bubbles ──────────────────────────────────────────────────────────
const MESSAGES: Record<Lang, { text: string; delay: number }[]> = {
  en: [
    { text: "Thanks for joining! 🎉", delay: 0 },
    { text: "Come back soon! ☕", delay: 0.4 },
    { text: "Happy birthday! 🎂", delay: 0.8 },
  ],
  it: [
    { text: "Grazie per esserti iscritto! 🎉", delay: 0 },
    { text: "Torna presto! ☕", delay: 0.4 },
    { text: "Buon compleanno! 🎂", delay: 0.8 },
  ],
  es: [
    { text: "¡Gracias por unirte! 🎉", delay: 0 },
    { text: "¡Vuelve pronto! ☕", delay: 0.4 },
    { text: "¡Feliz cumpleaños! 🎂", delay: 0.8 },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function useCurrentScene(elapsed: number, lang: Lang) {
  const scenes = SCRIPT[lang];
  return scenes.find((s) => elapsed >= s.time[0] && elapsed < s.time[1]) ?? scenes[scenes.length - 1];
}

// ─── Dashboard Card ───────────────────────────────────────────────────────────
function DashboardMock({ highlight, elapsed, lang }: { highlight: string; elapsed: number; lang: Lang }) {
  const messages = MESSAGES[lang];
  const isCustomers = highlight === "customers" || highlight === "all";
  const isActivity = highlight === "activity" || highlight === "all";
  const isSales = highlight === "sales" || highlight === "all";
  const showMessages = elapsed >= 18 && elapsed < 26;
  const showSourcesAnim = elapsed >= 8 && elapsed < 18;

  const cardBase = "relative rounded-2xl border p-4 transition-all duration-700 flex flex-col gap-3";
  const highlight_cls = "border-primary/60 shadow-[0_0_0_3px_hsl(var(--primary)/0.18)] bg-card";
  const dim_cls = "border-border/40 bg-card/60 opacity-60";

  const labels: Record<Lang, { c: string; a: string; s: string; new: string; total: string; offers: string; calls: string; returning: string; instore: string; online: string; res: string }> = {
    en: { c: "My Customers", a: "Activity", s: "My Sales", new: "New (30d)", total: "Total", offers: "Downloaded offers", calls: "Calls received", returning: "Customers brought back", instore: "In-Store", online: "Online", res: "Reservations" },
    it: { c: "I Miei Clienti", a: "Attività", s: "Le Mie Vendite", new: "Nuovi (30g)", total: "Totale", offers: "Offerte scaricate", calls: "Chiamate ricevute", returning: "Clienti fatti tornare", instore: "In Negozio", online: "Online", res: "Prenotazioni" },
    es: { c: "Mis Clientes", a: "Actividad", s: "Mis Ventas", new: "Nuevos (30d)", total: "Total", offers: "Ofertas descargadas", calls: "Llamadas recibidas", returning: "Clientes que volvieron", instore: "En Tienda", online: "Online", res: "Reservas" },
  };
  const L = labels[lang];

  return (
    <div className="grid grid-cols-3 gap-3 w-full">
      {/* MY CUSTOMERS */}
      <motion.div
        className={`${cardBase} ${isCustomers ? highlight_cls : dim_cls}`}
        animate={{ scale: isCustomers ? 1.02 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-sm text-foreground">{L.c}</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-secondary/60 rounded-xl p-2.5 text-center">
            <p className="text-xs text-muted-foreground">{L.new}</p>
            <p className="text-2xl font-bold text-primary">247</p>
          </div>
          <div className="bg-secondary/60 rounded-xl p-2.5 text-center">
            <p className="text-xs text-muted-foreground">{L.total}</p>
            <p className="text-2xl font-bold">15k</p>
          </div>
        </div>
        {/* source channels */}
        <div className="flex flex-wrap gap-1.5">
          {SOURCES.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: showSourcesAnim ? 1 : 0.5,
                scale: showSourcesAnim ? [1, 1.12, 1] : 1,
                backgroundColor: showSourcesAnim ? "hsl(var(--primary)/0.12)" : "hsl(var(--secondary))",
              }}
              transition={{ delay: showSourcesAnim ? i * 0.18 : 0, duration: 0.4 }}
            >
              <Icon className="w-3 h-3" />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ACTIVITY */}
      <motion.div
        className={`${cardBase} ${isActivity ? highlight_cls : dim_cls}`}
        animate={{ scale: isActivity ? 1.02 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
            <Activity className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="font-semibold text-sm text-foreground">{L.a}</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center bg-secondary/60 rounded-xl px-3 py-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Gift className="w-3.5 h-3.5" /> {L.offers}
            </div>
            <span className="text-sm font-bold text-primary">22</span>
          </div>
          <div className="flex justify-between items-center bg-secondary/60 rounded-xl px-3 py-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageCircle className="w-3.5 h-3.5" /> {L.calls}
            </div>
            <span className="text-sm font-bold text-accent-foreground">8</span>
          </div>
          <div className="flex justify-between items-center bg-secondary/60 rounded-xl px-3 py-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users className="w-3.5 h-3.5" /> {L.returning}
            </div>
            <span className="text-sm font-bold">47</span>
          </div>
        </div>
        {/* message bubbles overlay */}
        <AnimatePresence>
          {showMessages && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-center gap-2 px-3 bg-card/90 backdrop-blur-sm">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: m.delay, duration: 0.4 }}
                  className="bg-primary text-primary-foreground text-xs font-medium px-3 py-2 rounded-2xl rounded-tl-sm max-w-[80%] shadow-md"
                >
                  {m.text}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* MY SALES */}
      <motion.div
        className={`${cardBase} ${isSales ? highlight_cls : dim_cls}`}
        animate={{ scale: isSales ? 1.02 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-success/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
          <span className="font-semibold text-sm text-foreground">{L.s}</span>
        </div>
        <div className="space-y-2">
          {[
            { icon: Store, label: L.instore, value: "$25", sub: "3 closed" },
            { icon: Monitor, label: L.online, value: "$100", sub: "1 closed" },
            { icon: CalendarCheck, label: L.res, value: "$8,975", sub: "259 covers" },
          ].map(({ icon: Icon, label, value, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: isSales ? 1 : 0.5 }}
              transition={{ delay: isSales ? i * 0.15 : 0 }}
              className="flex items-center justify-between bg-secondary/60 rounded-xl px-3 py-2"
            >
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </div>
              <div className="text-right">
                <span className="text-sm font-bold">{value}</span>
                <span className="text-xs text-muted-foreground ml-1">{sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
        {/* flow arrow */}
        {isSales && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1 text-xs font-medium text-primary mt-1"
          >
            <Activity className="w-3 h-3" />
            <ArrowRight className="w-3 h-3" />
            <TrendingUp className="w-3 h-3" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DemoPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [elapsed, setElapsed] = useState(0);
  const [playing, setPlaying] = useState(false);
  const rafRef = useRef<number>();
  const lastRef = useRef<number>();

  const scene = useCurrentScene(elapsed, lang);
  const progress = (elapsed / TOTAL_DURATION) * 100;

  const tick = useCallback((now: number) => {
    if (lastRef.current != null) {
      const delta = (now - lastRef.current) / 1000;
      setElapsed((e) => {
        const next = e + delta;
        if (next >= TOTAL_DURATION) { setPlaying(false); return TOTAL_DURATION; }
        return next;
      });
    }
    lastRef.current = now;
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (playing) {
      lastRef.current = undefined;
      rafRef.current = requestAnimationFrame(tick);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [playing, tick]);

  const reset = () => { setElapsed(0); setPlaying(false); lastRef.current = undefined; };

  // scene index for progress dots
  const scenes = SCRIPT[lang];
  const sceneIdx = scenes.findIndex((s) => elapsed >= s.time[0] && elapsed < s.time[1]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start py-8 px-4">
      {/* Header */}
      <div className="w-full max-w-4xl mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Movylo Demo</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Interactive dashboard walkthrough</p>
        </div>
        {/* Language selector */}
        <div className="flex items-center gap-1.5 bg-secondary/60 rounded-xl p-1">
          <Globe className="w-4 h-4 text-muted-foreground ml-1" />
          {(["en", "it", "es"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); reset(); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${lang === l ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              {LANG_LABELS[l]}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard mock */}
      <div className="w-full max-w-4xl mb-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DashboardMock highlight={scene.highlight} elapsed={elapsed} lang={lang} />
        </motion.div>
      </div>

      {/* Caption */}
      <div className="w-full max-w-4xl mb-5 min-h-[80px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={scene.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="bg-card border border-border rounded-2xl px-5 py-4 shadow-sm"
          >
            <p className="text-base font-medium text-foreground leading-relaxed">"{scene.text}"</p>
            {scene.sub && (
              <p className="mt-1.5 text-sm font-semibold text-primary">{scene.sub}</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-4xl mb-3">
        <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-primary rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
          {/* scene markers */}
          {scenes.map((s, i) => (
            <div
              key={i}
              className="absolute top-0 h-full w-0.5 bg-border/80"
              style={{ left: `${(s.time[0] / TOTAL_DURATION) * 100}%` }}
            />
          ))}
        </div>
        {/* Scene dots */}
        <div className="flex justify-between mt-2 px-0.5">
          {scenes.map((s, i) => (
            <button
              key={i}
              onClick={() => { setElapsed(s.time[0]); lastRef.current = undefined; }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === sceneIdx ? "bg-primary scale-125" : elapsed >= s.time[0] ? "bg-primary/40" : "bg-border"}`}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" onClick={reset} className="gap-1.5">
          <RotateCcw className="w-4 h-4" /> Reset
        </Button>
        <Button
          size="sm"
          onClick={() => { if (elapsed >= TOTAL_DURATION) reset(); setPlaying((p) => !p); }}
          className="gap-1.5 min-w-[100px]"
        >
          {playing ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> {elapsed >= TOTAL_DURATION ? "Replay" : "Play"}</>}
        </Button>
        <span className="text-sm text-muted-foreground font-mono">{formatTime(elapsed)} / {formatTime(TOTAL_DURATION)}</span>
      </div>

      {/* Hint */}
      <p className="text-xs text-muted-foreground mt-4">Click scene dots to jump to any moment · Switch language to reset</p>
    </div>
  );
}
