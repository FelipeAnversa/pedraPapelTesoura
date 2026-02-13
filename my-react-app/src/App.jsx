import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme.js"
import Principal from "./Principal";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Principal />
    </ThemeProvider>
  )
}