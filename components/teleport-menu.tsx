"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, GraduationCap, Map, Rocket, Mountain } from "lucide-react"

interface TeleportMenuProps {
  currentZone: string
  setCurrentZone: (zone: string) => void
}

export default function TeleportMenu({ currentZone, setCurrentZone }: TeleportMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "profile", icon: <Home className="w-6 h-6" />, label: "Profile House", color: "bg-[#FF6B8B]", emoji: "🏠" },
    {
      id: "career",
      icon: <GraduationCap className="w-6 h-6" />,
      label: "Career School",
      color: "bg-[#5BCEFA]",
      emoji: "🎓",
    },
    { id: "projects", icon: <Rocket className="w-6 h-6" />, label: "Projects Lab", color: "bg-[#7FD1B9]", emoji: "🧪" },
    {
      id: "adventure",
      icon: <Mountain className="w-6 h-6" />,
      label: "Adventure Island",
      color: "bg-[#FFD166]",
      emoji: "🏝️",
    },
  ]

  const handleTeleport = (zone: string) => {
    setCurrentZone(zone)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-gradient-to-r from-[#FF4081] to-[#FF85B3] p-4 shadow-lg text-white z-50 relative border-4 border-white"
      >
        <Map className="w-6 h-6" />
        <motion.div
          className="absolute -top-2 -right-2 bg-[#FFD166] rounded-full w-6 h-6 flex items-center justify-center text-white font-bold border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          🗺️
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            className="absolute bottom-full right-0 mb-4 rounded-2xl bg-white p-3 shadow-xl border-4 border-[#FFD166]"
            style={{ width: "220px" }}
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, backgroundColor: "#FFF5F7" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleTeleport(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-left ${
                    currentZone === item.id ? "bg-[#FFF0F5] font-bold border-2 border-[#FFD166]" : ""
                  }`}
                >
                  <div className={`p-2 rounded-full ${item.color} flex items-center justify-center`}>
                    <span className="text-lg">{item.emoji}</span>
                  </div>
                  <span>{item.label}</span>
                  {currentZone === item.id && (
                    <motion.span
                      className="ml-auto"
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                    >
                      ✨
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
            <div className="absolute w-4 h-4 bg-white rotate-45 right-6 -bottom-2 border-r-4 border-b-4 border-[#FFD166]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
