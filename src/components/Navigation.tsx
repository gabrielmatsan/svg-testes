import { motion } from "framer-motion";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavigationProps {
  variant?: "blue" | "red" | "purple";
  showShowcase?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  variant = "blue",
  showShowcase = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPage1 = location.pathname === "/pagina1";
  const isPage2 = location.pathname === "/pagina2";
  const isShowcase = location.pathname === "/showcase";

  const colors = {
    blue: {
      current: "bg-blue-500 text-white",
      other: "bg-gray-500 hover:bg-gray-600 text-white",
      showcase: "bg-purple-500 hover:bg-purple-600 text-white",
      container: "bg-white",
    },
    red: {
      current: "bg-red-500 text-white",
      other: "bg-gray-500 hover:bg-gray-600 text-white",
      showcase: "bg-purple-500 hover:bg-purple-600 text-white",
      container: "bg-white",
    },
    purple: {
      current: "bg-purple-500 text-white",
      other: "bg-gray-500 hover:bg-gray-600 text-white",
      showcase: "bg-purple-500 text-white",
      container: "bg-white",
    },
  };

  const theme = colors[variant];

  return (
    <motion.div
      className="flex justify-center mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <motion.div
        className={`${theme.container} rounded-lg shadow-md p-4 flex gap-4`}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.button
          onClick={() => navigate("/pagina1")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            isPage1 ? theme.current : theme.other
          }`}
          disabled={isPage1}
          whileHover={{ scale: isPage1 ? 1 : 1.05 }}
          whileTap={{ scale: isPage1 ? 1 : 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isPage1 ? "Página 1 (Atual)" : "Página 1"}
        </motion.button>
        <motion.button
          onClick={() => navigate("/pagina2")}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            isPage2 ? theme.current : theme.other
          }`}
          disabled={isPage2}
          whileHover={{ scale: isPage2 ? 1 : 1.05 }}
          whileTap={{ scale: isPage2 ? 1 : 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isPage2 ? "Página 2 (Atual)" : "Página 2"}
        </motion.button>
        {showShowcase && (
          <motion.button
            onClick={() => navigate("/showcase")}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              isShowcase ? theme.showcase : theme.showcase
            }`}
            disabled={isShowcase}
            whileHover={{ scale: isShowcase ? 1 : 1.05 }}
            whileTap={{ scale: isShowcase ? 1 : 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {isShowcase ? "🎭 Showcase (Atual)" : "🎭 Ver Showcase"}
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navigation;
