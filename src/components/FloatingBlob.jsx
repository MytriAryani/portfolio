import { motion } from "framer-motion";

export function FloatingBlob({ className, color, style }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      style={style}
    >
      <svg width="200" height="200">
        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="60"
          fill={color}
          fillOpacity="0.2"
        />
      </svg>
    </motion.div>
  );
}
