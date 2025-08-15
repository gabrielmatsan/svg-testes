import { motion } from "framer-motion";
import React from "react";

export interface InteractivePointData {
  x: number; // Posição X em percentual (0-100)
  y: number; // Posição Y em percentual (0-100)
  name: string;
  link?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square" | "diamond";
  tooltip?: string;
  onClick?: () => void;
  id?: string;
}

interface InteractivePointProps extends InteractivePointData {
  zIndex?: number;
}

const InteractivePoint: React.FC<InteractivePointProps> = ({
  x,
  y,
  name,
  link,
  color = "#3b82f6",
  size = "medium",
  shape = "circle",
  tooltip,
  onClick,
  zIndex = 2,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const sizeClasses = {
    small: "w-2 h-2",
    medium: "w-3 h-3",
    large: "w-4 h-4",
  };

  const shapeClasses = {
    circle: "rounded-full",
    square: "rounded-none",
    diamond: "transform rotate-45",
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        zIndex,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: Math.random() * 0.5 + 0.8, // Random delay entre 0.8-1.3s
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`
          ${sizeClasses[size]} 
          ${shapeClasses[shape]}
          border-2 border-white shadow-lg cursor-pointer
        `}
        style={{
          backgroundColor: color,
          zIndex,
        }}
        onClick={handleClick}
        animate={
          isHovered
            ? {
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0,0,0,0.3)",
              }
            : {
                scale: 1,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }
        }
        transition={{ duration: 0.2 }}
      />

      {/* Tooltip animado */}
      {isHovered && (
        <motion.div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {tooltip || name}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default InteractivePoint;
