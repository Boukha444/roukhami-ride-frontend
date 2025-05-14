
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Cars from "./pages/Cars";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin imports
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminCars from "./pages/admin/Cars";
import Bookings from "./pages/admin/Bookings";
import Customers from "./pages/admin/Customers";
import Documents from "./pages/admin/Documents";
import Settings from "./pages/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                  <Index />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/cars" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                  <Cars />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/booking" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                  <Booking />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/about" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                  <About />
                </main>
                <Footer />
              </div>
            } />
            <Route path="/contact" element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 pt-16">
                  <Contact />
                </main>
                <Footer />
              </div>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="cars" element={<AdminCars />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="customers" element={<Customers />} />
              <Route path="documents" element={<Documents />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            
            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
