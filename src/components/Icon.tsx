import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";

// 🎨 Componente de ícone universal e moderno
export interface IconProps {
  // Tipos de ícone disponíveis
  type?:
    | "ionicons"
    | "material"
    | "fontawesome"
    | "feather"
    | "materialcommunity";

  // Nome do ícone (específico para cada biblioteca)
  name: string;

  // Propriedades visuais
  size?: number;
  color?: string;

  // Estilo adicional
  style?: any;
}

export function Icon({
  type = "ionicons",
  name,
  size = 24,
  color = "#000",
  style,
}: IconProps) {
  const commonProps = { size, color, style };

  switch (type) {
    case "ionicons":
      return <Ionicons name={name as any} {...commonProps} />;

    case "material":
      return <MaterialIcons name={name as any} {...commonProps} />;

    case "fontawesome":
      return <FontAwesome5 name={name as any} {...commonProps} />;

    case "feather":
      return <Feather name={name as any} {...commonProps} />;

    case "materialcommunity":
      return <MaterialCommunityIcons name={name as any} {...commonProps} />;

    default:
      return <Ionicons name={name as any} {...commonProps} />;
  }
}

// 🎯 Ícones pré-configurados para PayFlow
export const PayFlowIcons = {
  // Navegação
  home: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="home" {...props} />
  ),
  homeOutline: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="home-outline" {...props} />
  ),

  // Transações
  transactions: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="swap-horizontal" {...props} />
  ),
  transactionsOutline: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="swap-horizontal-outline" {...props} />
  ),

  // Perfil
  profile: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="person" {...props} />
  ),
  profileOutline: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="person-outline" {...props} />
  ),

  // Configurações
  settings: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="settings" {...props} />
  ),
  settingsOutline: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="settings-outline" {...props} />
  ),

  // Ações
  add: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="add" {...props} />
  ),
  close: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="close" {...props} />
  ),
  save: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="save-outline" {...props} />
  ),
  edit: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="create-outline" {...props} />
  ),
  delete: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="trash-outline" {...props} />
  ),

  // Financeiro
  money: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="cash-outline" {...props} />
  ),
  card: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="card-outline" {...props} />
  ),
  wallet: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="wallet-outline" {...props} />
  ),

  // Interface
  back: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="arrow-back" {...props} />
  ),
  forward: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="arrow-forward" {...props} />
  ),
  up: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="arrow-up" {...props} />
  ),
  down: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="arrow-down" {...props} />
  ),

  // Status
  success: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="checkmark-circle" {...props} />
  ),
  error: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="alert-circle" {...props} />
  ),
  warning: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="warning" {...props} />
  ),
  info: (props: Omit<IconProps, "name" | "type">) => (
    <Icon type="ionicons" name="information-circle" {...props} />
  ),
};
