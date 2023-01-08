export interface ThemeTypes {
  theme: string;
  colors: ColorsTypes;
  typography: {
    weight: {
      light: string;
      regular: string;
      medium: string;
      semibold: string;
      bold: string;
    }, 
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      h7: string;
    },
  }
}

interface ColorShades {
  light: string;
  main: string;
  dark: string;
}

interface ColorsTypes {
  [primary: string]: ColorShades;
  [background: string]: ColorShades;
  [surface: string]: ColorShades;
  [typography: string]: ColorShades;
  [subtext: string]: ColorShades;
  [success: string]: ColorShades;
  [warning: string]: ColorShades;
  [danger: string]: ColorShades;
  [info: string]: ColorShades;
  [disabled: string]: ColorShades;
}