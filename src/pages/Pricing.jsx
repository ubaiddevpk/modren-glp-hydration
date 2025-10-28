import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, X, Zap, Crown, Sparkles, TrendingUp, 
  Shield, Users, Star, Gift, ArrowRight, HelpCircle
} from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      name: 'Basic',
      icon: Sparkles,
      price: { monthly: 9.99, annual: 7.99 },
      description: 'Perfect for getting started with GLP-1 hydration',
      color: 'from-slate-600 to-slate-700',
      borderColor: 'border-slate-600/50',
      features: [
        'Smart water tracking',
        'Basic hydration reminders',
        'Weekly progress reports',
        'GLP-1 medication sync',
        'Mobile app access',
        'Community access'
      ],
      notIncluded: [
        'AI-powered insights',
        'Side effect correlation',
        'Priority support',
        'Advanced analytics'
      ]
    },
    {
      name: 'Pro',
      icon: Zap,
      price: { monthly: 19.99, annual: 15.99 },
      description: 'Most popular for serious GLP-1 users',
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500/50',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Everything in Basic',
        'AI-powered hydration insights',
        'Side effect tracking & correlation',
        'Custom hydration goals',
        'Weather-based adjustments',
        'Priority email support',
        'Advanced analytics dashboard',
        'Medication schedule optimizer',
        'Progress milestones & rewards',
        'Export health data'
      ],
      notIncluded: []
    },
    {
      name: 'Premium',
      icon: Crown,
      price: { monthly: 34.99, annual: 27.99 },
      description: 'Ultimate GLP-1 optimization for power users',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/50',
      badge: 'Best Value',
      features: [
        'Everything in Pro',
        '1-on-1 hydration coaching (monthly)',
        'Personalized meal plans',
        'VIP priority support (24/7)',
        'Unlimited data export',
        'API access for integrations',
        'Early access to new features',
        'White-glove onboarding',
        'Custom reminder schedules',
        'Family plan (up to 4 users)',
        'Lifetime data retention',
        'Ad-free experience'
      ],
      notIncluded: []
    }
  ];

  const enterpriseFeatures = [
    'Custom team dashboards',
    'Dedicated account manager',
    'HIPAA-compliant data handling',
    'SSO & advanced security',
    'Custom integrations',
    'Bulk user management'
  ];

  const faq = [
    {
      question: 'Can I switch plans anytime?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the difference.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial on all plans. No credit card required to start your trial.'
    },
    {
      question: 'What medications are supported?',
      answer: 'HydraGLP supports all major GLP-1 medications including Ozempic, Wegovy, Mounjaro, Zepbound, and more.'
    },
    {
      question: 'Is my health data secure?',
      answer: 'Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your data is never shared without your explicit consent.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your purchase in full.'
    }
  ];

  const savingsAmount = (plan) => {
    const monthlyCost = plan.price.monthly * 12;
    const annualCost = plan.price.annual * 12;
    return (monthlyCost - annualCost).toFixed(2);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30"
          >
            <span className="text-cyan-300 font-semibold">💎 Simple, Transparent Pricing</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Start free, upgrade when you're ready. All plans include core hydration tracking.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-slate-800/50 rounded-full p-2 border border-white/10">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full font-semibold transition-all relative ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold shadow-lg z-10">
                  {plan.badge}
                </div>
              )}

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />

              {/* Card */}
              <div className={`relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 ${plan.borderColor} hover:border-opacity-100 transition-all h-full flex flex-col`}>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price[billingCycle]}
                    </span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-sm text-green-400 mt-2">
                      Save ${savingsAmount(plan)} per year
                    </p>
                  )}
                  {billingCycle === 'annual' && (
                    <p className="text-xs text-slate-500 mt-1">
                      Billed ${(plan.price.annual * 12).toFixed(2)} annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-bold mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } transition-all flex items-center justify-center gap-2`}
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </motion.button>

                {/* Features List */}
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
                <Crown className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Enterprise</span>
              </div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                For Healthcare Organizations
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                Custom solutions for clinics, weight loss centers, and healthcare providers managing GLP-1 patients at scale.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold shadow-lg shadow-purple-500/30 flex items-center gap-2"
              >
                Contact Sales <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/5 rounded-xl p-4">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Compare All Features
            </h2>
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto"
            >
              {showComparison ? 'Hide' : 'Show'} detailed comparison
              <ArrowRight className={`w-5 h-5 transition-transform ${showComparison ? 'rotate-90' : ''}`} />
            </button>
          </div>

          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-slate-400">Feature</th>
                        <th className="text-center py-4 px-4">Basic</th>
                        <th className="text-center py-4 px-4">Pro</th>
                        <th className="text-center py-4 px-4">Premium</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4">Water tracking</td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4">AI insights</td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4">Side effect tracking</td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4">Personal coaching</td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4">Family plan</td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><X className="w-5 h-5 text-slate-600 mx-auto" /></td>
                        <td className="text-center"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.question}</h3>
                    <p className="text-slate-400">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Ready to Optimize Your Hydration?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join 50,000+ GLP-1 users who are maximizing their therapy results with HydraGLP
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/40 flex items-center gap-2 mx-auto"
          >
            Start 14-Day Free Trial <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-sm text-slate-500 mt-4">No credit card required • Cancel anytime</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;