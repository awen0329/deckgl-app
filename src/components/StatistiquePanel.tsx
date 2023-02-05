import React from "react"
import { Geometry } from "@turf/turf"
import { Box, Typography } from "@mui/material"
import { ControlOptions } from "../types"
import { getStatistique } from "../utils"

interface StaticPanelProps {
  jsonData: Geometry | undefined
  controlOptions: ControlOptions
}

const StatistiquePanel: React.FC<StaticPanelProps> = ({ jsonData, controlOptions }) => {
  const { landArea, buildingArea, buildingFloorArea, volume, height } = getStatistique({
    controlOptions,
    jsonData,
  })
  return (
    <Box
      data-testid="statistique_panel"
      sx={{ minWidth: "250px", py: 4, zIndex: 10, bgcolor: "#FFFFFFAA", px: 2 }}
    >
      <Typography variant="h5" gutterBottom color="textPrimary">
        Statistiques
      </Typography>
      <Typography data-testid="land_area" variant="subtitle1">
        Land Area (m2): {landArea}
      </Typography>
      <Typography data-testid="building_area" variant="subtitle1">
        Building Area (m2): {buildingArea}
      </Typography>
      <Typography data-testid="building_floor_area" variant="subtitle1">
        Building Floor Area (m2): {buildingFloorArea}
      </Typography>
      <Typography data-testid="volume" variant="subtitle1">
        Volume (m3): {volume}
      </Typography>
      <Typography data-testid="building_height" variant="subtitle1">
        Building Height (m): {height}
      </Typography>
    </Box>
  )
}

export default StatistiquePanel
