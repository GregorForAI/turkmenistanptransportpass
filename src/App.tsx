import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TopUp from "./pages/TopUp";
import History from "./pages/History";
import TransactionDetail from "./pages/TransactionDetail";
import Calculator from "./pages/Calculator";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Security from "./pages/Security";
import Notifications from "./pages/Notifications";
import QRPayment from "./pages/QRPayment";
import AddVehicle from "./pages/AddVehicle";
import SupportChat from "./pages/SupportChat";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/topup/card" element={<ComingSoon />} />
          <Route path="/topup/sms" element={<ComingSoon />} />
          <Route path="/topup/scratch" element={<ComingSoon />} />
          <Route path="/topup/terminal" element={<ComingSoon />} />
          <Route path="/history" element={<History />} />
          <Route path="/transaction/:id" element={<TransactionDetail />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/security" element={<Security />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/qr-payment" element={<QRPayment />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/support-chat" element={<SupportChat />} />
          <Route path="/change-password" element={<ComingSoon />} />
          <Route path="/vehicle/:id" element={<ComingSoon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
