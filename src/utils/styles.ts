import { useThemeColors } from "@/src/hooks";
import { StyleSheet } from "react-native";

// 🎨 Utility para criar estilos temáticos facilmente
export function createThemedStyleSheet<T extends StyleSheet.NamedStyles<T>>(
  styleFactory: (colors: ReturnType<typeof useThemeColors>) => T
) {
  return function useStyles() {
    const colors = useThemeColors();
    return StyleSheet.create(styleFactory(colors));
  };
}

// 📝 Nota: As outras funções foram removidas por enquanto
// Elas dependiam de propriedades customizadas que não existem mais
// Pode recriar conforme necessário usando apenas as propriedades base do useThemeColors()

// 🎯 Exemplo de como criar estilos básicos com useThemeColors
export function useBasicStyles() {
  const colors = useThemeColors();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },

    card: {
      backgroundColor: colors.shape,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      shadowColor: colors.grey,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },

    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.heading,
      marginBottom: 8,
    },

    body: {
      fontSize: 16,
      fontWeight: "400",
      color: colors.body,
      lineHeight: 24,
    },

    button: {
      backgroundColor: colors.primary,
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: "center",
    },

    buttonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#FFFFFF",
    },
  });
}
