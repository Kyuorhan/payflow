// 🚀 ROTA: app/login.tsx → Tela de login (/login)
// 📱 LÓGICA: src/screens/LoginScreen.tsx

import { LoginScreen } from "@/src/screens";

// Expo Router: arquivo = rota
// Esta rota (/login) fica fora das abas
export default function LoginRoute() {
  return <LoginScreen />;
}
