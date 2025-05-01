"use client"
import { motion } from "framer-motion"

interface AvatarProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Avatar({ size = "md", className = "" }: AvatarProps) {
  // Using the provided pixel art image
  const profileImage = "/images/profile-pic.png"

  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ y: 10 }}
      animate={{ y: [-10, 10] }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 2,
      }}
    >
      {/* Profile image */}
      <div className="absolute inset-0 z-10 rounded-full overflow-hidden border-4 border-[#FF85B3]">
        <img src={profileImage || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -right-2 text-2xl z-40"
        animate={{ rotate: [0, 10, 0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        🎀
      </motion.div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-sm z-0"></div>
    </motion.div>
  )
}
