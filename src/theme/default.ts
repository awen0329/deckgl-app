import { createTheme } from "@mui/material/styles"

export const DefaultTheme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
      paper: "#F1ECE0",
    },
    primary: {
      main: "#E8244D",
      dark: "#CD0A33",
      light: "#D9D9D9",
      contrastText: "#E8244D",
    },
    secondary: {
      main: "#F1ECE0",
      light: "#BDBDBD",
      dark: "#FAFAFA",
      contrastText: "#7DC522",
    },
    text: {
      primary: "#231F20",
      secondary: "#909090",
      disabled: "#4D4D4D",
    },
    error: {
      main: "#E60202",
    },
    warning: {
      main: "#F8BB1E",
    },
    success: {
      main: "#7DC522",
      light: "#71D025",
    },
    info: {
      main: "#25AEDA",
      dark: "#E5E5E5",
      light: "#F5F5F5",
    },
    divider: "#D3CEC0",
  },
})
