import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Lock, Eye, Database, Globe, Users, 
  FileText, CheckCircle, AlertCircle, Mail, 
  Settings, Trash2, Download, Clock, ChevronDown
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const lastUpdated = 'October 27, 2025';

  const quickFacts = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your health data is protected by federal regulations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Bank-level 256-bit encryption for all data',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'No Data Selling',
      description: 'We never sell your personal information',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'You Control Your Data',
      description: 'Export or delete your data anytime',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const policySections = [
    {
      id: 'collection',
      title: 'Information We Collect',
      icon: Database,
      content: [
        {
          subtitle: 'Account Information',
          details: 'Name, email address, password (encrypted), profile picture, and date of birth for age verification.'
        },
        {
          subtitle: 'Health Data',
          details: 'Water intake logs, medication type and schedule, side effect tracking, weight measurements, and activity data from connected apps.'
        },
        {
          subtitle: 'Usage Information',
          details: 'App interactions, feature usage, notification preferences, and device information (type, OS, app version).'
        },
        {
          subtitle: 'Location Data (Optional)',
          details: 'Weather-based hydration recommendations if you enable location services. Can be disabled anytime.'
        }
      ]
    },
    {
      id: 'usage',
      title: 'How We Use Your Information',
      icon: Settings,
      content: [
        {
          subtitle: 'Core Functionality',
          details: 'Provide personalized hydration recommendations, track your progress, send timely reminders, and sync with connected health apps.'
        },
        {
          subtitle: 'AI Features',
          details: 'Analyze patterns to optimize hydration timing, predict side effects, and provide insights. All AI processing happens securely.'
        },
        {
          subtitle: 'Product Improvement',
          details: 'Aggregate, anonymized data helps us improve features and develop new ones. Individual data is never used.'
        },
        {
          subtitle: 'Communication',
          details: 'Send important updates about your account, GLP-1 hydration tips (optional), and respond to your support requests.'
        }
      ]
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      icon: Globe,
      content: [
        {
          subtitle: 'We Never Sell Your Data',
          details: 'Your personal health information is never sold to third parties. Period.'
        },
        {
          subtitle: 'Service Providers',
          details: 'We work with trusted partners for hosting (AWS), analytics (anonymized only), and payment processing. All partners are HIPAA-compliant.'
        },
        {
          subtitle: 'Connected Apps',
          details: 'Data you choose to sync with Apple Health, Fitbit, etc. follows their privacy policies. You control all connections.'
        },
        {
          subtitle: 'Legal Requirements',
          details: 'We may disclose information if required by law, but will notify you unless legally prohibited.'
        },
        {
          subtitle: 'Community Features',
          details: 'When you post in community forums, your username and content are visible to other users. Never share personal health details publicly.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Data Security',
      icon: Shield,
      content: [
        {
          subtitle: 'Encryption',
          details: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Your password is hashed and never stored in plain text.'
        },
        {
          subtitle: 'Access Controls',
          details: 'Strict employee access policies. Only authorized personnel can access systems, and all access is logged and monitored.'
        },
        {
          subtitle: 'Regular Audits',
          details: 'Third-party security audits quarterly. Penetration testing by certified professionals. Bug bounty program for responsible disclosure.'
        },
        {
          subtitle: 'Backup & Recovery',
          details: 'Automated encrypted backups every 24 hours. Disaster recovery plan tested regularly.'
        }
      ]
    },
    {
      id: 'rights',
      title: 'Your Rights & Controls',
      icon: Users,
      content: [
        {
          subtitle: 'Access Your Data',
          details: 'View all data we have about you anytime in Settings > Privacy > Download My Data.'
        },
        {
          subtitle: 'Delete Your Data',
          details: 'Request permanent deletion of your account and all associated data. Completed within 30 days.'
        },
        {
          subtitle: 'Correct Information',
          details: 'Update any personal information directly in the app. Changes take effect immediately.'
        },
        {
          subtitle: 'Opt-Out',
          details: 'Control marketing emails, push notifications, and data collection for product improvement individually.'
        },
        {
          subtitle: 'Data Portability',
          details: 'Export your data in JSON format. Includes all logs, health data, and account information.'
        }
      ]
    },
    {
      id: 'retention',
      title: 'Data Retention',
      icon: Clock,
      content: [
        {
          subtitle: 'Active Accounts',
          details: 'We keep your data as long as your account is active to provide continuous service.'
        },
        {
          subtitle: 'Inactive Accounts',
          details: 'If you don\'t use the app for 24 months, we\'ll email you before deleting your data. You can reactivate anytime.'
        },
        {
          subtitle: 'Deleted Accounts',
          details: 'Most data deleted immediately. Backups purged within 90 days. Some legal/financial records kept longer as required.'
        },
        {
          subtitle: 'Anonymized Data',
          details: 'Aggregate, anonymized analytics may be retained indefinitely for product improvement.'
        }
      ]
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      icon: AlertCircle,
      content: [
        {
          subtitle: 'Age Requirement',
          details: 'HydraGLP is for users 18 and older. We don\'t knowingly collect data from children under 18.'
        },
        {
          subtitle: 'Parental Consent',
          details: 'If you\'re under 18 and your doctor prescribed GLP-1 medication, please have a parent create and manage your account.'
        },
        {
          subtitle: 'Discovery',
          details: 'If we discover a user is under 18, we\'ll delete their account immediately and notify them via email.'
        }
      ]
    },
    {
      id: 'changes',
      title: 'Policy Changes',
      icon: FileText,
      content: [
        {
          subtitle: 'Notification',
          details: 'We\'ll email you 30 days before any material changes to this policy. Continued use means acceptance.'
        },
        {
          subtitle: 'Version History',
          details: 'Previous versions available at hydraglp.com/privacy/archive. All changes documented.'
        },
        {
          subtitle: 'Your Options',
          details: 'If you disagree with changes, you can export your data and delete your account before they take effect.'
        }
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-lg mb-2">
            Last updated: {lastUpdated}
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We take your privacy seriously. This policy explains how we collect, use, and protect your personal health information.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {quickFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fact.color} flex items-center justify-center mb-4`}>
                <fact.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{fact.title}</h3>
              <p className="text-slate-400">{fact.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Policy Sections */}
        <div className="space-y-4 mb-16">
          {policySections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white text-left">{section.title}</h2>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 transition-transform ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {expandedSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="space-y-6 pt-4 border-t border-white/10">
                    {section.content.map((item, i) => (
                      <div key={i}>
                        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-cyan-400" />
                          {item.subtitle}
                        </h3>
                        <p className="text-slate-300 leading-relaxed pl-7">
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
        >
          <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Questions About Your Privacy?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help. We respond to all inquiries within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30"
            >
              Contact Privacy Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Download My Data
            </motion.button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Email: privacy@hydraglp.com | Response time: Under 48 hours
          </p>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 mb-4">Related Documents</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Terms of Service
            </a>
            <span className="text-slate-600">•</span>
            <a href="#cookies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Cookie Policy
            </a>
            <span className="text-slate-600">•</span>
            <a href="#hipaa" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              HIPAA Compliance
            </a>
            <span className="text-slate-600">•</span>
            <a href="#data-request" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Data Request Form
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;