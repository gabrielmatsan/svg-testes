import React from "react";
import image from "../assets/Pontos Análise USP.avif";
import Point from "./Point";

// Define the fixed points with name and link
const fixedPoints = [
  { x: 20, y: 30, name: "Point A", link: "https://link-a.com" },
  { x: 50, y: 60, name: "Point B", link: "https://link-b.com" },
  { x: 80, y: 45, name: "Point C", link: "https://link-c.com" },
];

const InteractiveImage: React.FC = () => {
  return (
    <div className="relative inline-block">
      <img src={image} alt="Análise USP" className="block max-w-full" />

      {/* Container absoluto que limita tanto SVG quanto pontos */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* SVG overlay with a line - limitado exatamente aos bounds da imagem */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 1 }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Definindo um clipPath para garantir limites exatos */}
          <defs>
            <clipPath id="imageClip">
              <rect x="0" y="0" width="100" height="100" />
            </clipPath>
          </defs>

          <g clipPath="url(#imageClip)">
            {/* Linha diagonal vermelha sobreposta */}
            <line
              x1="5"
              y1="15"
              x2="95"
              y2="85"
              stroke="red"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />

            {/* Linha horizontal azul */}
            <line
              x1="10"
              y1="50"
              x2="90"
              y2="50"
              stroke="blue"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Linha conectando os pontos A e C */}
            <line
              x1="20"
              y1="30"
              x2="80"
              y2="45"
              stroke="green"
              strokeWidth="2"
              strokeDasharray="5,5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Linha que testa os limites - vai de uma borda à outra */}
            <line
              x1="0"
              y1="25"
              x2="100"
              y2="75"
              stroke="purple"
              strokeWidth="1"
              strokeDasharray="3,3"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>

        {/* Container para os pontos com overflow hidden e pointer-events habilitados */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-auto"
          style={{ zIndex: 2 }}
        >
          {fixedPoints.map((point, index) => (
            <Point
              key={index}
              x={point.x}
              y={point.y}
              name={point.name}
              link={point.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveImage;
