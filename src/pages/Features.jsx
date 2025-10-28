import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Activity, Target, Award, Flame, Clock } from 'lucide-react';

const AdvancedFeaturesPage = () => {
  const advancedFeatures = [
    {
      title: 'Medication Sync',
      description: 'Automatically sync with your GLP-1 injection schedule for optimal hydration timing',
      icon: Calendar,
      detail: 'Never miss the optimal hydration window around your medication doses'
    },
    {
      title: 'Side Effect Tracker',
      description: 'Monitor and correlate hydration levels with side effects like nausea and fatigue',
      icon: Activity,
      detail: 'Identify patterns and optimize your hydration to minimize discomfort'
    },
    {
      title: 'Goal Setting',
      description: 'Set personalized hydration goals based on weight, medication, and activity level',
      icon: Target,
      detail: 'Dynamic goals that adjust as your therapy progresses'
    },
    {
      title: 'Streak Rewards',
      description: 'Earn badges and rewards for maintaining consistent hydration habits',
      icon: Award,
      detail: 'Stay motivated with achievements and milestone celebrations'
    },
    {
      title: 'Weather Integration',
      description: 'Automatic hydration adjustments based on local weather and temperature',
      icon: Flame,
      detail: 'Smart recommendations that account for environmental factors'
    },
    {
      title: 'Quick Log',
      description: 'One-tap water logging with customizable drink sizes and types',
      icon: Clock,
      detail: 'Log your intake in seconds with smart predictions'
    }
  ];

  return (
    <div className="py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Powerful Advanced Features
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to optimize your GLP-1 therapy with perfect hydration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-cyan-500/50 transition-all h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <p className="text-sm text-cyan-400">{feature.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeaturesPage;