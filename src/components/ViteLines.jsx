import { motion } from "framer-motion";

const LINES = 7;
const LINE_SPREAD = 120;
const LINE_LENGTH = 400;

export default function ViteLines() {
  const centerY = 180;
  const centerX = 320;

  return (
    <svg
      width="100%"
      height="400"
      className="absolute left-0 top-0 z-0 pointer-events-none"
      style={{ width: "100%", height: "400px" }}
    >
      {Array.from({ length: LINES }).map((_, i) => {
        const offset = ((i - (LINES - 1) / 2) * LINE_SPREAD) / (LINES - 1);
        return (
          <motion.line
            key={i}
            x1={centerX}
            y1={centerY}
            x2={centerX + LINE_LENGTH}
            y2={centerY + offset}
            stroke="#a78bfa"
            strokeWidth="1.2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0.6 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
            style={{
              filter: "drop-shadow(0 0 8px #a78bfa99)",
            }}
          />
        );
      })}
      {Array.from({ length: LINES }).map((_, i) => {
        const offset = ((i - (LINES - 1) / 2) * LINE_SPREAD) / (LINES - 1);
        return (
          <motion.circle
            key={i}
            cx={centerX + LINE_LENGTH}
            cy={centerY + offset}
            r="4"
            fill="#a78bfa"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 + i * 0.08 }}
            style={{
              filter: "drop-shadow(0 0 8px #a78bfa88)",
            }}
          />
        );
      })}
    </svg>
  );
}
