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
import AddProduct from "@/pages/app/creator/AddProduct.tsx";
import CreateProject from "@/pages/app/creator/CreateProject.tsx";
import SubmissionSuccess from "@/pages/app/creator/SubmissionSuccess.tsx";
import ConsumerFeed from "@/pages/app/consumer/Feed.tsx";
import ConsumerMarket from "@/pages/app/consumer/Market.tsx";
import ConsumerEarnCoin from "@/pages/app/consumer/EarnCoin.tsx";
import ConsumerAccount from "@/pages/app/consumer/Account.tsx";

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
            <Route path="creator/add-product" element={<AddProduct />} />
            <Route path="creator/create-project" element={<CreateProject />} />
            <Route path="creator/submission-success" element={<SubmissionSuccess />} />

            {/* Consumer Routes */}
            <Route path="consumer/feed" element={<ConsumerFeed />} />
            <Route path="consumer/market" element={<ConsumerMarket />} />
            <Route path="consumer/earn-coin" element={<ConsumerEarnCoin />} />
            <Route path="consumer/account" element={<ConsumerAccount />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;