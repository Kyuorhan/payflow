<div align="center">
  <img src="./.github/Thumbnail.svg" alt="PayFlow - Gerenciador de Boletos" width="100%" height="auto">

  <p align="center">
    <strong>Aplicativo mobile para gerenciamento inteligente de boletos</strong><br>
    Desenvolvido com React Native + Expo
  </p>

  <p align="center">
    <img alt="Stars" height="22em"  src="https://img.shields.io/github/stars/Kyuorhan/payflow?label=stars&message=MIT&color=000000&labelColor=8257e5">
    <img alt="Forks" height="22em"  src="https://img.shields.io/github/forks/Kyuorhan/payflow?label=forks&message=MIT&color=000000&labelColor=8257e5" alt="Forks">
    <a href="https://github.com/Kyuorhan/payflow/blob/main/LICENSE">
      <img alt="License" height="22em"  src="https://img.shields.io/static/v1?label=license&message=MIT&color=000000&labelColor=8257e5">
    </a>
  </p>

</div>

---

## 📋 Índice

- [📖 Sobre](#-sobre)
- [🛠️ Stack Tecnológica](#️-stack-tecnológica)
- [🚀 Início Rápido](#-início-rápido)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [⚡ Instalação](#-instalação)
  - [📱 Como Executar](#-como-executar)
- [🎨 Design & Protótipo](#-design--protótipo)
- [Build para Produção](#build-para-produção)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Migração Flutter → React Native](#migração-flutter--react-native)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)
- [👨‍💻 Desenvolvedor](#️-desenvolvedor)

---

### <h3 align="center">📖 Sobre</h3>

##

O projeto **PayFlow** foi desenvolvido com o propósito de espalhar conhecimento na tecnologia. Além da intensa rotina de estudos, planejamentos, muitas conexões e networking, interagindo com várias comunidades.

> - O **PayFlow** é um projeto elaborado e bem pensado para facilitar o Gerenciamento de Boletos, assim como **consultas**, ler o **Código de Barra** e gerenciar todos os boletos em um só lugar.

> - O **PayFlow** se trata de um app mobile **migrado de Flutter & Dart** para **React Native + TypeScript** para Gerenciamento de Boletos, contendo recursos como o uso de **câmera para scanner**, **autenticação Google**, **navegação intuitiva**, **animações e estilizações personalizadas**, entre vários outros pontos modernos do desenvolvimento mobile.

<br>

<div align="center">

### 🛠️ Stack Tecnológica

##

<div align="center">
  <table style="border-collapse: collapse; border: none; background: transparent;">
    <tr style="border: none; background: transparent;">
      <td align="center" width="120" height="120" style="border: none; background: transparent; padding: 10px;">
        <img src="./assets/icons/payflow-icon.svg" width="56" height="56" alt="PayFlow"><br>
        <sub><b>PayFlow</b></sub><br>
      </td>
      <td align="center" width="120" height="120" style="border: none; background: transparent; padding: 10px;">
        <img src="./assets/icons/react-native-icon.svg" width="56" height="56" alt="React Native"><br>
        <sub><b>React Native</b></sub><br>
      </td>
      <td align="center" width="120" height="120" style="border: none; background: transparent; padding: 10px;">
        <img src="./assets/icons/typescript-icon.svg" width="56" height="56" alt="TypeScript"><br>
        <sub><b>TypeScript</b></sub><br>
      </td>
      <td align="center" width="120" height="120" style="border: none; background: transparent; padding: 10px;">
        <img src="./assets/icons/expo-icon.svg" width="56" height="56" alt="Expo"><br>
        <sub><b>Expo SDK</b></sub><br>
      </td>
      <td align="center" width="120" height="120" style="border: none; background: transparent; padding: 10px;">
        <img src="./assets/icons/figma-icon.svg" width="56" height="56" alt="Figma"><br>
        <sub><b>Figma</b></sub><br>
      </td>
    </tr>
  </table>
</div>

<style>
table {
  border-collapse: collapse !important;
  border: none !important;
  background: transparent !important;
}
table tr {
  border: none !important;
  background: transparent !important;
}
table td {
  border: none !important;
  background: transparent !important;
}
</style>

**Arquitetura:**

<div style="margin: 20px auto; max-width: 1000px; padding: 0 15px;">

<!-- Card 1 - Topo centralizado -->
<div style="display: flex; justify-content: center; margin-bottom: 30px;">
  <div style="display: flex; align-items: center; padding: 15px; border-radius: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #6C5CE7; width: 380px; min-width: 280px; max-width: 300px;">
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h4 style="margin: 0 0 8px 0; color: #6C5CE7; font-size: 16px; font-weight: 600; text-align: left; line-height: 1.2;">React Native com Expo SDK 53</h4>
      <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.4; text-align: left;">Framework híbrido para desenvolvimento mobile multiplataforma</p>
    </div>
    <img src="./assets/icons/framework-icon.svg" width="32" height="32" alt="Framework" style="margin-left: 15px; flex-shrink: 0;">
  </div>
</div>

<!-- Cards 2 e 3 - Meio espalhados com mais espaço -->
<div style="display: flex; justify-content: space-between; margin-bottom: 30px; align-items: center; gap: 50px;">
  <div style="display: flex; align-items: center; padding: 15px; border-radius: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #4CAF50; width: 380px; min-width: 280px; max-width: 300px;">
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h4 style="margin: 0 0 8px 0; color: #4CAF50; font-size: 16px; font-weight: 600; text-align: left; line-height: 1.2;">TypeScript</h4>
      <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.4; text-align: left;">Superset do JavaScript com tipagem estática robusta</p>
    </div>
    <img src="./assets/icons/language-icon.svg" width="32" height="32" alt="Language" style="margin-left: 15px; flex-shrink: 0;">
  </div>
  
  <div style="display: flex; align-items: center; padding: 15px; border-radius: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #FF9800; width: 380px; min-width: 280px; max-width: 300px;">
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h4 style="margin: 0 0 8px 0; color: #FF9800; font-size: 16px; font-weight: 600; text-align: left; line-height: 1.2;">Expo Router</h4>
      <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.4; text-align: left;">Sistema de roteamento baseado em arquivos</p>
    </div>
    <img src="./assets/icons/navigation-icon.svg" width="32" height="32" alt="Navigation" style="margin-left: 15px; flex-shrink: 0;">
  </div>
</div>

<!-- Card 4 - Embaixo centralizado -->
<div style="display: flex; justify-content: center;">
  <div style="display: flex; align-items: center; padding: 15px; border-radius: 12px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 4px solid #E91E63; width: 380px; min-width: 280px; max-width: 300px;">
    <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
      <h4 style="margin: 0 0 8px 0; color: #E91E63; font-size: 16px; font-weight: 600; text-align: left; line-height: 1.2;">EAS Build</h4>
      <p style="margin: 0; color: #6c757d; font-size: 13px; line-height: 1.4; text-align: left;">Plataforma de build nativa para iOS e Android</p>
    </div>
    <img src="./assets/icons/build-icon.svg" width="32" height="32" alt="Build" style="margin-left: 15px; flex-shrink: 0;">
  </div>
</div>

</div>

<style>
/* Responsividade para mobile - cards empilhados centralizados com tamanho fixo */
@media (max-width: 480px) {
  /* Container principal */
  div[style*="max-width: 1000px"] {
    max-width: 100% !important;
    padding: 0 10px !important;
  }
  
  /* Todos os cards ficam empilhados e centralizados */
  div[style*="justify-content: space-between"] {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 20px !important;
  }
  
  /* Espaçamento entre cards no mobile */
  div[style*="margin-bottom: 30px"] {
    margin-bottom: 20px !important;
  }
  
  /* Mantém largura fixa no mobile - mesmo tamanho que desktop */
  div[style*="width: 380px"] {
    width: 300px !important;
    min-width: 300px !important;
    max-width: 300px !important;
  }
}

/* Ajuste para telas médias - quando não cabe lado a lado */
@media (min-width: 481px) and (max-width: 900px) {
  /* Container dos cards do meio - empilha quando não cabe */
  div[style*="justify-content: space-between"] {
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 25px !important;
  }
  
  /* Ajusta largura dos cards */
  div[style*="width: 380px"] {
    width: 320px !important;
    min-width: 280px !important;
    max-width: 300px !important;
  }
}

/* Telas grandes - pirâmide com espaçamento maior */
@media (min-width: 901px) {
  /* Aumenta o gap entre cards 2 e 3 */
  div[style*="gap: 50px"] {
    gap: 80px !important;
  }
  
  /* Container maior para acomodar espaçamento */
  div[style*="max-width: 1000px"] {
    max-width: 1100px !important;
  }
}
</style>

**Plataformas Suportadas:**

<div style="display: flex; flex-wrap: wrap; gap: 20px; margin: 20px 0; justify-content: center; max-width: 600px; margin-left: auto; margin-right: auto;">
  <div style="display: flex; align-items: center; padding: 12px 20px; border-radius: 8px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 4px rgba(0,0,0,0.05); min-width: 120px; flex: 1; justify-content: center;">
    <img src="./assets/icons/apple-icon.svg" width="24" height="24" alt="iOS" style="margin-right: 10px; flex-shrink: 0;">
    <span style="font-weight: 600; color: #495057; font-size: 15px;">iOS</span>
  </div>
  <div style="display: flex; align-items: center; padding: 12px 20px; border-radius: 8px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); box-shadow: 0 2px 4px rgba(0,0,0,0.05); min-width: 120px; flex: 1; justify-content: center;">
    <img src="./assets/icons/android-icon.svg" width="24" height="24" alt="Android" style="margin-right: 10px; flex-shrink: 0;">
    <span style="font-weight: 600; color: #495057; font-size: 15px;">Android</span>
  </div>
</div>

</div>

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

### 🎨 Design no Figma

<div align="center">

**Clique na imagem abaixo para abrir o design no Figma Community:**

<br>

<a href="https://www.figma.com/community/file/1352388163173966368/payflow" target="_blank">
  <img src="./.github/Project.svg" alt="PayFlow Design - Clique para abrir no Figma Community" width="100%" style="max-width: 800px;  border-radius: 12px; cursor: pointer;">
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
