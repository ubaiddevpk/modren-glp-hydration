import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      medication: 'Ozempic User',
      rating: 5,
      text: 'HydraGLP changed my entire GLP-1 experience. My nausea is 80% better just from proper hydration timing!',
      result: 'Lost 45lbs in 6 months'
    },
    {
      name: 'Michael T.',
      medication: 'Mounjaro User',
      rating: 5,
      text: 'The smart reminders are a game-changer. I actually look forward to my water breaks now.',
      result: 'Reduced side effects by 70%'
    },
    {
      name: 'Jennifer L.',
      medication: 'Wegovy User',
      rating: 5,
      text: 'Finally, an app that understands the unique needs of GLP-1 users. Worth every penny!',
      result: 'Maintained consistency for 8 months'
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-slate-400">Real results from real GLP-1 users</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-cyan-400">{testimonial.medication}</p>
                <p className="text-sm text-slate-400 mt-2">{testimonial.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;