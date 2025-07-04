import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }) => (
  <section id={id} className="py-16 px-4 max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
