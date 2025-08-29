# PayFlow

<div align="center">
  <img src="./.github/Thumbnail.svg" alt="PayFlow - Gerenciador de Boletos" width="100%" height="auto">
  
  <p align="center">
    <strong>Aplicativo mobile para gerenciamento inteligente de boletos</strong><br>
    Desenvolvido com React Native + Expo
  </p>

  <div align="center">
    <img src="https://img.shields.io/github/stars/Kyuorhan/payflow?style=for-the-badge&logo=github&logoColor=white&labelColor=181717&color=FFD700" alt="GitHub Stars">
    <img src="https://img.shields.io/github/forks/Kyuorhan/payflow?style=for-the-badge&logo=github&logoColor=white&labelColor=181717&color=0969DA" alt="GitHub Forks">
    <img src="https://komarev.com/ghpvc/?username=payflow&repo=payflow&style=for-the-badge&color=0969DA" alt="Profile Views">
  </div>
  
  <br>
  
  <!-- <div align="center">
    <a href="https://github.com/Kyuorhan/payflow/actions">
      <img src="https://github.com/Kyuorhan/payflow/workflows/Build%20and%20Deploy%20React%20Native/badge.svg" alt="Build Status">
    </a>
    <a href="https://www.figma.com/community/file/1352388163173966368/payflow">
      <img src="https://img.shields.io/badge/Figma-Community-F24E1E?logo=figma&logoColor=white" alt="Figma Design">
    </a>
    <a href="#license">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
    </a>
  </div> -->
</div>

<br>

## 💡 Sobre o Projeto

O **PayFlow** é um aplicativo mobile desenvolvido para facilitar o gerenciamento de boletos. Com uma interface moderna e intuitiva, o app permite organizar, escanear e controlar todos os seus boletos em um só lugar.

<div align="center">

### ✨ Principais Funcionalidades

<table>
<tbody>
<tr>
<td align="center" width="25%">
🔍<br><strong>Scanner QR/Barcode</strong><br><sub>Escaneie códigos automaticamente</sub>
</td>
<td align="center" width="25%">
🔐<br><strong>Auth Google</strong><br><sub>Login rápido e seguro</sub>
</td>
<td align="center" width="25%">
📊<br><strong>Dashboard</strong><br><sub>Visão geral dos boletos</sub>
</td>
<td align="center" width="25%">
🗂️<br><strong>Organização</strong><br><sub>Categorize e filtre</sub>
</td>
</tr>
</tbody>
</table>

</div>

## 🛠️ Stack Tecnológica

<div align="center">
  <table>
    <tr>
      <td align="center" width="120">
        <img src="./assets/icons/payflow-icon.svg" width="56" height="56" alt="PayFlow"><br>
        <sub><b>PayFlow</b></sub><br>
        <sub><em>App Principal</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./assets/icons/react-native-icon.svg" width="56" height="56" alt="React Native"><br>
        <sub><b>React Native</b></sub><br>
        <sub><em>Framework</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./assets/icons/typescript-icon.svg" width="56" height="56" alt="TypeScript"><br>
        <sub><b>TypeScript</b></sub><br>
        <sub><em>Linguagem</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./assets/icons/expo-icon.svg" width="56" height="56" alt="Expo"><br>
        <sub><b>Expo SDK 53</b></sub><br>
        <sub><em>Toolchain</em></sub>
      </td>
      <td align="center" width="120">
        <img src="./assets/icons/figma-icon.svg" width="56" height="56" alt="Figma"><br>
        <sub><b>Figma</b></sub><br>
        <sub><em>Design</em></sub>
      </td>
    </tr>
  </table>
</div>

**Arquitetura:**

- 📱 **Framework**: React Native com Expo SDK 53
- 📝 **Linguagem**: TypeScript para tipagem robusta
- 🧭 **Navegação**: Expo Router (file-based routing)
- 🔨 **Build**: EAS Build para iOS e Android
- 🎨 **Design**: Figma para prototipação e design system

## 🚀 Início Rápido

### 📋 Pré-requisitos

<div align="center">

**Ambiente Base:**

```
Node.js ≥ 18.0.0    npm ≥ 9.0.0    Git ≥ 2.30.0
```

</div>

**Opções de Desenvolvimento:**

<div align="center">
<table>
<thead>
<tr>
<th width="33%">📱 Expo Go</th>
<th width="33%">🔧 Local Dev</th>
<th width="33%">🏗️ Native Build</th>
</tr>
</thead>
<tbody>
<tr>
<td>Teste instantâneo</td>
<td>Controle total</td>
<td>Apps produção</td>
</tr>
<tr>
<td><a href="https://apps.apple.com/app/expo-go/id982107779">📱 iOS</a> | <a href="https://play.google.com/store/apps/details?id=host.exp.exponent">🤖 Android</a></td>
<td><code>npm install -g @expo/cli</code></td>
<td><code>npm install -g eas-cli</code></td>
</tr>
</tbody>
</table>
</div>

### ⚡ Instalação

