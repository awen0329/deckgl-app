import { Feature, Geometry } from "@turf/turf"

export const GEOJSON_PROPERTIES = {
  opacity: 0.3,
  stroked: true,
  filled: true,
  getFillColor: [0, 100, 100],
  extruded: true,
  wireframe: true,
  getElevation: (f: Feature<Geometry>) => f.properties?.height,
  getLineColor: [0, 0, 0],
  pickable: true,
}
