import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            main: string;
            secondary: string
        };
        sizes: {
          height: {
            menu: number
          }
        },
        space: {
          small: number
        },
        borderWidths: {
          small: number
        }
    }
}