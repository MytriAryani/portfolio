

import { motion } from "framer-motion";

const projects = [
  {
    name: "AbridgeIt",
    description: "Developed an AI agent that automates meeting summarization (50% faster follow-ups), self-evaluates outputs via 3x feedback loops, and boosts action-item accuracy by 40% through iterative refinement—with integrated email sharing for accountability",
    image: "../src/assets/Abridge.png",
    link: "https://github.com/MytriAryani/AbridgeIt",
    tags: ["Python", "Gemini API"],
  },
  {
    name: "LinkFlow",
    description: "Link Flow is a React app for sharing data over Bluetooth (BLE) with a clean, mobile-friendly UI.",
    image: "../src/assets/linkflow.png",
    link: "https://github.com/MytriAryani/LinkFlow-react",
    tags: ["React", "Tailwind", "Web Bluetooth API"],
  },
  {
    name: "Career Support ChatBot",
    description: "A chatbot-powered platform for finding internships and events with ease.",
    image: "../src/assets/chatbot.png",
    link: "https://github.com/MytriAryani/Career-support-ChatBot-",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Time Traveller Explorer",
    description: "A web app that lets you explore NASA's Astronomy Picture of the Day for any chosen date, with a cinematic video background for an immersive experience.",
    image: "time.png",
    link: "https://github.com/MytriAryani/Time-Traveller-Explorer",
    tags: ["HTML", "CSS", "JS", "NASA'S API"],
  },
  

];



export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 overflow-x-auto bg-white">
     
      <div className="px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
          <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl">
          A selection of my favorite work — crafted with creativity, code, and a passion.
        </p>
      </div>

      <div
        className="flex gap-8 px-4 md:px-8 hide-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overflowX: "auto",
          overflowY: "hidden",
          alignItems: "stretch",
        }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={p.name + i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex-shrink-0
              w-[88vw] sm:w-[70vw] md:w-[420px]
              max-w-[95vw] md:max-w-[420px]
              h-[380px] md:h-[420px]
              rounded-3xl
              bg-gradient-to-br from-[#f3e8ff] via-[#ede9fe] to-[#f3e8ff]
              overflow-hidden
              relative group shadow-xl border border-gray-200
              transition-transform duration-300
              hover:scale-[1.025]
            "
            style={{ scrollSnapAlign: "center" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <img
              src={p.image}
              alt={p.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent z-10" />
            <div className="relative z-20 flex flex-col justify-end h-full p-5 md:p-10 overflow-y-auto">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 drop-shadow-lg">{p.name}</h3>
              <p className="text-sm md:text-base text-gray-700 mb-3 line-clamp-4">{p.description}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 font-medium border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        <span>Scroll horizontally to explore my projects &rarr;</span>
      </div>
    </section>
  );
}
