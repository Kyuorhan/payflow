# PayFlow

<div align="center">
  <img src="./.github/Thumbnail.svg" alt="PayFlow - Gerenciador de Boletos" width="100%" height="auto">
  
  <p align="center">
    <strong>Aplicativo mobile para gerenciamento inteligente de boletos</strong><br>
    <em>Desenvolvido com React Native + Expo</em>
  </p>

  <!-- Tech Stack Icons -->
  <div align="center" style="margin: 20px 0;">
    <img src="./docs/assets/payflow-logo-option1.svg" alt="PayFlow" width="40" height="40">
    <img src="./docs/assets/react-native-icon.svg" alt="React Native" width="40" height="40">
    <img src="./docs/assets/typescript-icon-official.svg" alt="TypeScript" width="40" height="40">
    <img src="./docs/assets/expo-icon-official.svg" alt="Expo" width="40" height="40">
    <img src="./docs/assets/figma-icon-official.svg" alt="Figma" width="40" height="40">
  </div>
  
  <!-- Badges -->
  <div align="center">
    <a href="https://github.com/Kyuorhan/payflow/actions">
      <img src="https://github.com/Kyuorhan/payflow/workflows/Build%20and%20Deploy%20React%20Native/badge.svg" alt="Build Status">
    </a>
    <a href="https://www.figma.com/community/file/1352388163173966368/payflow">
      <img src="https://img.shields.io/badge/Figma-Community-F24E1E?logo=figma&logoColor=white" alt="Figma Design">
    </a>
    <a href="#license">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
    </a>
  </div>
</div>

---

## 💫 Sobre o Projeto

O **PayFlow** é um aplicativo mobile desenvolvido para facilitar o gerenciamento de boletos. Com uma interface moderna e intuitiva, o app permite organizar, escanear e controlar todos os seus boletos em um só lugar.

<div align="center">

### ✨ Principais Funcionalidades

|    🔍 **Scanner QR/Barcode**     |  🔐 **Auth Google**   |    📊 **Dashboard**     | 🗂️ **Organização**  |
| :------------------------------: | :-------------------: | :---------------------: | :-----------------: |
| Escaneie códigos automaticamente | Login rápido e seguro | Visão geral dos boletos | Categorize e filtre |

</div>

---

## 🛠️ Stack Tecnológica

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="./docs/assets/payflow-logo-option1.svg" width="48" height="48" alt="PayFlow"><br>
        <sub><b>PayFlow</b></sub><br>
        <sub><em>App Principal</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./docs/assets/react-native-icon.svg" width="48" height="48" alt="React Native"><br>
        <sub><b>React Native</b></sub><br>
        <sub><em>Framework Mobile</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./docs/assets/typescript-icon-official.svg" width="48" height="48" alt="TypeScript"><br>
        <sub><b>TypeScript</b></sub><br>
        <sub><em>Linguagem</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./docs/assets/expo-icon-official.svg" width="48" height="48" alt="Expo"><br>
        <sub><b>Expo SDK 53</b></sub><br>
        <sub><em>Toolchain</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./docs/assets/figma-icon-official.svg" width="48" height="48" alt="Figma"><br>
        <sub><b>Figma</b></sub><br>
        <sub><em>Design System</em></sub>
      </td>
    </tr>
  </table>
</div>

**Arquitetura Moderna:**

- 🏗️ **Framework**: React Native com Expo SDK 53
- 📝 **Linguagem**: TypeScript para tipagem robusta
- 🧭 **Navegação**: Expo Router (file-based routing)
- 🔨 **Build**: EAS Build para iOS e Android
- 🎨 **Design**: Figma para prototipação e design system

---

## 🚀 Início Rápido

### 📋 Pré-requisitos

<div align="center">

**Ambiente Base:**

```bash
Node.js >= 18.0.0    npm >= 9.0.0    Git >= 2.30.0
```

</div>

**Opções de Desenvolvimento:**

