import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-4 flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto bg-white overflow-hidden"
    >
    
      <motion.div
        className="absolute -left-24 top-1/3 w-64 h-64 rounded-full z-0"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: [0.5, 0.7, 0.6, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #a78bfa33 0%, #6366f133 100%)",
          filter: "blur(32px)",
        }}
      />

   
      <div className="relative flex flex-col gap-8 md:gap-12 md:w-1/2 w-full items-center md:items-end z-10">
       
        <motion.div
          className="absolute left-[-16px] top-0 bottom-0 w-2 rounded-full bg-gradient-to-b from-indigo-400 via-fuchsia-400 to-purple-400 opacity-80"
          initial={{ scaleY: 0.2, opacity: 0.5 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          style={{ transformOrigin: "top" }}
        />
        {/* Top card */}
        <motion.div
          className="relative bg-white/80 backdrop-blur-lg border border-indigo-100 rounded-3xl shadow-xl px-8 py-7 w-60 md:w-72 -mb-8 z-10"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="block text-3xl font-extrabold text-indigo-600 mb-1">Creative</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider"></span>
        </motion.div>
       
        <motion.div
          className="relative bg-white/80 backdrop-blur-lg border border-purple-100 rounded-3xl shadow-xl px-8 py-7 w-60 md:w-72 mt-8 z-10"
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <span className="block text-3xl font-extrabold text-purple-600 mb-1">Clean</span>
          <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider"></span>
        </motion.div>
      </div>

    
      <motion.div
        className="relative md:ml-[-3rem] mt-16 md:mt-0 md:w-1/2 w-full flex flex-col items-center md:items-start bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-indigo-100 px-8 py-12 z-20"
        initial={{ opacity: 0, x: 60, scale: 0.98 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionHeading>About</SectionHeading>
        <h3 className="text-2xl font-bold text-indigo-600 mb-4">
          Hi there! <span role="img" aria-label="wave">👋</span>
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          I'm <span className="font-semibold text-indigo-600">Mytri Aryani</span>, a passionate Front-End Web Developer currently pursuing my B.Tech in Computer Science and Engineering. I love crafting beautiful, responsive, and user-friendly websites that deliver seamless experiences.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like <span className="font-semibold text-purple-500">ReactJS</span> and <span className="font-semibold text-indigo-500">NextJS</span>, I enjoy turning creative ideas into functional and visually appealing web applications. My goal is to build intuitive interfaces that not only look great but also enhance usability and performance.
        </p>
        <p className="text-indigo-600 font-semibold mt-2 text-lg">
          Let&apos;s connect and build something amazing together!
        </p>
      </motion.div>
    </section>
  );
}
