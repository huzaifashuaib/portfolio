"use client";
import { motion } from "framer-motion";
const SlideUpWrapper = ({ children, className = "", id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 0 }}
      className={`will-change-transform ${className}`}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpWrapper;
