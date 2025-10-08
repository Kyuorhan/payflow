// 🚀 ROTA: app/(tabs)/index.tsx → Primeira aba (/)
// 📱 LÓGICA: src/screens/HomeScreen.tsx

import { HomeScreen } from "@/src/screens";

// Expo Router: arquivo = rota
// Esta rota (/) apenas importa e renderiza a Screen
export default function TabOneRoute() {
  return <HomeScreen />;
}
