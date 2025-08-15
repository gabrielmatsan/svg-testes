import { motion } from "framer-motion";
import React from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1], // cubic-bezier para suavidade
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
