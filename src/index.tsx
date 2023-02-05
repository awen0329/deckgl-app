import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
// @ts-ignore
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp"
// @ts-ignore
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker"

mapboxgl.workerClass = MapboxWorker
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
