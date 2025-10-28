import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, AlertTriangle, CheckCircle, 
  Scale, Users, CreditCard, XCircle, Lock,
  ChevronDown, BookOpen, Mail, Download
} from 'lucide-react';

const TermsOfServicePage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const lastUpdated = 'October 27, 2025';
  const effectiveDate = 'October 27, 2025';

  const keyPoints = [
    {
      icon: Users,
      title: '18+ Only',
      description: 'You must be 18 or older to use HydraGLP',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Not Medical Advice',
      description: 'HydraGLP is a tracking tool, not a medical service',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Subscription Based',
      description: 'Paid plans renew automatically unless canceled',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lock,
      title: 'Your Data is Protected',
      description: 'We follow strict privacy and security standards',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const termsSections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: FileText,
      content: `By accessing or using HydraGLP ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.

These Terms apply to all visitors, users, and others who access or use the Service. By using the Service, you represent that you are at least 18 years of age and have the legal capacity to enter into these Terms.

We reserve the right to modify these Terms at any time. We will notify you of material changes via email or through the Service. Your continued use of the Service after changes constitutes acceptance of the modified Terms.`
    },
    {
      id: 'description',
      title: '2. Description of Service',
      icon: BookOpen,
      content: `HydraGLP is a hydration tracking application designed to help users who are taking GLP-1 medications (such as Ozempic, Wegovy, Mounjaro, and Zepbound) monitor their water intake and manage hydration-related side effects.

The Service includes:
• Water intake tracking and logging
• Personalized hydration goals and recommendations
• AI-powered insights and pattern analysis
• Medication schedule integration
• Community features and support
• Integration with third-party health apps and wearables
• Progress analytics and reporting

The Service is provided for informational and tracking purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.`
    },
    {
      id: 'medical',
      title: '3. Medical Disclaimer',
      icon: AlertTriangle,
      content: `IMPORTANT: HydraGLP is NOT a medical device and does NOT provide medical advice.

• The Service is designed to help you track hydration, not to diagnose, treat, cure, or prevent any disease
• All recommendations are general guidelines based on published research and should not replace advice from your healthcare provider
• You should consult with your prescribing physician before making any changes to your hydration or medication routine
• HydraGLP does not prescribe, dispense, or recommend any medications
• In case of a medical emergency, call 911 or your local emergency number immediately

By using the Service, you acknowledge that:
• You are solely responsible for your health decisions
• You will not rely solely on the Service for medical guidance
• You will consult healthcare professionals for medical advice
• HydraGLP and its affiliates are not liable for any health outcomes`
    },
    {
      id: 'accounts',
      title: '4. User Accounts and Registration',
      icon: Users,
      content: `Account Creation:
• You must provide accurate, complete, and current information
• You are responsible for maintaining the confidentiality of your account credentials
• You are responsible for all activities that occur under your account
• You must notify us immediately of any unauthorized access or security breach

Account Requirements:
• You must be at least 18 years old
• One person per account (no account sharing)
• You may not create multiple accounts for yourself
• You may not transfer your account to another person

Account Termination:
• We reserve the right to suspend or terminate accounts that violate these Terms
• You may terminate your account at any time through the Settings menu
• Upon termination, your data will be handled according to our Privacy Policy
• We may retain certain information as required by law or for legitimate business purposes`
    },
    {
      id: 'subscription',
      title: '5. Subscription and Payments',
      icon: CreditCard,
      content: `Free Trial:
• New users may be eligible for a free trial period
• No credit card required for trial
• Trial converts to paid subscription unless canceled before trial ends

Subscription Plans:
• Multiple subscription tiers available (Basic, Pro, Premium)
• Subscriptions are billed monthly or annually depending on your selection
• All fees are in US Dollars unless otherwise stated
• Prices are subject to change with 30 days notice

Automatic Renewal:
• Subscriptions automatically renew unless canceled before renewal date
• You will be charged within 24 hours prior to the end of the current period
• You can manage subscriptions through your account settings or app store account

Cancellation:
• You may cancel your subscription at any time
• Cancellation takes effect at the end of the current billing period
• No refunds for partial periods unless required by law
• You retain access to paid features until the end of the paid period

Payment Methods:
• We accept credit cards, debit cards, and app store payments
• Payment information is processed securely by third-party payment processors
• You are responsible for all charges incurred under your account

Refund Policy:
• 30-day money-back guarantee for new subscribers
• Refunds processed within 5-10 business days
• Contact support@hydraglp.com for refund requests`
    },
    {
      id: 'usage',
      title: '6. Acceptable Use Policy',
      icon: CheckCircle,
      content: `You agree to use the Service only for lawful purposes and in accordance with these Terms.

Prohibited Activities:
• Violating any applicable laws or regulations
• Infringing on intellectual property rights
• Transmitting harmful code, viruses, or malware
• Attempting to access unauthorized areas of the Service
• Interfering with or disrupting the Service
• Impersonating others or providing false information
• Harassing, abusing, or harming other users
• Using the Service for any commercial purpose without permission
• Scraping, copying, or reverse engineering any part of the Service
• Creating fake accounts or manipulating the Service

Community Guidelines:
• Be respectful and supportive of other users
• Do not share personal health information publicly
• Do not provide medical advice to other users
• Report inappropriate content or behavior
• No spam, advertising, or promotional content

Consequences:
• Violation of these rules may result in account suspension or termination
• We reserve the right to report illegal activities to law enforcement
• You may be held liable for damages resulting from violations`
    },
    {
      id: 'content',
      title: '7. User Content and Data',
      icon: Lock,
      content: `Your Content:
• You retain ownership of all data and content you submit to the Service
• You grant us a limited license to use your content to provide the Service
• This license includes the right to store, display, and process your data
• We will never sell your personal health data to third parties

User Responsibilities:
• You are responsible for the accuracy of data you enter
• You must not upload illegal, offensive, or inappropriate content
• You must have rights to any content you share in community features

Data Usage:
• We may use aggregate, anonymized data to improve the Service
• Individual data is never included in aggregate analytics
• You can export your data at any time
• You can request deletion of your data

Community Content:
• Content you post in community features is visible to other users
• We may moderate, remove, or restrict community content
• You are responsible for content you share publicly`
    },
    {
      id: 'ip',
      title: '8. Intellectual Property',
      icon: Shield,
      content: `Ownership:
• The Service and all content, features, and functionality are owned by HydraGLP
• This includes software, text, graphics, logos, icons, images, audio, and data compilations
• All trademarks, service marks, and trade names are proprietary to HydraGLP

Your License:
• We grant you a limited, non-exclusive, non-transferable license to use the Service
• This license is for personal, non-commercial use only
• You may not modify, copy, distribute, sell, or lease any part of the Service

Restrictions:
• You may not reverse engineer, decompile, or disassemble the Service
• You may not remove or modify any copyright, trademark, or proprietary notices
• You may not use our intellectual property without express written permission

Feedback:
• Any feedback, suggestions, or ideas you provide become our property
• We may use feedback to improve the Service without compensation to you`
    },
    {
      id: 'liability',
      title: '9. Limitation of Liability',
      icon: Scale,
      content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

Disclaimer of Warranties:
• THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE"
• WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED
• WE DO NOT GUARANTEE ACCURACY, COMPLETENESS, OR TIMELINESS
• WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE SERVICE

Limitation of Liability:
• WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES
• THIS INCLUDES LOSS OF PROFITS, DATA, OR GOODWILL
• OUR TOTAL LIABILITY IS LIMITED TO THE AMOUNT YOU PAID IN THE PAST 12 MONTHS
• SOME JURISDICTIONS DO NOT ALLOW LIABILITY LIMITATIONS, SO THESE MAY NOT APPLY TO YOU

Indemnification:
• You agree to indemnify and hold HydraGLP harmless from any claims, damages, or expenses
• This includes legal fees arising from your use of the Service or violation of these Terms

Third-Party Services:
• We are not responsible for third-party integrations or their practices
• Links to third-party websites are provided for convenience only`
    },
    {
      id: 'termination',
      title: '10. Termination',
      icon: XCircle,
      content: `Termination by You:
• You may terminate your account at any time through Settings
• Export your data before termination
• Subscription fees are non-refundable except as required by law

Termination by Us:
• We may suspend or terminate your account for Terms violations
• We may terminate accounts that have been inactive for 24+ months
• We will provide notice before termination when possible

Effect of Termination:
• Your access to the Service will cease immediately
• We will delete your data according to our Privacy Policy
• Provisions that should survive termination will remain in effect
• This includes intellectual property rights, liability limitations, and dispute resolution`
    },
    {
      id: 'governing',
      title: '11. Governing Law and Disputes',
      icon: Scale,
      content: `Governing Law:
• These Terms are governed by the laws of the State of California
• Exclusive jurisdiction is in San Francisco County, California

Dispute Resolution:
• We encourage you to contact us first to resolve disputes informally
• If informal resolution fails, disputes will be resolved through binding arbitration
• You waive the right to a jury trial or class action
• Arbitration will be conducted by the American Arbitration Association (AAA)

Exceptions:
• Either party may seek injunctive relief in court
• You may file claims in small claims court if they qualify

Time Limit:
• You must bring any claims within one year of the cause of action
• Claims not brought within this period are permanently barred`
    },
    {
      id: 'general',
      title: '12. General Provisions',
      icon: FileText,
      content: `Entire Agreement:
• These Terms, along with our Privacy Policy, constitute the entire agreement
• They supersede all prior agreements and understandings

Changes to Terms:
• We may modify these Terms at any time
• Material changes will be notified via email or in-app notification
• Continued use after changes constitutes acceptance

Assignment:
• You may not assign or transfer these Terms
• We may assign our rights and obligations to any successor

Severability:
• If any provision is found invalid, other provisions remain in effect

No Waiver:
• Failure to enforce a provision does not waive our right to enforce it later

Contact Information:
• For questions about these Terms, contact: legal@hydraglp.com
• For support inquiries: support@hydraglp.com`
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
            <Scale className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Legal Agreement</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="text-slate-400 space-y-1">
            <p>Last updated: {lastUpdated}</p>
            <p>Effective date: {effectiveDate}</p>
          </div>
        </motion.div>

        {/* Key Points */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center mb-4`}>
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
              <p className="text-slate-400">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Terms Sections */}
        <div className="space-y-4 mb-16">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
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
                  <h2 className="text-xl md:text-2xl font-bold text-white text-left">{section.title}</h2>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 text-slate-400 transition-transform flex-shrink-0 ${
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
                  <div className="pt-4 border-t border-white/10">
                    <div className="prose prose-invert max-w-none">
                      {section.content.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-slate-300 leading-relaxed mb-4 whitespace-pre-line">
                          {paragraph}
                        </p>
                      ))}
                    </div>
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
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center mb-12"
        >
          <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Questions About These Terms?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions you have about these Terms of Service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30"
            >
              Contact Legal Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition-colors flex items-center gap-2 justify-center"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.button>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            Email: legal@hydraglp.com | Response time: 2-3 business days
          </p>
        </motion.div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 mb-4">Related Documents</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Privacy Policy
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
            <a href="#acceptable-use" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Acceptable Use Policy
            </a>
          </div>
        </motion.div>

        {/* Acknowledgment Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl p-8 border border-orange-500/20"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Important Notice</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                By using HydraGLP, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. You also acknowledge that HydraGLP is not a medical device and does not provide medical advice.
              </p>
              <p className="text-slate-400 text-sm">
                If you do not agree to these Terms, you must immediately stop using the Service and delete your account.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;