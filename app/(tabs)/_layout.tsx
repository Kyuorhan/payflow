import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { useColorScheme } from "@/src/components/useColorScheme";
import Colors from "@/src/constants/Colors";

// 🎨 Componente de ícone moderno para tabs
function TabBarIcon(props: {
  IoniconsName?: keyof typeof Ionicons.glyphMap;
  MaterialName?: keyof typeof MaterialIcons.glyphMap;
  color: string;
  focused: boolean;
}) {
  const { IoniconsName, MaterialName, color, focused } = props;

  // Tamanho dinâmico baseado no estado focus
  const size = focused ? 26 : 24;

  if (IoniconsName) {
    return (
      <Ionicons
        name={IoniconsName}
        size={size}
        color={color}
        style={{ marginBottom: Platform.OS === "ios" ? -4 : 0 }}
      />
    );
  }

  if (MaterialName) {
    return (
      <MaterialIcons
        name={MaterialName}
        size={size}
        color={color}
        style={{ marginBottom: Platform.OS === "ios" ? -4 : 0 }}
      />
    );
  }

  return null;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        // 🎨 Configuração UX/UI moderna das tabs
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.tabIconDefault,
        headerShown: false,

        // 📱 Estilo moderno da tab bar
        tabBarStyle: {
          backgroundColor: theme.shape,
          borderTopWidth: 1,
          borderTopColor: theme.stroke,
          paddingBottom: Platform.OS === "ios" ? 20 : 8,
          paddingTop: 8,
          height: Platform.OS === "ios" ? 88 : 64,
          shadowColor: theme.black,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 8,
        },

        // 📝 Estilo do texto das tabs
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              IoniconsName={focused ? "home" : "home-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(transactions)"
        options={{
          title: "Transações",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              IoniconsName={
                focused ? "swap-horizontal" : "swap-horizontal-outline"
              }
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              IoniconsName={focused ? "person" : "person-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Config",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              IoniconsName={focused ? "settings" : "settings-outline"}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
