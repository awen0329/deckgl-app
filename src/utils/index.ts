import { area, Geometry } from "@turf/turf"
import { ControlOptions } from "../types"

export const getStatistique = ({
  controlOptions,
  jsonData,
}: {
  controlOptions: ControlOptions
  jsonData: Geometry | undefined
}) => {
  const { coverage, floorCount, floorHeight } = controlOptions
  const landArea = jsonData ? Number(area(jsonData).toFixed(2)) : 0
  const buildingArea = ((landArea * coverage) / 100).toFixed(2)
  const buildingFloorArea = ((landArea * coverage * floorCount) / 100).toFixed(2)
  const volume = landArea * floorCount * floorHeight * coverage
  const height = jsonData ? floorHeight * floorCount : 0

  return { landArea, buildingArea, buildingFloorArea, volume, height }
}
