import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      tertiary: string;
      tertiaryDark: string;
      background: string;
      text: string;
    };
  }
}
