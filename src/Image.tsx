import React from "react";
import image from "./assets/Pontos Análise USP.avif";
import InteractiveImageWithSvg from "./components/InteractiveImageWithSvg";
import { InteractivePointData } from "./components/InteractivePoint";
import { SvgElement } from "./components/SvgOverlay";

const Image: React.FC = () => {
  // Configuração dos elementos SVG
  const svgElements: SvgElement[] = [
    // Linha diagonal vermelha
    {
      type: "line",
      x1: 5,
      y1: 15,
      x2: 95,
      y2: 85,
      stroke: "red",
      strokeWidth: 2,
      id: "diagonal-line",
    },
    // Linha horizontal azul
    {
      type: "line",
      x1: 10,
      y1: 50,
      x2: 90,
      y2: 50,
      stroke: "blue",
      strokeWidth: 1.5,
      id: "horizontal-line",
    },
    // Linha curva verde
    {
      type: "curved",
      x1: 20,
      y1: 30,
      x2: 80,
      y2: 45,
      cx1: 40,
      cy1: 10,
      cx2: 60,
      cy2: 65,
      stroke: "green",
      strokeWidth: 2,
      strokeDasharray: "5,5",
      id: "curved-line",
    },
    // Círculo decorativo
    {
      type: "circle",
      cx: 25,
      cy: 75,
      r: 3,
      fill: "orange",
      stroke: "darkorange",
      strokeWidth: 1,
      id: "decorative-circle",
    },
    // Retângulo
    {
      type: "rect",
      x: 70,
      y: 10,
      width: 15,
      height: 8,
      fill: "rgba(255, 0, 255, 0.3)",
      stroke: "purple",
      strokeWidth: 1,
      rx: 2,
      id: "info-box",
    },
    // Linha pontilhada roxa para teste de limites
    {
      type: "line",
      x1: 0,
      y1: 25,
      x2: 100,
      y2: 75,
      stroke: "purple",
      strokeWidth: 1,
      strokeDasharray: "3,3",
      id: "boundary-test",
    },
  ];

  // Configuração dos pontos interativos
  const points: InteractivePointData[] = [
    {
      x: 20,
      y: 30,
      name: "Point A",
      link: "https://link-a.com",
      color: "#ef4444",
      size: "large",
      shape: "circle",
      tooltip: "Ponto A - Clique para acessar",
      id: "point-a",
    },
    {
      x: 50,
      y: 60,
      name: "Point B",
      link: "https://www.google.com",
      color: "#3b82f6",
      size: "medium",
      shape: "square",
      tooltip: "Ponto B - Informações detalhadas",
      id: "point-b",
    },
    {
      x: 80,
      y: 45,
      name: "Point C",
      onClick: () => alert("Ponto C clicado!"),
      color: "#10b981",
      size: "small",
      shape: "diamond",
      tooltip: "Ponto C - Ação personalizada",
      id: "point-c",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Imagem Interativa com SVG
      </h1>

      <div className="flex justify-center">
        <InteractiveImageWithSvg
          src={image}
          alt="Análise USP com elementos SVG"
          svgElements={svgElements}
          points={points}
          className="border border-gray-300 rounded-lg shadow-lg"
          enableOverflow={false} // Manter elementos dentro da imagem
        />
      </div>

      {/* Demonstração de uso */}
      <div className="mt-6 text-sm text-gray-600">
        <h2 className="font-semibold mb-2">Elementos demonstrados:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Linha diagonal vermelha</li>
          <li>Linha horizontal azul</li>
          <li>Linha curva verde pontilhada</li>
          <li>Círculo laranja decorativo</li>
          <li>Retângulo roxo semi-transparente</li>
          <li>3 pontos interativos com diferentes formas e ações</li>
        </ul>
      </div>
    </div>
  );
};

export default Image;
