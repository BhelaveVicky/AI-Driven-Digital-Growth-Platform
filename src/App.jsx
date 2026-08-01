import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Report from './pages/Report';
import Competitor from './pages/Competitor';
import Chat from './pages/Chat';
import Pricing from './pages/Pricing';
import Referral from './pages/Referral';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainContent() {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 selection:bg-indigo-500 selection:text-white ${
      theme === 'dark' 
        ? 'bg-slate-950 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/report" element={<Report />} />
          <Route path="/competitor" element={<Competitor />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <MainContent />
      </Router>
    </ThemeProvider>
  );
}
