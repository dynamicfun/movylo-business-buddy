import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Autopilot from "./pages/Autopilot";
import GoogleProfile from "./pages/GoogleProfile";
import MyProfile from "./pages/MyProfile";
import CustomerList from "./pages/CustomerList";
import SignUpPage from "./pages/SignUpPage";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import Reservations from "./pages/Reservations";
import SellOnline from "./pages/SellOnline";
import DigitalMenu from "./pages/DigitalMenu";
import Products from "./pages/Products";
import CreatePromo from "./pages/CreatePromo";
import CreatePromoAI from "./pages/CreatePromoAI";
import CreateNewsletter from "./pages/CreateNewsletter";
import SelectProducts from "./pages/SelectProducts";
import CampaignScheduler from "./pages/CampaignScheduler";
import CreateSocialPost from "./pages/CreateSocialPost";
import WebsiteSource from "./pages/sources/WebsiteSource";
import InstagramSource from "./pages/sources/InstagramSource";
import ShareLinkSource from "./pages/sources/ShareLinkSource";
import QRCodeSource from "./pages/sources/QRCodeSource";
import FacebookSource from "./pages/sources/FacebookSource";
import ManualSource from "./pages/sources/ManualSource";
import ExcelSource from "./pages/sources/ExcelSource";
import WhatsAppSource from "./pages/sources/WhatsAppSource";
import WiFiSource from "./pages/sources/WiFiSource";
import TabletSource from "./pages/sources/TabletSource";
import MetaAdsSource from "./pages/sources/MetaAdsSource";
import SourcesHub from "./pages/sources/SourcesHub";
import CustomersReport from "./pages/reports/CustomersReport";
import SalesReport from "./pages/reports/SalesReport";
import PromotionsReport from "./pages/reports/PromotionsReport";
import NewslettersReport from "./pages/reports/NewslettersReport";
import ContactsReport from "./pages/reports/ContactsReport";
import ReviewsReport from "./pages/reports/ReviewsReport";
import FeedbackReport from "./pages/reports/FeedbackReport";
import ReportsIndex from "./pages/reports/ReportsIndex";
import AIAssistant from "./pages/AIAssistant";
import Preferences from "./pages/Preferences";
import StoreAppearance from "./pages/preferences/StoreAppearance";
import CustomPages from "./pages/preferences/CustomPages";
import StoreLanguage from "./pages/preferences/StoreLanguage";
import StoreUrl from "./pages/preferences/StoreUrl";
import UnitSystem from "./pages/preferences/UnitSystem";
import Timezone from "./pages/preferences/Timezone";
import DigitalStoreLink from "./pages/preferences/DigitalStoreLink";
import CheckoutInformation from "./pages/preferences/CheckoutInformation";
import PickupStock from "./pages/preferences/PickupStock";
import ShippingCosts from "./pages/preferences/ShippingCosts";
import TaxSettings from "./pages/preferences/TaxSettings";
import AppAds from "./pages/preferences/AppAds";
import ApiKeys from "./pages/preferences/ApiKeys";
import GoogleTagManager from "./pages/preferences/GoogleTagManager";
import EmailNotifications from "./pages/preferences/EmailNotifications";
import DisconnectGoogle from "./pages/preferences/DisconnectGoogle";
import MobileApp from "./pages/MobileApp";
import LiveFeedPage from "./pages/LiveFeedPage";
import UpgradePlan from "./pages/UpgradePlan";

import MyAccount from "./pages/MyAccount";
import Orders from "./pages/Orders";
import Alex from "./pages/Alex";
import Activate from "./pages/Activate";
import Activate2 from "./pages/Activate2";
import DemoPage from "./pages/DemoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/autopilot" element={<Autopilot />} />
            <Route path="/business-info/google-profile" element={<GoogleProfile />} />
            <Route path="/business-info/profile" element={<MyProfile />} />
            <Route path="/customers/list" element={<CustomerList />} />
            <Route path="/customers/signup" element={<SignUpPage />} />
            <Route path="/customers/loyalty" element={<LoyaltyProgram />} />
            <Route path="/sales/reservations" element={<Reservations />} />
            <Route path="/sales/sell-online" element={<SellOnline />} />
            <Route path="/sales/menu" element={<DigitalMenu />} />
            <Route path="/products" element={<Products />} />
            <Route path="/messages/create-promo" element={<CreatePromo />} />
            <Route path="/messages/create-promo/ai" element={<CreatePromoAI />} />
            <Route path="/messages/create-promo/products" element={<SelectProducts />} />
            <Route path="/messages/newsletter" element={<CreateNewsletter />} />
            <Route path="/messages/scheduler" element={<CampaignScheduler />} />
            <Route path="/messages/social" element={<CreateSocialPost />} />
            <Route path="/sources/website" element={<WebsiteSource />} />
            <Route path="/sources/instagram" element={<InstagramSource />} />
            <Route path="/sources/share-link" element={<ShareLinkSource />} />
            <Route path="/sources/qr-codes" element={<QRCodeSource />} />
            <Route path="/sources/facebook" element={<FacebookSource />} />
            <Route path="/sources/manual" element={<ManualSource />} />
            <Route path="/sources/excel" element={<ExcelSource />} />
            <Route path="/sources/whatsapp" element={<WhatsAppSource />} />
            <Route path="/sources/wifi" element={<WiFiSource />} />
            <Route path="/sources/tablet" element={<TabletSource />} />
            <Route path="/sources/meta-ads" element={<MetaAdsSource />} />
            <Route path="/sources" element={<SourcesHub />} />
            <Route path="/reports" element={<ReportsIndex />} />
            <Route path="/reports/customers" element={<CustomersReport />} />
            <Route path="/reports/sales" element={<SalesReport />} />
            <Route path="/reports/promotions" element={<PromotionsReport />} />
            <Route path="/reports/newsletters" element={<NewslettersReport />} />
            <Route path="/reports/contacts" element={<ContactsReport />} />
            <Route path="/reports/reviews" element={<ReviewsReport />} />
            <Route path="/reports/feedback" element={<FeedbackReport />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/preferences/appearance" element={<StoreAppearance />} />
            <Route path="/preferences/custom-pages" element={<CustomPages />} />
            <Route path="/preferences/language" element={<StoreLanguage />} />
            <Route path="/preferences/store-url" element={<StoreUrl />} />
            <Route path="/preferences/units" element={<UnitSystem />} />
            <Route path="/preferences/timezone" element={<Timezone />} />
            <Route path="/preferences/digital-store-link" element={<DigitalStoreLink />} />
            <Route path="/preferences/checkout" element={<CheckoutInformation />} />
            <Route path="/preferences/pickup-stock" element={<PickupStock />} />
            <Route path="/preferences/shipping" element={<ShippingCosts />} />
            <Route path="/preferences/tax" element={<TaxSettings />} />
            <Route path="/preferences/app-ads" element={<AppAds />} />
            <Route path="/preferences/api-keys" element={<ApiKeys />} />
            <Route path="/preferences/google-tag-manager" element={<GoogleTagManager />} />
            <Route path="/preferences/email-notifications" element={<EmailNotifications />} />
            <Route path="/preferences/disconnect-google" element={<DisconnectGoogle />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/feed" element={<LiveFeedPage />} />
            <Route path="/upgrade" element={<UpgradePlan />} />
            <Route path="/topup" element={<Navigate to="/upgrade?tab=sms" replace />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/alex" element={<Alex />} />
            <Route path="/activate" element={<Activate />} />
            <Route path="/activate-v2" element={<Activate2 />} />
            <Route path="/demo" element={<DemoPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
