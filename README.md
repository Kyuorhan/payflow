# PayFlow - React Native

<div align="center">
  <img src="./.github/Thumbnail.png" alt="PayFlow Logo" width="300" height="auto">
  
  <p><strong>Aplicativo para gerenciamento de boletos desenvolvido com React Native e Expo SDK</strong></p>
  
  [![Build Status](https://github.com/Kyuorhan/payflow/workflows/Build%20and%20Deploy%20React%20Native/badge.svg)](https://github.com/Kyuorhan/payflow/actions)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
  [![Expo](https://img.shields.io/badge/Expo-1B1F23?style=flat&logo=expo&logoColor=white)](https://expo.dev/)
</div>

## 🚀 Sobre o Projeto

O **PayFlow** é um aplicativo mobile para organizar e gerenciar boletos de forma simples e eficiente. Migrado do Flutter para React Native mantendo todas as funcionalidades principais com tecnologias mais modernas.

### ✨ Características Principais

- 📱 **Multiplataforma** - iOS, Android e Web
- 🔍 **Scanner de Código de Barras** - Leitura automática de boletos
- 🔐 **Autenticação Google** - Login seguro e rápido
- 📊 **Dashboard Intuitivo** - Visão geral dos seus boletos
- 🎨 **Design Moderno** - Interface limpa e responsiva
- ⚡ **Performance** - Otimizado para velocidade

## 🛠️ Tecnologias

<table>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>React Native, TypeScript, Expo SDK 50</td>
  </tr>
  <tr>
    <td><strong>Navegação</strong></td>
    <td>Expo Router (File-based routing)</td>
  </tr>
  <tr>
    <td><strong>Build</strong></td>
    <td>EAS Build, GitHub Actions</td>
  </tr>
  <tr>
    <td><strong>Funcionalidades</strong></td>
    <td>Expo Camera, Expo Barcode Scanner, Expo Auth Session</td>
  </tr>
</table>

## 🚀 Início Rápido

### Pré-requisitos

```bash
# Node.js 18+
node --version

# Expo CLI
npm install -g @expo/cli@latest
```

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/Kyuorhan/payflow.git
cd payflow

# Instalar dependências
npm install

# Iniciar o desenvolvimento
npm start
```

### Executar em diferentes plataformas

```bash
# 📱 iOS (requer macOS)
npm run ios

# 🤖 Android
npm run android

# 🌐 Web
npm run web
```

## 📱 Screenshots

<div align="center">
  <img src="./.github/Project.png" alt="PayFlow App Screens" width="800" height="auto">
  
  <p><em>Interface do PayFlow mostrando as principais funcionalidades do aplicativo</em></p>
</div>

## 🏗️ Build e Deploy

### Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm start

# Build para web
npm run build:web
```

### Build para Produção

```bash
# Build iOS
npx eas build --platform ios --profile production

# Build Android
npx eas build --platform android --profile production

# Build para ambas plataformas
npx eas build --platform all
```

### Deploy Automático

- 🔄 **CI/CD** - GitHub Actions configurado
- 🌐 **Web** - Deploy automático no GitHub Pages
- 📱 **Mobile** - EAS Build para iOS e Android

## 📂 Estrutura do Projeto

```
payflow/
├── app/                    # 🛣️  Rotas (Expo Router)
│   ├── _layout.tsx         # Layout principal
│   ├── index.tsx           # Splash screen
│   ├── login.tsx           # Autenticação
│   └── (tabs)/             # Navegação principal
│       ├── home.tsx        # Lista de boletos
│       ├── scanner.tsx     # Scanner de código
│       └── profile.tsx     # Perfil do usuário
├── src/
│   ├── components/         # 🧩 Componentes reutilizáveis
│   │   ├── ui/             # Componentes de UI base
│   │   └── shared/         # Componentes compartilhados
│   ├── constants/          # 🎨 Constantes (cores, fonts, etc)
│   ├── hooks/              # 🪝 Custom hooks
│   ├── services/           # 🔌 Serviços (API, auth)
│   ├── types/              # 📝 Tipos TypeScript
│   └── utils/              # 🛠️  Funções utilitárias
├── assets/                 # 🖼️  Recursos estáticos
└── docs/                   # 📚 Documentação
```

## 🔄 Migração do Flutter

Este projeto foi **completamente migrado** do Flutter para React Native, mantendo:

| Aspecto                 | Flutter          | React Native |
| ----------------------- | ---------------- | ------------ |
| ✅ **Funcionalidades**  | Preservadas 100% | ✅           |
| ✅ **Design**           | UI/UX idêntica   | ✅           |
| ✅ **Performance**      | Otimizada        | ✅           |
| ✅ **Manutenibilidade** | Melhorada        | ✅           |

**Branch com código Flutter:** [`flutter-legacy`](https://github.com/Kyuorhan/payflow/tree/flutter-legacy)

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

## 🤝 Contribuição

Contribuições são sempre bem-vindas! 🎉

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. **Commit** suas mudanças
   ```bash
   git commit -m 'feat: adiciona nova funcionalidade'
   ```
4. **Push** para a branch
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. **Abra** um Pull Request

### 📋 Guidelines

- Use commits semânticos (`feat:`, `fix:`, `docs:`, etc.)
- Adicione testes para novas funcionalidades
- Mantenha o código limpo e documentado
- Teste em iOS, Android e Web

## 🐛 Relatando Bugs

Encontrou um bug? [Abra uma issue](https://github.com/Kyuorhan/payflow/issues/new) com:

- 📋 Descrição detalhada
- 🔄 Passos para reproduzir
- 📱 Plataforma (iOS/Android/Web)
- 📸 Screenshots (se aplicável)

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/Kyuorhan.png" alt="Noah Entregas" width="100" height="100" style="border-radius: 50%">
  
  **Noah Entregas**
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/Kyuorhan)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/noah-entregas)
</div>

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ e ☕ por <strong>Noah Entregas</strong></p>
</div>

<p align="center">O Layout foi desenvolvido por <a href="https://www.instagram.com/kyuorhan">Jhonny Kyuorhan</a>, e você pode acessá-lo no Figma:</p>

<br>

<p> 
    
  >- [Mobile](https://www.figma.com/community/file/1352388163173966368/payflow) 📱
</p>

<br>

### <h3 align="center">Como Usar 🤔</h3>

##

###

Clone esse repositório:

```
$ git clone https://github.com/Kyuorhan/payflow
```

Entre no diretório:

```
$ cd meals
```

Instale as dependências:

```
$ flutter pub get
```

Execute a aplicação:

```
$ flutter run
```

###

<div align="center">
  <p><img align="right" height="350em" alt="Profile Card" src="https://raw.githubusercontent.com/gist/Kyuorhan/1445a6c546dd1a7b5e8b2df72039207a/raw/e281a60fb9099b6f925a768e07bce9f76b3dabd0/githubcard.svg"/></p>

<br> <br>
Este projeto foi desenvolvido com ❤️ e está em constante evolução, buscando sempre novos desafios.<br>
**[Sinta-se à vontade para participar e trocar ideias no GitHub! 👋](https://github.com/Kyuorhan)**.

##

###

  <div align="center" > 
    <a href="https://www.linkedin.com/in/jhonny-kyuorhan/" target="_blank"> <img height="30em" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
    <a href = "mailto:jkdevprogrammer@gmail.com"><img height="30em" src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.twitch.tv/kyuorhan" target="_blank"> <img height="30em" src="https://img.shields.io/badge/Twitch-A970FF?style=for-the-badge&logo=twitch&logoColor=white" target="_blank"></a> 
    <a href="https://www.instagram.com/kyuorhan" target="_blank"> <img height="30em" src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
    <!-- <a href="https://steamcommunity.com/id/Kyuorhan/" target="_blank"> <img height="30em" src="https://img.shields.io/badge/Steam-465871?style=for-the-badge&logo=steam&logoColor=white" target="_blank"></a> -->  
  </div>   
</div>
