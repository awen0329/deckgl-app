// @ts-nocheck
import React from "react"
import { Map, ViewState } from "react-map-gl"
import DeckGL from "@deck.gl/react/typed"
import { GeoJsonLayer } from "@deck.gl/layers/typed"
import { center, Feature, Geometry, transformScale } from "@turf/turf"

interface WorkPanelProps {
  sourceData: Geometry
  mapStyle?: string
  height?: number
  scale?: number
  floors?: number
}

const WorkPanel: React.FC<WorkPanelProps> = ({
  sourceData,
  mapStyle = process.env.REACT_APP_MAP_STYLE,
  height = 1,
  scale = 100,
  floors = 1,
}) => {
  const viewPoint = center(sourceData)
  const viewState: ViewState = {
    latitude: viewPoint.geometry.coordinates[1],
    longitude: viewPoint.geometry.coordinates[0],
    zoom: Number(process.env.REACT_APP_INITIAL_ZOOM),
    maxZoom: Number(process.env.REACT_APP_INITIAL_MAX_ZOOM),
    pitch: Number(process.env.REACT_APP_INITIAL_PITCH),
    bearing: Number(process.env.REACT_APP_INITIAL_BEARING),
  }

  const originalPolygon: Feature = {
    type: "Feature",
    geometry: sourceData,
    properties: { height: 0 },
  }

  const features: Feature[] = Array.from({ length: floors }).map((_, index: number) => {
    return {
      type: "Feature",
      geometry: transformScale(sourceData, Math.max(scale / 100, 0.01)),
      properties: { height: height * (index + 1) },
    }
  })

  const layers = [
    new GeoJsonLayer({
      id: "polygon-area",
      data: originalPolygon,
      opacity: 0.1,
    }),
    new GeoJsonLayer({
      id: "building-v3",
      data: {
        type: "FeatureCollection",
        features,
      },
      opacity: 0.3,
      stroked: true,
      filled: true,
      getFillColor: [0, 100, 100],
      extruded: true,
      wireframe: true,
      getElevation: (f) => f.properties.height,
      getLineColor: [0, 0, 0],
      pickable: true,
    }),
  ]

  return (
    <DeckGL layers={layers} initialViewState={viewState} controller={true}>
      <Map
        reuseMaps
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  )
}

export default WorkPanel
