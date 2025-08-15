# 🎭 Sistema de Animações

Este documento descreve todas as animações implementadas no projeto usando **Framer Motion**.

## 🎯 **Tipos de Animações Implementadas**

### **1. Transições de Página (`PageTransition`)**

```tsx
// Animação principal da página
initial={{ opacity: 0, y: 20, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: -20, scale: 0.95 }}
```

**Efeitos:**

- ✨ **Fade in/out** - Opacidade 0→1→0
- ⬆️ **Slide vertical** - Entra de baixo (y: 20→0) e sai para cima (y: 0→-20)
- 🔍 **Scale suave** - Pequeno zoom in/out (0.95→1→0.95)
- ⏱️ **Duração:** 0.5s com easing cubic-bezier

### **2. Layout Animado (`AnimatedLayout`)**

```tsx
// Container com stagger
containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    delayChildren: 0.2,
    staggerChildren: 0.1, // Delay escalonado entre filhos
  },
};

// Elementos filhos
itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
```

**Efeitos:**

- 📋 **Stagger animation** - Elementos aparecem sequencialmente
- ⬆️ **Slide in** - Cada elemento desliza de baixo para cima
- ⏰ **Delay escalonado** - 0.1s entre cada elemento
- 🌸 **Spring animation** - Física realística com damping

### **3. Navegação Animada (`Navigation`)**

```tsx
// Container da navegação
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
whileHover={{ y: -2 }}

// Botões
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Efeitos:**

- ⬇️ **Slide in** - Entra deslizando de cima
- ✋ **Hover lift** - Container sobe ligeiramente no hover
- 🔍 **Button scale** - Botões crescem 5% no hover
- 👆 **Tap feedback** - Reduzem 5% ao clicar
- ⚡ **Spring transition** - Animações elásticas

### **4. Pontos Interativos (`InteractivePoint`)**

```tsx
// Entrada dos pontos
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{
  delay: Math.random() * 0.5 + 0.8, // 0.8-1.3s
  type: "spring"
}}

// Interações
whileHover={{ scale: 1.3 }}
whileTap={{ scale: 0.9 }}
```

**Efeitos:**

- 💥 **Pop in** - Aparecem crescendo do zero
- 🎲 **Random delay** - Cada ponto tem delay único (0.8-1.3s)
- 🔍 **Hover scale** - Crescem 30% no hover
- 💫 **Tap shrink** - Diminuem 10% ao clicar
- 🌟 **Shadow animation** - Sombra dinâmica no hover

### **5. Elementos de Conteúdo**

```tsx
// Títulos
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.6 }}

// Imagens
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
whileHover={{ scale: 1.02 }}

// Cards
whileHover={{ y: -5 }}
```

**Efeitos:**

- 📝 **Títulos** - Deslizam de cima com fade
- 🖼️ **Imagens** - Zoom in suave + hover scale
- 📋 **Cards** - Levitam 5px no hover
- ↔️ **Colunas** - Deslizam das laterais

### **6. Tooltips Animados**

```tsx
initial={{ opacity: 0, y: 10, scale: 0.8 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
exit={{ opacity: 0, y: 10, scale: 0.8 }}
```

**Efeitos:**

- 💬 **Smooth popup** - Aparecem com scale + slide
- ⚡ **Fast transition** - 0.2s de duração
- 🎯 **Precise positioning** - Centralizados perfeitamente

## 🎬 **Sequência de Animação Completa**

### **Timeline da Página:**

```
0.0s  ├─ PageTransition inicia (página fade in)
0.2s  ├─ Título desliza de cima
0.4s  ├─ Subtítulo fade in
0.5s  ├─ Navegação desliza de cima
0.6s  ├─ Imagem zoom in + spring
0.8s  ├─ Card de instruções slide up
0.8s+ ├─ Pontos aparecem (delays randômicos)
1.0s  ├─ Coluna esquerda slide in
1.2s  └─ Coluna direita slide in
```

## ⚙️ **Configurações de Performance**

### **Easings Utilizados:**

```tsx
// Transições de página
ease: [0.4, 0.0, 0.2, 1] // cubic-bezier suave

// Springs
stiffness: 200,
damping: 12

// Hovers rápidos
stiffness: 400,
damping: 17
```

### **Otimizações:**

- ✅ **GPU acceleration** - Transform e opacity apenas
- ✅ **AnimatePresence** - Controle preciso de mount/unmount
- ✅ **mode="wait"** - Uma página por vez
- ✅ **Delays escalonados** - Evita sobrecarga
- ✅ **Springs limitados** - Performance balanceada

## 🎨 **Diferenças por Página**

### **Página 1 (Azul):**

- Tema: Análise e organização
- Timing: Mais conservador
- Efeitos: Suaves e profissionais

### **Página 2 (Vermelha):**

- Tema: Processamento e ação
- Timing: Mais dinâmico
- Efeitos: Energéticos e responsivos

## 🚀 **Como Usar**

### **Para novas páginas:**

```tsx
import PageTransition from "../components/PageTransition";
import AnimatedLayout from "../components/AnimatedLayout";

const MinhaNovaPage = () => (
  <PageTransition>
    <AnimatedLayout>{/* Seu conteúdo aqui */}</AnimatedLayout>
  </PageTransition>
);
```

### **Para elementos customizados:**

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
>
  Meu elemento
</motion.div>;
```

## 🎯 **Princípios de Design**

1. **Hierarchy** - Elementos importantes aparecem primeiro
2. **Flow** - Animações seguem a leitura natural
3. **Feedback** - Interações têm resposta visual
4. **Performance** - 60fps em dispositivos modernos
5. **Accessibility** - Respeitam preferências de movimento

**Resultado:** Uma experiência fluida e profissional que guia o usuário através da interface de forma natural e envolvente! ✨
