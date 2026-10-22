import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollToTop } from './components/shared';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import WhyConvene from './pages/WhyConvene';
import { UseCasesIndex, UseCaseDetail } from './pages/UseCases';
import { ResourcesIndex, ResourceArticle } from './pages/Resources';
import Demo from './pages/Demo';
import EarlyAccess from './pages/EarlyAccess';
import SignIn from './pages/SignIn';
import Security from './pages/Security';
import { Privacy, Terms } from './pages/Legal';
import NotFound from './pages/NotFound';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/how-it-works" element={<PageTransition><HowItWorks /></PageTransition>} />
          <Route path="/why-convene" element={<PageTransition><WhyConvene /></PageTransition>} />
          <Route path="/use-cases" element={<PageTransition><UseCasesIndex /></PageTransition>} />
          <Route path="/use-cases/:role" element={<PageTransition><UseCaseDetail /></PageTransition>} />
          <Route path="/resources" element={<PageTransition><ResourcesIndex /></PageTransition>} />
          <Route path="/resources/:slug" element={<PageTransition><ResourceArticle /></PageTransition>} />
          <Route path="/demo" element={<PageTransition><Demo /></PageTransition>} />
          <Route path="/early-access" element={<PageTransition><EarlyAccess /></PageTransition>} />
          <Route path="/signin" element={<PageTransition><SignIn /></PageTransition>} />
          <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
