"use client"

import { motion } from "framer-motion"
import { Award, Calendar, GraduationCap } from "lucide-react"

export default function CareerSchool() {
  const skills = [
    { name: "Java", level: 90, icon: "☕" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "C", level: 80, icon: "🔧" },
    { name: "HTML/CSS", level: 75, icon: "🌐" },
    { name: "JavaScript", level: 70, icon: "📜" },
    { name: "Flutter", level: 65, icon: "📱" },
  ]

  const education = [
    {
      degree: "Bachelor of Technology - BTech",
      field: "Information Science And Engineering",
      school: "NMAM Institute of Technology",
      year: "2022 - 2026",
    },
    {
      degree: "Senior Secondary",
      field: "Biology, General",
      school: "Poornaprajna College, Udupi",
      year: "2020 - 2022",
    },
    {
      degree: "High School",
      field: "CBSE",
      school: "St.Mary's English Medium School, Udupi",
      year: "2018 - 2020",
    },
    {
      degree: "Primary School",
      field: "CBSE",
      school: "Indian School, Ras Al Khaimah UAE",
      year: "2008 - 2018",
    },
  ]

  return (
    <div className="zoom-container">
      <div
        className="h-full w-full flex flex-col items-center justify-center p-6 relative overflow-auto content-container"
        style={{
          background: "linear-gradient(to bottom, #a1e9ff, #c4ffda)",
        }}
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-24 left-10 w-16 h-16 bg-[#FFD166] rounded-lg opacity-80 rotate-12"
          animate={{ rotate: [12, -12, 12] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-24 right-10 w-16 h-16 bg-[#FF6B8B] rounded-lg opacity-80 -rotate-12"
          animate={{ rotate: [-12, 12, -12] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5 }}
        ></motion.div>

        {/* School decoration */}
        <motion.div
          className="absolute top-10 right-10 text-6xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        >
          📚
        </motion.div>

        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 z-10 py-8">
          {/* Education Section */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-xl border-4 border-[#5BCEFA] relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-3 -left-3 text-3xl">🎓</div>
            <div className="absolute -bottom-3 -right-3 text-3xl">📝</div>

            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-[#5BCEFA]" />
              <h2 className="text-3xl font-bold text-[#5BCEFA]">Education</h2>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#E0F7FA] rounded-xl p-4 border-2 border-[#7FD1B9]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-[#FF6B8B]">{item.degree}</h3>
                  {item.field && <div className="text-[#5BCEFA]">{item.field}</div>}
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-700">{item.school}</span>
                    <span className="text-sm bg-[#FFD166] px-2 py-1 rounded-full text-white">{item.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="bg-white rounded-3xl p-6 shadow-xl border-4 border-[#5BCEFA] relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-3 -right-3 text-3xl">⭐</div>
            <div className="absolute -bottom-3 -left-3 text-3xl">🌟</div>

            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-[#5BCEFA]" />
              <h2 className="text-3xl font-bold text-[#5BCEFA]">Skills</h2>
            </div>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-[#E0F7FA] rounded-xl p-4 border-2 border-[#7FD1B9]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-[#FF6B8B]">{skill.name}</span>
                    </div>
                    <span className="text-sm text-[#5BCEFA]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#FFD166]/30 rounded-full h-4">
                    <motion.div
                      className="bg-gradient-to-r from-[#FFD166] to-[#FFAA33] h-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-6 bg-[#FFF0F5] rounded-xl p-4 border-2 border-[#FF85B3]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-[#FF6B8B]" />
                <h3 className="text-xl font-semibold text-[#FF6B8B]">Activities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded-lg border border-[#FFD166] flex items-center gap-2">
                  <span className="text-xl">🏆</span>
                  <div className="font-medium text-sm">Smart India Hackathon Qualifier</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-[#FFD166] flex items-center gap-2">
                  <span className="text-xl">💰</span>
                  <div className="font-medium text-sm">Finance Committee, Incridea'25</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-[#FFD166] flex items-center gap-2">
                  <span className="text-xl">🎵</span>
                  <div className="font-medium text-sm">Pronite Committee, Incridea'25</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-[#FFD166] flex items-center gap-2">
                  <span className="text-xl">🩸</span>
                  <div className="font-medium text-sm">YRC Volunteer</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
