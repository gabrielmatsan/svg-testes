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

const Pagina2: React.FC = () => {
  const navigate = useNavigate();

  // Elementos SVG para a segunda página
  const svgElements: SvgElement[] = [
    // Linha curva principal
    {
      type: "curved",
      x1: 15,
      y1: 20,
      x2: 85,
      y2: 80,
      cx1: 50,
      cy1: 10,
      cx2: 50,
      cy2: 90,
      stroke: "#dc2626",
      strokeWidth: 3,
      id: "main-curve",
    },
    // Múltiplos círculos conectados
    {
      type: "circle",
      cx: 20,
      cy: 30,
      r: 5,
      fill: "#fecaca",
      stroke: "#dc2626",
      strokeWidth: 2,
      id: "circle-1",
    },
    {
      type: "circle",
      cx: 50,
      cy: 40,
      r: 6,
      fill: "#fecaca",
      stroke: "#dc2626",
      strokeWidth: 2,
      id: "circle-2",
    },
    {
      type: "circle",
      cx: 80,
      cy: 70,
      r: 7,
      fill: "#fecaca",
      stroke: "#dc2626",
      strokeWidth: 2,
      id: "circle-3",
    },
    // Linhas conectoras
    {
      type: "line",
      x1: 25,
      y1: 30,
      x2: 45,
      y2: 40,
      stroke: "#991b1b",
      strokeWidth: 2,
      strokeDasharray: "6,3",
      id: "connector-1",
    },
    {
      type: "line",
      x1: 55,
      y1: 40,
      x2: 75,
      y2: 70,
      stroke: "#991b1b",
      strokeWidth: 2,
      strokeDasharray: "6,3",
      id: "connector-2",
    },
    // Retângulo de destaque
    {
      type: "rect",
      x: 35,
      y: 60,
      width: 30,
      height: 15,
      fill: "rgba(220, 38, 38, 0.2)",
      stroke: "#dc2626",
      strokeWidth: 2,
      rx: 5,
      id: "highlight-box",
    },
    // Path customizado em forma de seta
    {
      type: "path",
      d: "M 10 85 L 20 80 L 20 83 L 35 83 L 35 87 L 20 87 L 20 90 Z",
      fill: "#dc2626",
      stroke: "#991b1b",
      strokeWidth: 1,
      id: "arrow-path",
    },
  ];

  // Pontos interativos para a segunda página
  const points: InteractivePointData[] = [
    {
      x: 20,
      y: 20,
      name: "Estação A",
      color: "#dc2626",
      size: "large",
      shape: "circle",
      tooltip: "Primeira estação do processo",
      onClick: () => alert("Você está na Estação A!"),
      id: "estacao-a",
    },
    {
      x: 80,
      y: 20,
      name: "Voltar para Página 1",
      color: "#3b82f6",
      size: "large",
      shape: "square",
      tooltip: "Clique para voltar à primeira página",
      onClick: () => navigate("/pagina1"),
      id: "voltar-pagina1",
    },
    {
      x: 50,
      y: 50,
      name: "Estação B",
      color: "#f59e0b",
      size: "medium",
      shape: "diamond",
      tooltip: "Segunda estação do processo",
      onClick: () => alert("Você está na Estação B!"),
      id: "estacao-b",
    },
    {
      x: 70,
      y: 80,
      name: "Finalizar",
      color: "#10b981",
      size: "large",
      shape: "circle",
      tooltip: "Finalizar processo",
      onClick: () => alert("Processo finalizado com sucesso!"),
      id: "finalizar",
    },
    {
      x: 30,
      y: 80,
      name: "Status",
      color: "#8b5cf6",
      size: "small",
      shape: "square",
      tooltip: "Verificar status do sistema",
      onClick: () => alert("Sistema funcionando normalmente"),
      id: "status",
    },
  ];

  return (
    <PageTransition className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedLayout>
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              className="text-4xl font-bold text-red-900 mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Página 2 - Sistema de Processamento
            </motion.h1>
            <motion.p
              className="text-red-700 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Gerencie o fluxo de trabalho e volte para a Página 1
            </motion.p>
          </div>

          {/* Navegação */}
          <Navigation variant="red" />

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
                alt="Análise USP - Página 2"
                svgElements={svgElements}
                points={points}
                className="border border-red-200 rounded-lg"
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
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              Instruções - Página 2
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <h4 className="font-medium text-red-800 mb-2">
                  Elementos SVG:
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Linha curva vermelha principal</li>
                  <li>• Múltiplos círculos conectados</li>
                  <li>• Linhas conectoras pontilhadas</li>
                  <li>• Retângulo de destaque</li>
                  <li>• Seta customizada em SVG path</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h4 className="font-medium text-red-800 mb-2">
                  Pontos Interativos:
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>
                    •{" "}
                    <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                    Estação A (círculo vermelho)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-3 h-3 bg-blue-500 mr-2"></span>
                    Voltar (quadrado azul)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-2 h-2 bg-amber-500 transform rotate-45 mr-2"></span>
                    Estação B (losango laranja)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Finalizar (círculo verde)
                  </li>
                  <li>
                    •{" "}
                    <span className="inline-block w-2 h-2 bg-purple-500 mr-2"></span>
                    Status (quadrado roxo)
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Informações Adicionais */}
          <motion.div
            className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="font-medium text-red-800 mb-2">
              💡 Dica de Navegação:
            </h4>
            <p className="text-red-700 text-sm">
              Use os pontos verdes "Navegar" na Página 1 ou azuis "Voltar" na
              Página 2 para alternar entre as páginas. Cada página tem um design
              e funcionalidades únicas!
            </p>
          </motion.div>
        </AnimatedLayout>
      </div>
    </PageTransition>
  );
};

export default Pagina2;
