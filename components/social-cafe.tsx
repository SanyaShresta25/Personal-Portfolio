"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, School } from "lucide-react"

export default function SocialCafe() {
  const experiences = [
   {
  role: "Prompt Engineer Intern",
  organization: "NexusVoidAI",
  description: "Developing AI agents to enhance the functionality and user engagement of social media applications.",
  location: "Work From Home (WFH)",
  date: "March 2025 – Present",
  icon: "🧠",
},

    {
      role: "Summer Research Intern",
      organization: "Nitte",
      description: "Utilizing Deep Learning for early breast cancer diagnosis and prognostic prediction.",
      location: "Karnataka, India",
      date: "May 2024 - July 2025",
      icon: "🔬",
    },
    {
      role: "MSIS Research Intern",
      organization: "Manipal",
      description: "Speech Enhancement using U-Net architecture.",
      location: "Manipal, India",
      date: "January 2024 - March 2025",
      icon: "🎤",
    },
  ]

  const activities = [
    {
      role: "Treasurer | NSS IT Wing",
      org: "NMAMIT",
      date: "Sept 2024 - Present",
      icon: "💰",
    },
    {
      role: "Magazine Coordinator | VISTA",
      org: "ISE Dept, NMAMIT",
      date: "Aug 2024 - Present",
      icon: "📔",
    },
    {
      role: "Documentation Team | Aura Club",
      org: "NMAMIT",
      date: "Aug 2024 - Present",
      icon: "📝",
    },
    {
      role: "Event Management | VISTA",
      org: "NMAMIT",
      date: "Aug 2023 - Aug 2024",
      icon: "🎪",
    },
    {
      role: "Member | Robotics Club",
      org: "NMAMIT",
      date: "Aug 2023 - Aug 2024",
      icon: "🤖",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 relative overflow-auto"
      style={{ background: "linear-gradient(to bottom, #a1e9ff, #c4ffda)" }}
    >
      {/* Title */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Briefcase className="w-8 h-8 text-[#FF6B8B]" />
        <h1 className="text-4xl font-bold text-[#FF6B8B] text-center">Social Cafe - Experience</h1>
        <motion.span
          className="text-3xl"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🌟
        </motion.span>
      </motion.div>

      <div className="max-w-4xl w-full z-10">
        {/* Experience Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl border-4 border-[#FFD166] mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-[#FFF0F5] rounded-xl p-4 border-2 border-[#FF85B3] relative mb-4"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-3 -right-3 text-2xl">{exp.icon}</div>
              <h3 className="text-xl font-bold text-[#FF6B8B]">{exp.role}</h3>
              {exp.organization && <div className="text-[#5BCEFA] font-medium">{exp.organization}</div>}
              {exp.description && <p className="text-gray-700 mt-2">{exp.description}</p>}
              <div className="flex flex-wrap items-center gap-x-4 mt-3">
                {exp.location && (
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                )}
                {exp.date && (
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.date}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* College Activities Section */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl border-4 border-[#A1C4FD]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="flex items-center gap-2 mb-6">
            <School className="w-6 h-6 text-[#5BCEFA]" />
            <h2 className="text-2xl font-bold text-[#5BCEFA]">College Activities & Involvement</h2>
          </div>
          {activities.map((act, index) => (
            <motion.div
              key={index}
              className="bg-[#E0F7FA] rounded-lg p-4 border border-[#5BCEFA] mb-3 relative"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -top-2 -right-2 text-xl">{act.icon}</div>
              <h4 className="font-semibold text-[#0277BD]">{act.role}</h4>
              <p className="text-gray-600">{act.org}</p>
              <p className="text-sm text-gray-500 mt-1">{act.date}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
