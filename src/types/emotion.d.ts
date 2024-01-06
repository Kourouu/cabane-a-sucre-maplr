import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        sizes: {
          height: {
            menu: number,
            symbols: number,
          }
        },
        space: {
          s: number,
          m: number
        },
        borderWidths: {
          s: number
        },
        radii: {
          xs: number,
          s: number
        }
    }
}