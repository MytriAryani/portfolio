import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const timeline = [
  {
    company: "MITRSOS",
    period: "May 2025 - June 2025",
    title: "Frontend Intern",
    story: (
      <>
        
        ◦ Developed a Bluetooth-based SOS alert system front end using <span className="font-semibold">ReactJS </span>and <span className="font-semibold"> Tailwind CSS </span>, enabling live
location tracking, trigger history, and device status monitoring for an upcoming IoT device.<br/>
◦ Simulated device communication using the<span className="font-semibold"> Web Bluetooth API</span>  and nRF Connect to test connectivity, and
validated core UI functionalities with mock data during the pre-prototype stage to ensure readiness for
future hardware integration.
      </>
    ),
  },
  {
    company: "Techical Club- SAC (MREC)",
    period: "2023 - 2025",
    title: "Lead and Mentor",
    story: (
      <>
        
        ◦ Led hands-on mentoring sessions on HTML, CSS, Javascript and ReactJS to enhance students' practical
coding skills,<span className="font-semibold"> increasing session attendence by over 60% </span> from the previous year.
      </>
    ),
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-4 max-w-3xl mx-auto">
      <SectionHeading>Experience</SectionHeading>
      <div className="relative pl-8">
      
        <motion.div
          className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-300 rounded-full"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
        <ul className="space-y-12 relative z-10">
          {timeline.map((item, idx) => (
            <motion.li
              key={item.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative bg-white/90 rounded-lg shadow-md p-6 border-l-4 border-indigo-300"
            >
              <div className="absolute -left-8 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white shadow" />
              <div className="font-bold text-indigo-700">{item.company}</div>
              <div className="text-sm text-gray-500 mb-2">{item.period}</div>
              <div className="font-semibold mb-2">{item.title}</div>
              <div className="text-gray-700">{item.story}</div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
