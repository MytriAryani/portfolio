import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const cursorRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] left-0 top-0"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 opacity-70 mix-blend-multiply shadow-lg" />
    </motion.div>
  );
}
