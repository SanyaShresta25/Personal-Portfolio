"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TeleportMenu from "@/components/teleport-menu"
import ProfileHouse from "@/components/profile-house"
import CareerSchool from "@/components/career-school"
import ProjectsLab from "@/components/projects-lab"
import AdventureIsland from "@/components/adventure-island"
import FloatingDecorations from "@/components/floating-decorations"
import SSJLogo from "@/components/ssj-logo"

export default function Home() {
  const [currentZone, setCurrentZone] = useState("profile")

  const zones = {
    profile: <ProfileHouse />,
    career: <CareerSchool />,
    projects: <ProjectsLab />,
    adventure: <AdventureIsland />,
  }

  return (
    <main className="h-screen w-screen overflow-hidden relative">
      <FloatingDecorations />

      <div className="fixed top-6 left-6 z-50">
        <SSJLogo />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentZone}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          {zones[currentZone as keyof typeof zones]}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <TeleportMenu currentZone={currentZone} setCurrentZone={setCurrentZone} />
      </div>
    </main>
  )
}
