"use client"

import { motion } from "framer-motion"
import { Code, ExternalLink, Github } from "lucide-react"

export default function ProjectsLab() {
  const projects = [
    {
      title: "Facial Expression Generation Using GAN and Autoencoder",
      description:
        "Leverages deep learning to generate facial expressions from labeled data using an autoencoder architecture trained on the CelebA dataset.",
      technologies: ["Python", "TensorFlow", "Deep Learning", "GAN", "Autoencoder"],
      icon: "😄",
      color: "from-[#9D8DF1] to-[#7B68EE]",
      github: "https://github.com/SanyaShresta25/Facial-Expression-Generation-Using-Gan-Autoencoder",
      demo: "https://facial-expression-demo.vercel.app",
    },
    {
      title: "Garbage Classification CNN",
      description:
        "AI image classifier for six waste types with 65.61%+ accuracy using TensorFlow and data augmentation.",
      technologies: ["TensorFlow", "CNN", "Image Classification", "Data Augmentation"],
      icon: "🗑️",
      color: "from-[#7FD1B9] to-[#5BB39B]",
      github: "https://github.com/SanyaShresta25/Garbage-Classification-Using-CNN-AlexNet",
      demo: "https://garbage-classification-demo.vercel.app",
    },
    {
      title: "Bilingual AI Chatbot for Mental Health Support",
      description:
        "Mental health chatbot with NLP support for English and Japanese using SpaCy and ML classification.",
      technologies: ["NLP", "Keras", "Flask", "SpaCy", "Hugging Face"],
      icon: "🤖",
      color: "from-[#FF85B3] to-[#FF6B8B]",
      github: "https://github.com/SanyaShresta25/bilingual-ai-chatbot",
      demo: "https://bilingual-ai-chatbot.vercel.app",
    },
    {
      title: "Breast Cancer Prognosis Prediction using XGBoost",
      description:
        "96.55% accurate model predicting breast cancer outcome using XGBoost and feature analysis.",
      technologies: ["XGBoost", "Data Preprocessing", "Hyperparameter Tuning", "Visualization"],
      icon: "🔬",
      color: "from-[#5BCEFA] to-[#3AA1F2]",
      github: "https://github.com/SanyaShresta25/Breast-Cancer-Prognostic-Prediction",
      demo: "https://breast-cancer-prediction-demo.vercel.app",
    },
    {
      title: "Student Mental Health Analysis and Prediction",
      description:
        "Analyzed survey data using visualization and modeling to achieve 67% prediction accuracy.",
      technologies: ["Python", "Data Visualization", "Statistical Analysis", "Predictive Modeling"],
      icon: "📊",
      color: "from-[#FFD166] to-[#FFAA33]",
      github: "https://github.com/SanyaShresta25/student-mental-health",
      demo: "https://student-mental-health-analysis.vercel.app",
    },
    {
      title: "Dine Select",
      description:
        "Mobile app for personalized restaurant discovery using Java, Firebase, and third-party APIs.",
      technologies: ["Java", "Android Studio", "Firebase", "APIs"],
      icon: "🍽️",
      color: "from-[#FFA69E] to-[#FF686B]",
      github: "https://github.com/SanyaShresta25/dine-select",
      demo: "https://dine-select-demo.vercel.app",
    },
    {
      title: "DearSkin — A Love Letter to Your Skin",
      description:
        "Personalized skincare app with ingredient suggestions, community stories, and AI diary vision.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Supabase", "FastAPI", "Anime.js"],
      icon: "🌸",
      color: "from-[#F9C5D1] to-[#FDCB82]",
      github: "https://github.com/SanyaShresta25/DearSkin",
      demo: "https://dearskin.vercel.app",
    },
    {
      title: "ChemStructAI",
      description:
        "Converts chemical names, images, and video into molecular structures with RDKit and CV.",
      technologies: ["Python", "DeepChem", "RDKit", "OpenBabel", "Computer Vision"],
      icon: "🧪",
      color: "from-[#8EC5FC] to-[#E0C3FC]",
      github: "https://github.com/SanyaShresta25/ChemStruct-Trial",
      demo: "https://chemstructai-demo.vercel.app",
    },
    {
      title: "Honeypot Setup & Monitoring with Cowrie",
      description:
        "Simulates SSH/Telnet attacks using Cowrie on Ubuntu VM to track login attempts and malware.",
      technologies: ["Ubuntu", "Cowrie", "Cybersecurity", "SSH", "Monitoring"],
      icon: "🍯",
      color: "from-[#FFDD99] to-[#FFB347]",
      github: "https://github.com/SanyaShresta25/Information-and-Network-Security/tree/main/Mini%20Project",
      demo: "https://honeypot-monitor-demo.vercel.app",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="zoom-container">
        <div
          className="min-h-screen w-full flex flex-col items-center justify-center p-6 relative"
          style={{ background: "linear-gradient(135deg, #a1e9ff, #c4ffda)" }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-24 right-10 w-20 h-20 bg-[#7FD1B9] rounded-full opacity-60"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          />
          <motion.div
            className="absolute top-10 left-10 text-6xl"
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            🧪
          </motion.div>

          <div className="max-w-6xl w-full z-10 py-8">
            <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center gap-2 mb-8">
                <Code className="w-8 h-8 text-[#FF6B8B]" />
                <h1 className="text-4xl font-bold text-[#FF6B8B] text-center">Magical Projects Lab</h1>
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
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
                    whileHover={{ y: -5 }}
                  >
                    <div className={`h-16 bg-gradient-to-r ${project.color} flex items-center justify-between px-6`}>
                      <span className="text-4xl">{project.icon}</span>
                      <motion.div
                        className="text-2xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
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
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-[#5BCEFA] text-white px-4 py-2 rounded-lg hover:bg-[#5BCEFA]/80 transition-colors flex-1 justify-center"
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
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
          </div>
        </div>
      </div>
    </div>
  )
}
