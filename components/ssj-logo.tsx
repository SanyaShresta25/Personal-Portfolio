"use client"

import { motion } from "framer-motion"

export default function SSJLogo() {
  return (
    <motion.div
      className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FFD166] text-white font-bold text-xl shadow-lg border-2 border-white"
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      initial={{ scale: 0, rotate: 180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span className="drop-shadow-md">SSJ</span>
    </motion.div>
  )
}
