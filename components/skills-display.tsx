"use client"

import { motion } from "framer-motion"

export default function SkillsDisplay() {
  const programmingLanguages = [
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C", icon: "🔧" },
    { name: "R", icon: "📊" },
    { name: "PHP", icon: "🐘" },
  ]

  const webTechnologies = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
  ]

  const databases = [
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
  ]

  const frameworks = [
    { name: "Flutter", icon: "📱" },
    { name: "Flask", icon: "🧪" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-[#FFF0F5] rounded-xl p-4 border-2 border-[#FF85B3]">
      <h2 className="text-2xl font-bold text-center text-[#FF6B8B] mb-4">Professional Skillset</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          className="bg-white p-4 rounded-xl border-2 border-[#5BCEFA]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-lg font-semibold text-[#5BCEFA] mb-2">Programming Languages</h3>
          <div className="flex flex-wrap gap-2">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={index}
                className="bg-[#E0F7FA] px-3 py-2 rounded-lg flex items-center gap-2"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span>{lang.icon}</span>
                <span>{lang.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-xl border-2 border-[#7FD1B9]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-lg font-semibold text-[#7FD1B9] mb-2">Web Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {webTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-[#E0F7FA] px-3 py-2 rounded-lg flex items-center gap-2"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-xl border-2 border-[#FFD166]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-lg font-semibold text-[#FFD166] mb-2">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <motion.div
                key={index}
                className="bg-[#E0F7FA] px-3 py-2 rounded-lg flex items-center gap-2"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span>{db.icon}</span>
                <span>{db.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white p-4 rounded-xl border-2 border-[#FF85B3]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-lg font-semibold text-[#FF85B3] mb-2">Frameworks & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((fw, index) => (
              <motion.div
                key={index}
                className="bg-[#E0F7FA] px-3 py-2 rounded-lg flex items-center gap-2"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span>{fw.icon}</span>
                <span>{fw.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
