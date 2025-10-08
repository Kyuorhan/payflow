import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";

// 🎨 Hook para acessar o tema atual de forma fácil
export function useTheme() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? ("light" as keyof typeof Colors)];

  return {
    colors: theme,
    colorScheme,
    isDark: colorScheme === "dark",
    isLight: colorScheme === "light",
  };
}

// 🎯 Hook para cores específicas (mais direto)
export function useThemeColors() {
  const { colors } = useTheme();
  return colors;
}

// 🌈 Hook para acessar cores por categoria
export function useThemeColor() {
  const colors = useThemeColors();

  return {
    // Cores principais
    primary: colors.primary,
    secondary: colors.secondary,

    // Texto
    text: colors.text,
    heading: colors.heading,
    body: colors.body,

    // Backgrounds
    background: colors.background,
    surface: colors.shape,

    // Bordas e separadores
    border: colors.stroke,
    divider: colors.stroke,

    // Estados
    success: colors.success,
    error: colors.delete,
    warning: colors.warning,

    // Interface
    tabActive: colors.tabIconSelected,
    tabInactive: colors.tabIconDefault,

    // Utilitárias
    transparent: colors.transparent,
    overlay: colors.black26,
  };
}
