import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Staff Software Engineer, Frontend",
      company: "Agoda",
      location: "Bangkok, Thailand",
      period: "Jul 2025–Present",
      team: "Payment Platform team",
      achievements: [
        "Designed and delivered a mission-critical Payment SDK, enabling seamless integration across teams",
        "Modernized tooling, cutting compile times up to 9x and build times 17.5x",
        "Refactored legacy payment code into modular, scalable architecture; reduced setup from hours to minutes",
        "Mentored 10+ engineers (new joiners and team members), reducing onboarding friction and improving delivery speed"
      ],
      tech: ["React", "Redux", "Jest", "Playwright", "Rspack", "TypeScript"]
    },
    {
      title: "Senior Software Engineer, Frontend",
      company: "Agoda",
      location: "Bangkok, Thailand",
      period: "Aug 2023–Jul 2025",
      team: "Payment Platform team",
      achievements: [
        "Built a unified payment form, reducing onboarding effort for new payment methods from 10 SPs → 1 SP",
        "Fixed UI issues, directly driving +123 incremental bookings/day",
        "Revamped QR payment flow for speed and usability; established CI pipelines for robust test coverage"
      ],
      tech: ["React", "Redux", "Jest", "Playwright", "Webpack", "TypeScript"]
    },
    {
      title: "Software Engineer II",
      company: "Traveloka",
      location: "Jakarta, Indonesia",
      period: "Mar 2022–Aug 2023",
      team: "Web Infrastructure team",
      achievements: [
        "Migrated 250+ micro-packages from Yarn to pnpm, slashing install time 8.5→1.5 min",
        "Improved hotel page LCP by 13s and raised performance score from 55 → 82",
        "Cut CI/CD build time by 10+ min via component refactor; ensured monitoring/alerting SLOs met",
        "Integrated crash/error monitoring, raising app stability to 98% crash-free"
      ],
      tech: ["React", "Next.js", "Go", "Terraform", "Docker", "AWS"]
    },
    {
      title: "SDE Frontend",
      company: "Sayurbox",
      location: "Jakarta, Indonesia",
      period: "Jul 2021–Mar 2022",
      team: "Core Delivery team",
      achievements: [
        "Delivered referral & affiliate features, acquiring 1K+ customers in first month (+20% growth)",
        "Key contributor in refactoring product features (search, category, loyalty, PDP) for stability & performance",
        "Mentored 2+ interns and conducted 30+ coding interviews for SDEs and interns"
      ],
      tech: ["React", "React Native", "TypeScript", "GraphQL"]
    }
  ];

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
            Experience
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey through leading tech companies and impactful projects
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold mb-1">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.team}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 md:mt-0 mt-4">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ChevronRight size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <motion.span 
                    key={tech} 
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Footer */}
      <footer className="py-4">
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