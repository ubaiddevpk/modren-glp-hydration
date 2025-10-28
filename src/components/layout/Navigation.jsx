import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, Menu, X, Home, Zap, Info, BookOpen, Mail
} from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'about', label: 'About', icon: Info },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <Droplets className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold">HydraGLP</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center gap-2 transition-colors ${
                  currentPage === item.id 
                    ? 'text-cyan-400' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold shadow-lg"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full px-4 py-2 rounded-lg transition-colors ${
                      currentPage === item.id 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
                <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;