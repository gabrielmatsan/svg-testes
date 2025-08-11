import React from "react";
import InteractivePoint, { InteractivePointData } from "./InteractivePoint";
import SvgOverlay, { SvgElement } from "./SvgOverlay";

interface InteractiveImageWithSvgProps {
  src: string;
  alt: string;
  svgElements?: SvgElement[];
  points?: InteractivePointData[];
  className?: string;
  svgZIndex?: number;
  pointsZIndex?: number;
  enableOverflow?: boolean; // Permitir elementos fora da imagem
}

const InteractiveImageWithSvg: React.FC<InteractiveImageWithSvgProps> = ({
  src,
  alt,
  svgElements = [],
  points = [],
  className = "",
  svgZIndex = 1,
  pointsZIndex = 2,
  enableOverflow = false,
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Imagem base */}
      <img src={src} alt={alt} className="block max-w-full" />

      {/* Container overlay com controle de overflow */}
      <div
        className={`absolute top-0 left-0 w-full h-full pointer-events-none ${
          enableOverflow ? "" : "overflow-hidden"
        }`}
      >
        {/* SVG Overlay */}
        {svgElements.length > 0 && (
          <SvgOverlay elements={svgElements} zIndex={svgZIndex} />
        )}

        {/* Container para pontos interativos */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-auto"
          style={{ zIndex: pointsZIndex }}
        >
          {points.map((point, index) => (
            <InteractivePoint
              key={point.id || `point-${index}`}
              {...point}
              zIndex={pointsZIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveImageWithSvg;
