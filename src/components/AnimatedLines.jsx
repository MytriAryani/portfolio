import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function AnimatedLine({ x1, y1, x2, y2, delay = 0 }) {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({
        opacity: [0.3, 1, 0.3],
        filter: [
          "drop-shadow(0 0 0px #a78bfa)",
          "drop-shadow(0 0 8px #a78bfa)",
          "drop-shadow(0 0 0px #a78bfa)",
        ],
        transition: { duration: 1.2, delay },
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, delay]);

  return (
    <motion.svg
      ref={ref}
      width="100%"
      height="100%"
      className="absolute top-0 left-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    >
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#a78bfa"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ opacity: 0.3 }}
        animate={controls}
      />
    </motion.svg>
  );
}

export default function AnimatedLines() {
  return (
    <>
      <AnimatedLine x1="5vw" y1="10vh" x2="95vw" y2="30vh" delay={0.1} />
      <AnimatedLine x1="10vw" y1="60vh" x2="90vw" y2="80vh" delay={0.2} />
      <AnimatedLine x1="20vw" y1="40vh" x2="80vw" y2="10vh" delay={0.3} />
      <AnimatedLine x1="30vw" y1="90vh" x2="70vw" y2="20vh" delay={0.4} />
    </>
  );
}
