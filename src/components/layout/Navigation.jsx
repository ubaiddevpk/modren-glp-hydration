import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Droplets, Menu, X, Home, Zap, Info, DollarSign, 
  BarChart3, Microscope, BookOpen, Users, ExternalLink,
  Shield, Mail, Play, FileText, ChevronDown
} from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/features', label: 'Features', icon: Zap },
    { path: '/pricing', label: 'Pricing', icon: DollarSign },
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
  ];

  const resourcesDropdown = [
    { path: '/science', label: 'Science & Research', icon: Microscope },
    { path: '/blog', label: 'Blog & News', icon: BookOpen },
    { path: '/community', label: 'Community', icon: Users },
    { path: '/integrations', label: 'Integrations', icon: ExternalLink },
    { path: '/demo', label: 'Try Demo', icon: Play },
  ];

  const companyDropdown = [
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
    { path: '/privacy', label: 'Privacy Policy', icon: Shield },
    { path: '/terms', label: 'Terms of Service', icon: FileText },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Droplets className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">HydraGLP</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive(item.path)
                      ? 'text-cyan-400' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </motion.button>
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden"
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    {resourcesDropdown.map((item) => (
                      <Link key={item.path} to={item.path}>
                        <motion.button
                          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                            isActive(item.path) ? 'text-cyan-400' : 'text-slate-300'
                          }`}
                          onClick={() => setResourcesOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </motion.button>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                Company
                <ChevronDown className="w-4 h-4" />
              </motion.button>

              <div className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-xl border border-white/10 shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {companyDropdown.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <motion.button
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                        isActive(item.path) ? 'text-cyan-400' : 'text-slate-300'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </motion.button>
                  </Link>
                ))}
              </div>
            </div>

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
            className="lg:hidden"
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
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {/* Main Nav Items */}
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  </Link>
                ))}

                {/* Resources Section */}
                <div className="pt-4 border-t border-white/10">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Resources</p>
                  {resourcesDropdown.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </div>

                {/* Company Section */}
                <div className="pt-4 border-t border-white/10">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Company</p>
                  {companyDropdown.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'bg-cyan-500/20 text-cyan-400' 
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </button>
                    </Link>
                  ))}
                </div>

                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold">
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