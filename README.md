# PayFlow

<div align="center">
  <img src="./.github/Thumbnail.png" alt="PayFlow - Gerenciador de Boletos" width="600" height="auto">
  
  <p align="center">
    <strong>Aplicativo mobile para gerenciamento inteligente de boletos</strong><br>
    Desenvolvido com React Native + Expo
  </p>

  <div align="center">
    <img src="./docs/assets/payflow-icon.svg" alt="PayFlow" width="32" height="32">
    <img src="./docs/assets/mobile-icon.svg" alt="React Native" width="32" height="32">
    <img src="./docs/assets/typescript-icon.svg" alt="TypeScript" width="32" height="32">
    <img src="./docs/assets/expo-icon.svg" alt="Expo" width="32" height="32">
    <img src="./docs/assets/figma-icon.svg" alt="Figma" width="32" height="32">
  </div>
  
  <br>
  
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

## Sobre o Projeto

O **PayFlow** é um aplicativo mobile desenvolvido para facilitar o gerenciamento de boletos. Com uma interface moderna e intuitiva, o app permite organizar, escanear e controlar todos os seus boletos em um só lugar.

<div align="center">

| Funcionalidade          | Descrição                                  |
| ----------------------- | ------------------------------------------ |
| **Scanner de Código**   | Escaneie códigos de barras automaticamente |
| **Autenticação Google** | Login rápido e seguro                      |
| **Dashboard Intuitivo** | Visão geral de todos os boletos            |
| **Organização Smart**   | Categorize e filtre seus boletos           |

</div>

## Tecnologias

<div align="center">
  <table>
    <tr>
      <td align="center" width="100">
        <img src="./docs/assets/payflow-icon.svg" width="48" height="48" alt="PayFlow"><br>
        <sub><b>PayFlow</b></sub>
      </td>
      <td align="center" width="100">
        <img src="./docs/assets/mobile-icon.svg" width="48" height="48" alt="React Native"><br>
        <sub><b>React Native</b></sub>
      </td>
      <td align="center" width="100">
        <img src="./docs/assets/typescript-icon.svg" width="48" height="48" alt="TypeScript"><br>
        <sub><b>TypeScript</b></sub>
      </td>
      <td align="center" width="100">
        <img src="./docs/assets/expo-icon.svg" width="48" height="48" alt="Expo"><br>
        <sub><b>Expo SDK 53</b></sub>
      </td>
      <td align="center" width="100">
        <img src="./docs/assets/figma-icon.svg" width="48" height="48" alt="Figma"><br>
        <sub><b>Figma Design</b></sub>
      </td>
    </tr>
  </table>
</div>

**Stack Principal:**

- Framework: React Native com Expo SDK 53
- Linguagem: TypeScript para tipagem robusta
- Navegação: Expo Router (file-based routing)
- Build: EAS Build para iOS e Android
- Design: Figma para prototipação e design system

## 🚀 Início Rápido

### 📋 Pré-requisitos

**Ambiente de Desenvolvimento:**
```bash
Node.js >= 18.0.0
npm >= 9.0.0 ou yarn >= 1.22.0
Git >= 2.30.0
```

**Para testar no dispositivo físico:**

| Método | Descrição | Requisitos |
|--------|-----------|------------|
| **Expo Go** *(Recomendado)* | App gratuito para testar rapidamente | [📱 iOS](https://apps.apple.com/app/expo-go/id982107779) \| [🤖 Android](https://play.google.com/store/apps/details?id=host.exp.exponent) |
| **Expo CLI** | Desenvolvimento local completo | `npm install -g @expo/cli@latest` |
| **EAS Build** | Builds nativos de produção | `npm install -g eas-cli@latest` |

**Para builds nativos (opcional):**
- **iOS**: macOS + Xcode 15+ (para executar em simulador)
- **Android**: Android Studio + Java JDK 17 (para executar em emulador)

### ⚡ Instalação e Execução

**1. Clone e configure o projeto:**
```bash
# Clone o repositório
git clone https://github.com/Kyuorhan/payflow.git
cd payflow

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

**2. Execute no seu dispositivo:**

**📱 Expo Go (Mais rápido):**
- Escaneie o QR Code que aparece no terminal
- Abra automaticamente no app Expo Go

**🔧 Build Local:**
```bash
# iOS (requer macOS + Xcode)
npm run ios

# Android (requer Android Studio + Java JDK)
npm run android

# Para testar no navegador (experimental)
npm run web
```

**🎯 Dica:** Use o Expo Go para desenvolvimento rápido e builds locais apenas quando precisar testar funcionalidades nativas específicas.

## 🎨 Design & Protótipo

<div align="center">
  <img src="./docs/assets/figma-icon.svg" width="24" height="24" alt="Figma">
  <strong>Figma Community</strong>
</div>

Explore o design system completo e interaja com o protótipo navegável do PayFlow:

<div align="center">
  
**🎯 Protótipo Interativo**

<a href="https://www.figma.com/community/file/1352388163173966368/payflow" target="_blank">
  <img src="https://img.shields.io/badge/🎨_Ver_no_Figma_Community-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Ver no Figma Community">
</a>

<p><em>Navegue pelas telas, teste interações e experimente o fluxo completo do usuário</em></p>

| Feature | Descrição |
|---------|-----------|
| **🖼️ Design System** | Componentes, cores e tipografia padronizados |
| **📱 Protótipo Mobile** | Fluxo navegável para iOS e Android |
| **🎯 Interações** | Botões, transições e micro-animações |
| **📐 Specs Técnicas** | Medidas e especificações para desenvolvimento |

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

## Design & Figma

<div align="center">
  <img src="./docs/assets/figma-icon.svg" width="48" height="48" alt="Figma Design">
  <br>
  <strong>Design System & Prototipação</strong>
</div>

O PayFlow segue um design system completo criado no Figma, disponível como projeto da comunidade.

### Navegação Interativa no Figma

<div align="center">
  <a href="https://www.figma.com/proto/1352388163173966368/payflow" target="_blank">
    <img src="https://img.shields.io/badge/🎯_Protótipo_Interativo-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Protótipo Interativo">
  </a>
  
  <br><br>
  
  <p>Experimente a navegação completa:</p>
  
  <table>
    <tr>
      <td>🖱️ <strong>Navegação por Cliques</strong></td>
      <td>Clique nos hotspots para navegar</td>
    </tr>
    <tr>
      <td>🔍 <strong>Zoom e Pan</strong></td>
      <td>Explore os detalhes do design</td>
    </tr>
    <tr>
      <td>📱 <strong>Preview Responsivo</strong></td>
      <td>Teste em diferentes dispositivos</td>
    </tr>
    <tr>
      <td>🎮 <strong>Interações</strong></td>
      <td>Botões e formulários funcionais</td>
    </tr>
  </table>
</div>

### Links Figma

- [📁 Arquivo da Comunidade](https://www.figma.com/community/file/1352388163173966368/payflow)
- [🎯 Protótipo Interativo](https://www.figma.com/proto/1352388163173966368/payflow)
- [📐 Design System](https://www.figma.com/file/1352388163173966368/payflow)

**Documentação completa:** [Integração com Figma](./docs/figma-integration.md)

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes em modo watch
npm run test:watch

# Cobertura de testes
npm run test:coverage

# Lint do código
npm run lint
```

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
