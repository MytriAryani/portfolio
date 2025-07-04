import { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Animated Confetti Burst
function Confetti({ active }) {
  return (
    <svg
      className={`absolute left-1/2 top-0 -translate-x-1/2 ${active ? "opacity-100" : "opacity-0"} transition-opacity duration-300 pointer-events-none`}
      width="180"
      height="80"
      viewBox="0 0 180 80"
      style={{ zIndex: 10 }}
    >
      <circle cx="90" cy="30" r="6" fill="#a78bfa" />
      <circle cx="30" cy="50" r="6" fill="#6366f1" />
      <circle cx="150" cy="50" r="6" fill="#facc15" />
      <circle cx="60" cy="60" r="4" fill="#f472b6" />
      <circle cx="120" cy="60" r="4" fill="#34d399" />
      <circle cx="120" cy="30" r="4" fill="#f472b6" />
      <circle cx="60" cy="30" r="4" fill="#facc15" />
    </svg>
  );
}

export default function Contact() {
  const [confetti, setConfetti] = useState(false);

  // Handle confetti burst on button click
  const handleConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 900);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-indigo-50 via-white to-purple-100 overflow-hidden"
    >
      {/* Animated gradient blob */}
      <motion.div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full z-0"
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: [0.7, 1.05, 0.9, 1], opacity: [0.5, 0.7, 0.6, 0.6] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #a78bfa55 0%, #6366f155 100%)",
          filter: "blur(24px)",
        }}
      />

      {/* Glassy Card */}
      <motion.div
        className="relative z-20 w-full max-w-xl rounded-3xl bg-white/70 backdrop-blur-lg shadow-2xl border border-indigo-100 px-8 py-12 flex flex-col items-center"
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Confetti */}
        <Confetti active={confetti} />

        {/* Animated accent line */}
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">
          Let's Connect!
        </h2>
        <p className="text-gray-600 text-center mb-7 max-w-md">
          I love meeting new people and talking about web, code, or anything creative.<br />
          Drop me a message, say hi, or just share a meme!
        </p>

        {/* Social icons */}
        <div className="flex gap-8 text-3xl mb-7">
          <motion.a
            href="mailto:mytriaryani@gmail.com"
            whileHover={{ scale: 1.2, color: "#facc15" }}
            className="text-indigo-600 transition-colors"
            title="Email"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mytri-aryani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0e76a8" }}
            className="text-indigo-600 transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/MytriAryani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#333" }}
            className="text-indigo-600 transition-colors"
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-lg shadow-md relative overflow-hidden"
          style={{
            boxShadow: "0 4px 24px 0 rgba(167,139,250,0.18)",
            border: "2px solid #a78bfa",
          }}
          onClick={e => {
            e.preventDefault();
            handleConfetti();
            window.open("mailto:mytriaryani@gmail.com", "_blank");
          }}
        >
          Send a Hi! 🎉
        </motion.button>
      </motion.div>

      {/* Glass overlay for subtle depth */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-white/30 backdrop-blur-md rounded-3xl" />
      </div>
    </section>
  );
}
