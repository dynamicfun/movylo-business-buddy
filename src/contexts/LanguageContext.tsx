import { createContext, useContext, useState, ReactNode } from "react";

type LanguageCode = "it" | "en" | "es" | "fr" | "de";

interface Translations {
  // Sidebar
  home: string;
  myProfile: string;
  myCustomers: string;
  customersSubtitle: string;
  customerList: string;
  signUpPage: string;
  loyaltyProgram: string;
  findNewCustomers: string;
  messagesOffers: string;
  createPromo: string;
  createNewsletter: string;
  createSocialPost: string;
  scheduleCampaigns: string;
  mySales: string;
  salesSubtitle: string;
  myResults: string;
  inStoreSales: string;
  onlineSales: string;
  reservations: string;
  businessTools: string;
  reports: string;
  productsServices: string;
  aiTools: string;
  mobileApp: string;
  preferences: string;
  upgradePlan: string;
  topUpSms: string;
  myAccount: string;
  language: string;
  // Dashboard
  steadyState: string;
  newUser: string;
  last30Days: string;
  // Customer Card
  customers: string;
  newCustomers: string;
  totalCustomers: string;
  sources: string;
  website: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  qrCodes: string;
  excel: string;
  manual: string;
  ads: string;
  google: string;
  shareLink: string;
  addCustomers: string;
  waitingForActivity: string;
  // Activity Card
  activity: string;
  activitySubtitle: string;
  messages: string;
  sent: string;
  opened: string;
  clicked: string;
  contacts: string;
  calls: string;
  email: string;
  socialClicks: string;
  interactions: string;
  reviews: string;
  feedback: string;
  getMoreActivity: string;
  activityWillAppear: string;
  // Sales Card
  sales: string;
  downloadedOffers: string;
  inStore: string;
  online: string;
  closed: string;
  covers: string;
  createOffer: string;
  // Live Feed
  liveFeed: string;
  noRecentActivity: string;
  // Quick Actions
  checkCoupon: string;
  assignLoyaltyPoints: string;
}

