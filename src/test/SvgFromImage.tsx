import type { ChangeEvent, MouseEvent } from "react";
import React, { useRef, useState } from "react";

// Interfaces TypeScript
interface ImageDimensions {
  width: number;
  height: number;
}

interface Point {
  id: number;
  name: string;
  x: number;
  y: number;
  displayX: number;
  displayY: number;
  color: string;
  link: string;
}

interface PointForCode {
  id: number;
  name: string;
  x: number;
  y: number;
  color: string;
  link: string;
}

const SVGFromImageGuideTS: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({
    width: 0,
    height: 0,
  });
  const [points, setPoints] = useState<Point[]>([]);
  const [showCode, setShowCode] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carregar imagem do arquivo
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result as string;
        if (result) {
          const img = new Image();
          img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height });
            setImageUrl(result);
            setPoints([]);
          };
          img.src = result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Carregar imagem por URL
  const handleUrlLoad = (): void => {
    if (imageUrl && imageUrl.startsWith("http")) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        alert("❌ Erro ao carregar imagem. Verifique a URL.");
      };
      img.src = imageUrl;
    }
  };

  // Adicionar ponto ao clicar na imagem
  const handleImageClick = (e: MouseEvent<HTMLImageElement>): void => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Converter para coordenadas proporcionais à imagem original
    const scaleX = imageDimensions.width / rect.width;
    const scaleY = imageDimensions.height / rect.height;

    const svgX = Math.round(x * scaleX);
    const svgY = Math.round(y * scaleY);

    const pointName = prompt("Nome do ponto:") || `Ponto ${points.length + 1}`;
    const pointColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const newPoint: Point = {
      id: Date.now(),
      name: pointName,
      x: svgX,
      y: svgY,
      displayX: x,
      displayY: y,
      color: pointColor,
      link: prompt("Link (opcional):") || "",
    };

    setPoints([...points, newPoint]);
  };

  // Remover ponto
  const removePoint = (id: number): void => {
    setPoints(points.filter((p) => p.id !== id));
  };

  // Gerar código React TypeScript
  const generateReactCode = (): string => {
    const pointsForCode: PointForCode[] = points.map((p) => ({
      id: p.id,
      name: p.name,
      x: p.x,
      y: p.y,
      color: p.color,
      link: p.link,
    }));

    return `import React, { useState } from 'react';

// Interfaces TypeScript
interface Point {
  id: number;
  name: string;
  x: number;
  y: number;
  color: string;
  link: string;
}

const InteractiveImage: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const points: Point[] = ${JSON.stringify(pointsForCode, null, 2)};

  const handlePointClick = (point: Point): void => {
    setActivePoint(point.id);
    if (point.link) {
      window.open(point.link, '_blank');
    }
  };

  return (
    <div className="relative inline-block">
      <img 
        src="${
          imageUrl.startsWith("data:") ? "SUA_IMAGEM_AQUI.jpg" : imageUrl
        }" 
        alt="Imagem Interativa"
        className="max-w-full h-auto"
      />
      
      <svg 
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 ${imageDimensions.width} ${imageDimensions.height}"
        preserveAspectRatio="xMidYMid meet"
      >
        {points.map((point: Point) => (
          <g key={point.id}>
            <circle
              cx={point.x}
              cy={point.y}
              r={activePoint === point.id ? 8 : 6}
              fill={point.color}
              stroke="white"
              strokeWidth="2"
              className="cursor-pointer transition-all duration-200 hover:scale-125"
              onClick={() => handlePointClick(point)}
            />
            
            {activePoint === point.id && (
              <text
                x={point.x + 15}
                y={point.y - 10}
                fill={point.color}
                fontSize="14"
                fontWeight="bold"
              >
                {point.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default InteractiveImage;`;
  };

  const copyCode = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(generateReactCode());
      alert("✅ Código copiado!");
    } catch (err) {
      console.error("Erro ao copiar:", err);
      alert("❌ Erro ao copiar código");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🎨 Criar SVG da Sua Imagem + React TypeScript
        </h1>

        {/* Etapa 1: Carregar Imagem */}
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            📷 Etapa 1: Carregar Imagem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Arquivo Local:
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL da Imagem:
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImageUrl(e.target.value)
                  }
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={handleUrlLoad}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Carregar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Etapa 2: Marcar Pontos */}
        {imageUrl && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              🎯 Etapa 2: Marcar Pontos (Clique na Imagem)
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="relative inline-block border-2 border-gray-300 rounded-lg overflow-hidden">
                  <img
                    ref={imageRef}
                    src={imageUrl}
                    alt="Imagem para mapear"
                    className="max-w-full h-auto cursor-crosshair"
                    onClick={handleImageClick}
                    style={{ maxHeight: "500px" }}
                  />

                  {/* Overlay com pontos */}
                  <svg
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                    viewBox={`0 0 ${imageDimensions.width} ${imageDimensions.height}`}
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {points.map((point: Point) => (
                      <g key={point.id}>
                        <circle
                          cx={point.x}
                          cy={point.y}
                          r="8"
                          fill={point.color}
                          stroke="white"
                          strokeWidth="3"
                          style={{
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                          }}
                        />
                        <text
                          x={point.x}
                          y={point.y + 25}
                          fill={point.color}
                          fontSize="12"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {point.name}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  💡 Dimensões: {imageDimensions.width} ×{" "}
                  {imageDimensions.height}px
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-800 mb-3">
                  📍 Pontos Marcados:
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {points.map((point: Point) => (
                    <div
                      key={point.id}
                      className="flex items-center justify-between p-2 bg-white border border-gray-200 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-4 h-4 rounded-full border-2 border-white shadow"
                          style={{ backgroundColor: point.color }}
                        ></div>
                        <div>
                          <p className="text-sm font-medium">{point.name}</p>
                          <p className="text-xs text-gray-500">
                            x: {point.x}, y: {point.y}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => removePoint(point.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>

                {points.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    Clique na imagem para adicionar pontos
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Etapa 3: Gerar Código */}
        {points.length > 0 && (
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <h2 className="text-xl font-bold text-purple-800 mb-4">
              💻 Etapa 3: Código React TypeScript Gerado
            </h2>

            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setShowCode(!showCode)}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                {showCode ? "🙈 Ocultar" : "👁️ Ver"} Código
              </button>

              <button
                onClick={copyCode}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                📋 Copiar Código
              </button>
            </div>

            {showCode && (
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm whitespace-pre-wrap">
                  {generateReactCode()}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* Guia de Instalação TypeScript */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-4">
            🚀 Como Usar no Seu Projeto React + TypeScript
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                1. Salve o código gerado em um arquivo:
              </h3>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                src/components/InteractiveImage.tsx
              </code>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                2. Importe no seu componente pai:
              </h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {`import InteractiveImage from './components/InteractiveImage';

const App: React.FC = () => {
  return (
    <div>
      <InteractiveImage />
    </div>
  );
};

export default App;`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                3. Configure o TypeScript (tsconfig.json):
              </h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {`{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                4. Instale os tipos do React (se necessário):
              </h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {`npm install --save-dev @types/react @types/react-dom
# ou
yarn add -D @types/react @types/react-dom`}
              </pre>
            </div>
          </div>
        </div>

        {/* Exemplos de uso avançado TypeScript */}
        <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">
            ⚡ Exemplos Avançados TypeScript
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                Props com TypeScript:
              </h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {`interface InteractiveImageProps {
  imageUrl: string;
  onPointClick?: (point: Point) => void;
  readonly?: boolean;
  theme?: 'light' | 'dark';
}

const InteractiveImage: React.FC<InteractiveImageProps> = ({
  imageUrl,
  onPointClick,
  readonly = false,
  theme = 'light'
}) => {
  // componente aqui
};`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800">
                Hook customizado TypeScript:
              </h3>
              <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
                {`const useImagePoints = (initialPoints: Point[] = []) => {
  const [points, setPoints] = useState<Point[]>(initialPoints);
  
  const addPoint = useCallback((point: Omit<Point, 'id'>) => {
    const newPoint: Point = { ...point, id: Date.now() };
    setPoints(prev => [...prev, newPoint]);
  }, []);
  
  const removePoint = useCallback((id: number) => {
    setPoints(prev => prev.filter(p => p.id !== id));
  }, []);
  
  return { points, addPoint, removePoint };
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SVGFromImageGuideTS;
