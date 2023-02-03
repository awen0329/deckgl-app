import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@mui/material"

import { DefaultTheme } from "./theme/default"
import routes from "./routes"

const router = createBrowserRouter(routes)

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
