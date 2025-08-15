import { motion } from "framer-motion";
import React from "react";

interface AnimatedLayoutProps {
  children: React.ReactNode;
  className?: string;
}

// Variantes de animação para os elementos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const AnimatedLayout: React.FC<AnimatedLayoutProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedLayout;
