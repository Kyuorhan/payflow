// 🎨 Sistema de Cores PayFlow - Light & Dark Theme
export default {
  light: {
    // Cores principais
    primary: "#FF941A", // Laranja principal
    secondary: "#FFC380", // Laranja claro

    // Cores de texto
    heading: "#585666", // Títulos
    body: "#706E7A", // Texto corpo
    text: "#585666", // Texto geral

    // Cores de interface
    background: "#FFFFFF", // Fundo principal
    shape: "#FAFAFC", // Fundo de cards/shapes
    stroke: "#E3E3E6", // Bordas
    grey: "#585666", // Cinza neutro

    // Cores de ação
    delete: "#E83F5B", // Vermelho para deletar
    success: "#12A454", // Verde para sucesso
    warning: "#FF941A", // Laranja para avisos

    // Cores do tema (para compatibilidade com Expo Router)
    tint: "#FF941A", // Cor de destaque
    tabIconDefault: "#706E7A", // Ícones não selecionados
    tabIconSelected: "#FF941A", // Ícones selecionados

    // Utilitárias
    black: "#000000",
    black26: "#42000000", // Preto com 26% opacidade
    transparent: "#00000000",
  },

  dark: {
    // Cores principais (ajustadas para dark)
    primary: "#FF941A", // Mantém laranja mas pode ser mais suave
    secondary: "#FFB366", // Laranja mais claro para contraste

    // Cores de texto (invertidas)
    heading: "#FFFFFF", // Títulos em branco
    body: "#C4C4CC", // Texto corpo mais claro
    text: "#FFFFFF", // Texto geral branco

    // Cores de interface (dark)
    background: "#121214", // Fundo escuro principal
    shape: "#202024", // Fundo de cards mais claro que background
    stroke: "#323238", // Bordas mais claras
    grey: "#8D8D99", // Cinza mais claro para contraste

    // Cores de ação (ajustadas para dark)
    delete: "#F75A68", // Vermelho mais claro
    success: "#1BAA63", // Verde mais claro
    warning: "#FF941A", // Mantém laranja

    // Cores do tema (para dark mode)
    tint: "#FF941A", // Mantém laranja de destaque
    tabIconDefault: "#8D8D99", // Ícones não selecionados
    tabIconSelected: "#FF941A", // Ícones selecionados

    // Utilitárias
    black: "#FFFFFF", // Invertido para dark
    black26: "#FFFFFF42", // Branco com 26% opacidade
    transparent: "#00000000",
  },
};
