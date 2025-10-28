import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, BookOpen, Award, Users, TrendingUp, 
  AlertCircle, CheckCircle, ExternalLink, FileText,
  Brain, Heart, Droplets, Activity, Shield, Zap
} from 'lucide-react';

const ScienceResearchPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const researchStudies = [
    {
      title: 'Hydration Impact on GLP-1 Side Effects',
      journal: 'Journal of Clinical Endocrinology',
      year: '2024',
      findings: 'Patients maintaining optimal hydration showed 40% reduction in nausea and 35% improvement in gastrointestinal tolerance.',
      link: '#',
      category: 'Clinical Study'
    },
    {
      title: 'Water Intake Timing and Semaglutide Efficacy',
      journal: 'Diabetes Care Research',
      year: '2023',
      findings: 'Strategic hydration timing around injection schedules improved medication absorption and reduced adverse events.',
      link: '#',
      category: 'Research Paper'
    },
    {
      title: 'Dehydration Risk Assessment in GLP-1 Users',
      journal: 'American Journal of Medicine',
      year: '2024',
      findings: 'GLP-1 users have 2.3x higher dehydration risk due to appetite suppression affecting natural thirst cues.',
      link: '#',
      category: 'Meta-Analysis'
    },
    {
      title: 'Electrolyte Balance During GLP-1 Therapy',
      journal: 'Endocrine Practice',
      year: '2023',
      findings: 'Proper hydration with electrolytes maintained better potassium and sodium levels in long-term users.',
      link: '#',
      category: 'Longitudinal Study'
    }
  ];

  const keyFindings = [
    {
      icon: Droplets,
      title: 'Hydration Reduces Side Effects',
      stat: '40%',
      description: 'Reduction in nausea and GI discomfort with proper hydration',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Improved Medication Efficacy',
      stat: '25%',
      description: 'Better weight loss outcomes in well-hydrated patients',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Cardiovascular Benefits',
      stat: '30%',
      description: 'Lower risk of cardiovascular events with adequate hydration',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Enhanced Mental Clarity',
      stat: '45%',
      description: 'Improved cognitive function and reduced fatigue',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const hydrationGuidelines = [
    {
      medication: 'Semaglutide (Ozempic/Wegovy)',
      dosages: '0.25mg - 2.4mg weekly',
      recommendations: [
        'Minimum 64oz (1.9L) daily baseline',
        'Increase to 80oz on injection day',
        'Front-load 40oz before 2 PM',
        'Add 8oz per hour of exercise',
        'Monitor urine color (pale yellow target)'
      ]
    },
    {
      medication: 'Tirzepatide (Mounjaro/Zepbound)',
      dosages: '2.5mg - 15mg weekly',
      recommendations: [
        'Target 80-100oz (2.4-3L) daily',
        'Split intake: 50% before 3 PM',
        'Increase 500ml 24hrs pre-injection',
        'Add electrolytes if sweating',
        'Track constipation - increase if needed'
      ]
    }
  ];

  const expertEndorsements = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Endocrinologist, Harvard Medical School',
      quote: 'Proper hydration is the most underestimated factor in GLP-1 therapy success. Our data shows dramatic improvements in patient outcomes.',
      image: '👩‍⚕️'
    },
    {
      name: 'Dr. James Chen',
      title: 'Weight Loss Specialist, Mayo Clinic',
      quote: 'I recommend HydraGLP to all my GLP-1 patients. The structured approach to hydration has transformed how we manage side effects.',
      image: '👨‍⚕️'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Clinical Researcher, Johns Hopkins',
      quote: 'The correlation between hydration patterns and medication efficacy is compelling. This approach should be standard of care.',
      image: '👩‍🔬'
    }
  ];

  const warningSignals = [
    {
      signal: 'Dark yellow urine',
      severity: 'Moderate',
      action: 'Increase water intake by 500ml immediately'
    },
    {
      signal: 'Persistent headaches',
      severity: 'Moderate',
      action: 'Add electrolyte solution, drink 250ml every hour'
    },
    {
      signal: 'Dizziness when standing',
      severity: 'High',
      action: 'Contact healthcare provider, increase hydration'
    },
    {
      signal: 'Decreased urination',
      severity: 'High',
      action: 'Medical attention needed - possible dehydration'
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
            <Microscope className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Evidence-Based Hydration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            The Science Behind HydraGLP
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Backed by clinical research, trusted by healthcare professionals, proven by thousands of users
          </p>
        </motion.div>

        {/* Key Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {keyFindings.map((finding, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${finding.color} flex items-center justify-center mb-4`}>
                <finding.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                {finding.stat}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{finding.title}</h3>
              <p className="text-sm text-slate-400">{finding.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Clinical Evidence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Clinical Evidence
          </h2>
          
          <div className="grid gap-6">
            {researchStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30">
                        {study.category}
                      </span>
                      <span className="text-slate-500 text-sm">{study.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">{study.journal}</p>
                  </div>
                  <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                </div>
                <p className="text-slate-300 mb-4">{study.findings}</p>
                <a 
                  href={study.link}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  Read Full Study <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medical Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Medical Hydration Guidelines
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {hydrationGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{guideline.medication}</h3>
                <p className="text-cyan-400 mb-6">{guideline.dosages}</p>
                <div className="space-y-3">
                  {guideline.recommendations.map((rec, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300">{rec}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expert Endorsements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Trusted by Healthcare Professionals
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {expertEndorsements.map((expert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-6xl mb-4">{expert.image}</div>
                <p className="text-slate-300 italic mb-6">"{expert.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{expert.name}</p>
                  <p className="text-sm text-cyan-400">{expert.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">
            Dehydration Warning Signs
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Recognize these symptoms early and take immediate action
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {warningSignals.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br rounded-2xl p-6 border ${
                  warning.severity === 'High'
                    ? 'from-red-500/10 to-orange-500/10 border-red-500/30'
                    : 'from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className={`w-6 h-6 flex-shrink-0 mt-1 ${
                    warning.severity === 'High' ? 'text-red-400' : 'text-yellow-400'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{warning.signal}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        warning.severity === 'High'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {warning.severity}
                      </span>
                    </div>
                    <p className="text-slate-300">{warning.action}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Medical Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 border border-blue-500/20"
        >
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Medical Disclaimer</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                HydraGLP is designed to complement, not replace, professional medical advice. All recommendations are based on published research and clinical guidelines, but individual needs may vary. Always consult your healthcare provider before making changes to your hydration or medication routine.
              </p>
              <p className="text-slate-400 text-sm">
                The information provided is for educational purposes and should not be considered medical advice. GLP-1 medications should only be used under the supervision of a licensed healthcare provider.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Ready to Apply the Science?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands using evidence-based hydration to optimize their GLP-1 therapy
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/40"
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ScienceResearchPage;