|                                                   📱 **Expo Go** _(Recomendado)_                                                    |  🔧 **Desenvolvimento Local**  |      🏗️ **Build Nativo**      |
| :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------: | :---------------------------: |
|                                                  Teste instantâneo no dispositivo                                                   |   Controle total do ambiente   |       Apps de produção        |
| [iOS](https://apps.apple.com/app/expo-go/id982107779) \| [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) |   `npm install -g @expo/cli`   |   `npm install -g eas-cli`    |
|                                                 **Ideal para**: Prototipagem rápida                                                 | **Ideal para**: Debug avançado | **Ideal para**: Deploy stores |

### ⚡ Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/Kyuorhan/payflow.git
cd payflow

# 2. Instale dependências
npm install

# 3. Inicie o desenvolvimento
npm start
```

### 📱 Execução

<div align="center">

|       **Método**        |    **Comando**    |         **Descrição**          |
| :---------------------: | :---------------: | :----------------------------: |
|     📱 **Expo Go**      | Escaneie QR Code  | Mais rápido, ideal para testes |
|  🍎 **iOS Simulator**   |   `npm run ios`   |      Requer macOS + Xcode      |
| 🤖 **Android Emulator** | `npm run android` |     Requer Android Studio      |
|   🌐 **Web Browser**    |   `npm run web`   |          Experimental          |

</div>

---

## 🎨 Design & Protótipo

<div align="center">
  <img src="./docs/assets/figma-icon-official.svg" width="28" height="28" alt="Figma">
  <strong> Design no Figma Community</strong>
</div>

### 📱 Preview Interativo

<div align="center">

**👆 Clique na imagem abaixo para abrir o design completo**

<a href="https://www.figma.com/community/file/1352388163173966368/payflow" target="_blank">
  <img src="./.github/Project.svg" alt="PayFlow Design - Clique para abrir no Figma Community" width="100%" style="max-width: 800px; border: 2px solid #F24E1E; border-radius: 12px; cursor: pointer;">
</a>

<em>✨ <strong>Explore o design interativo no Figma Community</strong></em>

</div>

**🎯 No Figma você pode:**

- 👀 Visualizar todas as telas
- 🖱️ Testar o protótipo navegável
- 💬 Deixar feedback e comentários
- 📋 Duplicar o projeto para sua conta
- 🔍 Inspecionar componentes e tokens

### 🎨 Design System

**Paleta de Cores:**

```
Primary   → #6C5CE7    Secondary → #A29BFE    Success → #4CAF50
Warning   → #FF9800    Error     → #E91E63    Background → #F8F9FA
```

**Componentes Principais:**

- 🎯 **Header**: Background `#6C5CE7`, Height `60px`
- 🃏 **Cards**: Border radius `8px`, Shadow `0 2px 8px rgba(0,0,0,0.1)`
- 🔘 **Buttons**: Background `#6C5CE7`, Border radius `6px`
- 📝 **Typography**: Font `Roboto Medium`, Size `16px`

---

## 📁 Estrutura do Projeto

```
payflow/
├── 📱 app/                     # Rotas (Expo Router)
│   ├── _layout.tsx             # Layout raiz
│   ├── index.tsx               # Tela inicial
│   ├── login.tsx               # Autenticação
│   └── (tabs)/                 # Navegação principal
│       ├── home.tsx            # Lista de boletos
│       ├── scanner.tsx         # Scanner QR/Barcode
│       └── profile.tsx         # Perfil do usuário
├── 🧩 src/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── ui/                 # UI base (Button, Input...)
│   │   └── shared/             # Componentes compartilhados
│   ├── constants/              # Constantes (cores, fonts...)
│   ├── hooks/                  # Custom hooks
│   ├── services/               # Serviços (API, auth...)
│   ├── types/                  # Tipos TypeScript
│   └── utils/                  # Funções utilitárias
├── 🎨 assets/                  # Recursos estáticos
└── 📚 docs/                    # Documentação + Assets
```

---

## 🔄 Migração Flutter → React Native

<div align="center">
  <img src="./docs/assets/migration-icon.svg" width="48" height="48" alt="Migration">
  <br>
  <strong>Evolução Tecnológica Estratégica</strong>
</div>

Este projeto **nasceu em Flutter & Dart** e evoluiu para **React Native** para aproveitar um ecossistema mais robusto e ferramentas modernas.

### 🎯 Por que React Native?

|      **Aspecto**       | **Benefício**                                   |
| :--------------------: | :---------------------------------------------- |
|   🌐 **Ecossistema**   | Maior comunidade, mais bibliotecas disponíveis  |
| ⚡ **Desenvolvimento** | Expo SDK acelera prototipagem e desenvolvimento |
|   🔧 **Manutenção**    | Stack JavaScript familiar para equipes web      |
|     🚀 **Deploy**      | EAS Build simplifica builds e distribuição      |
|   📱 **Performance**   | Hermes engine + otimizações nativas             |

> 📦 **Código Flutter preservado:** [Branch `flutter-legacy`](https://github.com/Kyuorhan/payflow/tree/flutter-legacy)

---

## 🏗️ Build & Deploy

### 🔨 Builds Locais

```bash
# iOS (desenvolvimento)
npm run ios

# Android (desenvolvimento)
npm run android

# Web (experimental)
npm run web
```

### 🚀 Builds de Produção

```bash
# EAS Build - iOS
npx eas build --platform ios --profile production

# EAS Build - Android
npx eas build --platform android --profile production

# Build ambas plataformas
npx eas build --platform all
```

### 🤖 CI/CD Automático

- ✅ **GitHub Actions** para builds automáticos
- ✅ **EAS Build** para iOS e Android
- ✅ **Testes automatizados** em cada push
- ✅ **Deploy automático** para stores

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. 🍴 **Fork** o repositório
2. 🌿 **Crie uma branch**: `git checkout -b feature/nova-feature`
3. 💾 **Commit suas mudanças**: `git commit -m 'feat: adiciona nova feature'`
4. 📤 **Push para branch**: `git push origin feature/nova-feature`
5. 🔄 **Abra um Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="https://github.com/Kyuorhan.png" alt="Noah Entregas" width="100" height="100" style="border-radius: 50%">
  
  **Noah Entregas**  
  <em>Mobile & Full-Stack Developer</em>
  
  [![GitHub](https://img.shields.io/badge/-GitHub-000?style=flat&logo=github&logoColor=white)](https://github.com/Kyuorhan)
  [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/noah-entregas)
  
  <p><em>Feito com ❤️ e React Native</em></p>
</div>
