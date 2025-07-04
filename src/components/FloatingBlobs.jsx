import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 z-0"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ y: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      >
        <svg width="320" height="220">
          <ellipse cx="160" cy="110" rx="130" ry="90" fill="#a5b4fc" fillOpacity="0.18" />
        </svg>
      </motion.div>
      <motion.div
        className="absolute bottom-0 right-0 z-0"
        initial={{ scale: 0.7, opacity: 0.4 }}
        animate={{ y: [0, -40, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        style={{ pointerEvents: "none" }}
      >
        <svg width="280" height="180">
          <ellipse cx="140" cy="90" rx="110" ry="70" fill="#c4b5fd" fillOpacity="0.17" />
        </svg>
      </motion.div>
    </>
  );
}
