import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Public pages
import LandingPage from "@/pages/public/LandingPage.tsx";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

// App layout and pages
import AppLayout from "@/pages/app/Layout.tsx";
import HomePage from "@/pages/app/HomePage.tsx";
import InvestorDashboard from "@/pages/app/investor/Dashboard.tsx";
import InvestorMarket from "@/pages/app/investor/Market.tsx";
import InvestorWallet from "@/pages/app/investor/Wallet.tsx";
import CreatorDashboard from "@/pages/app/creator/Dashboard.tsx";
import CreatorProducts from "@/pages/app/creator/Products.tsx";
import CreatorProjects from "@/pages/app/creator/Projects.tsx";
import ConsumerFeed from "@/pages/app/consumer/Feed.tsx";
import ConsumerMarket from "@/pages/app/consumer/Market.tsx";
import ConsumerMissions from "@/pages/app/consumer/Missions.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />

          {/* App Routes (Protected) */}
          <Route path="/app" element={<AppLayout />}>
            {/* Default route for /app */}
            <Route index element={<Navigate to="/app/home" replace />} />
            <Route path="home" element={<HomePage />} />

            {/* Investor Routes */}
            <Route path="investor/dashboard" element={<InvestorDashboard />} />
            <Route path="investor/market" element={<InvestorMarket />} />
            <Route path="investor/wallet" element={<InvestorWallet />} />

            {/* Creator Routes */}
            <Route path="creator/dashboard" element={<CreatorDashboard />} />
            <Route path="creator/products" element={<CreatorProducts />} />
            <Route path="creator/projects" element={<CreatorProjects />} />

            {/* Consumer Routes */}
            <Route path="consumer/feed" element={<ConsumerFeed />} />
            <Route path="consumer/market" element={<ConsumerMarket />} />
            <Route path="consumer/missions" element={<ConsumerMissions />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;