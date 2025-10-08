import { useThemeColors } from "@/src/hooks/useTheme";

// 🎯 Helper para gerar estilos com cores temáticas
export function createThemedStyles<T extends Record<string, any>>(
  styleFactory: (colors: ReturnType<typeof useThemeColors>) => T
) {
  return function useThemedStyles() {
    const colors = useThemeColors();
    return styleFactory(colors);
  };
}

// 📱 Cores específicas para componentes comuns
export function useComponentColors() {
  const colors = useThemeColors();

  return {
    // Card component
    card: {
      background: colors.shape,
      border: colors.stroke,
      shadow: colors.grey,
    },

    // Button variants
    button: {
      primary: {
        background: colors.primary,
        text: "#FFFFFF",
      },
      secondary: {
        background: colors.secondary,
        text: colors.heading,
      },
      outline: {
        background: "transparent",
        border: colors.primary,
        text: colors.primary,
      },
      danger: {
        background: colors.delete,
        text: "#FFFFFF",
      },
    },

    // Input component
    input: {
      background: colors.shape,
      border: colors.stroke,
      borderFocus: colors.primary,
      text: colors.heading,
      placeholder: colors.grey,
    },

    // List component
    list: {
      background: colors.background,
      separator: colors.stroke,
      itemBackground: colors.shape,
    },

    // Tab bar (para referência)
    tabBar: {
      background: colors.shape,
      border: colors.stroke,
      activeIcon: colors.primary,
      inactiveIcon: colors.grey,
      activeText: colors.primary,
      inactiveText: colors.grey,
    },
  };
}
