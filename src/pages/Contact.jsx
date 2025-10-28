import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MessageSquare, Phone, MapPin, Clock, Send,
  HelpCircle, Users, Briefcase, Bug, Lightbulb,
  Heart, Twitter, Facebook, Linkedin, Instagram,
  CheckCircle, AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your account',
      contact: 'support@hydraglp.com',
      response: 'Response within 24 hours',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 9 AM - 9 PM EST',
      response: 'Average wait: 2 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak to a specialist',
      contact: '+1 (234) 567-8900',
      response: 'Mon-Fri, 9 AM - 6 PM EST',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      description: 'Visit our office',
      contact: '123 Health Tech Blvd',
      response: 'San Francisco, CA 94105',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const categories = [
    { id: 'support', label: 'General Support', icon: HelpCircle },
    { id: 'account', label: 'Account Issues', icon: Users },
    { id: 'business', label: 'Business Inquiry', icon: Briefcase },
    { id: 'bug', label: 'Report a Bug', icon: Bug },
    { id: 'feature', label: 'Feature Request', icon: Lightbulb },
    { id: 'feedback', label: 'Feedback', icon: Heart }
  ];

  const faqs = [
    {
      question: 'How quickly will I get a response?',
      answer: 'We respond to all inquiries within 24 hours on business days. Premium users get priority support with responses within 4 hours.'
    },
    {
      question: 'Do you offer phone support?',
      answer: 'Yes! Phone support is available Monday-Friday, 9 AM - 6 PM EST. Premium and Enterprise users have 24/7 phone access.'
    },
    {
      question: 'Can I schedule a demo?',
      answer: 'Absolutely! Use the business inquiry form to request a personalized demo. We typically schedule within 48 hours.'
    },
    {
      question: 'How do I report a security issue?',
      answer: 'Please email security@hydraglp.com for any security concerns. We take security seriously and respond immediately.'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We're here to help! Choose your preferred way to reach our support team.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center cursor-pointer hover:border-cyan-500/50 transition-all"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4`}>
                <method.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{method.description}</p>
              <p className="text-cyan-400 font-semibold mb-1">{method.contact}</p>
              <p className="text-xs text-slate-500">{method.response}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-green-300 font-semibold">Message sent successfully!</p>
                    <p className="text-sm text-green-400/80">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-white font-semibold mb-3">Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setFormData({ ...formData, category: category.id })}
                        className={`p-4 rounded-xl border transition-all flex items-center gap-2 ${
                          formData.category === category.id
                            ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'
                        }`}
                      >
                        <category.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm font-semibold">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-5 h-5" />
                </motion.button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Office Hours</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9 AM - 6 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10 AM - 4 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm text-cyan-400">
                  💎 Premium users get 24/7 support access
                </p>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Quick FAQs</h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <p className="text-white font-semibold mb-2">{faq.question}</p>
                    <p className="text-sm text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 bg-white/10 rounded-xl text-sm font-semibold hover:bg-white/20 transition-colors">
                View All FAQs
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-500/20' },
                  { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600/20' },
                  { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-500/20' },
                  { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700/20' }
                ].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-white/5 rounded-xl border border-white/10 transition-all ${social.color} flex items-center gap-2`}
                  >
                    <social.icon className="w-5 h-5 text-slate-300" />
                    <span className="text-sm font-semibold text-slate-300">{social.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Emergency Contact Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-red-500/20"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Medical Emergency?</h3>
              <p className="text-slate-300 mb-4">
                HydraGLP is a hydration tracking tool, not a medical service. For medical emergencies related to your GLP-1 medication, please:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Call 911 or your local emergency number immediately
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Contact your prescribing physician
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  Visit your nearest emergency room
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;