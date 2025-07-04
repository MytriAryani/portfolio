import { motion } from "framer-motion";

export function AnimatedDivider() {
  return (
    <motion.svg
      height="2"
      width="100%"
      className="my-8"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100%"
        y2="1"
        stroke="#6366F1"
        strokeWidth="2"
      />
    </motion.svg>
  );
}
