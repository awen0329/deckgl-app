import React from "react"

const Dashboard = React.lazy(() => import("./pages/Dashboard"))

const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
]

export default routes
