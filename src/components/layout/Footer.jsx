import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, Twitter, Facebook, Instagram, Linkedin, 
  Mail, MapPin, Phone, ArrowRight, Heart, CheckCircle
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footerLinks = {
    product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Try Demo', href: '/demo' },
      { label: 'Integrations', href: '/integrations' }
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog & News', href: '/blog' },
      { label: 'Community', href: '/community' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/about#careers' }
    ],
    resources: [
      { label: 'Science & Research', href: '/science' },
      { label: 'GLP-1 Guide', href: '/science#guidelines' },
      { label: 'Help Center', href: '/contact#faq' },
      { label: 'API Docs', href: '/integrations#api' },
      { label: 'Success Stories', href: '/community#stories' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/privacy#cookies' },
      { label: 'HIPAA Compliance', href: '/privacy#hipaa' },
      { label: 'Medical Disclaimer', href: '/science#disclaimer' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/hydraglp', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: 'https://facebook.com/hydraglp', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: 'https://instagram.com/hydraglp', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: 'https://linkedin.com/company/hydraglp', label: 'LinkedIn', color: 'hover:text-blue-600' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 md:p-12 border border-cyan-500/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Stay Hydrated, Stay Informed
              </h3>
              <p className="text-slate-400 text-lg">
                Get weekly GLP-1 hydration tips, success stories, and exclusive updates
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold shadow-lg shadow-cyan-500/30 flex items-center gap-2 whitespace-nowrap"
              >
                {subscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm mt-4 text-center"
            >
              ✨ Thanks for subscribing! Check your email for confirmation.
            </motion.p>
          )}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <Droplets className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold">HydraGLP</span>
              </div>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The #1 hydration companion for GLP-1 users. Trusted by 50,000+ people on Ozempic, Wegovy, Mounjaro & Zepbound.
            </p>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-colors ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>🏆 4.9★ rating from 10,000+ reviews</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 pb-12 border-b border-white/10">
          <motion.a
            href="mailto:support@hydraglp.com"
            whileHover={{ y: -2 }}
            className="flex items-start gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
              <Mail className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Email</h5>
              <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                support@hydraglp.com
              </p>
            </div>
          </motion.a>

          <motion.a
            href="tel:+12345678900"
            whileHover={{ y: -2 }}
            className="flex items-start gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Phone</h5>
              <p className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                +1 (234) 567-8900
              </p>
            </div>
          </motion.a>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h5 className="font-semibold text-white mb-1">Headquarters</h5>
              <p className="text-slate-400">
                123 Health Tech Blvd<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2025 HydraGLP. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>for GLP-1 users worldwide</span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="/privacy#cookies" className="hover:text-cyan-400 transition-colors">Cookies</a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center items-center gap-8 text-slate-500 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-blue-400" />
              </div>
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-purple-400" />
              </div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-orange-400" />
              </div>
              <span>GDPR Ready</span>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            <strong className="text-yellow-400">Medical Disclaimer:</strong> HydraGLP is a hydration tracking tool and does not provide medical advice. 
            Always consult with your healthcare provider before making changes to your hydration or medication routine. 
            GLP-1 medications should only be used under the supervision of a licensed healthcare professional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;