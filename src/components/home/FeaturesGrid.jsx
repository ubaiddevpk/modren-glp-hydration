import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Bell, TrendingUp, Shield, Users, Heart } from 'lucide-react';

const FeaturesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const features = [
    {
      title: 'AI-Powered Hydration Tracking',
      description: 'Advanced algorithms analyze your GLP-1 medication schedule and provide personalized hydration recommendations tailored to your needs.',
      icon: Droplets,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Smart Reminders',
      description: 'Intelligent notification system that learns your routine and sends timely hydration reminders optimized for GLP-1 users.',
      icon: Bell,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Progress Analytics',
      description: 'Comprehensive dashboards track your hydration patterns, medication adherence, and overall wellness metrics in real-time.',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Medical-Grade Security',
      description: 'HIPAA-compliant data encryption ensures your health information remains private and secure at all times.',
      icon: Shield,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Community Support',
      description: 'Connect with thousands of GLP-1 users, share experiences, and get motivated through our supportive community platform.',
      icon: Users,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Wellness Integration',
      description: 'Seamlessly syncs with popular health apps and wearables to provide holistic health management for GLP-1 therapy.',
      icon: Heart,
      gradient: 'from-rose-500 to-orange-500'
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
            Hydration Reimagined for GLP-1 Users
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to stay perfectly hydrated on your GLP-1 journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-cyan-500/50 transition-all h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;