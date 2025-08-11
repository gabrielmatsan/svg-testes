# Componentes de Imagem Interativa com SVG

Este conjunto de componentes permite criar imagens interativas com elementos SVG sobrepostos e pontos clicáveis.

## Componentes Disponíveis

### 1. `InteractiveImageWithSvg` (Componente Principal)

O componente principal que combina uma imagem com elementos SVG e pontos interativos.

```tsx
import InteractiveImageWithSvg from "./components/InteractiveImageWithSvg";
import { SvgElement } from "./components/SvgOverlay";
import { InteractivePointData } from "./components/InteractivePoint";

const MyComponent = () => {
  const svgElements: SvgElement[] = [
    // Seus elementos SVG aqui
  ];

  const points: InteractivePointData[] = [
    // Seus pontos interativos aqui
  ];

  return (
    <InteractiveImageWithSvg
      src="caminho/para/sua/imagem.jpg"
      alt="Descrição da imagem"
      svgElements={svgElements}
      points={points}
      enableOverflow={false}
    />
  );
};
```

#### Props do `InteractiveImageWithSvg`:

| Prop             | Tipo                     | Obrigatório | Default | Descrição                         |
| ---------------- | ------------------------ | ----------- | ------- | --------------------------------- |
| `src`            | `string`                 | ✅          | -       | Caminho da imagem                 |
| `alt`            | `string`                 | ✅          | -       | Texto alternativo da imagem       |
| `svgElements`    | `SvgElement[]`           | ❌          | `[]`    | Array de elementos SVG            |
| `points`         | `InteractivePointData[]` | ❌          | `[]`    | Array de pontos interativos       |
| `className`      | `string`                 | ❌          | `''`    | Classes CSS adicionais            |
| `svgZIndex`      | `number`                 | ❌          | `1`     | Z-index dos elementos SVG         |
| `pointsZIndex`   | `number`                 | ❌          | `2`     | Z-index dos pontos                |
| `enableOverflow` | `boolean`                | ❌          | `false` | Permitir elementos fora da imagem |

### 2. `SvgOverlay` - Elementos SVG

Componente que renderiza elementos SVG sobre a imagem.

#### Tipos de Elementos SVG Suportados:

##### Linha (`SvgLine`)

```tsx
{
  type: 'line',
  x1: 10,
  y1: 20,
  x2: 90,
  y2: 80,
  stroke: 'red',
  strokeWidth: 2,
  strokeDasharray: '5,5', // Opcional: linha pontilhada
  id: 'minha-linha'
}
```

##### Linha Curva (`SvgCurvedLine`)

```tsx
{
  type: 'curved',
  x1: 10,
  y1: 20,
  x2: 90,
  y2: 80,
  cx1: 30, // Ponto de controle 1 X
  cy1: 10, // Ponto de controle 1 Y
  cx2: 70, // Ponto de controle 2 X
  cy2: 90, // Ponto de controle 2 Y
  stroke: 'blue',
  strokeWidth: 2
}
```

##### Círculo (`SvgCircle`)

```tsx
{
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 10,
  fill: 'rgba(255, 0, 0, 0.5)',
  stroke: 'red',
  strokeWidth: 1
}
```

##### Retângulo (`SvgRect`)

```tsx
{
  type: 'rect',
  x: 20,
  y: 30,
  width: 40,
  height: 20,
  fill: 'lightblue',
  stroke: 'navy',
  strokeWidth: 2,
  rx: 5 // Bordas arredondadas
}
```

##### Caminho Personalizado (`SvgPath`)

```tsx
{
  type: 'path',
  d: 'M 10 10 C 20 20, 40 20, 50 10',
  fill: 'none',
  stroke: 'green',
  strokeWidth: 2
}
```

### 3. `InteractivePoint` - Pontos Interativos

Pontos clicáveis com diferentes formas, tamanhos e ações.

```tsx
{
  x: 50,
  y: 50,
  name: 'Meu Ponto',
  link: 'https://exemplo.com', // OU
  onClick: () => alert('Clicado!'), // Ação personalizada
  color: '#3b82f6',
  size: 'medium', // 'small' | 'medium' | 'large'
  shape: 'circle', // 'circle' | 'square' | 'diamond'
  tooltip: 'Texto do tooltip',
  id: 'ponto-1'
}
```

#### Props do `InteractivePoint`:

