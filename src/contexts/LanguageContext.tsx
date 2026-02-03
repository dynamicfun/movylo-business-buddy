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
  autopilot: string;
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
  aiAssistant: string;
  mobileApp: string;
  preferences: string;
  upgradePlan: string;
  topUpSms: string;
  myAccount: string;
  language: string;
  // Reports
  reportCustomers: string;
  reportOrders: string;
  reportSales: string;
  reportContacts: string;
  reportPromotions: string;
  reportNewsletters: string;
  reportReviews: string;
  reportSatisfaction: string;
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
  wifi: string;
  tablet: string;
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
  activityWillAppearSubtitle: string;
  // Sales Card
  sales: string;
  downloadedOffers: string;
  inStore: string;
  online: string;
  closed: string;
  covers: string;
  createOffer: string;
  sell: string;
  salesWillAppear: string;
  salesWillAppearSubtitle: string;
  // Live Feed
  liveFeed: string;
  noRecentActivity: string;
  // Quick Actions
  checkCoupon: string;
  assignLoyaltyPoints: string;
  // Activation Banner
  completeSetup: string;
  completed: string;
  continue: string;
  // Common UI
  showMore: string;
  showLess: string;
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
    autopilot: "Autopilot",
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
    aiAssistant: "Assistente AI",
    mobileApp: "App Mobile",
    preferences: "Preferenze",
    upgradePlan: "Upgrade Piano",
    topUpSms: "Ricarica SMS",
    myAccount: "Il Mio Account",
    language: "Lingua",
    // Reports
    reportCustomers: "Clienti",
    reportOrders: "Ordini",
    reportSales: "Vendite",
    reportContacts: "Contatti",
    reportPromotions: "Promozioni",
    reportNewsletters: "Newsletter",
    reportReviews: "Recensioni",
    reportSatisfaction: "Soddisfazione Clienti",
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
    wifi: "WiFi",
    tablet: "Tablet",
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
    activityWillAppear: "L'attività dei clienti apparirà qui",
    activityWillAppearSubtitle: "Quando i clienti si iscrivono o interagiscono, lo vedrai qui.",
    // Sales Card
    sales: "Vendite",
    downloadedOffers: "Offerte Scaricate",
    inStore: "In Negozio",
    online: "Online",
    closed: "Chiuse",
    covers: "Coperti",
    createOffer: "Crea offerta",
    sell: "Vendi",
    salesWillAppear: "Le vendite appariranno qui",
    salesWillAppearSubtitle: "Quando i clienti effettuano un acquisto o riscattano un'offerta.",
    // Live Feed
    liveFeed: "Live Feed",
    noRecentActivity: "Nessuna attività recente",
    // Quick Actions
    checkCoupon: "Verifica Coupon",
    assignLoyaltyPoints: "Assegna Punti/Premi",
    // Activation Banner
    completeSetup: "Completa la configurazione",
    completed: "completati",
    continue: "Continua",
    // Common UI
    showMore: "Mostra altro",
    showLess: "Mostra meno",
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
    autopilot: "Autopilot",
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
    aiAssistant: "AI Assistant",
    mobileApp: "Mobile App",
    preferences: "Preferences",
    upgradePlan: "Upgrade Plan",
    topUpSms: "Top Up SMS",
    myAccount: "My Account",
    language: "Language",
    // Reports
    reportCustomers: "Customers",
    reportOrders: "Orders",
    reportSales: "Sales",
    reportContacts: "Contacts",
    reportPromotions: "Promotions",
    reportNewsletters: "Newsletters",
    reportReviews: "Reviews",
    reportSatisfaction: "Customer Satisfaction",
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
    wifi: "WiFi",
    tablet: "Tablet",
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
    activityWillAppear: "Customer activity will appear here",
    activityWillAppearSubtitle: "When customers sign up or interact, you'll see it here.",
    // Sales Card
    sales: "Sales",
    downloadedOffers: "Downloaded offers",
    inStore: "In-Store",
    online: "Online",
    closed: "Closed",
    covers: "Covers",
    createOffer: "Create offer",
    sell: "Sell",
    salesWillAppear: "Sales will appear here",
    salesWillAppearSubtitle: "When customers make a purchase or redeem an offer.",
    // Live Feed
    liveFeed: "Live Feed",
    noRecentActivity: "No recent activity",
    // Quick Actions
    checkCoupon: "Check Coupon",
    assignLoyaltyPoints: "Assign Loyalty Points",
    // Activation Banner
    completeSetup: "Complete your setup",
    completed: "completed",
    continue: "Continue",
    // Common UI
    showMore: "Show more",
    showLess: "Show less",
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
    autopilot: "Autopilot",
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
    aiAssistant: "Asistente IA",
    mobileApp: "App Móvil",
    preferences: "Preferencias",
    upgradePlan: "Mejorar Plan",
    topUpSms: "Recargar SMS",
    myAccount: "Mi Cuenta",
    language: "Idioma",
    // Reports
    reportCustomers: "Clientes",
    reportOrders: "Pedidos",
    reportSales: "Ventas",
    reportContacts: "Contactos",
    reportPromotions: "Promociones",
    reportNewsletters: "Newsletters",
    reportReviews: "Reseñas",
    reportSatisfaction: "Satisfacción del Cliente",
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
    wifi: "WiFi",
    tablet: "Tablet",
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
    activityWillAppear: "La actividad de los clientes aparecerá aquí",
    activityWillAppearSubtitle: "Cuando los clientes se registren o interactúen, lo verás aquí.",
    // Sales Card
    sales: "Ventas",
    downloadedOffers: "Ofertas descargadas",
    inStore: "En Tienda",
    online: "Online",
    closed: "Cerradas",
    covers: "Cubiertos",
    createOffer: "Crear oferta",
    sell: "Vender",
    salesWillAppear: "Las ventas aparecerán aquí",
    salesWillAppearSubtitle: "Cuando los clientes realicen una compra o canjeen una oferta.",
    // Live Feed
    liveFeed: "Feed en Vivo",
    noRecentActivity: "Sin actividad reciente",
    // Quick Actions
    checkCoupon: "Verificar Cupón",
    assignLoyaltyPoints: "Asignar Puntos/Premios",
    // Activation Banner
    completeSetup: "Completa tu configuración",
    completed: "completados",
    continue: "Continuar",
    // Common UI
    showMore: "Mostrar más",
    showLess: "Mostrar menos",
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
    autopilot: "Autopilot",
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
    aiAssistant: "Assistant IA",
    mobileApp: "App Mobile",
    preferences: "Préférences",
    upgradePlan: "Améliorer le Plan",
    topUpSms: "Recharger SMS",
    myAccount: "Mon Compte",
    language: "Langue",
    // Reports
    reportCustomers: "Clients",
    reportOrders: "Commandes",
    reportSales: "Ventes",
    reportContacts: "Contacts",
    reportPromotions: "Promotions",
    reportNewsletters: "Newsletters",
    reportReviews: "Avis",
    reportSatisfaction: "Satisfaction Client",
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
    wifi: "WiFi",
    tablet: "Tablette",
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
    activityWillAppear: "L'activité des clients apparaîtra ici",
    activityWillAppearSubtitle: "Lorsque les clients s'inscrivent ou interagissent, vous le verrez ici.",
    // Sales Card
    sales: "Ventes",
    downloadedOffers: "Offres téléchargées",
    inStore: "En Magasin",
    online: "En Ligne",
    closed: "Fermées",
    covers: "Couverts",
    createOffer: "Créer une offre",
    sell: "Vendre",
    salesWillAppear: "Les ventes apparaîtront ici",
    salesWillAppearSubtitle: "Lorsque les clients effectuent un achat ou utilisent une offre.",
    // Live Feed
    liveFeed: "Flux en Direct",
    noRecentActivity: "Aucune activité récente",
    // Quick Actions
    checkCoupon: "Vérifier Coupon",
    assignLoyaltyPoints: "Attribuer Points/Récompenses",
    // Activation Banner
    completeSetup: "Complétez votre configuration",
    completed: "terminés",
    continue: "Continuer",
    // Common UI
    showMore: "Afficher plus",
    showLess: "Afficher moins",
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
    autopilot: "Autopilot",
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
    aiAssistant: "KI-Assistent",
    mobileApp: "Mobile App",
    preferences: "Einstellungen",
    upgradePlan: "Plan upgraden",
    topUpSms: "SMS aufladen",
    myAccount: "Mein Konto",
    language: "Sprache",
    // Reports
    reportCustomers: "Kunden",
    reportOrders: "Bestellungen",
    reportSales: "Verkäufe",
    reportContacts: "Kontakte",
    reportPromotions: "Aktionen",
    reportNewsletters: "Newsletter",
    reportReviews: "Bewertungen",
    reportSatisfaction: "Kundenzufriedenheit",
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
    wifi: "WiFi",
    tablet: "Tablet",
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
    activityWillAppear: "Kundenaktivität wird hier angezeigt",
    activityWillAppearSubtitle: "Wenn Kunden sich anmelden oder interagieren, sehen Sie es hier.",
    // Sales Card
    sales: "Verkäufe",
    downloadedOffers: "Heruntergeladene Angebote",
    inStore: "Im Geschäft",
    online: "Online",
    closed: "Geschlossen",
    covers: "Gedecke",
    createOffer: "Angebot erstellen",
    sell: "Verkaufen",
    salesWillAppear: "Verkäufe werden hier angezeigt",
    salesWillAppearSubtitle: "Wenn Kunden einen Kauf tätigen oder ein Angebot einlösen.",
    // Live Feed
    liveFeed: "Live-Feed",
    noRecentActivity: "Keine aktuelle Aktivität",
    // Quick Actions
    checkCoupon: "Coupon prüfen",
    assignLoyaltyPoints: "Punkte/Prämien zuweisen",
    // Activation Banner
    completeSetup: "Einrichtung abschließen",
    completed: "abgeschlossen",
    continue: "Weiter",
    // Common UI
    showMore: "Mehr anzeigen",
    showLess: "Weniger anzeigen",
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

const defaultContextValue: LanguageContextType = {
  currentLanguage: "it",
  setLanguage: () => {},
  t: translations["it"],
  languages,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

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
  return useContext(LanguageContext);
}
