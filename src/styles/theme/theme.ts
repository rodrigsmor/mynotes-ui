import { ThemeTypes } from '../../@types/theme';

export const theme: ThemeTypes = {
  theme: 'light',
  colors: {
    primary: {
      light: '#6A6BF526',
      main: '#6A6BF5',
      dark: '#4B4CAD'
    },
    background: {
      light: '#FBFBFF',
      main: '#F5F5FF',
      dark: '#F0F0FF'
    },
    surface: {
      light: '#F7F7FE',
      main: '#EFEFFE',
      dark: '#E5E5FE'
    },
    typography: {
      light: '#474747',
      main: '#111111',
      dark: '#0A0A0A'
    },
    subtext: {
      light: '#868694',
      main: '#61616B',
      dark: '#4E4E57'
    },
    success: {
      light: '#36D65926',
      main: '#36D659',
      dark: '#2CAD48'
    },
    warning: {
      light: '#F5D84526',
      main: '#F5D845',
      dark: '#D6BD3D'
    },
    danger: {
      light: '#F53D4826',
      main: '#F53D48',
      dark: '#AD2B33'
    },
    info: {
      light: '#69A9F526',
      main: '#69A9F5',
      dark: '#4A78AD'
    },
    disabled: {
      light: '#C7C8D9',
      main: '#ABABBA',
      dark: '#8F8F9C'
    },
  }, 
  typography: {
    weight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }, 
    size: {
      h1: '36px',
      h2: '28px',
      h3: '24px',
      h4: '20px',
      h5: '16px',
      h6: '14px',
      h7: '12px',
    }
  }
}