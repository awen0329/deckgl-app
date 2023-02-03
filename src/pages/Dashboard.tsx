import React, { useState } from "react"
import { Box, Button, Typography } from "@mui/material"
import CustomSlider from "../components/CustomSlider"
import WorkPanel from "../components/WorkPanel"

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
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: 250,
          flexShrink: 0,
          py: 4,
          px: 1,
          zIndex: 10,
          bgcolor: "#FFFFFFAA",
        }}
      >
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
      <Box sx={{ flexGrow: 1 }}>
        <WorkPanel
          sourceData={{
            type: "MultiPolygon",
            coordinates: [
              [
                [
                  [6.136705228, 46.203349276],
                  [6.136456904, 46.203330121],
                  [6.136452635, 46.203356882],
                  [6.136383072, 46.203794586],
                  [6.136419037, 46.203796982],
                  [6.136619697, 46.203810008],
                  [6.136627459, 46.203810549],
                  [6.136833533, 46.203824717],
                  [6.137103124, 46.20384331],
                  [6.137112506, 46.203759835],
                  [6.137134419, 46.203618389],
                  [6.137167629, 46.203410944],
                  [6.136703301, 46.203375706],
                  [6.136701357, 46.203375594],
                  [6.136705217, 46.203349725],
                  [6.136705228, 46.203349276],
                ],
              ],
            ],
          }}
          height={controlOptions.floorHeight}
          scale={controlOptions.coverage}
          floors={controlOptions.floorCount}
        />
      </Box>
      <Box
        sx={{ flexShrink: 0, minWidth: "250px", py: 4, zIndex: 10, bgcolor: "#FFFFFFAA", px: 2 }}
      >
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
