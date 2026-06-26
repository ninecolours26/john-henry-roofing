import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CalendarClock, Phone } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import { company } from "./data/siteData";

function AppShell() {
  return (
    <div className="site-shell">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <div className="mobile-action-bar">
        <a href={company.phoneHref}>
          <Phone size={16} />
          Call
        </a>

        <Link to="/quote">
          <CalendarClock size={16} />
          Free Estimate
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
