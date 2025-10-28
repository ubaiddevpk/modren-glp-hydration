import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, MessageSquare, Heart, TrendingUp, Award, 
  Flame, Trophy, Star, ThumbsUp, Calendar, Filter,
  Plus, Search, BookOpen, Video, Mic, Image as ImageIcon,
  MapPin, Clock, ChevronRight, Target, Zap
} from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const communityStats = [
    { label: 'Active Members', value: '50,247', icon: Users, color: 'text-cyan-400' },
    { label: 'Daily Posts', value: '1,234', icon: MessageSquare, color: 'text-blue-400' },
    { label: 'Success Stories', value: '8,921', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Total Streaks', value: '125K', icon: Flame, color: 'text-orange-400' }
  ];

  const trendingTopics = [
    {
      title: 'Best time to drink water before Ozempic injection?',
      author: 'Sarah M.',
      replies: 127,
      likes: 342,
      views: '2.3K',
      time: '2 hours ago',
      category: 'Tips & Tricks',
      hot: true
    },
    {
      title: 'My 90-day transformation with proper hydration',
      author: 'Mike T.',
      replies: 89,
      likes: 512,
      views: '4.1K',
      time: '5 hours ago',
      category: 'Success Stories',
      hot: true
    },
    {
      title: 'Electrolyte recommendations for Mounjaro users?',
      author: 'Jennifer L.',
      replies: 64,
      likes: 189,
      views: '1.8K',
      time: '8 hours ago',
      category: 'Q&A',
      hot: false
    },
    {
      title: 'Side effects reduced by 70% - here\'s how',
      author: 'David K.',
      replies: 156,
      likes: 678,
      views: '5.2K',
      time: '1 day ago',
      category: 'Success Stories',
      hot: true
    },
    {
      title: 'Tracking app features you wish existed?',
      author: 'Emily R.',
      replies: 203,
      likes: 445,
      views: '3.7K',
      time: '1 day ago',
      category: 'Feature Requests',
      hot: false
    }
  ];

  const topContributors = [
    {
      name: 'Sarah Mitchell',
      avatar: '👩‍⚕️',
      title: 'Hydration Expert',
      posts: 342,
      likes: 12453,
      badge: 'Pro Member',
      badgeColor: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Michael Chen',
      avatar: '👨‍💼',
      title: 'Community Moderator',
      posts: 298,
      likes: 10821,
      badge: 'Moderator',
      badgeColor: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Jennifer Lopez',
      avatar: '👩‍🔬',
      title: 'Research Enthusiast',
      posts: 267,
      likes: 9654,
      badge: 'Expert',
      badgeColor: 'from-green-500 to-emerald-500'
    },
    {
      name: 'David Kim',
      avatar: '👨‍⚕️',
      title: 'Success Coach',
      posts: 234,
      likes: 8932,
      badge: 'Mentor',
      badgeColor: 'from-yellow-500 to-orange-500'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Weekly Hydration Challenge',
      date: 'November 1, 2025',
      time: '12:00 PM EST',
      participants: 1247,
      type: 'Challenge',
      icon: Target
    },
    {
      title: 'Live Q&A with Dr. Sarah Mitchell',
      date: 'November 3, 2025',
      time: '3:00 PM EST',
      participants: 892,
      type: 'Live Event',
      icon: Video
    },
    {
      title: 'Share Your Success Story',
      date: 'November 5, 2025',
      time: 'All Day',
      participants: 543,
      type: 'Community',
      icon: Trophy
    }
  ];

  const successStories = [
    {
      name: 'Amanda R.',
      avatar: '👩',
      medication: 'Ozempic',
      duration: '6 months',
      achievement: 'Lost 45 lbs, reduced nausea by 80%',
      story: 'Proper hydration changed everything. I went from struggling with side effects to thriving on my GLP-1 journey.',
      likes: 1243,
      comments: 89
    },
    {
      name: 'Robert M.',
      avatar: '👨',
      medication: 'Mounjaro',
      duration: '4 months',
      achievement: 'Down 38 lbs, maintained 21-day streak',
      story: 'The community support and hydration tracking kept me accountable. Best decision I ever made!',
      likes: 987,
      comments: 67
    },
    {
      name: 'Lisa K.',
      avatar: '👩‍🦰',
      medication: 'Wegovy',
      duration: '8 months',
      achievement: 'Lost 52 lbs, zero side effects',
      story: 'Following the hydration protocols from this community eliminated all my side effects. Life-changing!',
      likes: 1567,
      comments: 112
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Join Our Community
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Connect with 50,000+ GLP-1 users, share experiences, and find support on your journey
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tab Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-2 border border-white/10"
            >
              <div className="flex gap-2">
                {['discussions', 'success', 'questions'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Create Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
                  👤
                </div>
                <input
                  type="text"
                  placeholder="Share your hydration journey..."
                  className="flex-1 px-4 py-3 bg-slate-700/50 rounded-xl border border-white/10 focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
                />
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-slate-300"
                >
                  <ImageIcon className="w-4 h-4" />
                  Photo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-slate-300"
                >
                  <Video className="w-4 h-4" />
                  Video
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold"
                >
                  Post
                </motion.button>
              </div>
            </motion.div>

            {/* Trending Discussions */}
            <div className="space-y-4">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {topic.hot && (
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold rounded-full flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            HOT
                          </span>
                        )}
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                          {topic.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>by {topic.author}</span>
                        <span>•</span>
                        <span>{topic.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-400 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      {topic.replies} replies
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      {topic.likes} likes
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {topic.views} views
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Success Stories Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Recent Success Stories
              </h2>
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-3xl flex-shrink-0">
                        {story.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-yellow-400" />
                            {story.medication}
                          </span>
                          <span>•</span>
                          <span>{story.duration}</span>
                        </div>
                      </div>
                      <Trophy className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="mb-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <p className="text-green-300 font-semibold">{story.achievement}</p>
                    </div>
                    <p className="text-slate-300 italic mb-4">"{story.story}"</p>
                    <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                      <button className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        {story.likes}
                      </button>
                      <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        {story.comments}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-2xl flex-shrink-0">
                      {contributor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-white truncate">{contributor.name}</h4>
                      <p className="text-xs text-slate-400 truncate">{contributor.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-0.5 bg-gradient-to-r ${contributor.badgeColor} text-white text-xs rounded-full font-semibold`}>
                          {contributor.badge}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <div className="font-semibold text-cyan-400">{contributor.posts}</div>
                      <div>posts</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <event.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm mb-1">{event.title}</h4>
                        <div className="text-xs text-slate-400 space-y-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{event.participants} attending</span>
                      <button className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold">
                        Join →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20"
            >
              <h3 className="text-lg font-bold text-white mb-3">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Be respectful and supportive
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Share authentic experiences
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  No medical advice - consult professionals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Keep content relevant to GLP-1 & hydration
                </li>
              </ul>
              <button className="w-full mt-4 py-2 bg-white/10 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
                Read Full Guidelines
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircle = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default CommunityPage;