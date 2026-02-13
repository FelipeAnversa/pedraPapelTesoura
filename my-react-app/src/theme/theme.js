import { createTheme } from "@mui/material/styles";
import Barlow from "../../Barlow_Semi_Condensed,Inter/Barlow_Semi_Condensed/BarlowSemiCondensed-Black.ttf"

export const theme = createTheme({
    palette: {
        cores: {
            gold: {
                primeiro: "hsl(39, 89%, 49%)",
                segundo: "hsl(28, 76%, 44%)",
            },
            blue: {
                primeiro: "hsl(230, 89%, 62%)",
                segundo: "hsl(229, 64%, 46%)",
            },
            red: {
                primeiro: "hsl(349, 71%, 52%)",
                segundo: "hsl(347, 75%, 35%)",
            },
            purple: {
                primeiro: "hsl(261, 73%, 60%)",
                segundo: "hsl(261, 51%, 44%)",
            },
            lightBlue: {
                primeiro: "hsl(189, 59%, 53%)",
                segundo: "hsl(194, 58%, 42%)",
            },
            darkText: "hsl(229, 25%, 31%)",
            scoreText: "hsl(229, 64%, 46%)",
            headerOutline: "hsl(246, 11%, 37%)",
        },
    },
    typography: {
        allVariants: {
            fontFamily: 'Barlow',
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Barlow';
                    src: url(${Barlow}) format('truetype');
                }
            `,
        },
    },
});