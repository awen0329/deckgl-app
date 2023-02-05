import React, { ChangeEvent, useState } from "react"
import { Box, Button } from "@mui/material"
import { Geometry } from "@turf/turf"

import CustomSlider from "../components/CustomSlider"
import WorkPanel from "../components/WorkPanel"
import { ControlOptions, ControlOptionType } from "../types"
import StatistiquePanel from "../components/StatistiquePanel"

const Dashboard = () => {
  const [jsonData, setJSONData] = useState<Geometry>()
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

  const getBase64 = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const reader = new FileReader()

    if (event.target.files?.length) {
      reader.readAsText(event.target.files[0])
      reader.onload = async () => {
        const text = reader.result
        if (text) {
          const resObj = JSON.parse(text.toString())
          setJSONData(resObj)
        }
      }
    }
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
        <Button variant="contained" component="label" data-testid="load_geojson_btn">
          LOAD GEOJSON
          <input hidden accept="application/geo+json" type="file" onChange={getBase64} />
        </Button>
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
      <WorkPanel
        sourceData={jsonData}
        height={controlOptions.floorHeight}
        scale={controlOptions.coverage}
        floors={controlOptions.floorCount}
      />
      <StatistiquePanel jsonData={jsonData} controlOptions={controlOptions} />
    </Box>
  )
}

export default Dashboard
