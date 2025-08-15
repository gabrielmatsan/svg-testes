# 🎭 InteractivePoint - Sistema de Animações Escalável

O componente `InteractivePoint` agora suporta **7 tipos diferentes de animações** e múltiplas opções de customização, tornando-o altamente escalável para diferentes necessidades.

## 🎨 **Tipos de Animação Disponíveis**

### **1. Pop (Padrão)**

```tsx
animationType: "pop";
```

- ✨ **Efeito:** Cresce do zero com physics spring
- 🎯 **Uso:** Pontos importantes, call-to-action
- ⚡ **Performance:** Excelente (scale + opacity)

### **2. Slide**

```tsx
animationType: "slide";
```

- ✨ **Efeito:** Desliza da diagonal superior esquerda
- 🎯 **Uso:** Navegação, fluxos direcionais
- ⚡ **Performance:** Boa (translate + opacity)

### **3. Fade**

```tsx
animationType: "fade";
```

- ✨ **Efeito:** Aparece gradualmente (só opacity)
- 🎯 **Uso:** Pontos sutis, informações secundárias
- ⚡ **Performance:** Excelente (só opacity)

### **4. Bounce**

```tsx
animationType: "bounce";
```

- ✨ **Efeito:** Quica de cima como uma bola
- 🎯 **Uso:** Gamificação, pontos divertidos
- ⚡ **Performance:** Boa (translate + scale + spring)

### **5. Spin**

```tsx
animationType: "spin";
```

- ✨ **Efeito:** Roda 180° ao aparecer
- 🎯 **Uso:** Configurações, refresh, loading states
- ⚡ **Performance:** Boa (rotate + scale + opacity)

### **6. Shake**

```tsx
animationType: "shake";
```

- ✨ **Efeito:** Balança horizontalmente ao aparecer
- 🎯 **Uso:** Alertas, notificações, erros
- ⚡ **Performance:** Boa (translate sequence)

### **7. Pulse**

```tsx
animationType: "pulse";
```

- ✨ **Efeito:** Pulsa de pequeno para grande
- 🎯 **Uso:** Notificações, status live, heartbeat
- ⚡ **Performance:** Excelente (scale sequence)

## ⚙️ **Opções de Customização**

### **Interface Completa:**

```tsx
interface InteractivePointData {
  // Posicionamento
  x: number; // 0-100 (percentual)
  y: number; // 0-100 (percentual)

  // Conteúdo
  name: string; // Nome do ponto
  tooltip?: string; // Tooltip customizado

  // Ações
  link?: string; // URL para abrir
  onClick?: () => void; // Função customizada

  // Visual
  color?: string; // Cor do ponto
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square" | "diamond";

  // Animações (NOVO!)
  animationType?:
    | "pop"
    | "slide"
    | "fade"
    | "bounce"
    | "spin"
    | "shake"
    | "pulse";
  animationDelay?: number; // Delay em segundos
  animationDuration?: number; // Duração em segundos
  hoverScale?: number; // Scale no hover (padrão: 1.3)
  tapScale?: number; // Scale no tap (padrão: 0.9)
  disabled?: boolean; // Desabilita animações

  // Sistema
  id?: string;
  zIndex?: number;
}
```

## 🚀 **Exemplos de Uso**

### **Exemplo 1: Ponto de Navegação**

```tsx
{
  x: 75, y: 25,
  name: "Próxima Página",
  color: "#10b981",
  size: "large",
  shape: "square",
  animationType: "bounce",
  animationDelay: 1.0,
  animationDuration: 0.8,
  hoverScale: 1.4,
  onClick: () => navigate("/next"),
}
```

### **Exemplo 2: Status em Tempo Real**

```tsx
{
  x: 90, y: 10,
  name: "Sistema Online",
  color: "#22c55e",
  size: "small",
  shape: "circle",
  animationType: "pulse",
  animationDelay: 0.5,
  animationDuration: 1.0,
  hoverScale: 2.0,
  onClick: () => checkStatus(),
}
```

