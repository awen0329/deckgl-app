import React from "react"
import { area, Geometry } from "@turf/turf"
import { Box, Typography } from "@mui/material"
import { ControlOptions } from "../types"

interface StaticPanelProps {
  jsonData: Geometry | undefined
  controlOptions: ControlOptions
}

const StaticPanel: React.FC<StaticPanelProps> = ({ jsonData, controlOptions }) => {
  const { coverage, floorCount, floorHeight } = controlOptions
  const landArea = jsonData ? Number(area(jsonData).toFixed(2)) : 0
  const buildingArea = ((landArea * coverage) / 100).toFixed(2)
  const buildingFloorArea = ((landArea * coverage * floorCount) / 100).toFixed(2)
  const volume = landArea * floorCount * floorHeight * coverage
  const height = jsonData ? floorHeight * floorCount : 0
  return (
    <Box sx={{ minWidth: "250px", py: 4, zIndex: 10, bgcolor: "#FFFFFFAA", px: 2 }}>
      <Typography variant="h5" gutterBottom color="textPrimary">
        Statistiques
      </Typography>
      <Typography variant="subtitle1">Land Area (m2): {landArea}</Typography>
      <Typography variant="subtitle1">Building Area (m2): {buildingArea}</Typography>
      <Typography variant="subtitle1">Building Floor Area (m2): {buildingFloorArea}</Typography>
      <Typography variant="subtitle1">Volume (m3): {volume}</Typography>
      <Typography variant="subtitle1">Building Height (m): {height}</Typography>
    </Box>
  )
}

export default StaticPanel
