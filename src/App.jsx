import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const Services = lazy(() => import("./pages/Services"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Book = lazy(() => import("./pages/Book"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const AiAnsweringServiceCostAustralia = lazy(() => import("./pages/blog/AiAnsweringServiceCostAustralia"));
const Industries = lazy(() => import("./pages/Industries"));
const Construction = lazy(() => import("./pages/industries/Construction"));
const Electrical = lazy(() => import("./pages/industries/Electrical"));
const Plumbing = lazy(() => import("./pages/industries/Plumbing"));
const AirConditioning = lazy(() => import("./pages/industries/AirConditioning"));
const PestControl = lazy(() => import("./pages/industries/PestControl"));
const CurtainsAndBlinds = lazy(() => import("./pages/industries/CurtainsAndBlinds"));
const Mechanics = lazy(() => import("./pages/industries/Mechanics"));
const RealEstate = lazy(() => import("./pages/industries/RealEstate"));
const AccountingAndFinance = lazy(() => import("./pages/industries/AccountingAndFinance"));
const Restaurants = lazy(() => import("./pages/industries/Restaurants"));
const PartsSuppliers = lazy(() => import("./pages/industries/PartsSuppliers"));
const Barbershops = lazy(() => import("./pages/industries/Barbershops"));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 10) {
          attempts += 1;
          setTimeout(tryScroll, 50);
        }
      };
      tryScroll();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
        <Suspense fallback={null}>
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
            <Route path="/industries/pest-control" element={<Page><PestControl /></Page>} />
            <Route path="/industries/curtains-and-blinds" element={<Page><CurtainsAndBlinds /></Page>} />
            <Route path="/industries/mechanics" element={<Page><Mechanics /></Page>} />
            <Route path="/industries/real-estate" element={<Page><RealEstate /></Page>} />
            <Route path="/industries/accounting-and-finance" element={<Page><AccountingAndFinance /></Page>} />
            <Route path="/industries/restaurants" element={<Page><Restaurants /></Page>} />
            <Route path="/industries/parts-suppliers" element={<Page><PartsSuppliers /></Page>} />
            <Route path="/industries/barbershops" element={<Page><Barbershops /></Page>} />
            <Route path="/privacy" element={<Page><Privacy /></Page>} />
            <Route path="/terms" element={<Page><Terms /></Page>} />
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
