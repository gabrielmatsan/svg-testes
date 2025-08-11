import React from "react";

export interface SvgLine {
  type: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  id?: string;
}

export interface SvgCurvedLine {
  type: "curved";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cx1?: number; // Control point 1 x
  cy1?: number; // Control point 1 y
  cx2?: number; // Control point 2 x
  cy2?: number; // Control point 2 y
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  id?: string;
}

export interface SvgCircle {
  type: "circle";
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  id?: string;
}

export interface SvgRect {
  type: "rect";
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  rx?: number; // Border radius
  id?: string;
}

export interface SvgPath {
  type: "path";
  d: string; // SVG path data
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  id?: string;
}

export type SvgElement =
  | SvgLine
  | SvgCurvedLine
  | SvgCircle
  | SvgRect
  | SvgPath;

interface SvgOverlayProps {
  elements: SvgElement[];
  zIndex?: number;
}

const SvgOverlay: React.FC<SvgOverlayProps> = ({ elements, zIndex = 1 }) => {
  const renderElement = (element: SvgElement) => {
    const commonProps = {
      key: element.id || `${element.type}-${Math.random()}`,
      vectorEffect: "non-scaling-stroke" as const,
    };

    switch (element.type) {
      case "line":
        return (
          <line
            {...commonProps}
            x1={element.x1}
            y1={element.y1}
            x2={element.x2}
            y2={element.y2}
            stroke={element.stroke || "black"}
            strokeWidth={element.strokeWidth || 1}
            strokeDasharray={element.strokeDasharray}
          />
        );

      case "curved":
        const {
          x1,
          y1,
          x2,
          y2,
          cx1 = x1 + (x2 - x1) / 3,
          cy1 = y1,
          cx2 = x1 + (2 * (x2 - x1)) / 3,
          cy2 = y2,
        } = element;
        const pathData = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
        return (
          <path
            {...commonProps}
            d={pathData}
            fill="none"
            stroke={element.stroke || "black"}
            strokeWidth={element.strokeWidth || 1}
            strokeDasharray={element.strokeDasharray}
          />
        );

      case "circle":
        return (
          <circle
            {...commonProps}
            cx={element.cx}
            cy={element.cy}
            r={element.r}
            fill={element.fill || "transparent"}
            stroke={element.stroke}
            strokeWidth={element.strokeWidth}
          />
        );

      case "rect":
        return (
          <rect
            {...commonProps}
            x={element.x}
            y={element.y}
            width={element.width}
            height={element.height}
            fill={element.fill || "transparent"}
            stroke={element.stroke}
            strokeWidth={element.strokeWidth}
            rx={element.rx}
          />
        );

      case "path":
        return (
          <path
            {...commonProps}
            d={element.d}
            fill={element.fill || "none"}
            stroke={element.stroke || "black"}
            strokeWidth={element.strokeWidth || 1}
            strokeDasharray={element.strokeDasharray}
          />
        );

      default:
        return null;
    }
  };

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="imageClip">
          <rect x="0" y="0" width="100" height="100" />
        </clipPath>
      </defs>

      <g clipPath="url(#imageClip)">{elements.map(renderElement)}</g>
    </svg>
  );
};

export default SvgOverlay;
