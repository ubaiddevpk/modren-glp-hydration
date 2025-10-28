import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Zap, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: '50K+', label: 'GLP-1 Users', icon: Users },
    { value: '4.9★', label: 'User Rating', icon: Star },
    { value: '100%', label: 'AI-Powered', icon: Zap }
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      
      <div className="relative z-10 px-6 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30"
          >
            <span className="text-cyan-300 font-semibold">✨ #1 Hydration Tool for GLP-1 Users</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            The Ultimate GLP-1<br />Hydration Companion
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Smart water tracking designed specifically for Ozempic, Wegovy, Mounjaro & Zepbound users. AI-powered hydration management to maximize your GLP-1 therapy results.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg shadow-xl shadow-cyan-500/30 flex items-center gap-2"
            >
              Start Free Trial <ChevronRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;