```bash
# Clone o repositório
git clone https://github.com/Kyuorhan/payflow.git
cd payflow

# Instale as dependências
npm install

# Inicie o desenvolvimento
npm start
```

### 📱 Como Executar

<div align="center">
<table>
<thead>
<tr>
<th>Método</th>
<th>Comando</th>
<th>Ideal para</th>
</tr>
</thead>
<tbody>
<tr>
<td>📱 <strong>Expo Go</strong></td>
<td>Escaneie QR Code</td>
<td>Testes rápidos</td>
</tr>
<tr>
<td>🍎 <strong>iOS Simulator</strong></td>
<td><code>npm run ios</code></td>
<td>Debug iOS</td>
</tr>
<tr>
<td>🤖 <strong>Android Emulator</strong></td>
<td><code>npm run android</code></td>
<td>Debug Android</td>
</tr>
<tr>
<td>🌐 <strong>Web Browser</strong></td>
<td><code>npm run web</code></td>
<td>Experimental</td>
</tr>
</tbody>
</table>
</div>

> **💡 Dica:** Use Expo Go para prototipagem rápida e builds locais para debugging detalhado.

## 🎨 Design & Protótipo

<div align="center">
  <img src="./assets/icon/figma-icon.svg" width="24" height="24" alt="Figma">
  <strong>Figma Community</strong>
</div>

### 🎨 Design no Figma

<div align="center">

**Clique na imagem abaixo para abrir o design no Figma Community:**

<br>

<a href="https://www.figma.com/community/file/1352388163173966368/payflow" target="_blank">
  <img src="./.github/Project.svg" alt="PayFlow Design - Clique para abrir no Figma Community" width="100%" style="max-width: 800px; border: 2px solid #F24E1E; border-radius: 12px; cursor: pointer;">
</a>

<br>

<em>👆 <strong>Clique na imagem acima para abrir o Figma Community</strong></em>

<br>

</div>

**🎨 Color Tokens**

- **Primary**: `#6C5CE7` (Purple)
- **Secondary**: `#A29BFE` (Light Purple)
- **Success**: `#4CAF50` (Green)
- **Warning**: `#FF9800` (Orange)
- **Error**: `#E91E63` (Pink)
- **Background**: `#F8F9FA` (Light Gray)

</details>

</div>

## Build para Produção

```bash
# Build iOS
npx eas build --platform ios --profile production

# Build Android
npx eas build --platform android --profile production

# Build para ambas plataformas
npx eas build --platform all
```

### CI/CD Automático

- GitHub Actions configurado para builds automáticos
- EAS Build para iOS e Android
- Testes automatizados em cada push

## Estrutura do Projeto

```
payflow/
├── app/                    # Rotas (Expo Router)
│   ├── _layout.tsx         # Layout principal
│   ├── index.tsx           # Splash screen
│   ├── login.tsx           # Autenticação
│   └── (tabs)/             # Navegação principal
│       ├── home.tsx        # Lista de boletos
│       ├── scanner.tsx     # Scanner de código
│       └── profile.tsx     # Perfil do usuário
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/             # Componentes de UI base
│   │   └── shared/         # Componentes compartilhados
│   ├── constants/          # Constantes (cores, fonts, etc)
│   ├── hooks/              # Custom hooks
│   ├── services/           # Serviços (API, auth)
│   ├── types/              # Tipos TypeScript
│   └── utils/              # Funções utilitárias
├── assets/                 # Recursos estáticos
└── docs/                   # Documentação
```

## Migração Flutter → React Native

<div align="center">
  <img src="./docs/assets/migration-icon.svg" width="48" height="48" alt="Migration">
  <br>
  <strong>Evolução Tecnológica</strong>
</div>

Este projeto foi **originalmente desenvolvido em Flutter & Dart** e posteriormente migrado para **React Native** para aproveitar um ecossistema mais amplo e ferramentas modernas de desenvolvimento.

### Por que React Native?

<table align="center">
  <tr>
    <th>Aspecto</th>
    <th>Benefício</th>
  </tr>
  <tr>
    <td>Ecossistema</td>
    <td>Maior comunidade e bibliotecas disponíveis</td>
  </tr>
  <tr>
    <td>Desenvolvimento</td>
    <td>Expo SDK acelera o desenvolvimento</td>
  </tr>
  <tr>
    <td>Manutenção</td>
    <td>Stack JavaScript mais familiar para a equipe</td>
  </tr>
  <tr>
    <td>Deploy</td>
    <td>EAS Build simplifica o processo de build</td>
  </tr>
</table>

> **Código Flutter preservado na branch:** [`flutter-legacy`](https://github.com/Kyuorhan/payflow/tree/flutter-legacy)

<br>

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o repositório
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'feat: adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

<div align="center">
  <img src="https://github.com/Kyuorhan.png" alt="Noah Entregas" width="100" height="100" style="border-radius: 50%">
  
  **Noah Entregas**
  
  [![GitHub](https://img.shields.io/badge/-GitHub-000?style=flat&logo=github&logoColor=white)](https://github.com/Kyuorhan)
  [![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/noah-entregas)
  
  <p>Feito com ❤️ em React Native</p>
</div>
