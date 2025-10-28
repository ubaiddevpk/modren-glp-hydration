import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Users, Target, Award, Zap, Shield, 
  TrendingUp, Calendar, CheckCircle, Sparkles,
  MapPin, Mail, Linkedin, Twitter
} from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2023', title: 'Company Founded', description: 'HydraGLP was born from personal experience with GLP-1 medications' },
    { year: '2023', title: '1,000 Users', description: 'First 1,000 users joined within 3 months of launch' },
    { year: '2024', title: 'Major Partnerships', description: 'Integrated with Apple Health, Fitbit, and major health platforms' },
    { year: '2024', title: '25,000 Users', description: 'Reached 25,000 active users helping optimize their GLP-1 therapy' },
    { year: '2025', title: '50,000+ Users', description: 'Now serving over 50,000 users with 4.9★ rating' },
    { year: '2025', title: 'HIPAA Certified', description: 'Achieved full HIPAA compliance and medical-grade security' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'User-First Always',
      description: 'Every feature we build starts with real user needs and feedback from our GLP-1 community.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your health data is sacred. We use bank-level encryption and never sell your information.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: 'Evidence-Based',
      description: 'All recommendations are backed by clinical research and medical guidelines.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of shared experiences and supportive communities.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'CEO & Founder',
      avatar: '👩‍💼',
      bio: 'Former healthcare executive who experienced GLP-1 therapy firsthand',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Dr. James Chen',
      role: 'Chief Medical Officer',
      avatar: '👨‍⚕️',
      bio: 'Endocrinologist with 15+ years treating GLP-1 patients',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      avatar: '👩‍💻',
      bio: 'Previously built health apps at Apple and Google Health',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Park',
      role: 'Chief Technology Officer',
      avatar: '👨‍💻',
      bio: 'AI/ML expert focused on healthcare technology',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '4.9★', label: 'User Rating', icon: Award },
    { value: '2M+', label: 'Logs Tracked', icon: TrendingUp },
    { value: '98%', label: 'User Retention', icon: Target }
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            About HydraGLP
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Empowering GLP-1 users with science-backed hydration solutions
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-white/10 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-xl text-slate-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            We're on a mission to help every person taking GLP-1 medications achieve optimal results through proper hydration. Founded by someone who experienced the challenges firsthand, HydraGLP combines medical science, AI technology, and community support to make hydration tracking effortless and effective.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-white mb-2">Our Goal</h3>
              <p className="text-slate-400 text-sm">Help 1 million GLP-1 users optimize their therapy by 2027</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-lg font-bold text-white mb-2">Our Innovation</h3>
              <p className="text-slate-400 text-sm">First AI-powered hydration app designed specifically for GLP-1 medications</p>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-xl">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Our Promise</h3>
              <p className="text-slate-400 text-sm">Evidence-based, privacy-first, and always improving with your feedback</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Our Story
          </h2>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              HydraGLP was born from a personal struggle. Our founder, Sarah Mitchell, started Ozempic therapy in early 2023 and quickly discovered that proper hydration made a dramatic difference in managing side effects. Yet, no existing app understood the unique needs of GLP-1 users.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              After experiencing an 80% reduction in nausea simply by optimizing her water intake timing around medication doses, Sarah knew she had to share this discovery. She assembled a team of medical professionals, AI engineers, and designers who had all been touched by GLP-1 therapy—either personally or through loved ones.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Today, HydraGLP serves over 50,000 users and has helped track more than 2 million hydration logs. But we're just getting started. Every feature we add, every integration we build, and every recommendation we make is driven by one goal: helping you get the most out of your GLP-1 therapy.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20"
                >
                  <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center hidden md:flex">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 font-bold text-sm">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-slate-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a href={member.social.linkedin} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.twitter} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Join Our Mission
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Whether you're a GLP-1 user, healthcare provider, or potential partner, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;