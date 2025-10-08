import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Platform } from "react-native";

import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";

export default function ProfileLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        // 🎨 Header moderno com tema
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerShadowVisible: false,
        headerTintColor: theme.primary,
        headerTitleStyle: {
          fontWeight: "600",
          fontSize: 18,
          color: theme.heading,
        },
        // 📱 Configurações modernas
        headerBackTitle: "",
        gestureEnabled: true,
        animation:
          Platform.OS === "ios" ? "slide_from_right" : "slide_from_bottom",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Perfil",
          headerShown: false, // Será mostrado pela tab
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          title: "Editar Perfil",
          headerRight: () => (
            <Ionicons
              name="checkmark"
              size={24}
              color={theme.primary}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          title: "Configurações",
          headerRight: () => (
            <Ionicons
              name="save-outline"
              size={24}
              color={theme.primary}
              style={{ marginRight: 16 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
