import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import CustomSlider from "../components/CustomSlider"

type ControlOptions = {
  coverage: number
  floorCount: number
  floorHeight: number
}

type ControlOptionType = keyof ControlOptions

const Dashboard = () => {
  const [controlOptions, setControlOptions] = useState<ControlOptions>({
    coverage: 100,
    floorCount: 6,
    floorHeight: 40,
  })

  const handleControlOptionsChange =
    (key: ControlOptionType) => (value: number | string | Array<number | string>) => {
      setControlOptions((options) => ({
        ...options,
        [key]: value,
      }))
    }

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", px: 5 }}>
      <Box sx={{ display: "flex", flexDirection: "column", minWidth: 250, flexShrink: 0, py: 4 }}>
        <Button variant="contained">Load GeoJSON</Button>
        <CustomSlider
          label="Plot coverage %"
          value={controlOptions.coverage}
          onChange={handleControlOptionsChange("coverage")}
        />
        <CustomSlider
          label="Floor number"
          value={controlOptions.floorCount}
          onChange={handleControlOptionsChange("floorCount")}
        />
        <CustomSlider
          label="Floor height"
          value={controlOptions.floorHeight}
          onChange={handleControlOptionsChange("floorHeight")}
        />
      </Box>
      <Box sx={{ flexShrink: 0, minWidth: "250px", height: "100vh", py: 4 }}>
        <Typography variant="h5" gutterBottom color="textPrimary">
          Statistiques
        </Typography>
        <Typography variant="subtitle1">Land Area (m2)</Typography>
        <Typography variant="subtitle1">Building Area (m2)</Typography>
        <Typography variant="subtitle1">Building Floor Area (m2)</Typography>
        <Typography variant="subtitle1">Volume (m3)</Typography>
        <Typography variant="subtitle1">Building Height (m)</Typography>
      </Box>
    </Box>
  )
}

export default Dashboard
