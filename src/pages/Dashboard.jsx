import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, TrendingUp, Calendar, Award, Bell, Settings,
  Plus, Minus, Target, Activity, Flame, Heart, Clock,
  ChevronRight, Trophy, Zap, Sun, Moon, Cloud, Coffee,
  ChevronDown, BarChart3, LineChart, PieChart
} from 'lucide-react';

const DashboardPage = () => {
  const [waterIntake, setWaterIntake] = useState(1250);
  const [selectedDay, setSelectedDay] = useState('today');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const dailyGoal = 2000;
  const progress = (waterIntake / dailyGoal) * 100;

  // Simulated weekly data
  const weeklyData = [
    { day: 'Mon', intake: 1800, goal: 2000, percentage: 90 },
    { day: 'Tue', intake: 2100, goal: 2000, percentage: 105 },
    { day: 'Wed', intake: 1900, goal: 2000, percentage: 95 },
    { day: 'Thu', intake: 2200, goal: 2000, percentage: 110 },
    { day: 'Fri', intake: 1750, goal: 2000, percentage: 87.5 },
    { day: 'Sat', intake: 2300, goal: 2000, percentage: 115 },
    { day: 'Today', intake: waterIntake, goal: 2000, percentage: (waterIntake / 2000) * 100 }
  ];

  const quickAddButtons = [
    { amount: 250, label: '1 Cup', icon: '🥤' },
    { amount: 500, label: '1 Bottle', icon: '💧' },
    { amount: 750, label: 'Large', icon: '🍶' },
  ];

  const todayStats = [
    { label: 'Streak', value: '12 days', icon: Flame, color: 'text-orange-400' },
    { label: 'Avg Daily', value: '1.95L', icon: TrendingUp, color: 'text-cyan-400' },
    { label: 'This Week', value: '13.2L', icon: Droplets, color: 'text-blue-400' },
    { label: 'Next Dose', value: '3 days', icon: Calendar, color: 'text-purple-400' }
  ];

  const recentActivity = [
    { time: '2:45 PM', amount: 250, type: 'Water', icon: '💧' },
    { time: '12:30 PM', amount: 500, type: 'Water + Electrolytes', icon: '⚡' },
    { time: '10:15 AM', amount: 350, type: 'Herbal Tea', icon: '🍵' },
    { time: '8:00 AM', amount: 150, type: 'Morning Water', icon: '🌅' }
  ];

  const achievements = [
    { title: '7-Day Streak', icon: '🔥', unlocked: true, description: 'Hit your goal 7 days in a row' },
    { title: 'Hydration Hero', icon: '💪', unlocked: true, description: 'Logged 1000+ entries' },
    { title: 'Early Bird', icon: '🌅', unlocked: true, description: 'Drink water within 30 min of waking' },
    { title: '30-Day Master', icon: '👑', unlocked: false, description: '30 consecutive days - 18 to go!' }
  ];

  const addWater = (amount) => {
    setWaterIntake(prev => Math.min(prev + amount, dailyGoal + 500));
    setShowAddMenu(false);
  };

  const removeWater = (amount) => {
    setWaterIntake(prev => Math.max(prev - amount, 0));
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { icon: Sun, text: 'Good Morning', color: 'from-yellow-400 to-orange-400' };
    if (hour < 18) return { icon: Cloud, text: 'Good Afternoon', color: 'from-blue-400 to-cyan-400' };
    return { icon: Moon, text: 'Good Evening', color: 'from-indigo-400 to-purple-400' };
  };

  const timeOfDay = getTimeOfDay();

  return (
    <div className="py-20 px-6"> {/* Removed bg and text-white */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <timeOfDay.icon className="w-8 h-8 text-cyan-400" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                  {timeOfDay.text}, Sarah!
                </h1>
              </div>
              <p className="text-slate-400">Ozempic • Week 8 • Next injection in 3 days</p>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <Bell className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
              >
                <Settings className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Water Tracker Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">Today's Hydration</h2>
                  <p className="text-slate-400">Target: {dailyGoal}ml • Ozempic optimized</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {waterIntake}ml
                  </div>
                  <p className="text-sm text-slate-400">{progress.toFixed(0)}% of goal</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-6 bg-slate-700/50 rounded-full overflow-hidden mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-white drop-shadow-lg">
                    {dailyGoal - waterIntake > 0 ? `${dailyGoal - waterIntake}ml to go` : 'Goal reached! 🎉'}
                  </span>
                </div>
              </div>

              {/* Quick Add Buttons */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {quickAddButtons.map((button, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addWater(button.amount)}
                    className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-6 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                  >
                    <div className="text-4xl mb-2">{button.icon}</div>
                    <div className="font-bold text-white">{button.label}</div>
                    <div className="text-sm text-cyan-400">+{button.amount}ml</div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount Controls */}
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => removeWater(100)}
                  className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Minus className="w-6 h-6" />
                </motion.button>
                
                <div className="flex-1 relative">
                  <motion.button
                    onClick={() => setShowAddMenu(!showAddMenu)}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add Custom Amount
                    <ChevronDown className={`w-5 h-5 transition-transform ${showAddMenu ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  {showAddMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-slate-800 rounded-xl border border-white/10 p-4 z-10"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {[100, 150, 200, 300, 400, 600].map(amount => (
                          <button
                            key={amount}
                            onClick={() => addWater(amount)}
                            className="py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm font-semibold"
                          >
                            +{amount}ml
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
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
            </motion.div>

            {/* Weekly Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                  Weekly Progress
                </h2>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
                  View Details →
                </button>
              </div>
              
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full relative flex-1 flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.min(day.percentage, 100)}%` }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className={`w-full rounded-t-lg ${
                          day.percentage >= 100 
                            ? 'bg-gradient-to-t from-green-500 to-emerald-400'
                            : day.percentage >= 75
                            ? 'bg-gradient-to-t from-cyan-500 to-blue-400'
                            : 'bg-gradient-to-t from-orange-500 to-red-400'
                        }`}
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-white whitespace-nowrap">
                          {day.intake}ml
                        </div>
                      </motion.div>
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">{day.day}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-green-500 to-emerald-400"></div>
                  <span className="text-xs text-slate-400">Goal Met (100%+)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-cyan-500 to-blue-400"></div>
                  <span className="text-xs text-slate-400">Good (75-99%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gradient-to-r from-orange-500 to-red-400"></div>
                  <span className="text-xs text-slate-400">Below Target</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="w-6 h-6 text-cyan-400" />
                Recent Activity
              </h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{activity.icon}</div>
                      <div>
                        <p className="text-white font-semibold">{activity.type}</p>
                        <p className="text-sm text-slate-400">{activity.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-cyan-400">+{activity.amount}ml</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Today's Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4">Today's Stats</h3>
              <div className="space-y-4">
                {todayStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-slate-400">{stat.label}</span>
                    </div>
                    <span className="font-bold text-white">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: achievement.unlocked ? 1 : 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-xl border cursor-pointer ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
                        : 'bg-white/5 border-white/10'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white text-sm mb-1">{achievement.title}</p>
                        <p className="text-xs text-slate-400">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <Award className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-6 border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                Pro Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Your next injection is in 3 days. Start increasing water intake by 250ml/day
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    You're on a 12-day streak! Keep it up to unlock the 14-Day Champion badge
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">💡</span>
                  <p className="text-slate-300">
                    Front-load your hydration - you've only had 30% of your goal before 2 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;