import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Plus,
  Minus,
  RotateCcw,
  Trophy,
  Zap,
  TrendingUp,
  Calendar,
  Target,
  Flame,
  Award,
  Star,
  ThumbsUp,
  Coffee,
  Wine,
  Milk,
  Heart,
  MessageSquare,
  Eye,
  Download,
  Share2,
  CheckCircle,
} from "lucide-react";

const SimulatorPage = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [dailyGoal] = useState(2000);
  const [streak, setStreak] = useState(0);
  const [lastLog, setLastLog] = useState(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [logs, setLogs] = useState([]);
  const [selectedDrink, setSelectedDrink] = useState("water");

  const progress = Math.min((waterIntake / dailyGoal) * 100, 100);

  const drinkTypes = [
    {
      id: "water",
      label: "Water",
      icon: Droplets,
      color: "from-cyan-500 to-blue-500",
      emoji: "💧",
    },
    {
      id: "tea",
      label: "Tea",
      icon: Coffee,
      color: "from-amber-600 to-orange-600",
      emoji: "🍵",
    },
    {
      id: "coffee",
      label: "Coffee",
      icon: Coffee,
      color: "from-amber-700 to-amber-900",
      emoji: "☕",
    },
    {
      id: "juice",
      label: "Juice",
      icon: Wine,
      color: "from-orange-500 to-red-500",
      emoji: "🧃",
    },
    {
      id: "milk",
      label: "Milk",
      icon: Milk,
      color: "from-slate-300 to-slate-400",
      emoji: "🥛",
    },
  ];

  const quickAmounts = [
    { amount: 250, label: "1 Cup", size: "Small" },
    { amount: 500, label: "1 Bottle", size: "Medium" },
    { amount: 750, label: "Large", size: "Large" },
    { amount: 1000, label: "XL", size: "Extra Large" },
  ];

  const achievements = [
    {
      id: "first-log",
      title: "First Drop",
      requirement: 1,
      icon: "💧",
      unlocked: waterIntake >= 1,
    },
    {
      id: "half-way",
      title: "Half Way Hero",
      requirement: 1000,
      icon: "🎯",
      unlocked: waterIntake >= 1000,
    },
    {
      id: "goal-reached",
      title: "Daily Champion",
      requirement: 2000,
      icon: "🏆",
      unlocked: waterIntake >= 2000,
    },
    {
      id: "overachiever",
      title: "Overachiever",
      requirement: 2500,
      icon: "⭐",
      unlocked: waterIntake >= 2500,
    },
  ];

  const addWater = (amount) => {
    const newIntake = waterIntake + amount;
    setWaterIntake(newIntake);
    setLastLog(amount);

    const now = new Date();
    setLogs(
      [
        {
          id: Date.now(),
          amount,
          type: selectedDrink,
          time: now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
          emoji: drinkTypes.find((d) => d.id === selectedDrink).emoji,
        },
        ...logs,
      ].slice(0, 10)
    );

    if (newIntake >= dailyGoal && waterIntake < dailyGoal) {
      setShowCelebration(true);
      setStreak(streak + 1);
      setTimeout(() => setShowCelebration(false), 3000);
    }
  };

  const removeWater = (amount) => {
    setWaterIntake(Math.max(0, waterIntake - amount));
  };

  const reset = () => {
    setWaterIntake(0);
    setLogs([]);
    setLastLog(null);
  };

  const getMotivationalMessage = () => {
    if (progress === 0) return "Let's start hydrating! 💧";
    if (progress < 25) return "Great start! Keep it up! 🌟";
    if (progress < 50) return "You're doing amazing! 💪";
    if (progress < 75) return "More than halfway there! 🎯";
    if (progress < 100) return "Almost at your goal! 🔥";
    return "Goal crushed! You're a hydration champion! 🏆";
  };

  const getGlassLevel = () => {
    return Math.min(progress, 100);
  };

  return (
    <div className="py-20 px-6">
      {" "}
      {/* Removed bg and text-white */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">
              Interactive Demo
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Try Water Tracking
          </h1>
          <p className="text-xl text-slate-400">
            Experience how easy it is to track your hydration with HydraGLP
          </p>
        </motion.div>

        {/* Celebration Animation */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: 2 }}
                  className="text-9xl mb-4"
                >
                  🎉
                </motion.div>
                <div className="text-4xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-2xl shadow-2xl">
                  Goal Reached!
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Tracking Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Tracker Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              {/* Progress Stats */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {waterIntake}
                    <span className="text-xl text-slate-400">ml</span>
                  </h2>
                  <p className="text-slate-400">of {dailyGoal}ml goal</p>
                </div>
                <div className="text-right">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {progress.toFixed(0)}%
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Flame className="w-5 h-5" />
                    <span className="font-semibold">{streak} day streak</span>
                  </div>
                </div>
              </div>

              {/* Visual Glass */}
              <div className="relative h-64 flex items-end justify-center mb-8">
                <div className="relative w-48 h-64 border-4 border-cyan-400/30 rounded-b-3xl overflow-hidden bg-slate-900/50">
                  <motion.div
                    animate={{ height: `${getGlassLevel()}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-500 to-blue-400 opacity-70"
                  >
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-0 w-full h-8 bg-gradient-to-b from-white/20 to-transparent rounded-full"
                    />
                  </motion.div>
                  {progress < 100 && (
                    <motion.div
                      animate={{ y: [0, 240] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-0 left-1/2 -translate-x-1/2"
                    >
                      <Droplets className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Motivation Message */}
              <motion.div
                key={progress}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20"
              >
                <p className="text-lg font-semibold text-cyan-300">
                  {getMotivationalMessage()}
                </p>
              </motion.div>

              {/* Drink Type Selector */}
              <div className="mb-6">
                <p className="text-white font-semibold mb-3">
                  Select Drink Type:
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {drinkTypes.map((drink) => (
                    <motion.button
                      key={drink.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDrink(drink.id)}
                      className={`p-3 rounded-xl border transition-all ${
                        selectedDrink === drink.id
                          ? `bg-gradient-to-br ${drink.color} border-white/30`
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="text-2xl mb-1">{drink.emoji}</div>
                      <div className="text-xs font-semibold text-white">
                        {drink.label}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quick Add Buttons */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {quickAmounts.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addWater(item.amount)}
                    className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-4 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                  >
                    <div className="text-2xl mb-2">
                      {drinkTypes.find((d) => d.id === selectedDrink).emoji}
                    </div>
                    <div className="font-bold text-white text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-cyan-400">
                      +{item.amount}ml
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Controls */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeWater(100)}
                  className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Minus className="w-6 h-6" />
                </motion.button>
                <div className="flex-1 text-center">
                  <p className="text-sm text-slate-400 mb-2">Custom Amount</p>
                  <div className="flex gap-2">
                    {[50, 100, 200].map((amount) => (
                      <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addWater(amount)}
                        className="flex-1 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-sm font-semibold"
                      >
                        +{amount}ml
                      </motion.button>
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => addWater(100)}
                  className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Plus className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Reset Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={reset}
                className="w-full mt-6 py-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Reset Demo
              </motion.button>
            </motion.div>

            {/* Recent Logs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                Recent Logs
              </h3>
              {logs.length === 0 ? (
                <p className="text-slate-400 text-center py-8">
                  No logs yet. Start tracking your hydration above!
                </p>
              ) : (
                <div className="space-y-3">
                  <AnimatePresence>
                    {logs.map((log) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{log.emoji}</div>
                          <div>
                            <p className="text-white font-semibold capitalize">
                              {log.type}
                            </p>
                            <p className="text-sm text-slate-400">{log.time}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-cyan-400">
                            +{log.amount}ml
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: achievement.unlocked ? 1 : 0.5 }}
                    className={`p-4 rounded-xl border ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-bold text-white text-sm">
                          {achievement.title}
                        </p>
                        <p className="text-xs text-slate-400">
                          {achievement.requirement}ml
                        </p>
                      </div>
                      {achievement.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <ThumbsUp className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Daily Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Today's Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Total Intake</span>
                  <span className="text-white font-bold">{waterIntake}ml</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Goal Progress</span>
                  <span className="text-cyan-400 font-bold">
                    {progress.toFixed(0)}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Remaining</span>
                  <span className="text-white font-bold">
                    {Math.max(0, dailyGoal - waterIntake)}ml
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Logs Today</span>
                  <span className="text-white font-bold">{logs.length}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-slate-400">Streak</span>
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-bold">
                      {streak} days
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-6 border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-400" />
                Pro Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Drink water 30 mins before your GLP-1 injection
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Front-load your intake - 50% before 2 PM
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Add electrolytes if you exercise or sweat
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Track all liquids - tea, coffee, and juice count too!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-6 border border-purple-500/20 text-center"
            >
              <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Love This Demo?
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                Get the full app with AI insights, smart reminders, and so much
                more!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold shadow-lg shadow-purple-500/30 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <CheckCircle className="w-5 h-5" />
              </motion.button>
              <p className="text-xs text-slate-500 mt-3">
                No credit card required • 14-day trial
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorPage;
