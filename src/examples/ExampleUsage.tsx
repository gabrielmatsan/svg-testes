import React from "react";
import InteractiveImageWithSvg from "../components/InteractiveImageWithSvg";
import { InteractivePointData } from "../components/InteractivePoint";
import { SvgElement } from "../components/SvgOverlay";

// Exemplo 1: Imagem simples com apenas linhas
export const SimpleLineExample = () => {
  const svgElements: SvgElement[] = [
    {
      type: "line",
      x1: 10,
      y1: 10,
      x2: 90,
      y2: 90,
      stroke: "red",
      strokeWidth: 3,
    },
    {
      type: "line",
      x1: 90,
      y1: 10,
      x2: 10,
      y2: 90,
      stroke: "blue",
      strokeWidth: 3,
    },
  ];

  return (
    <InteractiveImageWithSvg
      src="https://via.placeholder.com/400x300"
      alt="Exemplo com linhas cruzadas"
      svgElements={svgElements}
    />
  );
};

// Exemplo 2: Imagem com formas geométricas
export const GeometricShapesExample = () => {
  const svgElements: SvgElement[] = [
    {
      type: "circle",
      cx: 25,
      cy: 25,
      r: 10,
      fill: "rgba(255, 0, 0, 0.5)",
      stroke: "red",
      strokeWidth: 2,
    },
    {
      type: "rect",
      x: 60,
      y: 15,
      width: 30,
      height: 20,
      fill: "rgba(0, 255, 0, 0.5)",
      stroke: "green",
      strokeWidth: 2,
      rx: 5,
    },
    {
      type: "path",
      d: "M 10 80 Q 50 60 90 80 T 90 90",
      stroke: "purple",
      strokeWidth: 3,
      fill: "none",
    },
  ];

  return (
    <InteractiveImageWithSvg
      src="https://via.placeholder.com/400x300"
      alt="Exemplo com formas geométricas"
      svgElements={svgElements}
    />
  );
};

// Exemplo 3: Mapa de pontos interativos
export const InteractiveMapExample = () => {
  const points: InteractivePointData[] = [
    {
      x: 30,
      y: 20,
      name: "São Paulo",
      color: "#ef4444",
      size: "large",
      tooltip: "São Paulo - 12M habitantes",
      onClick: () => alert("Informações sobre São Paulo"),
    },
    {
      x: 60,
      y: 40,
      name: "Rio de Janeiro",
      color: "#3b82f6",
      size: "medium",
      tooltip: "Rio de Janeiro - 6M habitantes",
      link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
    },
    {
      x: 20,
      y: 70,
      name: "Salvador",
      color: "#10b981",
      size: "small",
      shape: "square",
      tooltip: "Salvador - 3M habitantes",
    },
  ];

  const connections: SvgElement[] = [
    {
      type: "line",
      x1: 30,
      y1: 20,
      x2: 60,
      y2: 40,
      stroke: "#666",
      strokeWidth: 2,
      strokeDasharray: "5,5",
    },
    {
      type: "curved",
      x1: 30,
      y1: 20,
      x2: 20,
      y2: 70,
      cx1: 10,
      cy1: 30,
      cx2: 15,
      cy2: 60,
      stroke: "#666",
      strokeWidth: 2,
    },
  ];

  return (
    <InteractiveImageWithSvg
      src="https://via.placeholder.com/500x400"
      alt="Mapa interativo do Brasil"
      svgElements={connections}
      points={points}
    />
  );
};

// Exemplo 4: Fluxograma
export const FlowchartExample = () => {
  const flowElements: SvgElement[] = [
    // Caixas do fluxograma
    {
      type: "rect",
      x: 10,
      y: 10,
      width: 20,
      height: 15,
      fill: "#e3f2fd",
      stroke: "#1976d2",
      strokeWidth: 2,
      rx: 3,
    },
    {
      type: "rect",
      x: 40,
      y: 40,
      width: 20,
      height: 15,
      fill: "#f3e5f5",
      stroke: "#7b1fa2",
      strokeWidth: 2,
      rx: 3,
    },
    {
      type: "rect",
      x: 70,
      y: 10,
      width: 20,
      height: 15,
      fill: "#e8f5e8",
      stroke: "#388e3c",
      strokeWidth: 2,
      rx: 3,
    },
    // Setas conectoras
    {
      type: "line",
      x1: 30,
      y1: 17.5,
      x2: 40,
      y2: 47.5,
      stroke: "#333",
      strokeWidth: 2,
    },
    {
      type: "line",
      x1: 60,
      y1: 47.5,
      x2: 70,
      y2: 17.5,
      stroke: "#333",
      strokeWidth: 2,
    },
  ];

  const flowPoints: InteractivePointData[] = [
    {
      x: 20,
      y: 17.5,
      name: "Início",
      color: "#1976d2",
      size: "small",
      tooltip: "Processo inicial",
    },
    {
      x: 50,
      y: 47.5,
      name: "Processamento",
      color: "#7b1fa2",
      size: "small",
      tooltip: "Etapa de processamento",
    },
    {
      x: 80,
      y: 17.5,
      name: "Fim",
      color: "#388e3c",
      size: "small",
      tooltip: "Processo finalizado",
    },
  ];

  return (
    <InteractiveImageWithSvg
      src="https://via.placeholder.com/600x400"
      alt="Fluxograma interativo"
      svgElements={flowElements}
      points={flowPoints}
    />
  );
};

// Componente principal com todos os exemplos
const ExampleUsage: React.FC = () => {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Exemplos de Uso dos Componentes
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. Linhas Simples</h2>
        <SimpleLineExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Formas Geométricas</h2>
        <GeometricShapesExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">3. Mapa Interativo</h2>
        <InteractiveMapExample />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">4. Fluxograma</h2>
        <FlowchartExample />
      </section>
    </div>
  );
};

export default ExampleUsage;
