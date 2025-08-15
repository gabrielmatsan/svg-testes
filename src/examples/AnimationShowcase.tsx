import React from "react";
import InteractiveImageWithSvg from "../components/InteractiveImageWithSvg";
import { InteractivePointData } from "../components/InteractivePoint";
import Navigation from "../components/Navigation";
import { SvgElement } from "../components/SvgOverlay";

const AnimationShowcase: React.FC = () => {
  // Grid de demonstração das animações
  const animationPoints: InteractivePointData[] = [
    // Linha 1 - Animações básicas
    {
      x: 15,
      y: 20,
      name: "Pop",
      color: "#ef4444",
      size: "medium",
      shape: "circle",
      tooltip: "Animação Pop - Cresce do zero",
      animationType: "pop",
      animationDelay: 1.0,
      onClick: () => alert("Animação Pop!"),
      id: "pop-demo",
    },
    {
      x: 35,
      y: 20,
      name: "Slide",
      color: "#f97316",
      size: "medium",
      shape: "square",
      tooltip: "Animação Slide - Desliza da diagonal",
      animationType: "slide",
      animationDelay: 1.2,
      onClick: () => alert("Animação Slide!"),
      id: "slide-demo",
    },
    {
      x: 55,
      y: 20,
      name: "Fade",
      color: "#eab308",
      size: "medium",
      shape: "diamond",
      tooltip: "Animação Fade - Aparece gradualmente",
      animationType: "fade",
      animationDelay: 1.4,
      onClick: () => alert("Animação Fade!"),
      id: "fade-demo",
    },
    {
      x: 75,
      y: 20,
      name: "Bounce",
      color: "#22c55e",
      size: "medium",
      shape: "circle",
      tooltip: "Animação Bounce - Quica de cima",
      animationType: "bounce",
      animationDelay: 1.6,
      onClick: () => alert("Animação Bounce!"),
      id: "bounce-demo",
    },

    // Linha 2 - Animações avançadas
    {
      x: 25,
      y: 50,
      name: "Spin",
      color: "#3b82f6",
      size: "large",
      shape: "square",
      tooltip: "Animação Spin - Roda e aparece",
      animationType: "spin",
      animationDelay: 1.8,
      hoverScale: 1.5,
      onClick: () => alert("Animação Spin!"),
      id: "spin-demo",
    },
    {
      x: 50,
      y: 50,
      name: "Shake",
      color: "#8b5cf6",
      size: "large",
      shape: "diamond",
      tooltip: "Animação Shake - Balança ao aparecer",
      animationType: "shake",
      animationDelay: 2.0,
      hoverScale: 1.4,
      tapScale: 0.8,
      onClick: () => alert("Animação Shake!"),
      id: "shake-demo",
    },
    {
      x: 75,
      y: 50,
      name: "Pulse",
      color: "#ec4899",
      size: "large",
      shape: "circle",
      tooltip: "Animação Pulse - Pulsa ao aparecer",
      animationType: "pulse",
      animationDelay: 2.2,
      hoverScale: 1.6,
      onClick: () => alert("Animação Pulse!"),
      id: "pulse-demo",
    },

    // Linha 3 - Customizações
    {
      x: 20,
      y: 80,
      name: "Custom 1",
      color: "#06b6d4",
      size: "small",
      shape: "square",
      tooltip: "Scale customizado no hover (2.5x)",
      animationType: "pop",
      animationDelay: 2.4,
      animationDuration: 1.0,
      hoverScale: 2.5,
      tapScale: 0.5,
      onClick: () => alert("Hover Scale 2.5x!"),
      id: "custom1-demo",
    },
    {
      x: 50,
      y: 80,
      name: "Custom 2",
      color: "#84cc16",
      size: "small",
      shape: "diamond",
      tooltip: "Animação lenta (2 segundos)",
      animationType: "bounce",
      animationDelay: 2.6,
      animationDuration: 2.0,
      hoverScale: 2.0,
      onClick: () => alert("Animação lenta!"),
      id: "custom2-demo",
    },
    {
      x: 80,
      y: 80,
      name: "Disabled",
      color: "#6b7280",
      size: "small",
      shape: "circle",
      tooltip: "Sem animação - aparece imediatamente",
      disabled: true,
      onClick: () => alert("Sem animação!"),
      id: "disabled-demo",
    },
  ];

  // Elementos SVG para criar um fundo interessante
  const backgroundElements: SvgElement[] = [
    // Grid de fundo
    {
      type: "line",
      x1: 0,
      y1: 20,
      x2: 100,
      y2: 20,
      stroke: "#e5e7eb",
      strokeWidth: 1,
      strokeDasharray: "5,5",
      id: "grid-1",
    },
    {
      type: "line",
      x1: 0,
      y1: 50,
      x2: 100,
      y2: 50,
      stroke: "#e5e7eb",
      strokeWidth: 1,
      strokeDasharray: "5,5",
      id: "grid-2",
    },
    {
      type: "line",
      x1: 0,
      y1: 80,
      x2: 100,
      y2: 80,
      stroke: "#e5e7eb",
      strokeWidth: 1,
      strokeDasharray: "5,5",
      id: "grid-3",
    },
    // Círculos de fundo
    {
      type: "circle",
      cx: 10,
      cy: 10,
      r: 5,
      fill: "rgba(59, 130, 246, 0.1)",
      stroke: "rgba(59, 130, 246, 0.3)",
      strokeWidth: 1,
      id: "bg-circle-1",
    },
    {
      type: "circle",
      cx: 90,
      cy: 90,
      r: 8,
      fill: "rgba(239, 68, 68, 0.1)",
      stroke: "rgba(239, 68, 68, 0.3)",
      strokeWidth: 1,
      id: "bg-circle-2",
    },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🎭 Showcase de Animações
          </h1>
          <p className="text-gray-600 text-lg">
            Demonstração de todos os tipos de animações disponíveis para pontos
            interativos
          </p>
        </div>

        {/* Navegação */}
        <Navigation variant="purple" showShowcase={true} />

        {/* Showcase principal */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <InteractiveImageWithSvg
            src="https://via.placeholder.com/600x400/f8fafc/64748b?text=Animation+Showcase"
            alt="Showcase de animações dos pontos interativos"
            svgElements={backgroundElements}
            points={animationPoints}
            className="border border-gray-200 rounded-lg"
            enableOverflow={false}
          />
        </div>

        {/* Legenda */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              🎯 Tipos de Animação
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span>
                  <strong>Pop:</strong> Cresce do zero com spring
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                <span>
                  <strong>Slide:</strong> Desliza da diagonal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-yellow-500 transform rotate-45"></div>
                <span>
                  <strong>Fade:</strong> Aparece gradualmente
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>
                  <strong>Bounce:</strong> Quica de cima
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                <span>
                  <strong>Spin:</strong> Roda 180° ao aparecer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-purple-500 transform rotate-45"></div>
                <span>
                  <strong>Shake:</strong> Balança horizontalmente
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
                <span>
                  <strong>Pulse:</strong> Pulsa de pequeno para grande
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              ⚙️ Opções Customizáveis
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong>animationType:</strong> Tipo da animação de entrada
              </div>
              <div>
                <strong>animationDelay:</strong> Delay antes da animação
                (segundos)
              </div>
              <div>
                <strong>animationDuration:</strong> Duração da animação
                (segundos)
              </div>
              <div>
                <strong>hoverScale:</strong> Escala no hover (padrão: 1.3)
              </div>
              <div>
                <strong>tapScale:</strong> Escala no tap (padrão: 0.9)
              </div>
              <div>
                <strong>disabled:</strong> Desabilita todas as animações
              </div>
            </div>
          </div>
        </div>

        {/* Instruções */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-800 mb-2">📖 Como usar:</h4>
          <p className="text-blue-700 text-sm">
            Recarregue a página para ver as animações de entrada novamente.
            Passe o mouse sobre os pontos para ver os efeitos de hover
            customizados. Clique nos pontos para testá-los! Cada ponto demonstra
            diferentes configurações de animação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimationShowcase;
