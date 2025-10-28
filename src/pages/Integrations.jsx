import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Watch, Heart, Activity, Zap, Cloud,
  Check, ArrowRight, Plus, Link as LinkIcon, Settings,
  TrendingUp, Shield, Sparkles, Calendar, Apple,
  CircleDot, Waves, Cpu, Database, Globe
} from 'lucide-react';

const IntegrationsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Integrations', icon: Globe },
    { id: 'wearables', label: 'Wearables', icon: Watch },
    { id: 'health', label: 'Health Apps', icon: Heart },
    { id: 'fitness', label: 'Fitness', icon: Activity },
    { id: 'smart-home', label: 'Smart Home', icon: Smartphone }
  ];

  const integrations = [
    {
      name: 'Apple Health',
      icon: '🍎',
      category: 'health',
      description: 'Sync water intake, weight, and health metrics seamlessly with Apple Health ecosystem.',
      features: ['Auto-sync water logs', 'Health data export', 'Widget support', 'Siri shortcuts'],
      status: 'Live',
      users: '25K+',
      rating: 4.9
    },
    {
      name: 'Apple Watch',
      icon: '⌚',
      category: 'wearables',
      description: 'Track hydration directly from your wrist with complications, reminders, and quick logging.',
      features: ['Watch complications', 'Quick log buttons', 'Smart reminders', 'Stand reminders integration'],
      status: 'Live',
      users: '18K+',
      rating: 4.8
    },
    {
      name: 'Fitbit',
      icon: '🏃',
      category: 'wearables',
      description: 'Connect your Fitbit to automatically adjust hydration goals based on activity and heart rate.',
      features: ['Activity-based goals', 'Heart rate integration', 'Sleep tracking sync', 'Auto-adjust targets'],
      status: 'Live',
      users: '12K+',
      rating: 4.7
    },
    {
      name: 'Google Fit',
      icon: '🔵',
      category: 'health',
      description: 'Comprehensive health tracking integration with Google Fit for Android users.',
      features: ['Two-way sync', 'Activity integration', 'Weight tracking', 'Cross-platform support'],
      status: 'Live',
      users: '15K+',
      rating: 4.6
    },
    {
      name: 'MyFitnessPal',
      icon: '🍽️',
      category: 'fitness',
      description: 'Coordinate hydration with meal tracking for optimal GLP-1 medication timing.',
      features: ['Meal timing sync', 'Nutrition insights', 'Water with meals', 'Calorie coordination'],
      status: 'Live',
      users: '22K+',
      rating: 4.8
    },
    {
      name: 'Strava',
      icon: '🚴',
      category: 'fitness',
      description: 'Adjust hydration needs based on your workouts and outdoor activities.',
      features: ['Workout-based goals', 'Weather integration', 'Performance tracking', 'Post-workout reminders'],
      status: 'Live',
      users: '8K+',
      rating: 4.5
    },
    {
      name: 'Samsung Health',
      icon: '📱',
      category: 'health',
      description: 'Native integration for Samsung Galaxy users with full health ecosystem support.',
      features: ['Galaxy Watch sync', 'Bixby routines', 'Health dashboard', 'Smart notifications'],
      status: 'Live',
      users: '11K+',
      rating: 4.7
    },
    {
      name: 'Garmin Connect',
      icon: '⌚',
      category: 'wearables',
      description: 'Advanced hydration tracking for serious athletes using Garmin devices.',
      features: ['Training load sync', 'Recovery metrics', 'Body battery integration', 'Custom data fields'],
      status: 'Live',
      users: '9K+',
      rating: 4.9
    },
    {
      name: 'Oura Ring',
      icon: '💍',
      category: 'wearables',
      description: 'Correlate hydration with sleep quality, readiness, and recovery metrics.',
      features: ['Sleep quality tracking', 'Readiness score sync', 'Recovery insights', 'Temperature monitoring'],
      status: 'Live',
      users: '5K+',
      rating: 4.8
    },
    {
      name: 'Whoop',
      icon: '⚡',
      category: 'wearables',
      description: 'Optimize hydration based on strain, recovery, and sleep data from Whoop.',
      features: ['Strain-based hydration', 'Recovery optimization', 'Sleep integration', 'HRV correlation'],
      status: 'Live',
      users: '4K+',
      rating: 4.7
    },
    {
      name: 'Alexa',
      icon: '🔊',
      category: 'smart-home',
      description: 'Voice-controlled hydration logging and reminders through Amazon Alexa.',
      features: ['Voice logging', 'Custom routines', 'Smart reminders', 'Flash briefing'],
      status: 'Beta',
      users: '3K+',
      rating: 4.5
    },
    {
      name: 'Google Home',
      icon: '🏠',
      category: 'smart-home',
      description: 'Smart home integration for hands-free hydration tracking.',
      features: ['Voice commands', 'Routine automation', 'Cast support', 'Family tracking'],
      status: 'Beta',
      users: '2K+',
      rating: 4.4
    },
    {
      name: 'Lose It!',
      icon: '📊',
      category: 'fitness',
      description: 'Coordinate weight loss goals with hydration tracking for GLP-1 users.',
      features: ['Weight sync', 'Calorie coordination', 'Meal planning', 'Progress insights'],
      status: 'Coming Soon',
      users: 'TBA',
      rating: null
    },
    {
      name: 'Peloton',
      icon: '🚲',
      category: 'fitness',
      description: 'Track hydration needs based on your Peloton workouts and intensity.',
      features: ['Workout integration', 'Class-based hydration', 'Intensity tracking', 'Recovery planning'],
      status: 'Coming Soon',
      users: 'TBA',
      rating: null
    }
  ];

  const filteredIntegrations = integrations.filter(
    integration => selectedCategory === 'all' || integration.category === selectedCategory
  );

  const benefitsData = [
    {
      title: 'Automatic Sync',
      description: 'Data flows seamlessly between apps without manual entry',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Smart Adjustments',
      description: 'Goals adapt based on activity, sleep, and health metrics',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Unified Dashboard',
      description: 'View all your health data in one comprehensive place',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Secure & Private',
      description: 'Bank-level encryption keeps your health data safe',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
            <LinkIcon className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">14+ Integrations Available</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Connect Your Ecosystem
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            HydraGLP seamlessly integrates with your favorite health apps and wearables for a unified hydration experience
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-cyan-500/50 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl">{integration.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{integration.name}</h3>
                      {integration.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-slate-400">{integration.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    integration.status === 'Live'
                      ? 'bg-green-500/20 text-green-400'
                      : integration.status === 'Beta'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {integration.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-4 flex-1">{integration.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {integration.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-slate-400">{integration.users} users</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                      integration.status === 'Coming Soon'
                        ? 'bg-white/10 text-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    }`}
                    disabled={integration.status === 'Coming Soon'}
                  >
                    {integration.status === 'Coming Soon' ? 'Coming Soon' : 'Connect'}
                    {integration.status !== 'Coming Soon' && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* API Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Developer API</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                Build Your Own Integration
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Use our powerful API to create custom integrations with your own apps, services, or healthcare systems.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  RESTful API with comprehensive documentation
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  Webhooks for real-time data sync
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  OAuth 2.0 authentication
                </li>
                <li className="flex items-center gap-2 text-slate-300">
                  <Check className="w-5 h-5 text-purple-400" />
                  Rate limiting & scalability
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold shadow-lg shadow-purple-500/30 flex items-center gap-2"
              >
                View API Documentation <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/10 font-mono text-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400">Example API Request</span>
                <span className="text-green-400">✓ Connected</span>
              </div>
              <pre className="text-cyan-400 overflow-x-auto">
{`POST /api/v1/hydration/log
Authorization: Bearer {token}

{
  "amount": 500,
  "timestamp": "2025-10-27T14:30:00Z",
  "type": "water",
  "source": "apple_health"
}`}
              </pre>
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-slate-400">Response</span>
                <pre className="text-green-400 mt-2">
{`{
  "status": "success",
  "data": {
    "id": "log_12345",
    "daily_total": 1750
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Request Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-12 border border-white/10 text-center"
        >
          <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Don't See Your App?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            We're always adding new integrations. Let us know what you'd like to connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30 flex items-center gap-2 justify-center"
            >
              Request Integration <Plus className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center gap-2 justify-center"
            >
              View Roadmap <Calendar className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            How Integrations Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Connect Your Apps</h3>
              <p className="text-slate-400">
                One-click connection with secure OAuth authentication. Your data stays private and encrypted.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automatic Sync</h3>
              <p className="text-slate-400">
                Data flows seamlessly between apps. Water intake, activity, and health metrics update in real-time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart Insights</h3>
              <p className="text-slate-400">
                AI analyzes all connected data to provide personalized hydration recommendations for your GLP-1 journey.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationsPage;