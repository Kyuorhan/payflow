# 🎨 Sistema de Cores PayFlow - Guia de Uso

Este guia mostra como utilizar o sistema de cores reutilizável criado para facilitar o desenvolvimento com temas no PayFlow.

## 📋 Sumário

- [Hooks Disponíveis](#hooks-disponíveis)
- [Componentes Temáticos](#componentes-temáticos)
- [Utilitários de Estilo](#utilitários-de-estilo)
- [Exemplos Práticos](#exemplos-práticos)
- [Padrões Recomendados](#padrões-recomendados)

## 🎯 Hooks Disponíveis

### `useTheme()`

Hook básico para acessar informações do tema atual:

```typescript
import { useTheme } from "@/src/hooks";

function MyComponent() {
  const { isDark, colorScheme, Colors } = useTheme();

  return (
    <View style={{ backgroundColor: Colors.background }}>
      <Text>Tema atual: {isDark ? "Escuro" : "Claro"}</Text>
    </View>
  );
}
```

### `usePayFlowColors()`

Hook principal com cores pré-configuradas para o PayFlow:

```typescript
import { usePayFlowColors } from "@/src/hooks";

function TransactionCard() {
  const colors = usePayFlowColors();

  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <Text style={{ color: colors.titleText }}>Transação</Text>
      <Text style={{ color: colors.income }}>+R$ 1.500,00</Text>
    </View>
  );
}
```

### `useComponentColors()`

Hook para cores específicas de componentes:

```typescript
import { useComponentColors } from "@/src/hooks";

function CustomButton({ variant = "primary" }) {
  const colors = useComponentColors();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.button[variant],
        borderColor: colors.border.focus,
      }}
    >
      <Text style={{ color: colors.text.button }}>Clique aqui</Text>
    </TouchableOpacity>
  );
}
```

## 🧩 Componentes Temáticos

### `ThemedView`

Container que se adapta automaticamente ao tema:

```typescript
import { ThemedView } from "@/src/components";

function Screen() {
  return (
    <ThemedView variant="container">
      <ThemedView variant="card">
        <Text>Conteúdo do card</Text>
      </ThemedView>
    </ThemedView>
  );
}
```

**Variantes disponíveis:**

- `container` - Container principal da tela
- `card` - Card com elevação
- `surface` - Superfície neutra

### `ThemedText`

Texto com tipografia e cores temáticas:

```typescript
import { ThemedText } from "@/src/components";

function Content() {
  return (
    <>
      <ThemedText variant="title">Título Principal</ThemedText>
      <ThemedText variant="subtitle">Subtítulo</ThemedText>
      <ThemedText variant="body">Texto do corpo</ThemedText>
      <ThemedText variant="caption">Texto pequeno</ThemedText>
      <ThemedText variant="link">Link clicável</ThemedText>
    </>
  );
}
```

### `ThemedCard`

Card pré-estilizado com elevação e cores temáticas:

```typescript
import { ThemedCard } from "@/src/components";

function TransactionList() {
  return (
    <ThemedCard variant="elevated">
      <ThemedText variant="subtitle">Última Transação</ThemedText>
      <ThemedText variant="body">Supermercado XYZ</ThemedText>
    </ThemedCard>
  );
}
```

**Variantes disponíveis:**

- `default` - Card padrão
- `elevated` - Card com maior elevação

## 🎨 Utilitários de Estilo

### `createThemedStyleSheet()`

Cria StyleSheets que se adaptam ao tema:

```typescript
import { createThemedStyleSheet } from "@/src/utils/styles";

const useStyles = createThemedStyleSheet((colors) => ({
  container: {
    flex: 1,
    backgroundColor: colors.payflowBackground,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.titleText,
  },
  button: {
    backgroundColor: colors.payflowOrange,
    paddingVertical: 12,
    borderRadius: 8,
  },
}));

function MyScreen() {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PayFlow</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Botão</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### `useCommonStyles()`

Estilos comuns prontos para uso:

```typescript
import { useCommonStyles } from "@/src/utils/styles";

function QuickScreen() {
  const styles = useCommonStyles();

  return (
    <View style={styles.safeContainer}>
      <Text style={styles.title}>Título</Text>
      <View style={styles.card}>
        <Text style={styles.body}>Conteúdo do card</Text>
      </View>
      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### `usePayFlowStyles()`

Estilos específicos do PayFlow:

```typescript
import { usePayFlowStyles } from "@/src/utils/styles";

function BalanceCard({ balance }) {
  const styles = usePayFlowStyles();

  return (
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}>Saldo Atual</Text>
      <Text style={styles.balanceAmount}>R$ {balance.toFixed(2)}</Text>
    </View>
  );
}
```

## 💡 Exemplos Práticos

### Tela de Transações

```typescript
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { ThemedView, ThemedText, ThemedCard, Icon } from "@/src/components";
import { usePayFlowColors, useCommonStyles } from "@/src/hooks";

export function TransactionsScreen() {
  const colors = usePayFlowColors();
  const commonStyles = useCommonStyles();

  return (
    <ThemedView variant="container">
      <ScrollView style={{ flex: 1 }}>
        {/* Header com saldo */}
        <ThemedCard variant="elevated">
          <ThemedText variant="caption">Saldo Atual</ThemedText>
          <ThemedText variant="title" style={{ color: colors.payflowOrange }}>
            R$ 2.847,30
          </ThemedText>
        </ThemedCard>

        {/* Lista de transações */}
        <ThemedText variant="subtitle">Últimas Transações</ThemedText>

        <ThemedCard>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="arrow-up" size={24} color={colors.income} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <ThemedText variant="body">Salário</ThemedText>
              <ThemedText variant="caption">Hoje, 09:30</ThemedText>
            </View>
            <ThemedText variant="subtitle" style={{ color: colors.income }}>
              +R$ 5.200,00
            </ThemedText>
          </View>
        </ThemedCard>

        <ThemedCard>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="arrow-down" size={24} color={colors.expense} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <ThemedText variant="body">Supermercado</ThemedText>
              <ThemedText variant="caption">Ontem, 14:20</ThemedText>
            </View>
            <ThemedText variant="subtitle" style={{ color: colors.expense }}>
              -R$ 247,80
            </ThemedText>
          </View>
        </ThemedCard>
      </ScrollView>

      {/* Botão flutuante */}
      <TouchableOpacity
        style={[
          commonStyles.buttonPrimary,
          {
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 56,
            height: 56,
            borderRadius: 28,
            backgroundColor: colors.payflowOrange,
          },
        ]}
      >
        <Icon name="add" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </ThemedView>
  );
}
```

### Formulário de Login

```typescript
import React, { useState } from "react";
import { TextInput, TouchableOpacity, Alert } from "react-native";
import { ThemedView, ThemedText, Icon } from "@/src/components";
import { usePayFlowColors, useCommonStyles } from "@/src/hooks";

export function LoginScreen() {
  const colors = usePayFlowColors();
  const commonStyles = useCommonStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ThemedView variant="container">
      <View style={commonStyles.centerContainer}>
        <Icon name="wallet" size={80} color={colors.payflowOrange} />

        <ThemedText
          variant="title"
          style={{
            marginTop: 20,
            marginBottom: 40,
            color: colors.payflowOrange,
          }}
        >
          PayFlow
        </ThemedText>

        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <ThemedText variant="body" style={commonStyles.inputLabel}>
            Email
          </ThemedText>
          <TextInput
            style={commonStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor={colors.captionText}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <ThemedText
            variant="body"
            style={[commonStyles.inputLabel, { marginTop: 16 }]}
          >
            Senha
          </ThemedText>
          <TextInput
            style={commonStyles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor={colors.captionText}
            secureTextEntry
          />

          <TouchableOpacity
            style={[
              commonStyles.buttonPrimary,
              {
                marginTop: 32,
                backgroundColor: colors.payflowOrange,
              },
            ]}
          >
            <ThemedText
              variant="body"
              style={{
                color: "#FFFFFF",
                fontWeight: "600",
              }}
            >
              Entrar
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 16, alignItems: "center" }}>
            <ThemedText variant="link">Esqueci minha senha</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ThemedView>
  );
}
```

## ✅ Padrões Recomendados

### 1. **Use hooks específicos**

```typescript
// ✅ Recomendado
const colors = usePayFlowColors();

// ❌ Evite
const { Colors } = useTheme();
```

### 2. **Prefira componentes temáticos**

```typescript
// ✅ Recomendado
<ThemedText variant="title">Título</ThemedText>

// ❌ Evite
<Text style={{ color: colors.titleText, fontSize: 24 }}>Título</Text>
```

### 3. **Use utilitários de estilo**

```typescript
// ✅ Recomendado
const styles = useCommonStyles();

// ❌ Evite
const styles = StyleSheet.create({
  container: { backgroundColor: colors.background },
});
```

### 4. **Mantenha consistência**

```typescript
// ✅ Recomendado - cores semânticas
style={{ color: colors.titleText }}
style={{ color: colors.income }}
style={{ color: colors.expense }}

// ❌ Evite - cores hardcoded
style={{ color: '#333333' }}
style={{ color: '#00AA00' }}
style={{ color: '#FF0000' }}
```

### 5. **Aproveite as variantes**

```typescript
// ✅ Recomendado
<ThemedView variant="card">
  <ThemedText variant="subtitle">Título</ThemedText>
  <ThemedText variant="body">Descrição</ThemedText>
</ThemedView>
```

## 🚀 Próximos Passos

1. **Teste o sistema** em diferentes telas
2. **Adicione novas variantes** conforme necessário
3. **Documente padrões** específicos do seu projeto
4. **Considere animações** para transições de tema
5. **Implemente** acessibilidade com base nas cores

---

**💡 Dica:** Este sistema foi projetado para crescer com seu projeto. Adicione novas cores, variantes e componentes conforme suas necessidades!
