import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, TrendingUp, Bookmark,
  Search, Filter, ChevronRight, MessageSquare, Heart,
  Share2, Eye, Award, Zap, Droplets, Users
} from 'lucide-react';

const BlogNewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Posts', icon: Zap },
    { id: 'tips', label: 'Hydration Tips', icon: Droplets },
    { id: 'research', label: 'Research', icon: TrendingUp },
    { id: 'success', label: 'Success Stories', icon: Award },
    { id: 'updates', label: 'Product Updates', icon: Zap },
    { id: 'community', label: 'Community', icon: Users }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Complete Guide to Hydration on Ozempic: Week-by-Week Strategy',
    excerpt: 'A comprehensive breakdown of how to optimize your water intake during every phase of your Ozempic journey, from dose escalation to maintenance.',
    author: 'Dr. Sarah Mitchell',
    date: 'October 25, 2025',
    readTime: '12 min read',
    image: '🌊',
    category: 'tips',
    views: '12.5K',
    likes: '1.2K',
    comments: 234
  };

  const blogPosts = [
    {
      id: 2,
      title: '7 Signs You\'re Not Drinking Enough Water on GLP-1 Medications',
      excerpt: 'Learn to recognize the subtle warning signs of dehydration that GLP-1 users often miss.',
      author: 'Emily Rodriguez',
      date: 'October 23, 2025',
      readTime: '6 min read',
      image: '💧',
      category: 'tips',
      views: '8.3K',
      likes: '892',
      comments: 145,
      featured: false
    },
    {
      id: 3,
      title: 'New Study: Hydration Timing Impacts Weight Loss Results',
      excerpt: 'Recent research shows drinking water at specific times can boost GLP-1 medication effectiveness by up to 25%.',
      author: 'Dr. James Chen',
      date: 'October 20, 2025',
      readTime: '8 min read',
      image: '🔬',
      category: 'research',
      views: '15.2K',
      likes: '2.1K',
      comments: 312,
      featured: false
    },
    {
      id: 4,
      title: 'Sarah\'s Journey: How Proper Hydration Changed Everything',
      excerpt: 'One user shares how tracking her water intake reduced side effects by 70% and accelerated her weight loss.',
      author: 'Sarah Thompson',
      date: 'October 18, 2025',
      readTime: '10 min read',
      image: '⭐',
      category: 'success',
      views: '11.4K',
      likes: '1.8K',
      comments: 267,
      featured: false
    },
    {
      id: 5,
      title: 'Introducing AI Hydration Coach: Your Personal Water Assistant',
      excerpt: 'We\'re excited to announce our new AI-powered feature that learns your patterns and optimizes reminders.',
      author: 'HydraGLP Team',
      date: 'October 15, 2025',
      readTime: '5 min read',
      image: '🤖',
      category: 'updates',
      views: '9.7K',
      likes: '1.5K',
      comments: 189,
      featured: false
    },
    {
      id: 6,
      title: 'Electrolytes 101: What GLP-1 Users Need to Know',
      excerpt: 'Beyond just water - understanding when and why you need electrolyte supplementation.',
      author: 'Dr. Michael Park',
      date: 'October 12, 2025',
      readTime: '7 min read',
      image: '⚡',
      category: 'tips',
      views: '7.2K',
      likes: '945',
      comments: 123,
      featured: false
    },
    {
      id: 7,
      title: 'Community Spotlight: Top Hydration Hacks from Our Users',
      excerpt: 'The best tips and tricks shared by our community of 50,000+ GLP-1 users.',
      author: 'Community Team',
      date: 'October 10, 2025',
      readTime: '9 min read',
      image: '💡',
      category: 'community',
      views: '13.8K',
      likes: '2.3K',
      comments: 456,
      featured: false
    },
    {
      id: 8,
      title: 'Mounjaro vs Ozempic: Hydration Differences Explained',
      excerpt: 'How hydration needs differ between these two popular GLP-1 medications.',
      author: 'Dr. Lisa Wang',
      date: 'October 8, 2025',
      readTime: '11 min read',
      image: '💊',
      category: 'tips',
      views: '16.5K',
      likes: '2.7K',
      comments: 389,
      featured: false
    },
    {
      id: 9,
      title: 'October Product Updates: What\'s New in HydraGLP',
      excerpt: 'New features, improvements, and exciting things coming to your favorite hydration app.',
      author: 'Product Team',
      date: 'October 5, 2025',
      readTime: '4 min read',
      image: '🚀',
      category: 'updates',
      views: '6.1K',
      likes: '823',
      comments: 97,
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Blog & News
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Expert insights, success stories, and the latest in GLP-1 hydration science
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="mb-16 relative group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50 group-hover:opacity-100" />
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 w-fit mb-4">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm">Featured Article</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <div className="flex items-center gap-6 text-slate-400 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    {featuredPost.views}
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    {featuredPost.likes}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {featuredPost.comments}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30 flex items-center gap-2 w-fit"
                >
                  Read Article <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-9xl">{featuredPost.image}</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-500/50 transition-all h-full flex flex-col">
                {/* Image/Emoji Header */}
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-7xl">
                  {post.image}
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400 capitalize">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {post.comments}
                        </div>
                      </div>
                      <Bookmark className="w-4 h-4 hover:text-cyan-400 transition-colors cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Never Miss an Update
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Get weekly hydration tips, research updates, and success stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-slate-800/50 border border-white/10 rounded-xl focus:outline-none focus:border-cyan-500/50 text-white placeholder-slate-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold shadow-lg shadow-cyan-500/30 whitespace-nowrap"
            >
              Subscribe Now
            </motion.button>
          </div>
          <p className="text-sm text-slate-500 mt-4">Join 50,000+ subscribers • Unsubscribe anytime</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogNewsPage;