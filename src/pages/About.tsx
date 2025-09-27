import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, Mail, Linkedin, Github, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skills = {
    "Core Frontend": ["React", "Redux", "Next.js", "TypeScript", "React Native"],
    "Development Tools": ["Jest", "Playwright", "Webpack", "Vite", "Rspack", "Storybook"],
    "Infrastructure": ["Node.js", "GraphQL", "AWS", "Docker", "Terraform", "Go"],
    "Specializations": ["System Design", "Web Performance", "CI/CD", "Developer Experience"]
  };

  return (
    <>
    <section className="pt-24 pb-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            I'm a passionate Staff Frontend Engineer with expertise in building 
            high-performance web applications and leading technical initiatives at companies like 
            Agoda and Traveloka. My expertise spans payment platforms, web infrastructure, 
            and developer experience optimization.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Trophy, 
                title: "Technical Leadership", 
                desc: "Led critical migrations affecting 250+ packages, mentored 10+ engineers across teams",
                metric: "10+ Engineers Mentored"
              },
              { 
                icon: Code, 
                title: "Performance Expert", 
                desc: "Delivered 17.5x build improvements and 13s LCP reductions in production systems",
                metric: "17.5x Faster Builds"
              },
              { 
                icon: Award, 
                title: "Problem Solver", 
                desc: "Top 2.2% on LeetCode with proven track record in algorithmic thinking",
                metric: "Top 2.2% LeetCode"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 inline-block group-hover:shadow-lg transition-shadow duration-300">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">{item.desc}</p>
                <div className="text-xs font-medium text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  {item.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and methodologies I use to build exceptional user experiences
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Core Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Core Technical Skills
              </h3>
              {Object.entries(skills).slice(0, 2).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    background: isDark 
                      ? "linear-gradient(135deg, #1f2937, #1e3a8a)" 
                      : "linear-gradient(135deg, #f8fafc, #dbeafe)"
                  }}
                >
                  <h4 className="text-md font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span 
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Broader Capabilities */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Broader Capabilities
              </h3>
              {Object.entries(skills).slice(2, 4).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 border border-purple-100 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    background: isDark 
                      ? "linear-gradient(135deg, #581c87, #be185d)" 
                      : "linear-gradient(135deg, #fdf4ff, #fce7f3)"
                  }}
                >
                  <h4 className="text-md font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span 
                        key={skill}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-purple-200 dark:border-purple-600 hover:border-purple-300 dark:hover:border-purple-500 transition-colors duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Touch */}
          <motion.div 
            className="mt-16 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4">
                What Drives Me
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm driven by creating exceptional developer experiences and building systems that scale. 
                Whether it's optimizing build times, mentoring team members, or architecting payment platforms 
                that handle millions of transactions, I thrive on solving complex technical challenges that 
                make a real impact.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have a similar mind? Let's chat!
            </p>
          </div>

          {/* Email Contact - More Prominent */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <motion.a 
              href="mailto:faustaleonardo11@gmail.com"
              className="flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
              <span>Get In Touch</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { 
                href: "https://linkedin.com/in/faustaleonardo", 
                icon: Linkedin, 
                title: "LinkedIn", 
                gradient: "from-blue-600 to-blue-700"
              },
              { 
                href: "https://github.com/faustaleonardo", 
                icon: Github, 
                title: "GitHub", 
                gradient: "from-gray-700 to-gray-800"
              },
              { 
                href: "https://leetcode.com/faustaleonardo/", 
                icon: Code, 
                title: "LeetCode", 
                gradient: "from-orange-600 to-orange-700"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${contact.gradient} rounded-xl p-6 text-white hover:shadow-xl transition-all duration-300 group block text-center`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="mx-auto mb-4" size={32} />
                </motion.div>
                <h3 className="font-semibold mb-2">{contact.title}</h3>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Footer - Fixed at bottom */}
    <footer className="py-4 bg-transparent transition-colors duration-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Fausta Leonardo. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
    </>
  );
};