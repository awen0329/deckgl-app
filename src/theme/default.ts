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
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#231F20",
      secondary: "#909090",
      disabled: "#4D4D4D",
    },
  },
})
