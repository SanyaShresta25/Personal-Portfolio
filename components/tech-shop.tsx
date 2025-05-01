"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar, Code, Github } from "lucide-react"

export default function TechShop() {
  const projects = [
    {
      title: "Bilingual AI Chatbot for Mental Health Support",
      description:
        "Designed to provide mental health support using Natural Language Processing (NLP) and machine learning, detecting user language (English or Japanese) with SpaCy's language detection pipeline.",
      technologies: ["NLP", "Keras", "Flask", "SpaCy", "Hugging Face"],
      icon: "🤖",
      color: "from-[#FF85B3] to-[#FF6B8B]",
    },
    {
      title: "Breast Cancer Prognosis Prediction using XGBoost",
      description:
        "Utilizes an XGBoost classifier to predict breast cancer prognosis (malignant or benign) from digitized cell nuclei features with 96.55% precision and recall.",
      technologies: ["XGBoost", "Data Preprocessing", "Hyperparameter Tuning", "Visualization"],
      icon: "🔬",
      color: "from-[#5BCEFA] to-[#3AA1F2]",
    },
    {
      title: "Student Mental Health Analysis and Prediction",
      description:
        "Conducted in-depth analysis of student mental health survey dataset using data visualization tools and statistical methods, achieving 67% prediction accuracy.",
      technologies: ["Python", "Data Visualization", "Statistical Analysis", "Predictive Modeling"],
      icon: "📊",
      color: "from-[#7FD1B9] to-[#5BB39B]",
    },
  ]

  const certifications = [
    {
      title: "AWS Educate Getting Started with Compute",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2025",
      link: "https://www.credly.com/badges/d6e7259c-eb34-4052-bcc5-b1d267971660/linked_in_profile",
      image: "/placeholder.svg?height=200&width=200",
      icon: "☁️",
    },
    {
      title: "AWS Educate Getting Started with Databases",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2025",
      link: "https://www.credly.com/badges/853f03a7-c987-4c9d-bfcb-5810e70ac3ef/linked_in_profile",
      image: "/placeholder.svg?height=200&width=200",
      icon: "🗄️",
    },
    {
      title: "AWS Educate Getting Started with Networking",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2025",
      link: "https://www.credly.com/badges/69a84d53-2d62-4bee-a1a9-c399db2c53a1/linked_in_profile",
      image: "/placeholder.svg?height=200&width=200",
      icon: "🌐",
    },
    {
      title: "AWS Educate Getting Started with Storage",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2025",
      link: "https://www.credly.com/badges/1461b236-b23d-4df3-87d5-1d34778de896/linked_in_profile",
      image: "/placeholder.svg?height=200&width=200",
      icon: "💾",
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      date: "April 2025",
      link: "https://www.credly.com/badges/37ddb500-d27d-471e-acfb-c0b5afd56b39/linked_in_profile",
      image: "/placeholder.svg?height=200&width=200",
      icon: "☁️",
    },
    {
      title: "Global AI Bootcamp 2025 - India - NITTE - Attendee",
      issuer: "Global AI Community",
      date: "April 2025",
      link: "https://globalai.community/badges/cf327e99-fed2-4f55-98e8-5fac76e336be/",
      image: "/placeholder.svg?height=200&width=200",
      icon: "🧠",
    },
    {
      title: "Android App Development",
      issuer: "Internshala",
      date: "July 2024",
      link: "https://trainings.internshala.com/verify_certificate",
      image: "/placeholder.svg?height=200&width=200",
      icon: "📱",
    },
    {
      title: "IBM Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "June 2024",
      link: "https://coursera.org/share/b7f4372b7bf4b3ce467e04963c086d41",
      image: "/placeholder.svg?height=200&width=200",
      icon: "🐍",
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
    <div
      className="h-full w-full flex flex-col items-center justify-center p-6 relative overflow-auto"
      style={{
        background: "linear-gradient(to bottom, #a1e9ff, #c4ffda)",
      }}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-24 right-10 w-20 h-20 bg-[#7FD1B9] rounded-full opacity-60"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-24 left-10 w-16 h-16 bg-[#7FD1B9] rounded-full opacity-60"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
      ></motion.div>

      {/* Shop decoration */}
      <motion.div
        className="absolute top-10 left-10 text-6xl"
        animate={{ rotate: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
      >
        🏆
      </motion.div>

      {/* Star decorations */}
      <motion.div
        className="absolute top-20 right-20 text-4xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-4xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 0.5 }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-40 text-4xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, delay: 1 }}
      >
        ⭐
      </motion.div>

      <div className="max-w-6xl w-full z-10 py-16">
        {/* Projects Section */}
        <motion.div className="mb-16" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Code className="w-8 h-8 text-[#FF6B8B]" />
            <h1 className="text-4xl font-bold text-[#FF6B8B] text-center">Projects</h1>
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              💻
            </motion.span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-[#7FD1B9] relative"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`h-16 bg-gradient-to-r ${project.color} flex items-center justify-between px-6`}>
                  <span className="text-4xl">{project.icon}</span>
                  <motion.div
                    className="text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF6B8B] mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#E0F7FA] text-[#5BCEFA] px-3 py-1 rounded-full text-sm border border-[#5BCEFA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex items-center gap-1 bg-[#5BCEFA] text-white px-4 py-2 rounded-lg hover:bg-[#5BCEFA]/80 transition-colors flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-1 bg-[#FFD166] text-white px-4 py-2 rounded-lg hover:bg-[#FFD166]/80 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Award className="w-8 h-8 text-[#FF6B8B]" />
            <h1 className="text-4xl font-bold text-[#FF6B8B] text-center">Certifications</h1>
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              🏅
            </motion.span>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border-4 border-[#7FD1B9] relative"
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-48 overflow-hidden bg-[#E0F7FA] flex items-center justify-center relative">
                  <span className="text-6xl">{cert.icon}</span>
                  <motion.div
                    className="absolute top-2 right-2 text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                  >
                    ⭐
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 left-2 text-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  >
                    🎀
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#FF6B8B] mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-1 text-[#5BCEFA] mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{cert.issuer}</p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-gradient-to-r from-[#FFD166] to-[#FFAA33] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Certificate</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
