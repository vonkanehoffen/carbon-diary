import {
  createBox,
  createText,
  createTheme,
  ThemeProvider,
} from "@shopify/restyle";
import { PropsWithChildren } from "react";

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  black: "#0B0B0B",
  white: "#F0F2F3",

  transparent: "transparent",
};

export const theme = createTheme({
  colors: {
    primary: palette.purplePrimary,
    secondary: palette.greenPrimary,
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    white: palette.white,
    transparent: palette.transparent,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  buttonVariants: {
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    primary: {
      backgroundColor: "primary",
      color: "white",
    },
    secondary: {
      backgroundColor: "secondary",
      color: "white",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "primary",
    },
  },
});

export type Theme = typeof theme;

export const RestyleThemeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