| Prop      | Tipo                                | Obrigatório | Default     | Descrição                    |
| --------- | ----------------------------------- | ----------- | ----------- | ---------------------------- |
| `x`       | `number`                            | ✅          | -           | Posição X (0-100%)           |
| `y`       | `number`                            | ✅          | -           | Posição Y (0-100%)           |
| `name`    | `string`                            | ✅          | -           | Nome do ponto                |
| `link`    | `string`                            | ❌          | -           | URL para abrir ao clicar     |
| `onClick` | `() => void`                        | ❌          | -           | Função customizada ao clicar |
| `color`   | `string`                            | ❌          | `'#3b82f6'` | Cor do ponto                 |
| `size`    | `'small' \| 'medium' \| 'large'`    | ❌          | `'medium'`  | Tamanho do ponto             |
| `shape`   | `'circle' \| 'square' \| 'diamond'` | ❌          | `'circle'`  | Forma do ponto               |
| `tooltip` | `string`                            | ❌          | `name`      | Texto do tooltip             |
| `id`      | `string`                            | ❌          | -           | ID único                     |

## Sistema de Coordenadas

Todos os elementos usam um sistema de coordenadas **percentual**:

- `x: 0` = borda esquerda da imagem
- `x: 100` = borda direita da imagem
- `y: 0` = borda superior da imagem
- `y: 100` = borda inferior da imagem

## Exemplos Práticos

### Exemplo 1: Linha Simples

```tsx
const svgElements = [
  {
    type: "line",
    x1: 0,
    y1: 0,
    x2: 100,
    y2: 100,
    stroke: "red",
    strokeWidth: 3,
  },
];

<InteractiveImageWithSvg
  src="imagem.jpg"
  alt="Linha diagonal"
  svgElements={svgElements}
/>;
```

### Exemplo 2: Mapa com Pontos

```tsx
const points = [
  {
    x: 30,
    y: 40,
    name: "São Paulo",
    color: "#ef4444",
    size: "large",
    tooltip: "Maior cidade do Brasil",
  },
  {
    x: 60,
    y: 50,
    name: "Rio de Janeiro",
    color: "#3b82f6",
    size: "medium",
    link: "https://pt.wikipedia.org/wiki/Rio_de_Janeiro",
  },
];

<InteractiveImageWithSvg
  src="mapa-brasil.jpg"
  alt="Mapa do Brasil"
  points={points}
/>;
```

### Exemplo 3: Diagrama Complexo

```tsx
const svgElements = [
  // Caixa de processo
  {
    type: "rect",
    x: 20,
    y: 20,
    width: 25,
    height: 15,
    fill: "lightblue",
    stroke: "navy",
    strokeWidth: 2,
    rx: 3,
  },
  // Seta conectora
  {
    type: "line",
    x1: 45,
    y1: 27.5,
    x2: 55,
    y2: 27.5,
    stroke: "black",
    strokeWidth: 2,
  },
  // Círculo final
  {
    type: "circle",
    cx: 70,
    cy: 27.5,
    r: 8,
    fill: "lightgreen",
    stroke: "darkgreen",
    strokeWidth: 2,
  },
];

const points = [
  {
    x: 32.5,
    y: 27.5,
    name: "Processo",
    color: "#1976d2",
    shape: "square",
  },
  {
    x: 70,
    y: 27.5,
    name: "Resultado",
    color: "#388e3c",
    shape: "circle",
  },
];

<InteractiveImageWithSvg
  src="fluxograma.jpg"
  alt="Fluxograma de processo"
  svgElements={svgElements}
  points={points}
/>;
```

## Características

- ✅ **Responsivo**: Adapta-se a qualquer tamanho de imagem
- ✅ **TypeScript**: Totalmente tipado
- ✅ **Tailwind CSS**: Estilizado com classes utilitárias
- ✅ **Overflow Control**: Controle sobre elementos que saem da imagem
- ✅ **Z-Index Configurável**: Controle de camadas
- ✅ **Acessibilidade**: Tooltips e textos alternativos
- ✅ **Performance**: Renderização otimizada com SVG

## Limitações e Bounds

Por padrão, todos os elementos SVG e pontos são limitados aos bounds da imagem usando:

- `overflow: hidden` no container
- `clipPath` no SVG
- Sistema de coordenadas percentual (0-100)

Para permitir elementos fora da imagem, use `enableOverflow={true}`.
