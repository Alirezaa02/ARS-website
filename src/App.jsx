import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import AiAnsweringServiceCostAustralia from "./pages/blog/AiAnsweringServiceCostAustralia";
import Industries from "./pages/Industries";
import Construction from "./pages/industries/Construction";
import Electrical from "./pages/industries/Electrical";
import Plumbing from "./pages/industries/Plumbing";
import AirConditioning from "./pages/industries/AirConditioning";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function GAPageView() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);
  return null;
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <GAPageView />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/pricing" element={<Page><Pricing /></Page>} />
          <Route path="/book" element={<Page><Book /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route path="/blog" element={<Page><Blog /></Page>} />
          <Route
            path="/blog/ai-answering-service-cost-australia"
            element={<Page><AiAnsweringServiceCostAustralia /></Page>}
          />
          <Route path="/industries" element={<Page><Industries /></Page>} />
          <Route path="/industries/construction" element={<Page><Construction /></Page>} />
          <Route path="/industries/electrical" element={<Page><Electrical /></Page>} />
          <Route path="/industries/plumbing" element={<Page><Plumbing /></Page>} />
          <Route path="/industries/air-conditioning" element={<Page><AirConditioning /></Page>} />
          <Route path="/privacy" element={<Page><Privacy /></Page>} />
          <Route path="/terms" element={<Page><Terms /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <Analytics />
    </div>
  );
}
