import React from 'react';
import { motion } from 'framer-motion';

const MedicationInfo = () => {
  const glp1Info = [
    {
      medication: 'Ozempic (Semaglutide)',
      dosage: '0.25mg - 2mg weekly',
      hydrationTips: 'Drink 8-10 glasses daily, increase intake 24hrs before injection',
      commonIssues: 'Nausea, constipation - combat with consistent water intake'
    },
    {
      medication: 'Wegovy (Semaglutide)',
      dosage: '0.25mg - 2.4mg weekly',
      hydrationTips: 'Minimum 64oz daily, front-load hydration in morning',
      commonIssues: 'Dehydration risk higher - monitor urine color daily'
    },
    {
      medication: 'Mounjaro (Tirzepatide)',
      dosage: '2.5mg - 15mg weekly',
      hydrationTips: 'Target 80-100oz daily, sip throughout the day',
      commonIssues: 'GI side effects - hydration helps maintain gut motility'
    },
    {
      medication: 'Zepbound (Tirzepatide)',
      dosage: '2.5mg - 15mg weekly',
      hydrationTips: 'Split intake: 40oz before 2pm, 40oz after',
      commonIssues: 'Appetite suppression may reduce thirst - set reminders'
    }
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Optimized for Your Medication
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Tailored hydration protocols for each GLP-1 medication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glp1Info.map((med, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{med.medication}</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400 font-semibold">Dosage: </span>
                  <span className="text-slate-300">{med.dosage}</span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Hydration: </span>
                  <span className="text-slate-300">{med.hydrationTips}</span>
                </div>
                <div>
                  <span className="text-cyan-400 font-semibold">Key Info: </span>
                  <span className="text-slate-300">{med.commonIssues}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicationInfo;