import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            main: string;
            secondary: string;
            tertiary: string;
        };
        sizes: {
          height: {
            menu: number
          }
        },
        space: {
          small: number,
          medium: number
        },
        borderWidths: {
          small: number
        },
        radii: {
          small: number
        }
    }
}