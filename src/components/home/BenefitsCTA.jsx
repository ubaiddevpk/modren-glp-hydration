import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BenefitsCTA = () => {
  const benefits = [
    'Optimized hydration for Ozempic, Wegovy, Mounjaro & Zepbound users',
    'Reduce side effects with proper hydration timing',
    'Personalized water intake goals based on medication',
    'Track and improve your GLP-1 therapy results',
    'Expert-backed hydration strategies',
    'Real-time progress monitoring'
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Why HydraGLP Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <p className="text-slate-200 text-lg">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-shadow"
          >
            Join 50,000+ GLP-1 Users Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsCTA;