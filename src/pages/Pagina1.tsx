import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/Pontos Análise USP.avif";
import AnimatedLayout from "../components/AnimatedLayout";
import InteractiveImageWithSvg from "../components/InteractiveImageWithSvg";
import { InteractivePointData } from "../components/InteractivePoint";
import Navigation from "../components/Navigation";
import PageTransition from "../components/PageTransition";
import { SvgElement } from "../components/SvgOverlay";

const Pagina1: React.FC = () => {
  const navigate = useNavigate();

  // Elementos SVG para a primeira página
  const svgElements: SvgElement[] = [
    // Linha diagonal azul
    {
      type: "line",
      x1: 10,
      y1: 10,
      x2: 90,
      y2: 90,
      stroke: "#3b82f6",
      strokeWidth: 3,
      id: "diagonal-blue",
    },
    // Círculo central
    {
      type: "circle",
      cx: 50,
      cy: 50,
      r: 8,
      fill: "rgba(59, 130, 246, 0.3)",
      stroke: "#3b82f6",
      strokeWidth: 2,
      id: "central-circle",
    },
    // Retângulo superior
    {
      type: "rect",
      x: 30,
      y: 15,
      width: 40,
      height: 12,
      fill: "rgba(59, 130, 246, 0.2)",
      stroke: "#1d4ed8",
      strokeWidth: 2,
      rx: 3,
      id: "header-box",
    },
    // Linha pontilhada horizontal
    {
      type: "line",
      x1: 15,
      y1: 75,
      x2: 85,
      y2: 75,
      stroke: "#6366f1",
      strokeWidth: 2,
      strokeDasharray: "8,4",
      id: "dashed-line",
    },
  ];

  // Pontos interativos para a primeira página
  const points: InteractivePointData[] = [
    {
      x: 25,
      y: 35,
      name: "Início",
      color: "#3b82f6",
      size: "large",
      shape: "circle",
      tooltip: "Ponto de início do processo",
      onClick: () => alert("Você está no início do processo!"),
      id: "inicio",
    },
    {
      x: 75,
      y: 35,
      name: "Ir para Página 2",
      color: "#10b981",
      size: "large",
      shape: "square",
      tooltip: "Clique para ir para a segunda página",
      onClick: () => navigate("/pagina2"),
      id: "navegar-pagina2",
    },
    {
      x: 50,
      y: 65,
      name: "Centro",
      color: "#f59e0b",
      size: "medium",
      shape: "diamond",
      tooltip: "Ponto central da primeira página",
      onClick: () => alert("Você está no centro da Página 1"),
      id: "centro",
    },
  ];

  return (
    <PageTransition className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedLayout>
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              className="text-4xl font-bold text-blue-900 mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Página 1 - Sistema de Análise
            </motion.h1>
            <motion.p
              className="text-blue-700 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore os pontos interativos e navegue para a Página 2
            </motion.p>
          </div>

          {/* Navegação */}
          <Navigation variant="blue" />

          {/* Imagem Interativa */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <InteractiveImageWithSvg
                src={image}
                alt="Análise USP - Página 1"
                svgElements={svgElements}
                points={points}
                className="border border-blue-200 rounded-lg"
                enableOverflow={false}
              />
            </div>
          </motion.div>

          {/* Instruções */}
          <motion.div
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Instruções - Página 1
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <h4 className="font-medium text-blue-800 mb-2">
                  Elementos SVG:
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Linha diagonal azul principal</li>
                  <li>• Círculo central semi-transparente</li>
                  <li>• Retângulo de cabeçalho</li>
                  <li>• Linha pontilhada horizontal</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h4 className="font-medium text-blue-800 mb-2">
                  Pontos Interativos:
                </h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>
                    •{" "}
                    <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Início (círculo azul)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>
                    Navegar (quadrado verde)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-2 h-2 bg-amber-500 transform rotate-45 mr-2"></span>
                    Centro (losango laranja)
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedLayout>
      </div>
    </PageTransition>
  );
};

export default Pagina1;
