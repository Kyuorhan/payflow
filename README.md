# PayFlow - Estrutura Expo Router Completa

## � **Estrutura Final do Projeto** - Expo Router + Clean Architecture

```
payflow/
├── app/                    # 🚀 EXPO ROUTER - Rotas baseadas em arquivos
│   ├── (tabs)/            # Grupo de navegação por abas
│   │   ├── index.tsx      # → / (primeira aba)
│   │   ├── two.tsx        # → /two (segunda aba)
│   │   └── _layout.tsx    # Layout das abas
│   ├── login.tsx          # → /login (fora das abas)
│   ├── _layout.tsx        # Layout global da aplicação
│   ├── modal.tsx          # → /modal (modal global)
│   └── +not-found.tsx     # 404 - página não encontrada
├── src/                    # 📱 LÓGICA DA APLICAÇÃO
│   ├── screens/           # 📺 TELAS (lógica e UI)
│   │   ├── HomeScreen.tsx      # Lógica da tela inicial
│   │   ├── ProfileScreen.tsx   # Lógica do perfil
│   │   ├── LoginScreen.tsx     # Lógica do login
│   │   └── index.ts            # Exports centralizados
│   ├── components/        # 🧩 Componentes reutilizáveis
│   │   ├── Themed.tsx     # Componentes com temas
│   │   └── index.ts       # Exports centralizados
│   ├── constants/         # 🎨 Constantes (cores, configs)
│   ├── hooks/             # 🪝 Hooks customizados
│   ├── services/          # 🌐 Serviços (API, storage)
│   ├── types/             # 📝 Tipos TypeScript
│   ├── utils/             # 🛠️ Utilitários e helpers
│   └── assets/            # 🖼️ Assets da aplicação
├── assets/                # ⚙️ Assets de configuração do projeto
└── [arquivos de config]   # 📋 package.json, tsconfig.json, etc.
```

## 🔄 **Como funciona a separação Rotas + Screens:**

### **app/ (Rotas) - "O QUE renderizar"**

```typescript
// app/(tabs)/index.tsx - ROTA
import { HomeScreen } from "@/src/screens";
export default function TabOneRoute() {
  return <HomeScreen />; // Apenas renderiza a screen
}
```

### **src/screens/ (Lógica) - "COMO renderizar"**

```typescript
// src/screens/HomeScreen.tsx - LÓGICA + UI
export default function HomeScreen() {
  // Estado, hooks, lógica de negócio aqui
  return <View>...</View>; // UI da tela
}
```

## 🎯 **Vantagens desta estrutura:**

✅ **Expo Router**: Rotas automáticas baseadas em arquivos  
✅ **Clean Code**: Separação clara entre rotas e lógica  
✅ **Reutilização**: Screens podem ser usadas em diferentes rotas  
✅ **Organização**: Código da aplicação concentrado em `src/`  
✅ **Escalabilidade**: Fácil manutenção em projetos grandes

## 🔧 Path Aliases Configurados

Os seguintes aliases estão configurados no `tsconfig.json`:

- `@/*` - Raiz do projeto
- `@/src/*` - Pasta src
- `@/components/*` - Componentes
- `@/screens/*` - Telas
- `@/constants/*` - Constantes
- `@/hooks/*` - Hooks
- `@/services/*` - Serviços
- `@/types/*` - Types
- `@/utils/*` - Utilitários
- `@/assets/*` - Assets da aplicação

## 📦 Uso dos Exports Centralizados

### Componentes

```typescript
import { Text, View, EditScreenInfo } from "@/src/components";
```

### Constants

```typescript
import { Colors } from "@/src/constants";
```

### Hooks

```typescript
import { useColorScheme } from "@/src/hooks";
```

### Types

```typescript
import { User, ApiResponse } from "@/src/types";
```

### Utils

```typescript
import { formatCurrency, formatDate } from "@/src/utils";
```

## 🎨 Sistema de Temas

O projeto já vem configurado com sistema de temas dark/light:

- Componentes `Text` e `View` temáticos
- Hook `useColorScheme()` para detectar tema do sistema
- Cores definidas em `src/constants/Colors.ts`

## �️ **Rotas Configuradas (Expo Router)**

| Arquivo                | Rota     | Descrição             |
| ---------------------- | -------- | --------------------- |
| `app/(tabs)/index.tsx` | `/`      | Home - Primeira aba   |
| `app/(tabs)/two.tsx`   | `/two`   | Profile - Segunda aba |
| `app/login.tsx`        | `/login` | Login (fora das abas) |
| `app/modal.tsx`        | `/modal` | Modal global          |

### **Navegação programática:**

```typescript
import { router } from "expo-router";

// Ir para login
router.push("/login");

// Voltar
router.back();

// Substituir rota
router.replace("/");
```

## �🚀 Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa no navegador
