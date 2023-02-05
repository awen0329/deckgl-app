import React, { useMemo } from "react"
import { Map, ViewState } from "react-map-gl"
import DeckGL from "@deck.gl/react/typed"
import { GeoJsonLayer } from "@deck.gl/layers/typed"
import { center, Feature, Geometry, transformScale } from "@turf/turf"
import { GEOJSON_PROPERTIES } from "../constants/WorkPanel"

interface WorkPanelProps {
  sourceData?: Geometry
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
  const viewState: Partial<ViewState> = {
    latitude: sourceData ? center(sourceData).geometry.coordinates[1] : 46,
    longitude: sourceData ? center(sourceData).geometry.coordinates[0] : 6,
    zoom: Number(process.env.REACT_APP_INITIAL_ZOOM),
    pitch: Number(process.env.REACT_APP_INITIAL_PITCH),
    bearing: Number(process.env.REACT_APP_INITIAL_BEARING),
  }

  const layers = useMemo(() => {
    if (sourceData && scale > 0) {
      const originalPolygon: Feature = {
        type: "Feature",
        geometry: sourceData,
        properties: {},
      }

      const features: Feature[] = Array.from({ length: floors }).map((_, index: number) => {
        return {
          type: "Feature",
          geometry: transformScale(sourceData, Math.max(scale / 100)),
          properties: { height: height * (index + 1) },
        }
      })

      return [
        new GeoJsonLayer({
          id: "polygon-area",
          // @ts-ignore
          data: originalPolygon,
          opacity: 0.1,
        }),
        new GeoJsonLayer({
          id: "building-v3",
          // @ts-ignore
          data: {
            type: "FeatureCollection",
            features,
          },
          ...GEOJSON_PROPERTIES,
        }),
      ]
    }

    return []
  }, [sourceData, height, scale, floors])

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
