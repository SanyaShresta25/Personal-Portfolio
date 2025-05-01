"use client"

import { motion } from "framer-motion"
import { Github, Languages, Linkedin, Mail, MapPin, Target } from "lucide-react"
import Avatar from "./avatar"
import SkillsDisplay from "./skills-display"

export default function ProfileHouse() {
  return (
    <div className="zoom-container">
      <div
        className="h-full w-full flex flex-col items-center justify-center p-6 relative overflow-auto content-container"
        style={{
          background: "linear-gradient(to bottom, #a1e9ff, #c4ffda)",
        }}
      >
        {/* Palm tree decoration */}
        <motion.div
          className="absolute top-5 left-5 text-6xl"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
        >
          🌴
        </motion.div>

        {/* Sun decoration */}
        <motion.div
          className="absolute top-10 right-10 text-6xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
        >
          ☀️
        </motion.div>

        {/* 🌟 Your full layout unchanged */}
        <div className="max-w-5xl w-full bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-[#FFD166] z-10 relative">
          {/* Ribbons */}
          <div className="absolute -top-3 -left-3 text-3xl">🎀</div>
          <div className="absolute -top-3 -right-3 text-3xl">🎀</div>
          <div className="absolute -bottom-3 -left-3 text-3xl">🎀</div>
          <div className="absolute -bottom-3 -right-3 text-3xl">🎀</div>

          {/* Avatar + Info Section */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <Avatar size="lg" />
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-3xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                🦄
              </motion.div>
            </div>

            <div className="flex-1">
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl font-bold text-[#FF6B8B]">Sanya Shresta Jathanna</h1>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                >
                  👑
                </motion.span>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-[#5BCEFA]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Udupi, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:shrestasanya@gmail.com" className="hover:underline">
                    shrestasanya@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1">
                
                </div>
                <div className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  <a
                    href="https://github.com/SanyaShresta25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    SanyaShresta25
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://www.linkedin.com/in/sanya-shresta-jathanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    sanya-shresta-jathanna
                  </a>
                </div>
              </motion.div>

              {/* Objective */}
              <motion.div
                className="bg-[#FFF0F5] rounded-xl p-4 border-2 border-[#FF85B3] mb-4 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-[#FF6B8B]" />
                  <h2 className="text-xl font-semibold text-[#FF6B8B]">Objective</h2>
                </div>
                <p className="text-gray-700">
                  On the hunt for a Software Dev role where I can put my skills in Java, cloud tech, deep learning, and
                  full-stack magic to good use. Big fan of building secure, smart apps — especially the kind powered by AI
                  and designed for the cloud. Let's build something that truly delivers. 🚀👩‍💻☁️
                </p>
                <motion.div
                  className="absolute -right-3 -top-3 text-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                >
                  ⭐
                </motion.div>
              </motion.div>

              {/* Language Proficiency */}
              <motion.div
                className="bg-[#FFF0F5] rounded-xl p-4 border-2 border-[#FF85B3] mb-4 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="w-5 h-5 text-[#FF6B8B]" />
                  <h2 className="text-xl font-semibold text-[#FF6B8B]">Language Proficiency</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  <div className="bg-white p-2 rounded-lg text-center border border-[#5BCEFA]">
                    <div className="font-medium">English</div>
                    <div className="text-xs text-[#5BCEFA]">Professional</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-center border border-[#5BCEFA]">
                    <div className="font-medium">Hindi</div>
                    <div className="text-xs text-[#5BCEFA]">Professional</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-center border border-[#5BCEFA]">
                    <div className="font-medium">Kannada</div>
                    <div className="text-xs text-[#5BCEFA]">Professional</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg text-center border border-[#5BCEFA]">
                    <div className="font-medium">Japanese</div>
                    <div className="text-xs text-[#5BCEFA]">Beginner</div>
                  </div>
                 </div>
              </motion.div>

              {/* Areas of Interest */}
              <motion.div
                className="bg-[#E0F7FA] rounded-xl p-4 border-2 border-[#7FD1B9] relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-xl font-semibold text-[#5BCEFA] mb-2">Areas of Interest</h2>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-[#FFD166] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>💻</span> DSA
                  </div>
                  <div className="bg-[#5BCEFA] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>🌐</span> Web Development
                  </div>
                  <div className="bg-[#7FD1B9] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>📱</span> App Development
                  </div>
                  <div className="bg-[#FF85B3] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>☁️</span> Cloud Computing
                  </div>
                  <div className="bg-[#9D8DF1] text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <span>📊</span> Data Analysis
                  </div>
                </div>
                <motion.div
                  className="absolute -left-3 -bottom-3 text-2xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
                >
                  🎯
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <SkillsDisplay />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
