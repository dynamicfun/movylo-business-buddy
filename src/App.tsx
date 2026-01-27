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
import WebsiteSource from "./pages/sources/WebsiteSource";
import InstagramSource from "./pages/sources/InstagramSource";
import ShareLinkSource from "./pages/sources/ShareLinkSource";
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
            <Route path="/sources/website" element={<WebsiteSource />} />
            <Route path="/sources/instagram" element={<InstagramSource />} />
            <Route path="/sources/share-link" element={<ShareLinkSource />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
