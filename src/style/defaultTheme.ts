export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "600px",
  tabletM: "660px",
  tabletL: "768px",
  laptopS: "860px",
  laptopM: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
} as const;

export const defaultTheme = {
  white: "#FFF",
  "black-800": "#181818",

  "gray-500": "#8a878a",

  "purple-200": "#dbb7e8",
  "purple-400": "#B984CC",
  "purple-600": "#9F51BA",

  "green-600": "#19b365",

  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tabletM: `(max-width: ${size.tabletM})`,
    tabletL: `(max-width: ${size.tabletL})`,
    laptopS: `(max-width: ${size.laptopS})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
  },

  fontSize: {
    xs: "0.5rem",
    sm: "0.625rem",
    md: "0.75rem",
    sb: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
} as const;
