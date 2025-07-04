import { motion } from "framer-motion";

export default function SectionHeading({ children }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 relative inline-block">
        {children}
        <motion.span
          className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-400 rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ originX: 0 }}
        />
      </h2>
    </div>
  );
}
