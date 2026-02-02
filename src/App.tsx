import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Autopilot from "./pages/Autopilot";
import GoogleProfile from "./pages/GoogleProfile";
import MyProfile from "./pages/MyProfile";
import CustomerList from "./pages/CustomerList";
import SignUpPage from "./pages/SignUpPage";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import Reservations from "./pages/Reservations";
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
import SourcesHub from "./pages/sources/SourcesHub";
import CustomersReport from "./pages/reports/CustomersReport";
import ReportsIndex from "./pages/reports/ReportsIndex";
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
            <Route path="/sources" element={<SourcesHub />} />
            <Route path="/reports" element={<ReportsIndex />} />
            <Route path="/reports/customers" element={<CustomersReport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
