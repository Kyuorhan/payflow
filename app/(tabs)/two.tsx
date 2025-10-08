// 🚀 ROTA: app/(tabs)/two.tsx → Segunda aba (/two)
// 📱 LÓGICA: src/screens/ProfileScreen.tsx

import { ProfileScreen } from "@/src/screens";

// Expo Router: arquivo = rota
// Esta rota (/two) apenas importa e renderiza a Screen
export default function TabTwoRoute() {
  return <ProfileScreen />;
}
