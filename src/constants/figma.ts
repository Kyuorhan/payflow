/**
 * 🎨 Figma Configuration
 *
 * Configure your Figma integration here
 */

export const FIGMA_CONFIG = {
  // PayFlow Figma Community File
  FILE_ID: "1352388163173966368",
  COMMUNITY_URL:
    "https://www.figma.com/community/file/1352388163173966368/payflow",
  PROTOTYPE_URL: "https://www.figma.com/proto/1352388163173966368/payflow",

  // Your Figma personal access token (optional for community files)
  ACCESS_TOKEN: process.env.EXPO_PUBLIC_FIGMA_ACCESS_TOKEN || "",

  // Base URLs
  API_BASE_URL: "https://api.figma.com/v1",
  PROTOTYPE_BASE_URL: "https://www.figma.com/proto",

  // Design System Settings
  DESIGN_SYSTEM: {
    // Frame names that contain screens (will be auto-detected)
    SCREEN_FRAME_PATTERNS: ["Screen", "Page", "Mobile", "iPhone", "Android"],

    // Component naming conventions
    COMPONENT_PATTERNS: {
      BUTTONS: ["Button", "Btn"],
      INPUTS: ["Input", "TextField", "Field"],
      CARDS: ["Card", "Container"],
      ICONS: ["Icon", "ic_"],
    },
  },

  // Prototype Settings
  PROTOTYPE: {
    DEFAULT_VIEWPORT: "375,812",
    DEFAULT_SCALING: "scale-down",
    ENABLE_HOTSPOTS: true,
    AUTO_PLAY: false,
    TRANSITION_DURATION: 300,
  },

  // Sync Settings
  SYNC: {
    AUTO_SYNC_ENABLED: false,
    SYNC_INTERVAL_MINUTES: 30,
    WEBHOOK_URL: process.env.FIGMA_WEBHOOK_URL || "",
  },
} as const;

// Helper to validate configuration
export function validateFigmaConfig(): { isValid: boolean; missing: string[] } {
  const missing: string[] = [];

  if (!FIGMA_CONFIG.FILE_ID) {
    missing.push("EXPO_PUBLIC_FIGMA_FILE_ID");
  }

  if (!FIGMA_CONFIG.ACCESS_TOKEN) {
    missing.push("EXPO_PUBLIC_FIGMA_ACCESS_TOKEN");
  }

  return {
    isValid: missing.length === 0,
    missing,
  };
}

// Design tokens mapping from Figma to app
export const FIGMA_DESIGN_TOKENS = {
  colors: {
    // Map Figma color style names to app color names
    "Primary/Orange": "primary",
    "Primary/Orange Light": "secondary",
    "Text/Heading": "heading",
    "Text/Body": "body",
    "Background/Light": "background",
    "Background/White": "surface",
    "Semantic/Error": "error",
    "Semantic/Success": "success",
  },

  typography: {
    // Map Figma text style names to app typography
    "Heading/Large": "headingLarge",
    "Heading/Medium": "headingMedium",
    "Heading/Small": "headingSmall",
    "Body/Large": "bodyLarge",
    "Body/Medium": "bodyMedium",
    "Body/Small": "bodySmall",
    Caption: "caption",
  },

  spacing: {
    // Map Figma spacing to app spacing scale
    "Spacing/XXS": "xs", // 4px
    "Spacing/XS": "sm", // 8px
    "Spacing/S": "md", // 16px
    "Spacing/M": "lg", // 24px
    "Spacing/L": "xl", // 32px
    "Spacing/XL": "xxl", // 48px
  },
} as const;

export default FIGMA_CONFIG;
