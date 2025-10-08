import { useThemeColors } from "@/src/hooks";
import React from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

// 📱 ThemedView - View com cores temáticas
export interface ThemedViewProps extends ViewProps {
  variant?: "container" | "card" | "surface";
}

export function ThemedView({
  variant = "container",
  style,
  ...otherProps
}: ThemedViewProps) {
  const { background, shape } = useThemeColors();

  const getBackgroundColor = () => {
    switch (variant) {
      case "container":
        return background;
      case "card":
        return shape;
      case "surface":
        return shape;
      default:
        return background;
    }
  };

  return (
    <View
      style={[{ backgroundColor: getBackgroundColor() }, style]}
      {...otherProps}
    />
  );
}

// 📝 ThemedText - Text com tipografia temática
export interface ThemedTextProps extends TextProps {
  variant?: "title" | "subtitle" | "body" | "caption" | "link";
}

export function ThemedText({
  variant = "body",
  style,
  ...otherProps
}: ThemedTextProps) {
  const { heading, body, grey, primary } = useThemeColors();

  const getStyles = () => {
    switch (variant) {
      case "title":
        return {
          fontSize: 24,
          fontWeight: "700" as const,
          color: heading,
        };
      case "subtitle":
        return {
          fontSize: 18,
          fontWeight: "600" as const,
          color: heading,
        };
      case "body":
        return {
          fontSize: 16,
          fontWeight: "400" as const,
          color: body,
          lineHeight: 24,
        };
      case "caption":
        return {
          fontSize: 12,
          fontWeight: "400" as const,
          color: grey,
        };
      case "link":
        return {
          fontSize: 16,
          fontWeight: "500" as const,
          color: primary,
        };
      default:
        return {
          color: body,
        };
    }
  };

  return <Text style={[getStyles(), style]} {...otherProps} />;
}

// � ThemedCard - Card com elevação e cores temáticas
export interface ThemedCardProps extends ViewProps {
  variant?: "default" | "elevated";
}

export function ThemedCard({
  variant = "default",
  style,
  children,
  ...otherProps
}: ThemedCardProps) {
  const { shape, grey } = useThemeColors();

  const getCardStyles = () => {
    const baseStyles = {
      backgroundColor: colors.shape,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
    };

    if (variant === "elevated") {
      return {
        ...baseStyles,
        borderRadius: 16,
        padding: 20,
        marginVertical: 12,
        shadowColor: colors.grey,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
      };
    }

    return {
      ...baseStyles,
      shadowColor: colors.grey,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    };
  };

  return (
    <View style={[getCardStyles(), style]} {...otherProps}>
      {children}
    </View>
  );
}
