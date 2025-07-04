import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col md:flex-row justify-center items-center bg-white overflow-hidden px-4"
    >
     
      <div className="flex-1 w-full flex flex-col justify-center items-center md:items-end md:pr-12">
        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-black text-[clamp(2.5rem,10vw,7rem)] md:text-[clamp(3rem,14vw,9rem)] leading-[1] tracking-tight text-gray-900 uppercase select-none text-center md:text-right"
          style={{
            letterSpacing: '-0.04em',
            textShadow: '2px 2px 0 #f472b6, 4px 4px 0 #a5b4fc'
          }}
        >
          <span className="block hover:text-white transition-colors duration-200">
            Mytri
          </span>
          <span className="block hover:text-white transition-colors duration-300">
            Aryani
          </span>
        </motion.h1>
      </div>
     
      <div className="flex-1 w-full flex flex-col justify-center items-center md:items-start mt-2 md:mt-0 md:pl-12">
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex flex-col items-center md:items-start w-full"
        >
       
          <motion.div
            className="hidden md:block absolute -left-6 top-0 h-full w-2 rounded bg-gradient-to-b from-indigo-500 via-fuchsia-400 to-purple-400"
            initial={{ scaleY: 0.3, opacity: 0.6 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7, type: "spring" }}
          />
          <span className="block pl-0 md:pl-8 text-[clamp(1.2rem,5vw,2.5rem)] font-bold text-gray-700 tracking-widest uppercase text-center md:text-left"
            style={{
              letterSpacing: '0.1em'
            }}
          >
            Front-End<br />Web Developer<br />Based in Hyderabad
          </span>
        </motion.div>
      </div>
      
      <style>{`
        @media (pointer: fine) {
          #hero h1 span:hover {
            text-shadow:
              0 0 16px #a78bfa88,
              0 0 32px #f472b688,
              2px 2px 0 #a5b4fc,
              4px 4px 0 #f472b6;
            transition: text-shadow 0.2s;
          }
        }
      `}</style>
    </section>
  );
}
