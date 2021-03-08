/* eslint-disable camelcase */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      bg_success: string;
      bg_danger: string;
      bg_info: string;
      bg_warning: string;

      bg_dark: string;
      bg_light: string;

      background: string;
      text: string;
    };
  }
}