### **Exemplo 3: Alerta de Erro**

```tsx
{
  x: 50, y: 50,
  name: "Erro Detectado",
  color: "#ef4444",
  size: "medium",
  shape: "diamond",
  animationType: "shake",
  animationDelay: 0.2,
  animationDuration: 0.8,
  hoverScale: 1.6,
  onClick: () => showErrorDetails(),
}
```

### **Exemplo 4: Ponto Sutil**

```tsx
{
  x: 20, y: 80,
  name: "Informação Extra",
  color: "#6b7280",
  size: "small",
  shape: "circle",
  animationType: "fade",
  animationDelay: 2.0,
  animationDuration: 0.5,
  hoverScale: 1.5,
  tooltip: "Clique para mais detalhes",
}
```

### **Exemplo 5: Sem Animação**

```tsx
{
  x: 50, y: 50,
  name: "Ponto Estático",
  color: "#374151",
  disabled: true,  // Remove todas as animações
  onClick: () => doSomething(),
}
```

## 🎯 **Sistema de Delays Automático**

Se você não especificar `animationDelay`, o sistema gera automaticamente:

```tsx
const autoDelay = Math.random() * 0.5 + 0.8; // Entre 0.8-1.3s
```

Isso cria um efeito de "cascata natural" onde os pontos aparecem em momentos ligeiramente diferentes.

## ⚡ **Guias de Performance**

### **Animações Mais Performáticas:**

1. **Fade** - Só opacity
2. **Pop** - Scale + opacity
3. **Pulse** - Scale sequence

### **Animações Moderadas:**

4. **Spin** - Rotate + scale + opacity
5. **Bounce** - Translate + scale + spring
6. **Slide** - Translate + opacity

### **Animações Complexas:**

7. **Shake** - Multiple translate keyframes

### **Dicas de Otimização:**

- ✅ Use `disabled: true` para pontos que não precisam de animação
- ✅ Mantenha `animationDuration` entre 0.3-1.0s
- ✅ Evite muitos pontos com `shake` simultâneos
- ✅ Use delays escalonados para evitar sobrecarga

## 🎨 **Casos de Uso por Tipo**

| Tipo       | Melhor Para                 | Evitar Para               |
| ---------- | --------------------------- | ------------------------- |
| **Pop**    | CTAs, pontos principais     | Muitos pontos simultâneos |
| **Slide**  | Navegação, fluxos           | Pontos estáticos          |
| **Fade**   | Info secundária, background | Pontos importantes        |
| **Bounce** | Gamificação, diversão       | Interfaces sérias         |
| **Spin**   | Loading, refresh            | Pontos de navegação       |
| **Shake**  | Alertas, erros              | Uso excessivo             |
| **Pulse**  | Status live, notificações   | Pontos únicos             |

## 🔧 **Migration Guide**

### **Antes (versão anterior):**

```tsx
const points = [
  {
    x: 50,
    y: 50,
    name: "Meu Ponto",
    color: "#3b82f6",
    // Animação era fixa (pop + random delay)
  },
];
```

### **Depois (versão escalável):**

```tsx
const points = [
  {
    x: 50,
    y: 50,
    name: "Meu Ponto",
    color: "#3b82f6",
    // Agora você tem controle total!
    animationType: "bounce",
    animationDelay: 1.0,
    animationDuration: 0.8,
    hoverScale: 1.5,
    tapScale: 0.8,
  },
];
```

**Compatibilidade:** ✅ Totalmente backward compatible - pontos antigos continuam funcionando com o comportamento padrão (`pop` + random delay).

## 🎭 **Showcase Live**

Acesse `/showcase` para ver todas as animações em ação com diferentes configurações!

**Resultado:** Um sistema de pontos interativos extremamente flexível que pode se adaptar a qualquer design system ou necessidade de UX! 🚀
