import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiBootstrap, SiMongodb, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-blue-600" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 flex flex-col items-center justify-center max-w-5xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-purple-100 overflow-hidden"
    >
   
      <motion.div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full z-0"
        initial={{ scale: 0.7, opacity: 0.4 }}
        animate={{ scale: [0.7, 1.05, 0.9, 1], opacity: [0.4, 0.7, 0.6, 0.6] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #a78bfa55 0%, #6366f155 100%)",
          filter: "blur(24px)",
        }}
      />

     
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-white/30 backdrop-blur-md rounded-3xl" />
      </div>

     
      <div className="relative z-10 w-full flex flex-col items-center mb-10">
        <SectionHeading>Skills</SectionHeading>
        
        <p className="text-gray-600 text-center mb-4 max-w-lg">
          Tools I love to use for building <span className="font-semibold text-indigo-500">beautiful</span> and <span className="font-semibold text-purple-500">performant</span> web experiences.
        </p>
      </div>

    
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ scale: 1.09, boxShadow: "0 8px 32px 0 rgba(167,139,250,0.18)" }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 22,
              delay: i * 0.06,
            }}
            className="flex flex-col items-center justify-center w-28 h-28 bg-white/70 backdrop-blur-lg border border-indigo-100 rounded-2xl shadow-lg transition-all"
            style={{
              boxShadow: "0 2px 12px 0 rgba(167,139,250,0.08)",
            }}
          >
            <span className="text-4xl mb-2">{skill.icon}</span>
            <span className="text-xs font-semibold text-gray-700 mt-1">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