const translations: Record<LanguageCode, Translations> = {
  it: {
    // Sidebar
    home: "Home",
    myProfile: "Il Mio Profilo",
    myCustomers: "I Miei Clienti",
    customersSubtitle: "Clienti connessi alla tua attività",
    customerList: "Lista Clienti",
    signUpPage: "Pagina di Iscrizione",
    loyaltyProgram: "Programma Fedeltà",
    findNewCustomers: "Trova Nuovi Clienti",
    messagesOffers: "Messaggi e Offerte",
    createPromo: "Crea una Promo",
    createNewsletter: "Crea una Newsletter",
    createSocialPost: "Crea un post social",
    scheduleCampaigns: "Pianifica Campagne",
    mySales: "Le Mie Vendite",
    salesSubtitle: "Vendite generate per te",
    myResults: "I Miei Risultati",
    inStoreSales: "Vendite in Negozio",
    onlineSales: "Vendite Online",
    reservations: "Prenotazioni",
    businessTools: "Strumenti Business",
    reports: "Report",
    productsServices: "Prodotti / Servizi",
    aiTools: "Strumenti AI",
    mobileApp: "App Mobile",
    preferences: "Preferenze",
    upgradePlan: "Upgrade Piano",
    topUpSms: "Ricarica SMS",
    myAccount: "Il Mio Account",
    language: "Lingua",
    // Dashboard
    steadyState: "Stato normale",
    newUser: "Nuovo utente",
    last30Days: "ultimi 30 giorni",
    // Customer Card
    customers: "Clienti",
    newCustomers: "Nuovi Clienti",
    totalCustomers: "Clienti Totali",
    sources: "Sorgenti",
    website: "Sito Web",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    qrCodes: "QR codes",
    excel: "Excel",
    manual: "Manuale",
    ads: "Ads",
    google: "Google",
    shareLink: "Condividi un link",
    addCustomers: "Aggiungi clienti",
    waitingForActivity: "In attesa di attività dei clienti",
    // Activity Card
    activity: "Attività",
    activitySubtitle: "Cosa fanno i tuoi clienti",
    messages: "Messaggi",
    sent: "Inviati",
    opened: "Aperti",
    clicked: "Cliccati",
    contacts: "Contatti",
    calls: "Chiamate",
    email: "Email",
    socialClicks: "Click Social",
    interactions: "Interazioni",
    reviews: "Recensioni",
    feedback: "Feedback",
    getMoreActivity: "Ottieni più attività dai clienti",
    activityWillAppear: "Messaggi, contatti e visite appariranno qui",
    // Sales Card
    sales: "Vendite",
    downloadedOffers: "Offerte Scaricate",
    inStore: "In Negozio",
    online: "Online",
    closed: "Chiuse",
    covers: "Coperti",
    createOffer: "Crea offerta",
    // Live Feed
    liveFeed: "Live Feed",
    noRecentActivity: "Nessuna attività recente",
    // Quick Actions
    checkCoupon: "Verifica Coupon",
    assignLoyaltyPoints: "Assegna Punti/Premi",
  },
  en: {
    // Sidebar
    home: "Home",
    myProfile: "My Profile",
    myCustomers: "My Customers",
    customersSubtitle: "Customers connected to your business",
    customerList: "Customer List",
    signUpPage: "Sign Up Page",
    loyaltyProgram: "Loyalty Program",
    findNewCustomers: "Find New Customers",
    messagesOffers: "Messages & Offers",
    createPromo: "Create a Promo",
    createNewsletter: "Create a Newsletter",
    createSocialPost: "Create a social post",
    scheduleCampaigns: "Schedule Campaigns",
    mySales: "My Sales",
    salesSubtitle: "Sales generated for you",
    myResults: "My Results",
    inStoreSales: "In-Store Sales",
    onlineSales: "Online Sales",
    reservations: "Reservations",
    businessTools: "Business Tools",
    reports: "Reports",
    productsServices: "Products / Services",
    aiTools: "AI Tools",
    mobileApp: "Mobile App",
    preferences: "Preferences",
    upgradePlan: "Upgrade Plan",
    topUpSms: "Top Up SMS",
    myAccount: "My Account",
    language: "Language",
    // Dashboard
    steadyState: "Steady State",
    newUser: "New User",
    last30Days: "last 30 days",
    // Customer Card
    customers: "Customers",
    newCustomers: "New Customers",
    totalCustomers: "Total Customers",
    sources: "Sources",
    website: "Website",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    qrCodes: "QR codes",
    excel: "Excel",
    manual: "Manual",
    ads: "Ads",
    google: "Google",
    shareLink: "Share a link",
    addCustomers: "Add customers",
    waitingForActivity: "Waiting for customer activity",
    // Activity Card
    activity: "Activity",
    activitySubtitle: "What customers are doing",
    messages: "Messages",
    sent: "Sent",
    opened: "Opened",
    clicked: "Clicked",
    contacts: "Contacts",
    calls: "Calls",
    email: "Email",
    socialClicks: "Social Clicks",
    interactions: "Interactions",
    reviews: "Reviews",
    feedback: "Feedback",
    getMoreActivity: "Get more customer activity",
    activityWillAppear: "Messages, contacts, and visits will appear here",
    // Sales Card
    sales: "Sales",
    downloadedOffers: "Downloaded offers",
    inStore: "In-Store",
    online: "Online",
    closed: "Closed",
    covers: "Covers",
    createOffer: "Create offer",
    // Live Feed
    liveFeed: "Live Feed",
    noRecentActivity: "No recent activity",
    // Quick Actions
    checkCoupon: "Check Coupon",
    assignLoyaltyPoints: "Assign Loyalty Points",
  },
  es: {
    // Sidebar
    home: "Inicio",
    myProfile: "Mi Perfil",
    myCustomers: "Mis Clientes",
    customersSubtitle: "Clientes conectados a tu negocio",
    customerList: "Lista de Clientes",
    signUpPage: "Página de Registro",
    loyaltyProgram: "Programa de Fidelidad",
    findNewCustomers: "Encontrar Nuevos Clientes",
    messagesOffers: "Mensajes y Ofertas",
    createPromo: "Crear una Promo",
    createNewsletter: "Crear un Newsletter",
    createSocialPost: "Crear un post social",
    scheduleCampaigns: "Programar Campañas",
    mySales: "Mis Ventas",
    salesSubtitle: "Ventas generadas para ti",
    myResults: "Mis Resultados",
    inStoreSales: "Ventas en Tienda",
    onlineSales: "Ventas Online",
    reservations: "Reservaciones",
    businessTools: "Herramientas de Negocio",
    reports: "Reportes",
    productsServices: "Productos / Servicios",
    aiTools: "Herramientas IA",
    mobileApp: "App Móvil",
    preferences: "Preferencias",
    upgradePlan: "Mejorar Plan",
    topUpSms: "Recargar SMS",
    myAccount: "Mi Cuenta",
    language: "Idioma",
    // Dashboard
    steadyState: "Estado normal",
    newUser: "Nuevo usuario",
    last30Days: "últimos 30 días",
    // Customer Card
    customers: "Clientes",
    newCustomers: "Nuevos Clientes",
    totalCustomers: "Clientes Totales",
    sources: "Fuentes",
    website: "Sitio Web",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    qrCodes: "Códigos QR",
    excel: "Excel",
    manual: "Manual",
    ads: "Anuncios",
    google: "Google",
    shareLink: "Compartir un enlace",
    addCustomers: "Agregar clientes",
    waitingForActivity: "Esperando actividad de clientes",
    // Activity Card
    activity: "Actividad",
    activitySubtitle: "Qué están haciendo tus clientes",
    messages: "Mensajes",
    sent: "Enviados",
    opened: "Abiertos",
    clicked: "Clicados",
    contacts: "Contactos",
    calls: "Llamadas",
    email: "Email",
    socialClicks: "Clicks Sociales",
    interactions: "Interacciones",
    reviews: "Reseñas",
    feedback: "Feedback",
    getMoreActivity: "Obtén más actividad de clientes",
    activityWillAppear: "Mensajes, contactos y visitas aparecerán aquí",
    // Sales Card
    sales: "Ventas",
    downloadedOffers: "Ofertas descargadas",
    inStore: "En Tienda",
    online: "Online",
    closed: "Cerradas",
    covers: "Cubiertos",
    createOffer: "Crear oferta",
    // Live Feed
    liveFeed: "Feed en Vivo",
    noRecentActivity: "Sin actividad reciente",
    // Quick Actions
    checkCoupon: "Verificar Cupón",
    assignLoyaltyPoints: "Asignar Puntos/Premios",
  },
  fr: {
    // Sidebar
    home: "Accueil",
    myProfile: "Mon Profil",
    myCustomers: "Mes Clients",
    customersSubtitle: "Clients connectés à votre entreprise",
    customerList: "Liste des Clients",
    signUpPage: "Page d'Inscription",
    loyaltyProgram: "Programme de Fidélité",
    findNewCustomers: "Trouver de Nouveaux Clients",
    messagesOffers: "Messages et Offres",
    createPromo: "Créer une Promo",
    createNewsletter: "Créer une Newsletter",
    createSocialPost: "Créer un post social",
    scheduleCampaigns: "Planifier des Campagnes",
    mySales: "Mes Ventes",
    salesSubtitle: "Ventes générées pour vous",
    myResults: "Mes Résultats",
    inStoreSales: "Ventes en Magasin",
    onlineSales: "Ventes en Ligne",
    reservations: "Réservations",
    businessTools: "Outils Business",
    reports: "Rapports",
    productsServices: "Produits / Services",
    aiTools: "Outils IA",
    mobileApp: "App Mobile",
    preferences: "Préférences",
    upgradePlan: "Améliorer le Plan",
    topUpSms: "Recharger SMS",
    myAccount: "Mon Compte",
    language: "Langue",
    // Dashboard
    steadyState: "État normal",
    newUser: "Nouvel utilisateur",
    last30Days: "30 derniers jours",
    // Customer Card
    customers: "Clients",
    newCustomers: "Nouveaux Clients",
    totalCustomers: "Total Clients",
    sources: "Sources",
    website: "Site Web",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    qrCodes: "Codes QR",
    excel: "Excel",
    manual: "Manuel",
    ads: "Publicités",
    google: "Google",
    shareLink: "Partager un lien",
    addCustomers: "Ajouter des clients",
    waitingForActivity: "En attente d'activité des clients",
    // Activity Card
    activity: "Activité",
    activitySubtitle: "Ce que font vos clients",
    messages: "Messages",
    sent: "Envoyés",
    opened: "Ouverts",
    clicked: "Cliqués",
    contacts: "Contacts",
    calls: "Appels",
    email: "Email",
    socialClicks: "Clics Sociaux",
    interactions: "Interactions",
    reviews: "Avis",
    feedback: "Feedback",
    getMoreActivity: "Obtenez plus d'activité clients",
    activityWillAppear: "Messages, contacts et visites apparaîtront ici",
    // Sales Card
    sales: "Ventes",
    downloadedOffers: "Offres téléchargées",
    inStore: "En Magasin",
    online: "En Ligne",
    closed: "Fermées",
    covers: "Couverts",
    createOffer: "Créer une offre",
    // Live Feed
    liveFeed: "Flux en Direct",
    noRecentActivity: "Aucune activité récente",
    // Quick Actions
    checkCoupon: "Vérifier Coupon",
    assignLoyaltyPoints: "Attribuer Points/Récompenses",
  },
  de: {
    // Sidebar
    home: "Startseite",
    myProfile: "Mein Profil",
    myCustomers: "Meine Kunden",
    customersSubtitle: "Kunden, die mit Ihrem Unternehmen verbunden sind",
    customerList: "Kundenliste",
    signUpPage: "Anmeldeseite",
    loyaltyProgram: "Treueprogramm",
    findNewCustomers: "Neue Kunden finden",
    messagesOffers: "Nachrichten & Angebote",
    createPromo: "Promo erstellen",
    createNewsletter: "Newsletter erstellen",
    createSocialPost: "Social Post erstellen",
    scheduleCampaigns: "Kampagnen planen",
    mySales: "Meine Verkäufe",
    salesSubtitle: "Für Sie generierte Verkäufe",
    myResults: "Meine Ergebnisse",
    inStoreSales: "Verkäufe im Geschäft",
    onlineSales: "Online-Verkäufe",
    reservations: "Reservierungen",
    businessTools: "Business Tools",
    reports: "Berichte",
    productsServices: "Produkte / Dienstleistungen",
    aiTools: "KI-Tools",
    mobileApp: "Mobile App",
    preferences: "Einstellungen",
    upgradePlan: "Plan upgraden",
    topUpSms: "SMS aufladen",
    myAccount: "Mein Konto",
    language: "Sprache",
    // Dashboard
    steadyState: "Normaler Zustand",
    newUser: "Neuer Benutzer",
    last30Days: "letzte 30 Tage",
    // Customer Card
    customers: "Kunden",
    newCustomers: "Neue Kunden",
    totalCustomers: "Gesamtkunden",
    sources: "Quellen",
    website: "Website",
    facebook: "Facebook",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    qrCodes: "QR-Codes",
    excel: "Excel",
    manual: "Manuell",
    ads: "Werbung",
    google: "Google",
    shareLink: "Link teilen",
    addCustomers: "Kunden hinzufügen",
    waitingForActivity: "Warte auf Kundenaktivität",
    // Activity Card
    activity: "Aktivität",
    activitySubtitle: "Was Ihre Kunden tun",
    messages: "Nachrichten",
    sent: "Gesendet",
    opened: "Geöffnet",
    clicked: "Geklickt",
    contacts: "Kontakte",
    calls: "Anrufe",
    email: "E-Mail",
    socialClicks: "Social Klicks",
    interactions: "Interaktionen",
    reviews: "Bewertungen",
    feedback: "Feedback",
    getMoreActivity: "Mehr Kundenaktivität erhalten",
    activityWillAppear: "Nachrichten, Kontakte und Besuche werden hier angezeigt",
    // Sales Card
    sales: "Verkäufe",
    downloadedOffers: "Heruntergeladene Angebote",
    inStore: "Im Geschäft",
    online: "Online",
    closed: "Geschlossen",
    covers: "Gedecke",
    createOffer: "Angebot erstellen",
    // Live Feed
    liveFeed: "Live-Feed",
    noRecentActivity: "Keine aktuelle Aktivität",
    // Quick Actions
    checkCoupon: "Coupon prüfen",
    assignLoyaltyPoints: "Punkte/Prämien zuweisen",
  },
};

const languages = [
  { code: "it" as LanguageCode, label: "Italiano", flag: "🇮🇹" },
  { code: "en" as LanguageCode, label: "English", flag: "🇬🇧" },
  { code: "es" as LanguageCode, label: "Español", flag: "🇪🇸" },
  { code: "fr" as LanguageCode, label: "Français", flag: "🇫🇷" },
  { code: "de" as LanguageCode, label: "Deutsch", flag: "🇩🇪" },
];

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: Translations;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("language");
    return (saved as LanguageCode) || "it";
  });

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t: translations[currentLanguage],
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
