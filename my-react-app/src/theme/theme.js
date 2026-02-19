import { createTheme } from "@mui/material/styles";
import BarlowFont from "../../Barlow_Semi_Condensed,Inter/Barlow_Semi_Condensed/BarlowSemiCondensed-Black.ttf";

export const theme = createTheme({
    palette: {
        cores: {
            gold: { main: "hsl(39, 89%, 49%)" },
            blue: { main: "hsl(230, 89%, 62%)" },
            red: { main: "hsl(349, 71%, 52%)" },
            purple: { main: "hsl(261, 73%, 60%)" },
            lightBlue: { main: "hsl(189, 59%, 53%)" },
            darkText: { main: "hsl(229, 25%, 31%)" },
            scoreText: { main: "hsl(229, 64%, 46%)" },
            headerOutline: { main: "hsl(246, 11%, 37%)" },
            fundo1: { main: "hsl(214, 47%, 23%)" },
            fundo2: { main: "hsl(237, 48%, 15%)" }
        },
    },
    typography: {
        fontFamily: "'Barlow', sans-serif",
        fontWeightBold: 900,
        allVariants: {
            fontFamily: "'Barlow', sans-serif",
            textTransform: 'none',
            fontWeight: 900, 
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: 'Barlow';
                    font-style: normal;
                    font-weight: 900;
                    font-display: swap;
                    src: url(${BarlowFont}) format('truetype');
                }
                * {
                    box-sizing: border-box;
                }
                body {
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    overflow-x: hidden; 
                }
            `,
        },
    },
});