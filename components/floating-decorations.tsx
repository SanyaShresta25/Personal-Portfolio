"use client"

import { motion } from "framer-motion"

export default function FloatingDecorations() {
  // Cloud positions - reduced number
  const clouds = [
    { top: "15%", left: "5%", size: "text-5xl", delay: 0.5 },
    { top: "75%", left: "85%", size: "text-5xl", delay: 2.5 },
  ]

  // Bow positions - reduced to 1
  const bows = [{ top: "10%", left: "90%", size: "text-3xl", delay: 0.3, rotate: 10 }]

  // Sparkle positions - reduced
  const sparkles = [
    { top: "12%", left: "40%", size: "text-2xl", delay: 0.3 },
    { top: "85%", left: "15%", size: "text-xl", delay: 2.8 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Clouds */}
      {clouds.map((cloud, index) => (
        <motion.div
          key={`cloud-${index}`}
          className={`absolute ${cloud.size}`}
          style={{ top: cloud.top, left: cloud.left }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 0.8,
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            delay: cloud.delay,
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Bows */}
      {bows.map((bow, index) => (
        <motion.div
          key={`bow-${index}`}
          className={`absolute ${bow.size}`}
          style={{ top: bow.top, left: bow.left }}
          initial={{ opacity: 0, rotate: bow.rotate }}
          animate={{
            opacity: 1,
            rotate: [bow.rotate, bow.rotate + 10, bow.rotate],
            scale: [1, 1.1, 1],
          }}
          transition={{
            delay: bow.delay,
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          🎀
        </motion.div>
      ))}

      {/* Sparkles */}
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className={`absolute ${sparkle.size}`}
          style={{ top: sparkle.top, left: sparkle.left }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            delay: sparkle.delay,
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}
